---
name: better-auth
description: Integrate Better Auth hybrid authentication system with SvelteKit and Convex. Supports email/password authentication, social OAuth providers (Google), admin plugin, and organization features.
---

# Better Auth Integration

Use this skill when implementing or troubleshooting Better Auth authentication in a SvelteKit + Convex application.

## When to Use

Activate this skill when:
- Setting up Better Auth for the first time
- Configuring email/password authentication
- Adding social OAuth providers (Google, etc.)
- Implementing admin functionality
- Setting up organization features
- Troubleshooting authentication issues

## Key Concepts

Better Auth provides a hybrid authentication system that supports:
- Email/password authentication
- Social OAuth providers (Google, GitHub, etc.)
- Admin plugin for user management
- Organization plugin for multi-tenant apps
- Convex adapter for seamless backend integration

## Setup Overview

### 1. Convex & SvelteKit Adapter

This project uses a specific adapter for integrating Better Auth with Convex and SvelteKit:
- [SvelteKit Convex Integration Guide](https://convex-better-auth.netlify.app/framework-guides/sveltekit)
- [Local Install Guide](https://convex-better-auth.netlify.app/features/local-install) (required for admin and organization plugins)

### 2. Configuration Files

- **Server**: `convex/auth.ts` - Better Auth configuration with providers and plugins
- **Client**: `src/lib/auth-client.ts` - Client-side authentication methods
- **UI Components**: Login forms and authentication UI

### 3. Environment Variables

Set required environment variables in Convex:

```bash
npx convex env set GOOGLE_CLIENT_ID your_client_id
npx convex env set GOOGLE_CLIENT_SECRET your_client_secret
```

## Google OAuth Setup

### Quick Setup Steps

1. Create OAuth credentials in [Google Cloud Console](https://console.cloud.google.com/)
2. Configure authorized redirect URIs:
   - Development: `http://localhost:5173/api/auth/callback/google`
   - Production: `https://yourdomain.com/api/auth/callback/google`
3. Set environment variables in Convex
4. Use the built-in social sign-in method:

```typescript
await authClient.signIn.social({
	provider: 'google',
	callbackURL: '/dashboard'
});
```

## Common Operations

- **Email Sign Up**: `authClient.signUp.email({ email, password, name })`
- **Email Sign In**: `authClient.signIn.email({ email, password })`
- **Social Sign In**: `authClient.signIn.social({ provider, callbackURL })`
- **Sign Out**: `authClient.signOut()`
- **Get Session**: `authClient.getSession()`

## Important Notes

- Social auth is built-in; no additional client plugin needed
- The `/api/auth/callback/google` path is handled automatically by Better Auth
- Admin and organization plugins require local installation
- Always refer to official documentation for security best practices

## References

See `references/better-auth.md` for complete documentation links, detailed setup instructions, and implementation examples.
