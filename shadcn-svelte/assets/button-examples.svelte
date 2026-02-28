<script lang="ts">
	// Example: Button component usage
	import { Button } from '$lib/components/ui/button';
</script>

<div class="space-y-4 p-8">
	<h2 class="text-2xl font-bold">Button Variants</h2>

	<!-- Default variant -->
	<Button variant="default">Default Button</Button>

	<!-- Destructive variant -->
	<Button variant="destructive">Delete</Button>

	<!-- Outline variant -->
	<Button variant="outline">Cancel</Button>

	<!-- Secondary variant -->
	<Button variant="secondary">Secondary</Button>

	<!-- Ghost variant -->
	<Button variant="ghost">Ghost</Button>

	<!-- Link variant -->
	<Button variant="link">Link Button</Button>

	<h2 class="text-2xl font-bold mt-8">Button Sizes</h2>

	<!-- Different sizes -->
	<Button size="sm">Small</Button>
	<Button size="default">Default</Button>
	<Button size="lg">Large</Button>
	<Button size="icon">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
		>
			<path d="M5 12h14" />
			<path d="m12 5 7 7-7 7" />
		</svg>
	</Button>

	<h2 class="text-2xl font-bold mt-8">Button States</h2>

	<!-- Disabled state -->
	<Button disabled>Disabled</Button>

	<!-- Loading state (custom implementation) -->
	<Button disabled>
		<svg class="animate-spin h-4 w-4 mr-2" viewBox="0 0 24 24">
			<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
			<path
				class="opacity-75"
				fill="currentColor"
				d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
			/>
		</svg>
		Loading...
	</Button>

	<h2 class="text-2xl font-bold mt-8">Button with Icons</h2>

	<!-- Button with icon -->
	<Button>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			class="mr-2"
		>
			<path d="M5 12h14" />
			<path d="M12 5v14" />
		</svg>
		Add Item
	</Button>

	<!-- Button with trailing icon -->
	<Button variant="outline">
		Download
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			class="ml-2"
		>
			<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
			<polyline points="7 10 12 15 17 10" />
			<line x1="12" x2="12" y1="15" y2="3" />
		</svg>
	</Button>
</div>
