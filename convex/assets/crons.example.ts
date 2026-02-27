import { cronJobs } from 'convex/server';
import { internal } from './_generated/api';
import { internalAction, internalMutation } from './_generated/server';
import { v } from 'convex/values';

// Internal action for cleanup
const cleanupInactiveUsers = internalAction({
	args: {},
	returns: v.null(),
	handler: async (ctx, args) => {
		console.log('Cleaning up inactive users...');
		
		// Query for inactive users
		const inactiveUsers = await ctx.runQuery(internal.crons.findInactiveUsers, {});
		
		// Delete each inactive user
		for (const userId of inactiveUsers) {
			await ctx.runMutation(internal.crons.deleteUser, { userId });
		}
		
		console.log(`Deleted ${inactiveUsers.length} inactive users`);
		return null;
	}
});

// Internal query to find inactive users
const findInactiveUsers = internalQuery({
	args: {},
	returns: v.array(v.id('users')),
	handler: async (ctx, args) => {
		const thirtyDaysAgo = Date.now() - 30 * 24 * 60 * 60 * 1000;
		
		const users = await ctx.db
			.query('users')
			.filter((q) => q.lt(q.field('lastActiveTime'), thirtyDaysAgo))
			.collect();
		
		return users.map((user) => user._id);
	}
});

// Internal mutation to delete a user
const deleteUser = internalMutation({
	args: { userId: v.id('users') },
	returns: v.null(),
	handler: async (ctx, args) => {
		await ctx.db.delete(args.userId);
		return null;
	}
});

// Daily backup action
const dailyBackup = internalAction({
	args: {},
	returns: v.null(),
	handler: async (ctx, args) => {
		console.log('Running daily backup...');
		
		// Backup logic here
		// await fetch('https://backup-service.com/backup', {
		//   method: 'POST',
		//   body: JSON.stringify({ timestamp: Date.now() })
		// });
		
		return null;
	}
});

// Define cron jobs
const crons = cronJobs();

// Run cleanup every 2 hours
crons.interval(
	'cleanup inactive users',
	{ hours: 2 },
	internal.crons.cleanupInactiveUsers,
	{}
);

// Run backup daily at 2 AM
crons.cron(
	'daily backup',
	'0 2 * * *', // Cron expression: minute hour day month dayOfWeek
	internal.crons.dailyBackup,
	{}
);

// Run every 15 minutes
crons.interval(
	'sync external data',
	{ minutes: 15 },
	internal.crons.syncExternalData,
	{}
);

export default crons;
