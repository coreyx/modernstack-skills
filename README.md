# Modern Stack Agent Skills

A curated collection of agent skills for building with the modern web development stack. Initially inspired by the [Convex Modern Stack Hackathon](https://www.convex.dev/hackathons/modernstack), this repository has evolved into a comprehensive resource for AI-assisted development with cutting-edge technologies.

## What Are Agent Skills?

Agent skills are structured knowledge packages that help AI assistants like Kiro understand and work effectively with specific technologies. Each skill includes documentation, code examples, best practices, and reference materials that enable intelligent code generation and troubleshooting.

## Available Skills

### Backend & Data

**[Convex](./convex)** - Reactive backend-as-a-service with real-time data synchronization
- Queries, mutations, and actions with validators
- Schema design with indexes
- File storage and scheduling
- SvelteKit integration with convex-svelte

### Frontend

**[Svelte 5](./svelte)** - Modern reactive framework with runes and SvelteKit
- New runes system ($state, $derived, $effect, $props)
- Migration guide from Svelte 4
- Remote functions for type-safe client-server communication
- State management patterns and component composition

**[shadcn-svelte](./shadcn-svelte)** - Beautifully designed components built with Radix and Tailwind
- Accessible and customizable UI components
- Built on Bits UI (Radix for Svelte)
- Copy-paste component architecture
- Full TypeScript support with Svelte 5

**[Tailwind CSS v4](./tailwind-v4)** - CSS-first utility framework with massive performance improvements
- Zero-config setup with automatic content detection
- CSS-first theme configuration with @theme directive
- Dynamic utilities without predefined values
- Container queries, 3D transforms, and P3 colors

### Authentication

**[Better Auth](./better-auth)** - Hybrid authentication system for modern applications
- Email/password and social OAuth (Google, GitHub)
- Admin and organization plugins
- Convex integration
- SvelteKit-optimized setup

### Billing

**[Autumn Integration](./autumn-integration)** - Billing and subscription management with Stripe
- Product and subscription configuration
- Checkout flows and billing portals
- Feature access control and usage tracking
- Convex integration

## Skill Structure

Each skill follows a consistent structure:

```
skill-name/
├── README.md              # Overview and quick start
├── SKILL.md              # Core concepts and patterns (loaded by AI)
├── assets/               # Example code templates
│   └── *.example.*       # Ready-to-use code snippets
└── references/           # Detailed documentation
    └── *.md              # Comprehensive guides
```

## Using These Skills

### With Kiro AI Assistant

These skills are designed for use with Kiro, an AI-powered IDE. Import skills selectively based on your project needs:

1. Open the Agent Steering & Skills section in the Kiro panel
2. Click + and select "Import a skill"
3. Choose GitHub as your source
4. Paste the URL to the specific skill folder you want:
   - Convex: `https://github.com/coreyx/modernstack-skills/tree/main/convex`
   - Svelte: `https://github.com/coreyx/modernstack-skills/tree/main/svelte`
   - shadcn-svelte: `https://github.com/coreyx/modernstack-skills/tree/main/shadcn-svelte`
   - Tailwind v4: `https://github.com/coreyx/modernstack-skills/tree/main/tailwind-v4`
   - Better Auth: `https://github.com/coreyx/modernstack-skills/tree/main/better-auth`
   - Autumn: `https://github.com/coreyx/modernstack-skills/tree/main/autumn-integration`

The skill will be copied to your skills directory and work immediately.

For detailed instructions, see the [official Kiro documentation](https://kiro.dev/docs/skills/#importing-skills).

### Manual Reference

Each skill's README provides:
- Quick start guides
- Key concepts and patterns
- Code examples in the `assets/` folder
- Links to official documentation

Browse the skills directly to learn about each technology or copy example code into your projects.

## What Makes a Technology "Modern"?

Technologies in this collection share common characteristics:

- **Developer Experience**: Intuitive APIs, excellent TypeScript support, minimal boilerplate
- **Performance**: Built for speed with modern optimization techniques
- **Reactivity**: Real-time updates and reactive data flows
- **Type Safety**: First-class TypeScript integration
- **Modern Standards**: Leverages latest web platform features
- **Active Development**: Well-maintained with engaged communities

## Contributing

This is a living collection that grows with the modern web ecosystem. Contributions are welcome for:

- New skills for modern technologies
- Updates to existing skills
- Improved examples and documentation
- Bug fixes and clarifications

Each skill should follow the established structure and include practical, tested examples.

## Philosophy

These skills embody a specific approach to modern web development:

- **Minimal Configuration**: Prefer convention over configuration
- **Type Safety**: Leverage TypeScript for better DX and fewer bugs
- **Real-Time First**: Embrace reactive patterns and live data
- **Full-Stack Integration**: Seamless client-server communication
- **Performance by Default**: Fast builds, fast runtime, fast iteration

## Attribution

The following skills are based on documentation from [modernstack-saas](https://github.com/joachimchauvet/modernstack-saas):
- autumn-integration
- better-auth
- convex
- svelte
- tailwind-v4

## License

This collection is provided as-is for use with AI assistants and as a learning resource for developers.

## Resources

- [Convex Modern Stack Hackathon](https://www.convex.dev/hackathons/modernstack)
- [Kiro AI Assistant](https://kiro.dev)

---

Built for developers who want to move fast with modern tools.
