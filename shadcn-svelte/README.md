# shadcn-svelte Component Library Skill

A Kiro Agent Skill for building beautiful, accessible UI components with shadcn-svelte, a collection of reusable components for Svelte and SvelteKit.

## Overview

This skill provides comprehensive guidance for using shadcn-svelte, a component library built with TypeScript, Tailwind CSS, and Bits UI primitives. It covers component installation, usage patterns, theming, forms with validation, and accessibility best practices.

## When to Use

This skill activates when you need to:

- Install and configure shadcn-svelte components
- Build forms with Formsnap, Superforms, and Zod validation
- Implement accessible UI patterns and components
- Customize component themes using CSS variables
- Set up dark mode for your application
- Work with complex UI elements like data tables and charts
- Migrate to Svelte 5 or Tailwind v4

## What's Included

### SKILL.md
The main skill file with component categories, installation instructions, theming patterns, and common usage examples.

### references/
- `shadcn-svelte.md` - Complete component list with links to official documentation for all 60+ components

### assets/
Example templates ready to use in your project:
- `button-examples.svelte` - All button variants, sizes, and states
- `form-example.svelte` - Complete form with validation using Formsnap and Zod
- `dialog-example.svelte` - Dialog, alert dialog, and sheet examples
- `card-example.svelte` - Various card layouts and patterns

## Quick Start

1. Install the CLI and add components:
   ```bash
   pnpm dlx shadcn-svelte@latest add button
   pnpm dlx shadcn-svelte@latest add form
   pnpm dlx shadcn-svelte@latest add input
   ```

2. Import and use components:
   ```svelte
   <script>
     import { Button } from '$lib/components/ui/button';
   </script>
   
   <Button variant="default">Click me</Button>
   ```

3. For forms, install form dependencies:
   ```bash
   pnpm add formsnap sveltekit-superforms zod
   pnpm dlx shadcn-svelte@latest add form
   ```

## Key Features

### Component Library

60+ beautifully-designed, accessible components organized into categories:

- **Form & Input**: Button, Input, Select, Checkbox, Radio, Switch, Calendar, Date Picker, etc.
- **Layout & Navigation**: Accordion, Tabs, Breadcrumb, Sidebar, Navigation Menu, etc.
- **Overlays & Dialogs**: Dialog, Sheet, Drawer, Popover, Dropdown Menu, Tooltip, etc.
- **Feedback & Status**: Alert, Badge, Progress, Skeleton, Spinner, Toast (Sonner), etc.
- **Display & Media**: Card, Avatar, Table, Data Table, Chart, Carousel, etc.

### Built With

- **TypeScript**: Full type safety
- **Tailwind CSS**: Utility-first styling
- **Bits UI**: Accessible primitives
- **Open Source**: Fully customizable

### Key Advantages

- Components are copied to your project (not npm packages)
- Full control over component code
- Easy customization and theming
- CLI tool for easy installation
- Registry system for sharing components

## Component Categories

### Form Components

Essential for building forms with validation:

```bash
pnpm dlx shadcn-svelte@latest add button input textarea select checkbox radio-group switch
```

### Layout Components

Structure your application:

```bash
pnpm dlx shadcn-svelte@latest add card tabs accordion separator sidebar
```

### Overlay Components

Modals and popups:

```bash
pnpm dlx shadcn-svelte@latest add dialog sheet drawer popover dropdown-menu tooltip
```

## Form Building Pattern

### Complete Example

```typescript
// 1. Define Zod schema
import { z } from 'zod';

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

// 2. Server action (+page.server.ts)
export const actions = {
  default: async ({ request }) => {
    const form = await superValidate(request, zod(formSchema));
    if (!form.valid) return fail(400, { form });
    // Handle submission
    return { form };
  }
};

// 3. Component
import * as Form from '$lib/components/ui/form';
import { formFieldProxy, superForm } from 'sveltekit-superforms';
import { zodClient } from 'sveltekit-superforms/adapters';

const form = superForm(data.form, {
  validators: zodClient(formSchema)
});
const email = formFieldProxy(form, 'email');
```

```svelte
<form method="POST" use:enhance>
  <Form.Field {form} name="email">
    <Form.Control let:attrs>
      <Form.Label>Email</Form.Label>
      <Input {...attrs} bind:value={$email} />
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>
  <Form.Button>Submit</Form.Button>
</form>
```

## Theming

### CSS Variables

Customize using CSS variables with oklch color space:

```css
@theme {
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.961 0 0);
  --secondary-foreground: oklch(0.145 0 0);
  --accent: oklch(0.961 0 0);
  --accent-foreground: oklch(0.145 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.985 0 0);
}
```

### Color Conventions

Always use background/foreground pairs:
- `--primary` / `--primary-foreground`
- `--secondary` / `--secondary-foreground`
- `--accent` / `--accent-foreground`
- `--destructive` / `--destructive-foreground`
- `--muted` / `--muted-foreground`
- `--card` / `--card-foreground`
- `--popover` / `--popover-foreground`

## Common Patterns

### Button Usage

```svelte
<Button variant="default">Default</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline">Cancel</Button>
<Button variant="ghost">Ghost</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button disabled>Disabled</Button>
```

### Dialog Usage

```svelte
<script>
  import * as Dialog from '$lib/components/ui/dialog';
  import { Button } from '$lib/components/ui/button';
  
  let open = $state(false);
</script>

<Dialog.Root bind:open>
  <Dialog.Trigger asChild let:builder>
    <Button builders={[builder]}>Open</Button>
  </Dialog.Trigger>
  <Dialog.Content>
    <Dialog.Header>
      <Dialog.Title>Title</Dialog.Title>
      <Dialog.Description>Description</Dialog.Description>
    </Dialog.Header>
    <!-- Content -->
    <Dialog.Footer>
      <Button>Save</Button>
    </Dialog.Footer>
  </Dialog.Content>
</Dialog.Root>
```

### Card Usage

```svelte
<script>
  import * as Card from '$lib/components/ui/card';
  import { Button } from '$lib/components/ui/button';
</script>

<Card.Root>
  <Card.Header>
    <Card.Title>Title</Card.Title>
    <Card.Description>Description</Card.Description>
  </Card.Header>
  <Card.Content>
    <p>Content goes here</p>
  </Card.Content>
  <Card.Footer>
    <Button>Action</Button>
  </Card.Footer>
</Card.Root>
```

## Best Practices

1. **Install components as needed**: Only add components you actually use
2. **Customize freely**: Components are in your codebase, modify as needed
3. **Use TypeScript**: Take advantage of full type safety
4. **Follow accessibility**: Components are built with accessibility in mind
5. **Use CSS variables**: Theme consistently across your app
6. **Leverage Formsnap**: Use for complex forms with validation
7. **Check documentation**: Each component has detailed docs on the website

## Dark Mode

Implementations available for:
- Svelte/SvelteKit using mode-watcher
- Astro integration

See the official documentation for setup instructions.

## Migration

- **Svelte 5**: Guide for migrating from Svelte 4 and Tailwind 3
- **Tailwind v4**: Guide for updating to Tailwind v4 with Svelte 5

## Official Resources

- [shadcn-svelte Website](https://shadcn-svelte.com)
- [Installation Guide](https://shadcn-svelte.com/docs/installation/sveltekit)
- [Component Documentation](https://shadcn-svelte.com/docs/components)
- [Theming Guide](https://shadcn-svelte.com/docs/theming)
- [Dark Mode Setup](https://shadcn-svelte.com/docs/dark-mode)
- [GitHub Repository](https://github.com/huntabyte/shadcn-svelte)

## License

This skill is provided as-is for use with Kiro AI assistant.
