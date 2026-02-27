# Autumn Integration Skill

A Kiro Agent Skill for integrating Autumn billing and subscription management with SvelteKit and Convex applications.

## Overview

This skill provides comprehensive guidance for setting up and using Autumn, a billing and subscription management platform that integrates with Stripe. It covers installation, configuration, product setup, checkout flows, billing portals, and feature access control.

## When to Use

This skill activates when you need to:

- Set up Autumn for the first time in a SvelteKit + Convex project
- Configure billing products and subscription plans
- Implement checkout flows or customer billing portals
- Add feature access control and usage tracking
- Troubleshoot Autumn integration issues

## What's Included

### SKILL.md
The main skill file with concise setup instructions and key patterns for Autumn integration.

### references/
- `autumn-integration.md` - Complete documentation with detailed code examples, data structures, best practices, and external resources

### assets/
Example templates ready to use in your project:
- `autumn.config.example.ts` - Product and feature configuration template
- `autumn.example.ts` - Autumn client initialization with customer identification
- `billing.example.ts` - Billing wrapper functions for checkout and portal access

## Quick Start

1. Install dependencies:
   ```bash
   pnpm add autumn-js @useautumn/convex
   pnpm add -D atmn
   ```

2. Initialize Autumn:
   ```bash
   pnpm dlx atmn init
   ```

3. Configure your Convex environment with the Autumn secret key

4. Use the example files in `assets/` as templates for your implementation

## Key Features

- **Customer Management**: Automatic customer creation and identification
- **Product Configuration**: Define subscription plans with features and pricing
- **Checkout Integration**: Seamless Stripe checkout flows
- **Billing Portal**: Self-service subscription management
- **Feature Access Control**: Usage tracking and access validation
- **Type Safety**: TypeScript interfaces for all data structures

## Best Practices

- Always create customers before checkout or billing operations
- Use the `identify` function to map authenticated users to Autumn customers
- Wrap all Autumn API calls in try-catch blocks
- Keep product IDs consistent between config and frontend
- Test in Autumn's sandbox environment before production

## Resources

- [Autumn Documentation](https://docs.useautumn.com)
- [Autumn Convex Integration](https://docs.useautumn.com/setup/convex)
- [Better Auth Autumn Plugin](https://www.better-auth.com/docs/plugins/autumn)

## License

This skill is provided as-is for use with Kiro AI assistant.
