# Convex Backend Development Skill

A Kiro Agent Skill for building reactive backend applications with Convex, a backend-as-a-service platform with real-time data synchronization.

## Overview

This skill provides comprehensive guidance for developing Convex backends, including function definitions, schema design, validators, queries, mutations, actions, file storage, scheduling, and frontend integration with SvelteKit using convex-svelte.

## When to Use

This skill activates when you need to:

- Write Convex queries, mutations, or actions
- Define database schemas with proper indexes
- Implement validators for function arguments and return types
- Set up file storage for images, videos, or documents
- Schedule cron jobs or background tasks
- Integrate Convex with SvelteKit for real-time reactive data
- Troubleshoot Convex function calls or data flow issues

## What's Included

### SKILL.md
The main skill file with core concepts, function syntax, validators, schema design, and frontend integration patterns.

### references/
- `convex-guidelines.md` - Complete documentation covering all Convex features including HTTP endpoints, full-text search, pagination, cron jobs, and detailed examples

### assets/
Example templates ready to use in your project:
- `schema.example.ts` - Database schema with tables and indexes
- `functions.example.ts` - Complete examples of queries, mutations, actions, and internal functions
- `svelte-integration.example.ts` - SvelteKit component with reactive queries and mutations
- `crons.example.ts` - Cron job definitions for scheduled tasks

## Quick Start

1. Install Convex:
   ```bash
   npm install convex
   ```

2. Initialize Convex in your project:
   ```bash
   npx convex dev
   ```

3. Define your schema in `convex/schema.ts`

4. Write functions using the new syntax with validators

5. For SvelteKit integration:
   ```bash
   npm install convex-svelte
   ```

## Core Concepts

### Function Types

- **Query**: Read-only database operations (transactional)
- **Mutation**: Write operations that modify the database (transactional)
- **Action**: Operations that call external APIs or use Node.js (non-transactional)
- **Internal Functions**: Private functions only callable by other Convex functions

### Function Syntax

All functions must include argument and return validators:

```typescript
import { query } from './_generated/server';
import { v } from 'convex/values';

export const getUser = query({
	args: { userId: v.id('users') },
	returns: v.union(v.object({ ... }), v.null()),
	handler: async (ctx, args) => {
		return await ctx.db.get(args.userId);
	}
});
```

### Key Validators

- `v.string()` - String values
- `v.number()` - Float64 numbers
- `v.boolean()` - Boolean values
- `v.null()` - Null values (use instead of undefined)
- `v.id(tableName)` - Document IDs
- `v.array(validator)` - Arrays
- `v.object({ key: validator })` - Objects
- `v.record(keyValidator, valueValidator)` - Records with dynamic keys
- `v.union(v1, v2)` - Union types
- `v.optional(validator)` - Optional fields
- `v.literal(value)` - Literal values

## Schema Design

Define schemas in `convex/schema.ts` with proper indexes:

```typescript
import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
	users: defineTable({
		name: v.string(),
		email: v.string()
	}).index('by_email', ['email'])
});
```

**Important**: Index names should include all fields (e.g., `by_field1_and_field2`)

## Frontend Integration (SvelteKit)

### Setup

```typescript
// +layout.svelte
import { setupConvex } from 'convex-svelte';
import { PUBLIC_CONVEX_URL } from '$env/static/public';

setupConvex(PUBLIC_CONVEX_URL);
```

### Reactive Queries

```typescript
import { useQuery, useConvexClient } from 'convex-svelte';
import { api } from '../convex/_generated/api';

let userId = $state<Id<'users'> | null>(null);

// Reactive query
let userQuery = $derived(
	userId ? useQuery(api.users.get, () => ({ id: userId! })) : { data: null, isLoading: false }
);

let user = $derived(userQuery.data);

// Mutations
const client = useConvexClient();
await client.mutation(api.users.create, { name: 'Alice' });
```

**Key principle**: Data updates automatically in real-time when the database changes.

## Common Patterns

### Calling Functions

```typescript
// From queries/mutations/actions
const result = await ctx.runQuery(api.example.myQuery, { arg: value });
await ctx.runMutation(api.example.myMutation, { arg: value });
await ctx.runAction(api.example.myAction, { arg: value });
```

### Pagination

```typescript
import { paginationOptsValidator } from 'convex/server';

export const list = query({
	args: { paginationOpts: paginationOptsValidator },
	handler: async (ctx, args) => {
		return await ctx.db.query('messages').paginate(args.paginationOpts);
	}
});
```

### File Storage

```typescript
// Get file URL
const url = await ctx.storage.getUrl(fileId);

// Get file metadata from _storage system table
const metadata = await ctx.db.system.get(fileId);
```

### Scheduling

```typescript
// Schedule a function to run later
await ctx.scheduler.runAfter(1000, internal.tasks.processData, { id: '123' });
```

## Best Practices

1. **Always use validators**: Include both `args` and `returns` for all functions
2. **Use indexes**: Define indexes in schema instead of using `.filter()`
3. **File-based routing**: Organize functions thoughtfully in the `convex/` directory
4. **Internal functions**: Use `internalQuery/Mutation/Action` for private functions
5. **Type safety**: Use `Id<'tableName'>` instead of `string` for document IDs
6. **Avoid race conditions**: Minimize calls from actions to queries/mutations
7. **Use `v.null()`**: Functions that don't return a value should return `null`

## Official Resources

- [Convex Documentation](https://docs.convex.dev/)
- [Convex Svelte Integration](https://docs.convex.dev/client/svelte)
- [Function API Reference](https://docs.convex.dev/functions)
- [Schema Design Guide](https://docs.convex.dev/database/schemas)

## License

This skill is provided as-is for use with Kiro AI assistant.
