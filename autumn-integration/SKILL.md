---
name: autumn-integration
description: Integrate Autumn billing and subscription management with SvelteKit and Convex applications. Handles setup, product configuration, checkout flows, billing portals, and feature access control.
---

# Autumn Integration

Use this skill when integrating Autumn billing and subscription management into a SvelteKit + Convex application.

## When to Use

Activate this skill when:
- Setting up Autumn for the first time in a project
- Configuring billing products and subscription plans
- Implementing checkout flows or billing portals
- Adding feature access control and usage tracking
- Troubleshooting Autumn integration issues

## Setup Workflow

### 1. Install Dependencies

```bash
pnpm add autumn-js @useautumn/convex
pnpm add -D atmn
```

### 2. Initialize Configuration

```bash
pnpm dlx atmn init
```

This creates `autumn.config.ts` for product definitions.

### 3. Configure Environment

Set the Autumn secret key:

```bash
pnpm dlx convex env set AUTUMN_SECRET_KEY=am_sk_xxx
```

### 4. Update Convex Configuration

In `convex/convex.config.ts`:

```typescript
import { defineApp } from 'convex/server';
import autumn from '@useautumn/convex/convex.config';

const app = defineApp();
app.use(autumn);
export default app;
```

### 5. Create Autumn Client

Create `convex/autumn.ts` with customer identification logic. See `references/autumn-integration.md` for the complete implementation.

## Key Patterns

### Customer Creation
Always call `createCustomer` before checkout or billing portal operations. It's idempotent and won't error if the customer exists.

### Product Configuration
Define products in `autumn.config.ts` using `feature()`, `product()`, `featureItem()`, and `priceItem()` helpers. Push to Autumn with `pnpm dlx atmn push`.

### Frontend Integration
- Products are in `result.data.list` (not `result.data`)
- Checkout and billing portal return URLs in `result.data.url`
- `listProducts` doesn't require authentication

### Error Handling
Wrap all Autumn calls in try-catch blocks. Handle authentication errors gracefully in the `identify` function.

## Common Operations

- **List Products**: `api.billing.listProducts`
- **Checkout**: `api.billing.checkout` (creates customer automatically)
- **Billing Portal**: `api.billing.billingPortal` (creates customer automatically)
- **Check Feature Access**: Use `check` action with feature ID
- **Track Usage**: Use `track` action with feature ID

## References

See `references/autumn-integration.md` for complete code examples, data structures, and best practices.
