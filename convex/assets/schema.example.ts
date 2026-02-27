import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
	users: defineTable({
		name: v.string(),
		email: v.string()
	}).index('by_email', ['email']),

	messages: defineTable({
		userId: v.id('users'),
		channelId: v.id('channels'),
		content: v.string()
	})
		.index('by_user', ['userId'])
		.index('by_channel', ['channelId'])
		.index('by_channel_and_user', ['channelId', 'userId']),

	channels: defineTable({
		name: v.string()
	})
});
