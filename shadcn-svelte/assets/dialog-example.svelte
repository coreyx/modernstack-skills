<script lang="ts">
	// Example: Dialog component usage
	import * as Dialog from '$lib/components/ui/dialog';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	let open = $state(false);
	let name = $state('');
	let email = $state('');

	function handleSubmit() {
		console.log('Submitted:', { name, email });
		open = false;
		name = '';
		email = '';
	}
</script>

<div class="p-8">
	<h2 class="text-2xl font-bold mb-4">Dialog Examples</h2>

	<!-- Basic Dialog -->
	<Dialog.Root bind:open>
		<Dialog.Trigger asChild let:builder>
			<Button builders={[builder]}>Open Dialog</Button>
		</Dialog.Trigger>
		<Dialog.Content class="sm:max-w-[425px]">
			<Dialog.Header>
				<Dialog.Title>Edit Profile</Dialog.Title>
				<Dialog.Description>
					Make changes to your profile here. Click save when you're done.
				</Dialog.Description>
			</Dialog.Header>
			<div class="grid gap-4 py-4">
				<div class="grid grid-cols-4 items-center gap-4">
					<Label for="name" class="text-right">Name</Label>
					<Input id="name" bind:value={name} class="col-span-3" />
				</div>
				<div class="grid grid-cols-4 items-center gap-4">
					<Label for="email" class="text-right">Email</Label>
					<Input id="email" type="email" bind:value={email} class="col-span-3" />
				</div>
			</div>
			<Dialog.Footer>
				<Button type="button" variant="outline" onclick={() => (open = false)}>Cancel</Button>
				<Button type="submit" onclick={handleSubmit}>Save changes</Button>
			</Dialog.Footer>
		</Dialog.Content>
	</Dialog.Root>

	<!-- Alert Dialog Example -->
	<div class="mt-8">
		<h3 class="text-xl font-semibold mb-4">Alert Dialog</h3>
		<Dialog.Root>
			<Dialog.Trigger asChild let:builder>
				<Button builders={[builder]} variant="destructive">Delete Account</Button>
			</Dialog.Trigger>
			<Dialog.Content>
				<Dialog.Header>
					<Dialog.Title>Are you absolutely sure?</Dialog.Title>
					<Dialog.Description>
						This action cannot be undone. This will permanently delete your account and remove
						your data from our servers.
					</Dialog.Description>
				</Dialog.Header>
				<Dialog.Footer>
					<Button variant="outline">Cancel</Button>
					<Button variant="destructive">Delete</Button>
				</Dialog.Footer>
			</Dialog.Content>
		</Dialog.Root>
	</div>

	<!-- Sheet Example (Side Panel) -->
	<div class="mt-8">
		<h3 class="text-xl font-semibold mb-4">Sheet (Side Panel)</h3>
		<p class="text-muted-foreground mb-4">
			Use Sheet component for side panels. Similar API to Dialog but slides in from the side.
		</p>
		<code class="block bg-muted p-4 rounded">
			{`import * as Sheet from '$lib/components/ui/sheet';

<Sheet.Root>
  <Sheet.Trigger>Open</Sheet.Trigger>
  <Sheet.Content>
    <Sheet.Header>
      <Sheet.Title>Title</Sheet.Title>
    </Sheet.Header>
    <!-- Content -->
  </Sheet.Content>
</Sheet.Root>`}
		</code>
	</div>
</div>
