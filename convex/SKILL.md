---
name: convex
description: Build backend applications with Convex, a reactive backend-as-a-service. Covers function syntax, validators, schemas, queries, mutations, actions, file storage, scheduling, and frontend integration with convex-svelte.
---

# Convex Backend Development

Use this skill when building or troubleshooting Convex backend applications, particularly with SvelteKit integration.

## When to Use

Activate this skill when:
- Writing Convex queries, mutations, or actions
- Defining database schemas and indexes
- Implementing validators for function arguments
- Setting up file storage or cron jobs
- Integrating Convex with SvelteKit using convex-svelte
- Troubleshooting Convex function calls or data flow

## Core Concepts

### Function Types

- **Query**: Read-only database operations (use `query`)
- **Mutation**: Write operations that modify the database (use `mutation`)
- **Action**: Operations that call external APIs or use Node.js (use `action`)
- **Internal Functions**: Private functions using `internalQuery`, `internalMutation`, `internalAction`

### Function Syntax

Always use the new function syntax with validators:

```typescript
import { query } from './_generated/server';
import { v } from 'convex/values';

export const exampleQuery = query({
	args: { name: v.string() },
	returns: v.string(),
	handler: async (ctx, args) => {
		return `Hello ${args.name}`;
	}
});
```

### Key Rules

1. **Always include validators**: Both `args` and `returns` for all functions
2. **Use `v.null()` for void returns**: Functions that don't return a value return `null`
3. **File-based routing**: Functions in `convex/example.ts` are accessed via `api.example.functionName`
4. **Internal vs Public**: Use `internal` prefix for private functions, `api` for public
5. **No direct function calls**: Always use `ctx.runQuery`, `ctx.runMutation`, or `ctx.runAction` with function references

## Common Validators

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
- `v.literal(value)` - Literal values for discriminated unions

## Schema Design

Define schemas in `convex/schema.ts`:

```typescript
import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
	users: defineTable({
		name: v.string(),
		email: v.string()
	}).index('by_email', ['email']),
	
	messages: defineTable({
		userId: v.id('users'),
		content: v.string()
	}).index('by_user', ['userId'])
});
```

**Index naming**: Include all fields in the name (e.g., `by_field1_and_field2`)

## Frontend Integration (convex-svelte)

### Setup

```typescript
// +layout.svelte
import { setupConvex } from 'convex-svelte';
setupConvex(PUBLIC_CONVEX_URL);
```

### Reactive Queries

```typescript
import { useQuery, useConvexClient } from 'convex-svelte';
import { api } from '../convex/_generated/api';

// Reactive query with conditional arguments
let userId = $state<Id<'users'> | null>(null);
let userQuery = $derived(
	userId ? useQuery(api.users.get, () => ({ id: userId! })) : { data: null, isLoading: false }
);
let user = $derived(userQuery.data);

// Mutations and actions
const client = useConvexClient();
await client.mutation(api.users.create, { name: 'Alice' });
await client.action(api.external.sync, {});
```

**Key principles**: Use `useQuery` for reactive reads, `useConvexClient` for writes, data updates automatically.

## Common Patterns

### Calling Functions

```typescript
// From query/mutation/action
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

// Get file metadata
const metadata = await ctx.db.system.get(fileId);
```

## References

See `references/convex-guidelines.md` for complete documentation including HTTP endpoints, cron jobs, full-text search, and detailed examples.
