# Tailwind CSS v4 Skill

A Kiro Agent Skill for building modern web interfaces with Tailwind CSS v4, featuring CSS-first configuration, dynamic utilities, and massive performance improvements.

## Overview

This skill provides comprehensive guidance for using Tailwind CSS v4, the latest major version with a ground-up rewrite focusing on performance, developer experience, and modern CSS features. It covers CSS-first configuration, dynamic utilities, container queries, 3D transforms, and the new P3 color palette.

## When to Use

This skill activates when you need to:

- Set up Tailwind CSS v4 in a new project
- Migrate from Tailwind v3 to v4
- Configure custom themes using CSS variables
- Use dynamic utilities without predefined theme values
- Work with container queries as a core feature
- Implement 3D transforms or advanced gradients
- Troubleshoot Tailwind v4 configuration or build issues

## What's Included

### SKILL.md
The main skill file with key changes from v3, new features, CSS-first configuration, and common patterns.

### references/
- `tailwind-v4.md` - Complete documentation covering all improvements, features, and a link to the official blog post

### assets/
Example templates ready to use in your project:
- `app.example.css` - Complete CSS setup with custom theme configuration
- `dynamic-utilities.example.html` - Examples of all new dynamic utilities and features
- `vite.config.example.ts` - Vite configuration with first-party Tailwind plugin

## Quick Start

1. Install Tailwind CSS v4:
   ```bash
   npm install tailwindcss@next @tailwindcss/vite@next
   ```

2. Create your CSS file:
   ```css
   /* app.css */
   @import 'tailwindcss';
   ```

3. For Vite projects, add the plugin:
   ```typescript
   // vite.config.ts
   import tailwindcss from '@tailwindcss/vite';
   
   export default {
     plugins: [tailwindcss()]
   };
   ```

4. Start using Tailwind classes - no configuration needed!

## Key Improvements

### Performance

- Full builds: up to 5x faster
- Incremental builds: over 100x faster (microseconds)
- New high-performance engine

### Configuration

- Zero config by default (no `tailwind.config.js` needed)
- Automatic content detection (no `content` array)
- CSS-first customization with `@theme` directive
- Built-in CSS imports (no `postcss-import` needed)
- First-party Vite plugin for better integration

## Major Features

### CSS-First Theme Configuration

```css
@import 'tailwindcss';

@theme {
	--color-primary: oklch(60% 0.2 250);
	--font-family-sans: 'Inter', system-ui, sans-serif;
	--spacing-18: 4.5rem;
}
```

### Dynamic Utilities

Work without predefined theme values:

- Grid: `grid-cols-15`, `grid-rows-7`
- Spacing: `w-17`, `mt-29`, `p-13`
- Data attributes: `data-current:bg-blue-500`

### Container Queries (Core)

No plugin needed:

```html
<div class="@container">
	<div class="@sm:grid-cols-2 @lg:grid-cols-3">...</div>
</div>
```

### New Utilities

- **Square sizing**: `size-12` (replaces `w-12 h-12`)
- **3D transforms**: `rotate-x-45`, `translate-z-10`
- **Gradient angles**: `bg-linear-45`
- **Gradient interpolation**: `bg-linear-to-r/oklch`
- **Radial/conic gradients**: `bg-radial-*`, `bg-conic-*`
- **Starting styles**: `starting:opacity-0` for CSS-only transitions
- **Not pseudo-class**: `not-first:mt-4`

### P3 Color Palette

Default colors use `oklch` for more vivid colors on modern displays supporting the P3 color gamut.

## Modern CSS Features

Requires newer browser versions:

- **Cascade Layers** (`@layer`): Better style organization
- **Registered Custom Properties** (`@property`): Improved performance
- **`color-mix()`**: Dynamic color opacity on CSS variables

## Common Patterns

### Basic Setup

```css
@import 'tailwindcss';
```

### Custom Theme

```css
@import 'tailwindcss';

@theme {
	--color-brand: oklch(65% 0.2 250);
	--font-family-display: 'Satoshi', sans-serif;
}
```

### Manual Content Paths

```css
@import 'tailwindcss';
@source '../components/**/*.tsx';
@source '../app/**/*.tsx';
```

### Dynamic Grid

```html
<div class="grid grid-cols-15 gap-4">
	<!-- 15 columns without configuration -->
</div>
```

### Container Queries

```html
<div class="@container">
	<div class="@sm:text-lg @lg:text-xl">
		Responsive to container size
	</div>
</div>
```

### Data Attributes

```html
<button data-active="true" class="data-active:bg-blue-500">
	Active state
</button>
```

## Migration from v3

1. Remove `tailwind.config.js` if using defaults
2. Move theme customization to CSS using `@theme`
3. Remove `content` array (automatic detection)
4. Update to `@tailwindcss/vite` for Vite projects
5. Replace `w-* h-*` with `size-*` for square elements
6. Test on modern browsers for new CSS features
7. Update color values to `oklch` if customizing palette

## Browser Support

Tailwind v4 uses modern CSS features that require:

- Chrome/Edge 105+
- Safari 15.4+
- Firefox 108+

For older browser support, consider staying on Tailwind v3.

## Official Resources

- [Tailwind CSS v4.0 Blog Post](https://tailwindcss.com/blog/tailwindcss-v4)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Upgrade Guide](https://tailwindcss.com/docs/upgrade-guide)

## License

This skill is provided as-is for use with Kiro AI assistant.
