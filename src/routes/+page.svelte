<script>
	import GlanceCard from '../lib/GlanceCard.svelte';
</script>

<div class="container h-screen mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<h2 class="h2">Welcome to Aeon.</h2>
		<!-- Animated Logo -->
		<figure>
			<section class="img-bg" />
			<img class="w-24 h-24" src="images/logo.svg" alt="Your Company Logo" />
		</figure>
		<!-- / -->
		<div class="flex justify-center space-x-2 mx-2">
			The linux desktop for people who want to "get stuff done".
		</div>
		<div class="flex justify-center space-x-4 mt-4">
			<button
				class="px-4 py-2 bg-primary-500 text-white font-bold rounded shadow-sm hover:bg-primary-700"
				>Explore</button
			>
			<button
				class="px-4 py-2 bg-secondary-200 text-gray-700 font-bold rounded shadow-sm hover:bg-secondary-300"
				>Download</button
			>
			<button
				class="px-4 py-2 bg-transparent border border-primary-500 text-primary-500 font-bold rounded hover:bg-blue-50"
				>Docs</button
			>
		</div>
	</div>
</div>
<div class="container mx-auto justify-center items-center">
	<div class="space-y-10 text-left flex flex-col items-center">
		<h2 class="h2">At a Glance</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<GlanceCard
				header="Highly Dependable"
				content="Daily system updates happen automatically while you work. Your running system is not
					affected until you reboot, keeping your workday consistent and avoiding any unexpected
					issues with your apps."
				alt="atomic"
				image="images/repairing-icon.svg"
			/>
			<GlanceCard
				header="Enhanced Security"
				content="Aeon prioritizes user safety with built-in security features like application sandboxing and hardware encryption, keeping your data and system protected."
				alt="security shield"
				image="images/lock.svg"
			/>

			<GlanceCard
				header="Automatic Maintenance"
				content="Experience a smooth and responsive user experience with Aeon's optimized codebase and efficient resource management, allowing you to work without lags."
				alt="speedometer"
				image="images/atomic-updates.svg"
			/>

			<GlanceCard
				header="Developer Focused"
				content="Tailor your workspace to your preferences. Aeon offers extensive customization options for layouts, themes, and shortcuts, letting you personalize your work environment."
				alt="settings icon"
				image="images/atomic-updates.svg"
			/>

			<GlanceCard
				header=""
				content="Effortlessly switch between tasks and applications with Aeon's intuitive window management and efficient task switching features, boosting your productivity."
				alt="multiple windows"
				image="images/atomic-updates.svg"
			/>

			<GlanceCard
				header="Proudly Oppinionated"
				content="Aeon is set up to get you started right away."
				alt="future concept"
				image="images/atomic-updates.svg"
			/>
		</div>
		<div class="flex justify-center space-x-4">
			<button
				class="px-4 py-2 bg-primary-500 text-white font-bold rounded shadow-sm hover:bg-primary-700 mt-5"
				>Learn More</button
			>
		</div>
	</div>
</div>
<div class="container mx-auto justify-center mt-14">
	<div class="space-y-10 text-left flex flex-col items-center">
		<article class="text-wrap mx-5">
			<h2 class="h2">
				<span
					class="bg-gradient-to-br from-primary-500 to-secondary-400 bg-clip-text text-transparent box-decoration-clone"
					>Based On Trusted Tooling</span
				>
			</h2>
			<p class="text-l mt-5">
				Aeon is great for anyone who wants a computer that <a
					class="font-semibold underline decoration-primary-500">"just works"</a
				>; in particular it is perfect for the "lazy developer" who prefers to spend their time
				getting things done while letting their desktop take care of itself. The OS is static,
				automated and reliable, letting you focus on your apps and work.
			</p>
		</article>
	</div>
</div>
<div class="container mx-auto mt-16">
	<div class="space-y-5 text-left flex flex-col">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center space-y-5">
			<div>
				<h1 class="h1">Gnome Desktop</h1>
				<p class="text-l text-balance mt-5">
					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
				</p>
			</div>

			<div class="mx-2 flex justify-center items-center">
				<img class="rounded-2xl" src="images/aeondesktop.png" alt="Gnome" />
			</div>
			<div class="mx-2 flex justify-center items-center">
				<img class="rounded-2xl" src="images/flat.png" alt="Flatpak" />
			</div>
			<div>
				<h1 class="h1">Flatpak Applications</h1>
				<p class="text-l text-balance mt-5">Flatpak is a packaging format that Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
			</div>
			
			<div>
				<h1 class="h1">Distrobox</h1>
				<p class="text-l text-balance mt-5">Flatpak is a packaging format that Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
			</div>
			<div class="mx-2 flex justify-center items-center">
				<img class="rounded-2xl" src="images/distrobox.png" alt="Distrobox" />
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	figure {
		@apply flex relative flex-col items-center justify-center; /* Center logo */
	}

	figure svg,
	.img-bg {
		@apply w-48 h-48 md:w-80 md:h-80 rounded-full; /* Adjust size as needed */
	}

	/* Background animation */
	.img-bg {
		@apply absolute z-[-1] blur-[30px] transition-all; /* Reduced blur */
		animation:
			pulse 4s ease-in-out infinite,
			glow 12s linear infinite;
	}

	/* Pulse animation with border */
	@keyframes pulse {
		0% {
			transform: scale(1.5);
			@apply border-4 border-primary-500; /* Add a border at start */
		}
		70% {
			transform: scale(1.8);
			border-color: transparent; /* Remove border during pulse */
		}
		100% {
			transform: scale(1.5);
		}
	}

	/* Glow animation with multiple colors */
	@keyframes glow {
		0% {
			@apply bg-primary-700/70; /* More opaque background */
		}
		33% {
			@apply bg-secondary-700/70;
		}
		66% {
			@apply bg-secondary-700/70;
		}
		100% {
			@apply bg-primary-700/70;
		}
	}
</style>
