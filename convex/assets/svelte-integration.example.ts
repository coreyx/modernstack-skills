// +layout.svelte - Setup Convex
import { setupConvex } from 'convex-svelte';
import { PUBLIC_CONVEX_URL } from '$env/static/public';

setupConvex(PUBLIC_CONVEX_URL);

// Component.svelte - Using reactive queries
<script lang="ts">
	import { useQuery, useConvexClient } from 'convex-svelte';
	import { api } from '../convex/_generated/api';
	import type { Id } from '../convex/_generated/dataModel';

	let userId = $state<Id<'users'> | null>(null);
	const client = useConvexClient();

	// Reactive query with conditional arguments
	let userQuery = $derived(
		userId
			? useQuery(api.users.getUser, () => ({ userId: userId! }))
			: { data: null, isLoading: false }
	);

	// Access reactive data
	let user = $derived(userQuery.data);
	let loading = $derived(userQuery.isLoading);
	let error = $derived(userQuery.error);

	// List query with pagination
	let messagesQuery = $derived(
		userId
			? useQuery(api.messages.listMessages, () => ({
					channelId: 'channel123' as Id<'channels'>,
					paginationOpts: { numItems: 20, cursor: null }
				}))
			: { data: null, isLoading: false }
	);

	let messages = $derived(messagesQuery.data?.page ?? []);

	// Mutation - create user
	async function handleCreateUser(name: string, email: string) {
		try {
			const newUserId = await client.mutation(api.users.createUser, {
				name,
				email
			});
			userId = newUserId;
			// UI automatically updates via reactive queries
		} catch (err) {
			console.error('Failed to create user:', err);
		}
	}

	// Action - send email
	async function handleSendEmail(subject: string, body: string) {
		if (!userId) return;

		try {
			await client.action(api.users.sendEmail, {
				userId,
				subject,
				body
			});
			console.log('Email sent successfully');
		} catch (err) {
			console.error('Failed to send email:', err);
		}
	}

	// Load initial data
	import { onMount } from 'svelte';
	onMount(() => {
		// Set userId to trigger queries
		userId = 'user123' as Id<'users'>;
	});
</script>

{#if loading}
	<p>Loading...</p>
{:else if error}
	<p>Error: {error.message}</p>
{:else if user}
	<div>
		<h1>{user.name}</h1>
		<p>{user.email}</p>
	</div>

	<div>
		<h2>Messages</h2>
		{#each messages as message}
			<div>{message.content}</div>
		{/each}
	</div>
{:else}
	<p>No user found</p>
{/if}

<button onclick={() => handleCreateUser('Alice', 'alice@example.com')}>
	Create User
</button>

<button onclick={() => handleSendEmail('Hello', 'Welcome!')}>
	Send Email
</button>
