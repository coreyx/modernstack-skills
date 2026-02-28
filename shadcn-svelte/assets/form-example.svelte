<script lang="ts">
	// Example: Complete form with Formsnap, Superforms, and Zod
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Button } from '$lib/components/ui/button';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import * as Select from '$lib/components/ui/select';
	import { formFieldProxy, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { z } from 'zod';

	// Define validation schema
	const formSchema = z.object({
		username: z.string().min(3, 'Username must be at least 3 characters'),
		email: z.string().email('Invalid email address'),
		bio: z.string().max(500, 'Bio must be less than 500 characters').optional(),
		role: z.enum(['user', 'admin', 'moderator']),
		notifications: z.boolean().default(false)
	});

	// Get form data from page data
	let { data } = $props();

	// Initialize superForm
	const form = superForm(data.form, {
		validators: zodClient(formSchema),
		onUpdated: ({ form }) => {
			if (form.valid) {
				console.log('Form submitted successfully!');
			}
		}
	});

	const { form: formData, enhance } = form;

	// Create field proxies
	const username = formFieldProxy(form, 'username');
	const email = formFieldProxy(form, 'email');
	const bio = formFieldProxy(form, 'bio');
	const role = formFieldProxy(form, 'role');
	const notifications = formFieldProxy(form, 'notifications');
</script>

<div class="max-w-2xl mx-auto p-8">
	<h1 class="text-3xl font-bold mb-6">User Profile Form</h1>

	<form method="POST" use:enhance class="space-y-6">
		<!-- Username Field -->
		<Form.Field {form} name="username">
			<Form.Control let:attrs>
				<Form.Label>Username</Form.Label>
				<Input {...attrs} bind:value={$username} placeholder="johndoe" />
			</Form.Control>
			<Form.Description>This is your public display name.</Form.Description>
			<Form.FieldErrors />
		</Form.Field>

		<!-- Email Field -->
		<Form.Field {form} name="email">
			<Form.Control let:attrs>
				<Form.Label>Email</Form.Label>
				<Input {...attrs} type="email" bind:value={$email} placeholder="john@example.com" />
			</Form.Control>
			<Form.Description>We'll never share your email with anyone else.</Form.Description>
			<Form.FieldErrors />
		</Form.Field>

		<!-- Bio Field -->
		<Form.Field {form} name="bio">
			<Form.Control let:attrs>
				<Form.Label>Bio</Form.Label>
				<Textarea
					{...attrs}
					bind:value={$bio}
					placeholder="Tell us about yourself"
					rows={4}
				/>
			</Form.Control>
			<Form.Description>Brief description for your profile (optional).</Form.Description>
			<Form.FieldErrors />
		</Form.Field>

		<!-- Role Select Field -->
		<Form.Field {form} name="role">
			<Form.Control let:attrs>
				<Form.Label>Role</Form.Label>
				<Select.Root
					selected={{ value: $role, label: $role }}
					onSelectedChange={(v) => {
						v && ($role = v.value);
					}}
				>
					<Select.Trigger {...attrs}>
						<Select.Value placeholder="Select a role" />
					</Select.Trigger>
					<Select.Content>
						<Select.Item value="user" label="User">User</Select.Item>
						<Select.Item value="admin" label="Admin">Admin</Select.Item>
						<Select.Item value="moderator" label="Moderator">Moderator</Select.Item>
					</Select.Content>
				</Select.Root>
			</Form.Control>
			<Form.Description>Select your account role.</Form.Description>
			<Form.FieldErrors />
		</Form.Field>

		<!-- Notifications Checkbox -->
		<Form.Field {form} name="notifications" class="flex items-center space-x-2">
			<Form.Control let:attrs>
				<Checkbox {...attrs} bind:checked={$notifications} />
				<Form.Label class="font-normal">Enable email notifications</Form.Label>
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<!-- Submit Button -->
		<div class="flex gap-4">
			<Button type="submit">Save Changes</Button>
			<Button type="button" variant="outline">Cancel</Button>
		</div>
	</form>
</div>
