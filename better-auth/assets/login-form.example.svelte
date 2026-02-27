<script lang="ts">
	import { authClient } from '$lib/auth-client';

	let email = $state('');
	let password = $state('');
	let name = $state('');
	let isSignUp = $state(false);
	let error = $state('');

	async function handleEmailAuth() {
		try {
			error = '';
			if (isSignUp) {
				await authClient.signUp.email({
					email,
					password,
					name
				});
			} else {
				await authClient.signIn.email({
					email,
					password
				});
			}
			// Redirect or update UI on success
		} catch (err) {
			error = err instanceof Error ? err.message : 'Authentication failed';
		}
	}

	async function handleGoogleSignIn() {
		try {
			error = '';
			await authClient.signIn.social({
				provider: 'google',
				callbackURL: '/dashboard'
			});
		} catch (err) {
			error = err instanceof Error ? err.message : 'Google sign-in failed';
		}
	}
</script>

<div class="auth-form">
	<h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>

	{#if error}
		<div class="error">{error}</div>
	{/if}

	<form onsubmit={(e) => { e.preventDefault(); handleEmailAuth(); }}>
		{#if isSignUp}
			<input
				type="text"
				bind:value={name}
				placeholder="Name"
				required
			/>
		{/if}
		
		<input
			type="email"
			bind:value={email}
			placeholder="Email"
			required
		/>
		
		<input
			type="password"
			bind:value={password}
			placeholder="Password"
			required
		/>
		
		<button type="submit">
			{isSignUp ? 'Sign Up' : 'Sign In'}
		</button>
	</form>

	<button onclick={handleGoogleSignIn} class="google-btn">
		Sign in with Google
	</button>

	<button onclick={() => isSignUp = !isSignUp} class="toggle-btn">
		{isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
	</button>
</div>

<style>
	.auth-form {
		max-width: 400px;
		margin: 0 auto;
		padding: 2rem;
	}

	.error {
		color: red;
		margin-bottom: 1rem;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	input {
		padding: 0.5rem;
		border: 1px solid #ccc;
		border-radius: 4px;
	}

	button {
		padding: 0.5rem 1rem;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}

	.google-btn {
		background-color: #4285f4;
		color: white;
		margin-top: 1rem;
	}

	.toggle-btn {
		background: none;
		color: #4285f4;
		text-decoration: underline;
		margin-top: 1rem;
	}
</style>
