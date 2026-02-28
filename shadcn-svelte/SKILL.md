---
name: shadcn-svelte
description: Build beautiful, accessible UI components with shadcn-svelte. A collection of reusable components built with TypeScript, Tailwind CSS, and Bits UI primitives for Svelte and SvelteKit applications.
---

# shadcn-svelte Components

Use this skill when building UI components with shadcn-svelte, a collection of beautifully-designed, accessible components for Svelte and SvelteKit.

## When to Use

Activate this skill when:
- Installing or configuring shadcn-svelte components
- Building forms with Formsnap, Superforms, and Zod
- Implementing accessible UI patterns
- Customizing component themes with CSS variables
- Setting up dark mode
- Working with data tables, charts, or complex UI elements
- Migrating to Svelte 5 or Tailwind v4

## Overview

shadcn-svelte is built with:
- TypeScript for type safety
- Tailwind CSS for styling
- Bits UI primitives for accessibility
- Open source and AI-ready

Key features:
- CLI tool for component installation
- Registry system for publishing components
- CSS variable-based theming
- Full accessibility support
- Dark mode support

## Installation

### CLI Command

```bash
pnpm dlx shadcn-svelte@latest add <component_name>
```

### Setup for Different Frameworks

- **SvelteKit**: Standard setup with automatic configuration
- **Vite**: Standalone Svelte with Vite
- **Astro**: Integration with Astro projects
- **Manual**: Custom setup for specific needs

### Configuration

Components are configured via `components.json` in your project root.

## Component Categories

### Form & Input Components

Essential form controls with validation support:

- **Button**: Primary action triggers with variants
- **Button Group**: Grouped button layouts
- **Input**: Text input fields with validation
- **Input Group**: Enhanced inputs with addons
- **Textarea**: Multi-line text input
- **Checkbox**: Toggle selection controls
- **Radio Group**: Single selection from options
- **Switch**: Binary toggle controls
- **Select**: Dropdown selection menus
- **Combobox**: Autocomplete with search
- **Slider**: Range value selection
- **Calendar**: Date selection interface
- **Date Picker**: Date input with calendar
- **Input OTP**: One-time password input
- **Label**: Accessible form labels
- **Field**: Composed form field structure
- **Formsnap**: Complete form solution with Superforms & Zod

### Layout & Navigation

Structure and navigation components:

- **Accordion**: Collapsible content sections
- **Tabs**: Tabbed content panels
- **Breadcrumb**: Hierarchical navigation
- **Navigation Menu**: Site navigation links
- **Sidebar**: Composable sidebar layouts
- **Separator**: Visual content dividers
- **Scroll Area**: Custom scrollable regions
- **Resizable**: Adjustable panel layouts

### Overlays & Dialogs

Modal and popup components:

- **Dialog**: Modal windows
- **Alert Dialog**: Confirmation dialogs
- **Sheet**: Side panel overlays
- **Drawer**: Slide-out panels
- **Popover**: Contextual popovers
- **Dropdown Menu**: Action menus
- **Context Menu**: Right-click menus
- **Command**: Command palette
- **Menubar**: Desktop-style menu bar
- **Hover Card**: Preview on hover
- **Tooltip**: Informational tooltips

### Feedback & Status

User feedback components:

- **Alert**: Attention callouts
- **Badge**: Status indicators
- **Progress**: Task completion bars
- **Skeleton**: Loading placeholders
- **Spinner**: Loading indicators
- **Sonner**: Toast notifications
- **Empty**: Empty state displays

### Display & Media

Content presentation components:

- **Card**: Content containers
- **Avatar**: User images with fallbacks
- **Aspect Ratio**: Ratio-locked containers
- **Table**: Data tables
- **Data Table**: Advanced tables with TanStack Table
- **Chart**: Data visualizations with LayerChart
- **Carousel**: Image/content carousels
- **Typography**: Text styling utilities
- **Kbd**: Keyboard input display
- **Item**: Versatile content display

### Miscellaneous

Additional utility components:

- **Collapsible**: Expandable panels
- **Pagination**: Page navigation
- **Toggle**: Two-state buttons
- **Toggle Group**: Grouped toggles
- **Range Calendar**: Date range selection

## Form Building Pattern

### Recommended Approach with Formsnap

```typescript
// 1. Define Zod schema
import { z } from 'zod';

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

// 2. Setup in +page.server.ts
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

export const actions = {
  default: async ({ request }) => {
    const form = await superValidate(request, zod(formSchema));
    if (!form.valid) return fail(400, { form });
    // Handle submission
    return { form };
  }
};

// 3. Use in component
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

Customize appearance using CSS variables with oklch color space:

```css
@theme {
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
}
```

### Color Conventions

Use `background` and `foreground` pairs:
- `--primary` / `--primary-foreground`
- `--secondary` / `--secondary-foreground`
- `--accent` / `--accent-foreground`
- `--destructive` / `--destructive-foreground`
- `--muted` / `--muted-foreground`
- `--card` / `--card-foreground`

## Dark Mode

Implementations available for:
- **Svelte**: Using mode-watcher or custom solutions
- **Astro**: Integration with Astro's theme system

## Migration Guides

- **Svelte 5**: Migrate from Svelte 4 and Tailwind 3
- **Tailwind v4**: Update to Tailwind v4 with Svelte 5

## Key Conventions

1. Install components individually as needed
2. Components are copied to your project (not npm packages)
3. Customize components directly in your codebase
4. Use TypeScript for type safety
5. Follow accessibility best practices
6. Leverage CSS variables for theming
7. Use Formsnap for complex forms

## Common Patterns

### Installing a Component

```bash
pnpm dlx shadcn-svelte@latest add button
pnpm dlx shadcn-svelte@latest add form
pnpm dlx shadcn-svelte@latest add input
```

### Using a Component

```svelte
<script>
  import { Button } from '$lib/components/ui/button';
</script>

<Button variant="default">Click me</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline">Cancel</Button>
```

### Building a Form

```svelte
<script>
  import * as Form from '$lib/components/ui/form';
  import { Input } from '$lib/components/ui/input';
  import { Button } from '$lib/components/ui/button';
</script>

<form>
  <Form.Field {form} name="username">
    <Form.Control let:attrs>
      <Form.Label>Username</Form.Label>
      <Input {...attrs} bind:value={$username} />
    </Form.Control>
    <Form.Description>Your public username</Form.Description>
    <Form.FieldErrors />
  </Form.Field>
  <Button type="submit">Save</Button>
</form>
```

## References

See `references/shadcn-svelte.md` for the complete component list and documentation links.

## Official Documentation

- [shadcn-svelte](https://shadcn-svelte.com)
- [Installation Guide](https://shadcn-svelte.com/docs/installation/sveltekit)
- [Components](https://shadcn-svelte.com/docs/components)
- [Theming](https://shadcn-svelte.com/docs/theming)
