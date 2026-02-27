// Example: src/lib/auth-client.ts
import { createAuthClient } from 'better-auth/svelte';

export const authClient = createAuthClient({
	baseURL: 'http://localhost:5173' // Update for production
});

// Usage examples:

// Email sign up
// await authClient.signUp.email({
//   email: 'user@example.com',
//   password: 'securePassword123',
//   name: 'John Doe'
// });

// Email sign in
// await authClient.signIn.email({
//   email: 'user@example.com',
//   password: 'securePassword123'
// });

// Social sign in
// await authClient.signIn.social({
//   provider: 'google',
//   callbackURL: '/dashboard'
// });

// Sign out
// await authClient.signOut();

// Get session
// const session = await authClient.getSession();
