# Better Auth Skill

A Kiro Agent Skill for integrating Better Auth hybrid authentication system with SvelteKit and Convex applications.

## Overview

This skill provides guidance for implementing Better Auth, a modern authentication solution that supports email/password authentication, social OAuth providers (Google, GitHub, etc.), admin functionality, and organization features. It's specifically tailored for SvelteKit + Convex applications.

## When to Use

This skill activates when you need to:

- Set up Better Auth for the first time in a project
- Configure email/password authentication
- Add social OAuth providers (Google, GitHub, etc.)
- Implement admin plugin for user management
- Set up organization features for multi-tenant apps
- Troubleshoot authentication issues

## What's Included

### SKILL.md
The main skill file with setup overview, common operations, and key concepts for Better Auth integration.

### references/
- `better-auth.md` - Complete documentation with links to official resources, Google OAuth setup guide, and implementation details

### assets/
Example templates ready to use in your project:
- `auth-server.example.ts` - Server-side Better Auth configuration with providers
- `auth-client.example.ts` - Client-side authentication methods and usage examples
- `login-form.example.svelte` - Complete login/signup form component with email and Google OAuth

## Quick Start

1. Install Better Auth and the Convex adapter:
   ```bash
   npm install better-auth @convex-dev/auth
   ```

2. Configure server-side authentication in `convex/auth.ts`

3. Set up client-side authentication in `src/lib/auth-client.ts`

4. For Google OAuth, set environment variables:
   ```bash
   npx convex env set GOOGLE_CLIENT_ID your_client_id
   npx convex env set GOOGLE_CLIENT_SECRET your_client_secret
   ```

5. Use the example components in `assets/` as templates

## Key Features

- **Email/Password Auth**: Traditional authentication with secure password handling
- **Social OAuth**: Google, GitHub, and other OAuth providers
- **Admin Plugin**: User management and administrative functions
- **Organization Plugin**: Multi-tenant application support
- **Convex Integration**: Seamless backend integration with Convex
- **Type Safety**: Full TypeScript support

## Authentication Methods

### Email Authentication
```typescript
// Sign up
await authClient.signUp.email({ email, password, name });

// Sign in
await authClient.signIn.email({ email, password });
```

### Social Authentication
```typescript
await authClient.signIn.social({
	provider: 'google',
	callbackURL: '/dashboard'
});
```

### Session Management
```typescript
// Get current session
const session = await authClient.getSession();

// Sign out
await authClient.signOut();
```

## Google OAuth Setup

1. Create OAuth credentials in [Google Cloud Console](https://console.cloud.google.com/)
2. Configure redirect URIs:
   - Dev: `http://localhost:5173/api/auth/callback/google`
   - Prod: `https://yourdomain.com/api/auth/callback/google`
3. Set environment variables in Convex
4. Use the built-in social sign-in method (no additional plugin needed)

## Important Notes

- Social auth is built-in on the client; no additional plugin required
- Admin and organization plugins require local installation
- The `/api/auth/callback/{provider}` path is handled automatically
- Always refer to official documentation for security best practices

## Official Resources

- [Better Auth Documentation](https://www.better-auth.com/docs/introduction)
- [SvelteKit Convex Integration](https://convex-better-auth.netlify.app/framework-guides/sveltekit)
- [Local Install Guide](https://convex-better-auth.netlify.app/features/local-install)
- [Admin Plugin](https://www.better-auth.com/docs/plugins/admin)
- [Google OAuth Setup](https://www.better-auth.com/docs/authentication/google)

## License

This skill is provided as-is for use with Kiro AI assistant.
