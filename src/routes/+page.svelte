<script>
	import GlanceCard from '../lib/GlanceCard.svelte';
	import { fade } from 'svelte/transition';
</script>

<div class="container h-screen mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<div class="">
			<h2 class="h2">Welcome to 
				<p class="font-bold underline underline-offset-3 decoration-4 decoration-primary-500">Aeon.</p>
			</h2>
		</div>
		
		<!-- Animated Logo -->
		<figure>
			<section class="img-bg" />
			<img class="w-24 h-24" src="images/logo.svg" alt="Your Company Logo" />
		</figure>
		<!-- / -->
		<div class="flex justify-center space-x-2 mx-2">
			<p class="text-xl ">
				The linux desktop for people who want to "get stuff done".
			</p>
			
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
			<p class="text-xl mt-5">
				Aeon is great for anyone who wants a computer that <p1
					class="font-semibold underline decoration-primary-500">"just works"</p1
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
			<div class="mx-2 flex justify-center items-center">
				<img
					class="rounded-2xl shadow-xl h-auto max-w-sm"
					src="images/aeondesktop.png"
					alt="Gnome"
				/>
			</div>
			<div>
				<article class="mx-5">
					<h1 class="h2">Gnome Desktop</h1>
					<p class="text-xl text-left mt-5">
						For a user-friendly and intuitive desktop experience, Aeon leverages the power of GNOME.
						GNOME is a popular and widely-used desktop environment known for its clean aesthetics,
						intuitive layout, and focus on user productivity. With GNOME, you'll enjoy a
						clutter-free workspace.
					</p>
				</article>
			</div>
			<div class="mx-2 flex justify-center items-center">
				<img class="rounded-2xl h-auto max-w-sm" src="images/flat.png" alt="Flatpak" />
			</div>

			<div>
				<article class="mx-5">
					<h1 class="h2">Flatpak Applications</h1>
					<p class="text-xl mt-5 text-left">
						Aeon provides a streamlined approach to application management through its integration
						with Flatpak. Flatpak is a modern technology that simplifies the installation and
						updates of applications. Unlike traditional methods, Flatpak packages applications as
						self-contained units, including all their necessary dependencies. This offers several
						benefits for Aeon users.
						
					</p>
				</article>
			</div>
			<div class="mx-2 flex justify-center items-center">
				<img 
					class="rounded-2xl shadow-xl h-auto max-w-sm"
					src="images/distrobox.png"
					alt="Distrobox"
				/>
			</div>
			<div>
				<article class="mx-5">
					<h1 class="h2">Distrobox</h1>
					<p class="text-xl mt-5 text-left">
						Aeon takes customization to a new level with its support for Distrobox. This innovative
						tool allows you to effortlessly run entire Linux distributions within your existing Aeon
						environment. Imagine having access to specific applications or tools from another distro
						without needing to switch systems entirely. Distrobox makes this a reality. Here's how
						Distrobox empowers Aeon users: Experimentation without Risk: Want to try a new distro or
						access software unavailable on Aeon?
					</p>
				</article>
			</div>
			<div class="mx-2 flex justify-center items-center">
				<img
					class="rounded-2xl shadow-xl h-auto max-w-sm bg-slate-300"
					src="images/microos.png"
					alt="Distrobox"
				/>
			</div>
			<div>
				<article class="mx-5">
				<h1 class="h2">MicroOS</h1>
				<p class="text-xl text-balance mt-5 text-left">
					Aeon takes customization to a new level with its support for Distrobox. This innovative
					tool allows you to effortlessly run entire Linux distributions within your existing Aeon
					environment. Imagine having access to specific applications or tools from another distro
					without needing to switch systems entirely. Distrobox makes this a reality. Here's how
					Distrobox empowers Aeon users: Experimentation without Risk: Want to try a new distro or
					access software unavailable on Aeon?
				</p>
			</article>
			</div>
		</div>
	</div>
</div>
<hr class="mt-16" />
<div class="container mx-auto justify-center items-center mt-16">
	<h2 class="h2 text-center">
		<span
			class="bg-gradient-to-br from-primary-500 to-secondary-400 bg-clip-text text-transparent box-decoration-clone mx-5"
			>Further Information</span
		>
	</h2>
	<div class="space-y-10 text-left flex flex-col items-center mt-10">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			<div class="card hover:shadow-lg mx-2">
				<header class="card-header flex flex-col items-center p-4">
					<div
						class="h-14 w-14 overflow-hidden transform transition duration-300 ease-in-out hover:rotate-10"
					>
						<img class="object-cover h-full w-full" src="images/wiki.svg" alt="" />
					</div>
					<h3 class=" text-xl font-bold mt-4">Technical Details</h3>
					<p class=" text-base mt-2 text-balance text-center">
						For technical details and how-tos, head over to the Wiki
					</p>
					<button
						class="px-4 py-2 bg-primary-500 text-white font-bold rounded shadow-sm hover:bg-primary-700 mt-5"
						>Learn More</button
					>
				</header>
			</div>
			<div class="card hover:shadow-lg mx-2">
				<header class="card-header flex flex-col items-center p-4">
					<div
						class="h-14 w-14 overflow-hidden transform transition duration-300 ease-in-out hover:rotate-10"
					>
						<img class="object-cover h-full w-full" src="images/video.svg" alt="" />
					</div>
					<h3 class=" text-xl font-bold mt-4">Project Origins</h3>
					<p class=" text-base mt-2 text-balance text-center">
						For a deep dive on the origins and use-cases for Aeon, check out this video:
					</p>
					<button
						class="px-4 py-2 bg-primary-500 text-white font-bold rounded shadow-sm hover:bg-primary-700 mt-5"
						>Learn More</button
					>
				</header>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	figure {
		@apply flex relative flex-col items-center justify-center; /* Center logo */
	}

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
