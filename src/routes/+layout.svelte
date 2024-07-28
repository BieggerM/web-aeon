<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	export const prerender = true
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<img class="w-6 h-6" src="/images/logo.svg" alt="Your Company Logo">
				<strong class="text-xl uppercase ml-2">Aeon</strong>
			</svelte:fragment>
			
		</AppBar>
		
	</svelte:fragment>
	<!-- Page Route Content -->
	
	<slot />
	<footer class="bg-surface-600 p-4 mt-5"> © Aeon contributors </footer>
</AppShell>
