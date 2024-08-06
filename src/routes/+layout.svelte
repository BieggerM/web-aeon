<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<img class="w-8 h-8" src="images/logo.svg" alt="Aeon Logo">
				<strong class="text-xl uppercase ml-2">Aeon</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a href="https://github.com/bieggerm/web-aeon" target="_blank" rel="noopener noreferrer">
						<img class="w-8 h-8"src="images/github-logo.svg" alt="github-logo">
				</a>
			</svelte:fragment>
		</AppBar>
		
	</svelte:fragment>
	<!-- Page Route Content -->
	
	<slot />
	<footer class="bg-surface-600 p-4 mt-5"> © Aeon contributors </footer>
</AppShell>

