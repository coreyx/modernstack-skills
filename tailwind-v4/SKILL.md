---
name: tailwind-v4
description: Build modern web interfaces with Tailwind CSS v4, featuring CSS-first configuration, dynamic utilities, modern CSS features, P3 color palette, container queries, and 100x faster incremental builds.
---

# Tailwind CSS v4

Use this skill when working with Tailwind CSS v4, the latest version with major performance improvements and CSS-first configuration.

## When to Use

Activate this skill when:
- Setting up Tailwind CSS v4 in a new project
- Migrating from Tailwind v3 to v4
- Configuring themes using CSS variables
- Using dynamic utilities and modern CSS features
- Working with container queries or 3D transforms
- Troubleshooting Tailwind v4 configuration issues

## Key Changes from v3

### Performance Improvements

- Full builds: up to 5x faster
- Incremental builds: over 100x faster (measured in microseconds)
- New high-performance engine with ground-up rewrite

### Configuration Changes

- **Zero config by default**: No `tailwind.config.js` required
- **Automatic content detection**: No `content` array needed
- **CSS-first customization**: Configure themes directly in CSS files
- **Built-in CSS imports**: No need for `postcss-import`
- **First-party Vite plugin**: `@tailwindcss/vite` for better integration

### CSS-First Theme Configuration

Configure your theme directly in CSS using the `@theme` directive:

```css
@import 'tailwindcss';

@theme {
	--font-family-display: 'Satoshi', 'sans-serif';
	
	--color-gray-50: oklch(98.5% 0.01 255);
	--color-gray-100: oklch(96% 0.02 255);
	
	--spacing-1: 0.25rem;
	--spacing-2: 0.5rem;
}
```

All design tokens are exposed as native CSS variables.

## New Features

### Dynamic Utilities

Many utilities now work without predefined theme values:

- **Grid**: `grid-cols-15`, `grid-rows-7` work out of the box
- **Spacing**: `w-17`, `mt-29`, `p-13` work dynamically
- **Data attributes**: `data-current:opacity-100` for custom boolean data attributes

### Modern CSS Features

Requires newer browser versions:

- **Cascade Layers** (`@layer`): Better style organization
- **Registered Custom Properties** (`@property`): Improved performance
- **`color-mix()`**: Dynamic color opacity on CSS variables

### Container Queries (Core Feature)

No plugin needed:

- `@sm:grid-cols-2` - Container size variants
- `@lg:text-lg` - Responsive to container, not viewport
- `@max-md:hidden` - Max-width container queries

### P3 Color Palette

Default colors use `oklch` for more vivid colors on modern displays supporting P3 color gamut.

### New Utilities

- **Square sizing**: `size-12` (shorthand for `w-12 h-12`)
- **3D transforms**: `rotate-x-*`, `translate-z-*`
- **Gradient angles**: `bg-linear-45`
- **Gradient interpolation**: `bg-linear-to-r/oklch`
- **Radial/conic gradients**: `bg-radial-*`, `bg-conic-*`
- **Starting styles**: `starting:` variant for CSS-only transitions
- **Not pseudo-class**: `not-*` variant for `:not()` selector

## Common Patterns

### Basic Setup

```css
/* app.css */
@import 'tailwindcss';
```

### Custom Theme

```css
@import 'tailwindcss';

@theme {
	--color-primary: oklch(60% 0.2 250);
	--color-secondary: oklch(70% 0.15 180);
	--font-family-sans: 'Inter', system-ui, sans-serif;
}
```

### Manual Content Paths

```css
@import 'tailwindcss';
@source '../components/**/*.tsx';
@source '../app/**/*.tsx';
```

### Using Dynamic Utilities

```html
<!-- Grid with any column count -->
<div class="grid grid-cols-15 gap-4">...</div>

<!-- Spacing with any value -->
<div class="w-17 h-23 mt-29">...</div>

<!-- Data attribute variants -->
<button class="data-current:bg-blue-500">...</button>
```

### Container Queries

```html
<div class="@container">
	<div class="@sm:grid-cols-2 @lg:grid-cols-3">...</div>
</div>
```

## Migration Notes

- Remove `tailwind.config.js` if using default configuration
- Move theme customization to CSS using `@theme`
- Remove `content` array (automatic detection)
- Update to `@tailwindcss/vite` plugin for Vite projects
- Test on modern browsers for new CSS features

## References

See `references/tailwind-v4.md` for complete documentation and the official blog post link.
