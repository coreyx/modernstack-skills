import { query, mutation, action, internalQuery, internalMutation } from './_generated/server';
import { v } from 'convex/values';
import { api, internal } from './_generated/api';

// Public query - read data
export const getUser = query({
	args: { userId: v.id('users') },
	returns: v.union(
		v.object({
			_id: v.id('users'),
			_creationTime: v.number(),
			name: v.string(),
			email: v.string()
		}),
		v.null()
	),
	handler: async (ctx, args) => {
		return await ctx.db.get(args.userId);
	}
});

// Public mutation - write data
export const createUser = mutation({
	args: {
		name: v.string(),
		email: v.string()
	},
	returns: v.id('users'),
	handler: async (ctx, args) => {
		return await ctx.db.insert('users', {
			name: args.name,
			email: args.email
		});
	}
});

// Query with index
export const getUserByEmail = query({
	args: { email: v.string() },
	returns: v.union(
		v.object({
			_id: v.id('users'),
			_creationTime: v.number(),
			name: v.string(),
			email: v.string()
		}),
		v.null()
	),
	handler: async (ctx, args) => {
		return await ctx.db
			.query('users')
			.withIndex('by_email', (q) => q.eq('email', args.email))
			.unique();
	}
});

// Paginated query
import { paginationOptsValidator } from 'convex/server';

export const listMessages = query({
	args: {
		channelId: v.id('channels'),
		paginationOpts: paginationOptsValidator
	},
	returns: v.object({
		page: v.array(
			v.object({
				_id: v.id('messages'),
				_creationTime: v.number(),
				userId: v.id('users'),
				channelId: v.id('channels'),
				content: v.string()
			})
		),
		isDone: v.boolean(),
		continueCursor: v.string()
	}),
	handler: async (ctx, args) => {
		return await ctx.db
			.query('messages')
			.withIndex('by_channel', (q) => q.eq('channelId', args.channelId))
			.order('desc')
			.paginate(args.paginationOpts);
	}
});

// Internal query - private function
export const loadUserData = internalQuery({
	args: { userId: v.id('users') },
	returns: v.union(
		v.object({
			_id: v.id('users'),
			_creationTime: v.number(),
			name: v.string(),
			email: v.string()
		}),
		v.null()
	),
	handler: async (ctx, args) => {
		return await ctx.db.get(args.userId);
	}
});

// Action - external API calls
export const sendEmail = action({
	args: {
		userId: v.id('users'),
		subject: v.string(),
		body: v.string()
	},
	returns: v.null(),
	handler: async (ctx, args) => {
		// Load user data using internal query
		const user = await ctx.runQuery(internal.functions.loadUserData, {
			userId: args.userId
		});

		if (!user) {
			throw new Error('User not found');
		}

		// Call external API (example)
		// await fetch('https://api.emailservice.com/send', {
		//   method: 'POST',
		//   body: JSON.stringify({
		//     to: user.email,
		//     subject: args.subject,
		//     body: args.body
		//   })
		// });

		console.log(`Email sent to ${user.email}`);
		return null;
	}
});

// Mutation that calls another mutation
export const updateUserAndNotify = mutation({
	args: {
		userId: v.id('users'),
		name: v.string()
	},
	returns: v.null(),
	handler: async (ctx, args) => {
		// Update user
		await ctx.db.patch(args.userId, { name: args.name });

		// Schedule notification action
		await ctx.scheduler.runAfter(0, internal.functions.sendNotification, {
			userId: args.userId,
			message: 'Your profile was updated'
		});

		return null;
	}
});

// Internal action for scheduled tasks
export const sendNotification = internalMutation({
	args: {
		userId: v.id('users'),
		message: v.string()
	},
	returns: v.null(),
	handler: async (ctx, args) => {
		// Send notification logic here
		console.log(`Notification sent to user ${args.userId}: ${args.message}`);
		return null;
	}
});
