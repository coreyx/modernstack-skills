<script lang="ts">
	// Example: Card component usage
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
</script>

<div class="p-8 space-y-8">
	<h2 class="text-2xl font-bold">Card Examples</h2>

	<!-- Basic Card -->
	<Card.Root class="w-[350px]">
		<Card.Header>
			<Card.Title>Card Title</Card.Title>
			<Card.Description>Card Description</Card.Description>
		</Card.Header>
		<Card.Content>
			<p>This is the card content area where you can place any content.</p>
		</Card.Content>
		<Card.Footer>
			<Button>Action</Button>
		</Card.Footer>
	</Card.Root>

	<!-- Card with Form -->
	<Card.Root class="w-[350px]">
		<Card.Header>
			<Card.Title>Create Account</Card.Title>
			<Card.Description>Enter your details to create a new account.</Card.Description>
		</Card.Header>
		<Card.Content class="space-y-4">
			<div class="space-y-2">
				<label for="name" class="text-sm font-medium">Name</label>
				<input
					id="name"
					type="text"
					placeholder="John Doe"
					class="w-full px-3 py-2 border rounded-md"
				/>
			</div>
			<div class="space-y-2">
				<label for="email" class="text-sm font-medium">Email</label>
				<input
					id="email"
					type="email"
					placeholder="john@example.com"
					class="w-full px-3 py-2 border rounded-md"
				/>
			</div>
		</Card.Content>
		<Card.Footer class="flex justify-between">
			<Button variant="outline">Cancel</Button>
			<Button>Create</Button>
		</Card.Footer>
	</Card.Root>

	<!-- Card with Badge -->
	<Card.Root class="w-[350px]">
		<Card.Header>
			<div class="flex items-center justify-between">
				<Card.Title>Feature Card</Card.Title>
				<Badge>New</Badge>
			</div>
			<Card.Description>This feature is newly available.</Card.Description>
		</Card.Header>
		<Card.Content>
			<ul class="space-y-2">
				<li class="flex items-center">
					<svg
						class="w-4 h-4 mr-2 text-green-500"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
					</svg>
					Feature one
				</li>
				<li class="flex items-center">
					<svg
						class="w-4 h-4 mr-2 text-green-500"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
					</svg>
					Feature two
				</li>
				<li class="flex items-center">
					<svg
						class="w-4 h-4 mr-2 text-green-500"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
					</svg>
					Feature three
				</li>
			</ul>
		</Card.Content>
		<Card.Footer>
			<Button class="w-full">Get Started</Button>
		</Card.Footer>
	</Card.Root>

	<!-- Pricing Card -->
	<Card.Root class="w-[350px]">
		<Card.Header>
			<Card.Title>Pro Plan</Card.Title>
			<Card.Description>For professional developers</Card.Description>
		</Card.Header>
		<Card.Content>
			<div class="text-4xl font-bold mb-4">
				$29<span class="text-lg font-normal text-muted-foreground">/month</span>
			</div>
			<ul class="space-y-2 text-sm">
				<li>✓ Unlimited projects</li>
				<li>✓ Priority support</li>
				<li>✓ Advanced analytics</li>
				<li>✓ Custom domain</li>
			</ul>
		</Card.Content>
		<Card.Footer>
			<Button class="w-full">Subscribe</Button>
		</Card.Footer>
	</Card.Root>
</div>
