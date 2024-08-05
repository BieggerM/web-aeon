<script lang="ts">
	import GlanceCard from '../lib/GlanceCard.svelte';
	import Presentation from '$lib/Presentation.svelte';

	let isInView: boolean;
	let flatpackInView: boolean;
</script>

<div class="container h-screen mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<div class="">
			<h2 class="h2 text-5xl">
				Welcome to
				<p class="font-bold underline underline-offset-3 decoration-4 decoration-primary-500">
					Aeon.
				</p>
			</h2>
		</div>

		<!-- Animated Logo -->
		<figure>
			<section class="img-bg" />
			<img class="w-24 h-24" src="images/logo.svg" alt="Your Company Logo" />
		</figure>
		<!-- / -->
		<div class="flex justify-center space-x-2 mx-2">
			<p class="text-2xl">The linux desktop for people who want to "get stuff done".</p>
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
			<h2 class="text-5xl">
				<span
					class="bg-gradient-to-br from-primary-500 to-secondary-400 bg-clip-text text-transparent box-decoration-clone"
					>Based On Trusted Tooling</span
				>
			</h2>
			<p class="text-2xl mt-5">
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
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-cente space-y-5">
			<Presentation
				imageSrc="images/aeondesktop.png"
				imageAlt="Gnome Desktop"
				imageCaption="Aeon Desktop Powered by Gnome"
				heading="Gnome Desktop"
				text=" "
			/>
			<article class="mx-5 md:p-32">
				<h1 class="text-5xl text-primary-500">Gnome Desktop</h1>
				<h1 class="text-3xl text-primary-500 mt-3">is elegantly practical</h1>
				<p class="text-2xl text-left mt-6">
					For a user-friendly and intuitive desktop experience, Aeon leverages the power of GNOME.
				</p>
				<p class="text-2xl text-left mt-6">
					GNOME stands as a beacon of user-friendly design in the Linux ecosystem. Its intuitive
					interface and focus on simplicity make it a welcoming environment for both newcomers and
					seasoned users alike.
				</p>
				<p class="text-2xl text-left mt-6">
					GNOME's commitment to regular updates ensures a steady stream of enhancements and
					features, keeping the desktop experience fresh and modern. This dedication to
					accessibility and innovation aligns seamlessly with the evolving needs of the Linux
					community, making GNOME a compelling choice for those seeking a polished and user-centric
					desktop environment.
				</p>
			</article>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-cente space-y-5">
			<Presentation
				imageSrc="images/flat.png"
				imageAlt="Flatpak"
				imageCaption="Flatpak Applications inside"
				heading="Flatpak Applications"
				text="Aeon provides a streamlined approach to application management through its
integration with Flatpak. Flatpak is a modern technology that simplifies the
installation and updates of applications. Unlike traditional methods, Flatpak
packages applications as self-contained units, including all their necessary
dependencies. This offers several benefits for Aeon users."
			/>
			<article class="mx-5 md:p-32">
				<h1 class="text-5xl text-primary-500">Flatpak Applications</h1>
				<h1 class="text-3xl text-primary-500 mt-3">as first class citizen</h1>
				<p class="text-2xl text-left mt-6">
					Flatpak applications are a game-changer in the Linux world. They offer a streamlined way
					to package and distribute software, ensuring compatibility across various Linux
					distributions.
				</p>
				<p class="text-2xl text-left mt-6">
					This means you no longer have to worry about dependency issues or whether an app will run
					on your specific distro. Flatpaks are self-contained, bundling all the necessary libraries
					and dependencies, making them easy to install and manage.
				</p>
				<p class="text-2xl text-left mt-6">
					Aeon, recognizing the convenience and versatility of Flatpaks, wholeheartedly embraces
					them as first-class citizens, offering seamless integration and support within its
					ecosystem.
				</p>
			</article>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-cente space-y-5">
			<Presentation
				imageSrc="images/distro_tmux.png"
				imageAlt="Distrobox"
				heading="Distrobox"
				text="Aeon takes customization to a new level with its support for Distrobox. This innovative
tool allows you to effortlessly run entire Linux distributions within your existing Aeon
environment. Imagine having access to specific applications or tools from another distro
without needing to switch systems entirely. Distrobox makes this a reality. Here's how
Distrobox empowers Aeon users: Experimentation without Risk: Want to try a new distro or
access software unavailable on Aeon?"
			/>
			<article class="mx-5 md:p-32">
				<h1 class="text-5xl text-primary-500">Distrobox</h1>
				<h1 class="text-3xl text-primary-500 mt-3">for full flexibility</h1>
				<p class="text-2xl text-left mt-6">
					Distrobox is a revolutionary tool that takes customization to a new level by seamlessly
					integrating with Aeon. It empowers users to effortlessly run entire Linux distributions
					within their existing Aeon environment.
				</p>
				<p class="text-2xl text-left mt-6">
					Experimentation without Risk: Want to try a new distro or access software unavailable on
					Aeon? Distrobox lets you do so safely, without affecting your primary system.
				</p>
				<p class="text-2xl text-left mt-6">
					Enhanced Workflow: Switch between different Distrobox containers effortlessly, maintaining
					separate environments for different tasks or projects.
				</p>
			</article>
		</div>
	</div>
</div>
<section class="bg-gradient-to-br from-gray-800 to-surface-800 py-8 md:px-24 mt-14">
	<div class="container mx-auto justify-center mt-14">
		<div class="space-y-10 text-left flex flex-col items-center">
			<article class="text-wrap mx-5">
				<h2 class="text-5xl text-center">
					<span
						class="bg-gradient-to-br from-primary-500 to-secondary-500 bg-clip-text text-transparent box-decoration-clone"
						>Let Aeon handle it for you</span
					>
				</h2>
				<p class="text-2xl mt-10">
					Sit back, relax, and let Aeon take care of the technical details. Our static nature means
					your Computer stays lightning-fast and secure, while automatic transactional updates
					ensure your System is always fresh and up-to-date.
				</p>
				<div class="py-12 md:px-16 text-2xl">
					<ul class="list-disc space-y-4 pl-2 md:pl-12">
						<li class="flex items-center">
							<img src="images/checkmark.svg" alt="Checkmark" class="w-12 h-12 md:w-8 md:h-8 text-green-500 mr-2" />
							<span>Aeon leverages transactional updates and btrfs snapshots for atomic, risk-free system updates.</span>
						</li>
				
						<li class="flex items-center ">
							<img src="images/checkmark.svg" alt="Checkmark" class="w-12 h-12 md:w-8 md:h-8 text-green-500 mr-2" />
							<span>In the event of a failed update, the system seamlessly rolls back to the previous snapshot, ensuring your system remains bootable and functional.</span>
						</li>
				
						<li class="flex items-center ">
							<img src="images/checkmark.svg" alt="Checkmark" class="w-12 h-12 md:w-8 md:h-8 text-green-500 mr-2" />
							<span>Snapshots include your configuration in /etc, empowering you to easily revert configuration changes if needed.</span>
						</li>
				
						<li class="flex items-center">
							<img src="images/checkmark.svg" alt="Checkmark" class="w-12 h-12 md:w-8 md:h-8 text-green-500 mr-2" />
							<span>Transactional updates support both your existing RPM packages and most packages in Aeon's repositories.</span>
						</li>
					</ul>
				</div>
			</article>
		</div>
	</div>
</section>

<div class="container mx-auto justify-center items-center mt-16">
	<h2 class="text-5xl text-center">
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
					<h3 class=" text-4xl font-bold mt-4">Technical Details</h3>
					<p class=" text-2xl mt-2 text-balance text-center">
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
					<h3 class=" text-4xl font-bold mt-4">Project Origins</h3>
					<p class=" text-2xl mt-2 text-balance text-center">
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
