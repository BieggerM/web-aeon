<script lang="ts">
	import GlanceCard from '../lib/GlanceCard.svelte';
	import Presentation from '$lib/Presentation.svelte';
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
			<a
				href="#explore"
				class="px-4 py-2 bg-primary-500 text-white font-bold rounded shadow-sm hover:bg-primary-700"
				>Explore</a
			>
			<a
				href="https://download.opensuse.org/tumbleweed/appliances/Aeon-Installer.x86_64.raw.xz"
				class="px-4 py-2 bg-secondary-200 text-gray-700 font-bold rounded shadow-sm hover:bg-secondary-300"
				>Download</a
			>
			<a
				href="https://en.opensuse.org/Portal:Aeon"
				class="px-4 py-2 bg-transparent border border-primary-500 text-primary-500 font-bold rounded hover:bg-blue-50"
				>Docs</a
			>
		</div>
		<aside class="alert variant-ghost-warning mx-2">
			<div class="border-l-4 border-yellow-500 p-4" role="alert">
				<p class="font-bold">Release Candidate</p>
				<p>
					Aeon is still in Release Candidate state. Expect updates and refinements before the final
					release.
				</p>
			</div>
		</aside>
	</div>
</div>

<div class="container mx-auto justify-center items-center">
	<div class="space-y-10 text-left flex flex-col items-center">
		<h2 class="text-4xl" id="explore">At a Glance</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<GlanceCard
				header="Automatic Maintenance"
				content="Daily system updates happen automatically while you work. Your running system is not
					affected until you reboot, keeping your workday consistent and avoiding any unexpected
					issues with your apps."
				alt="atomic"
				image="images/repairing-icon.svg"
			/>
			<GlanceCard
				header="Highly Dependable"
				content="Aeon prioritizes stability and dependability at it's core. The static nature of the OS and Atomic Updates ensure you always have a working system when you need it. "
				alt="security shield"
				image="images/lock.svg"
			/>

			<GlanceCard
				header="Minimal Yet Functional"
				content="The base system is kept small and simple, but with everything you need for getting straight on with your tasks - including programming, gaming, media production and clerical work. "
				alt="speedometer"
				image="images/compare-arrow-icon.svg"
			/>

			<GlanceCard
				header="Respects your time"
				content="Aeon is the operating system you won't have to manage. It is set up in a way, to get you started easily and does it's own maintenance in the background."
				alt="settings icon"
				image="images/time.svg"
			/>

			<GlanceCard
				header="Developer Friendly"
				content="Aeon ships with tooling that enables Developers to maintain multiple environments easily and experiment without risk."
				alt="multiple windows"
				image="images/atomic-updates.svg"
			/>

			<GlanceCard
				header="Proudly Oppinionated"
				content="We think that Aeon is a great desktop for most people. With sane defaults and great reliability, we offer a great solution to those, who want to get stuff done instead of endlessly tinkering."
				alt="future concept"
				image="images/checkmark.svg"
			/>
		</div>
	</div>
</div>

<div class="container mx-auto justify-center mt-24">
	<div class="space-y-10 text-left flex flex-col items-center">
		<article class="text-wrap mx-5">
			<h2 class="text-5xl">
				<span
					class="bg-gradient-to-br from-primary-500 to-secondary-400 bg-clip-text text-transparent box-decoration-clone"
					>Built On Trusted Tooling</span
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
<div class="container mx-auto">
	<div class="text-left flex flex-col">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-cente mt-14">
			<Presentation imageSrc="images/aeondesktop.png" imageAlt="Gnome Desktop" />
			<article class="mx-5 md:p-32">
				<h1 class="text-5xl">
					<span
						class="bg-gradient-to-br from-primary-500 to-secondary-400 bg-clip-text text-transparent box-decoration-clone"
					>
						Gnome Desktop</span
					>
				</h1>
				<h1 class="text-3xl text-primary-500 mt-3">
					<span
						class="bg-gradient-to-br from-primary-500 to-secondary-400 bg-clip-text text-transparent box-decoration-clone"
						>is elegantly practical</span
					>
				</h1>
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
	</div>
</div>
<section class="bg-gradient-to-tr from-primary-700 to-surface-800 bg-gradient-tilted mt-10">
	<div class="container mx-auto">
		<div class="text-left flex flex-col">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-cente py-14">
				<Presentation imageSrc="images/flat.png" imageAlt="Flatpak" />
				<article class="mx-5 md:p-32">
					<h1 class="text-5xl text-primary-500">
						<span
							class="bg-gradient-to-br from-primary-500 to-secondary-400 bg-clip-text text-transparent box-decoration-clone"
							>Flatpak Applications</span
						>
					</h1>
					<h1 class="text-3xl text-primary-500 mt-3">
						<span
							class="bg-gradient-to-br from-primary-500 to-secondary-400 bg-clip-text text-transparent box-decoration-clone"
							>as first class citizen</span
						>
					</h1>
					<p class="text-2xl text-left mt-6">
						Flatpak applications are a game-changer in the Linux world. They offer a streamlined way
						to package and distribute software, ensuring compatibility across various Linux
						distributions.
					</p>
					<p class="text-2xl text-left mt-6">
						This means you no longer have to worry about dependency issues or whether an app will
						run on your specific distro. Flatpaks are self-contained, bundling all the necessary
						libraries and dependencies, making them easy to install and manage.
					</p>
					<p class="text-2xl text-left mt-6">
						Aeon, recognizing the convenience and versatility of Flatpaks, wholeheartedly embraces
						them as first-class citizens, offering seamless integration and support within its
						ecosystem.
					</p>
				</article>
			</div>
		</div>
	</div>
</section>

<div class="container mx-auto">
	<div class="text-left flex flex-col">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-cente my-10">
			<Presentation imageSrc="images/distro_tmux.png" imageAlt="Distrobox" />
			<article class="mx-5 md:p-32">
				<h1 class="text-5xl text-primary-500">
					<span
						class="bg-gradient-to-br from-primary-500 to-secondary-400 bg-clip-text text-transparent box-decoration-clone"
						>Distrobox</span
					>
				</h1>
				<h1 class="text-3xl text-primary-500 mt-3">
					<span
						class="bg-gradient-to-br from-primary-500 to-secondary-400 bg-clip-text text-transparent box-decoration-clone"
						>for full flexibility</span
					>
				</h1>
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
<section class="py-8 md:px-24">
	<div class="container mx-auto justify-center ">
		<div class="space-y-10 text-left flex flex-col items-center">
			<article class="text-wrap mx-5">
				<h2 class="text-5xl text-primary-500">
					<span
						class="bg-gradient-to-br from-primary-500 to-secondary-400 bg-clip-text text-transparent box-decoration-clone"
						>Maintenance Free Desktop</span
					>
				</h2>
				<p class="text-2xl mt-10">
					Kick back, relax, and let Aeon take care of the technical details. Our static nature means
					your Computer stays lightning-fast and secure, while automatic transactional updates
					ensure your System is always fresh and up-to-date.
				</p>
				<div class="py-12 md:px-16 text-2xl">
					<ul class="list-disc space-y-4 pl-2 md:pl-12">
						<li class="flex items-center">
							<img
								src="images/checkmark.svg"
								alt="Checkmark"
								class="w-12 h-12 md:w-8 md:h-8 mr-2"
							/>
							<span
								>Aeon leverages transactional updates and btrfs snapshots for atomic, risk-free
								system updates.</span
							>
						</li>

						<li class="flex items-center">
							<img
								src="images/checkmark.svg"
								alt="Checkmark"
								class="w-12 h-12 md:w-8 md:h-8 mr-2"
							/>
							<span
								>In the event of a failed update, the system seamlessly rolls back to the previous
								snapshot, ensuring your system remains bootable and functional.</span
							>
						</li>

						<li class="flex items-center">
							<img
								src="images/checkmark.svg"
								alt="Checkmark"
								class="w-12 h-12 md:w-8 md:h-8 mr-2"
							/>
							<span
								>Snapshots include your configuration in /etc, empowering you to easily revert
								configuration changes if needed.</span
							>
						</li>

						<li class="flex items-center">
							<img
								src="images/checkmark.svg"
								alt="Checkmark"
								class="w-12 h-12 md:w-8 md:h-8 mr-2"
							/>
							<span
								>Transactional updates support both your existing RPM packages and most packages in
								Aeon's repositories.</span
							>
						</li>
					</ul>
				</div>
			</article>
		</div>
	</div>
</section>

<div class="container mx-auto justify-center items-center">
	<h2 class="text-5xl">
		<span
			class="bg-gradient-to-br from-primary-500 to-secondary-400 bg-clip-text text-transparent box-decoration-clone mx-5"
			>Further Information</span
		>
	</h2>
	<div class="container mt-10">
		<a
			href="https://www.reddit.com/r/AeonDesktop/comments/1edi3tr/aeon_rc3_released/"
			target="_blank"
			rel="noopener noreferrer"
		>
			<div
				class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 flex items-center space-x-4 mx-2"
				role="alert"
			>
				<span class="text-4xl">🎉</span>
				<div>
					<p class="font-bold text-lg">RC3 Released!</p>
					<p>
						Aeon Release Candidate 3 is now available. Explore the latest improvements and features!
					</p>
				</div>
			</div>
		</a>
	</div>
	<div class="space-y-10 text-left flex flex-col items-center mt-10">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			<div class="card hover:shadow-lg mx-2">
				<header class="card-header flex flex-col items-center p-4">
					<div
						class="h-14 w-14 overflow-hidden transform transition duration-300 ease-in-out hover:rotate-10"
					>
						<img class="object-cover h-full w-full" src="images/wiki.svg" alt="" />
					</div>
					<h3 class=" text-3xl font-bold mt-4">Technical Details</h3>
					<p class=" text-xl mt-2 text-balance text-center">
						For technical details and how-tos, head over to the Wiki
					</p>
					<a
						class="px-4 py-2 bg-primary-500 text-white font-bold rounded shadow-sm hover:bg-primary-700 mt-5"
						href="https://en.opensuse.org/Portal:Aeon">Learn More</a
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
					<h3 class=" text-3xl font-bold mt-4">Project Origins</h3>
					<p class=" text-xl mt-2 text-balance text-center">
						For a deep dive on the origins and use-cases for Aeon, check out this video:
					</p>
					<a
						class="px-4 py-2 bg-primary-500 text-white font-bold rounded shadow-sm hover:bg-primary-700 mt-5"
						href="https://www.youtube.com/watch?v=lKYLF1tA4Ik">Learn More</a
					>
				</header>
			</div>
		</div>
	</div>
	<p class="text-2xl mt-14 text-center">Connect with us:</p>
	<div class="logo-cloud grid-cols-1 lg:!grid-cols-3 gap-1 mt-10 mx-2">
		<a class="logo-item" href="https://t.me/openSUSE_Aeon">
			<span>
				<div class="h-12 w-12">
					<img src="images/telegram.png" alt="telegram-logo" />
				</div>
			</span>
			<span>Telegram</span>
		</a>
		<a class="logo-item" href="https://matrix.to/#/#aeon:opensuse.org">
			<span>
				<div class="h-12 w-12">
					<img src="images/matrix.png" alt="matrix-logo" />
				</div>
			</span>
			<span>Matrix</span>
		</a>
		<a class="logo-item" href="https://en.opensuse.org/openSUSE:Submitting_bug_reports">
			<span>
				<div class="h-12 w-12">
					<img src="images/bug-icon.svg" alt="bug-icon" />
				</div>
			</span>
			<span>Report a Bug</span>
		</a>
	</div>
</div>
<div class="container mx-auto justify-center items-center mt-16"></div>

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

	/* Add this style rule to your CSS */
	.bg-gradient-tilted {
		transform: skewY(4deg); /* Match this angle to the negative of the gradient angle */
	}

	/* Prevent content inside the section from being skewed */
	.bg-gradient-tilted > .container {
		transform: skewY(-4deg); /* Counteract the skew of the parent */
	}
</style>
