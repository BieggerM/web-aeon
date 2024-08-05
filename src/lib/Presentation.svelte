<script lang="ts">
    import { fade, fly } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import { inview } from 'svelte-inview';

    let isInView = false;

    // Exported variables for image data
    export let imageSrc = "images/aeondesktop.png"; // Default path
    export let imageAlt = "Gnome Desktop";
    export let imageCaption = "Aeon Desktop Powered by Gnome";

    // Exported variables for content
    export let heading = "Gnome Desktop";
    export let text = "For a user-friendly and intuitive desktop experience, Aeon leverages the power of GNOME. GNOME is a popular and widely-used desktop environment known for its clean aesthetics, intuitive layout, and focus on user productivity. With GNOME, you'll enjoy a clutter-free workspace.";
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center space-y-5 my-40">
    <div class="mx-2 justify-center items-center">
        <div
				class="wrapper"
				use:inview={{ unobserveOnEnter: true, rootMargin: '0%' }}
				on:change={({ detail }) => {
					isInView = detail.inView;
				}}
			>
            {#if isInView}
                <img
                    class="rounded-2xl h-auto"
                    src={imageSrc}
                    alt={imageAlt}
                    in:fly={{ delay: 0, duration: 700, x: -100, opacity: 0.5, easing: quintOut }}
                />
               
            {/if}
        </div>
    </div>

    <div
				class="wrapper"
				use:inview={{ unobserveOnEnter: true, rootMargin: '0%' }}
				on:change={({ detail }) => {
					isInView = detail.inView;
				}}
			>
        {#if isInView}
            <article class="mx-5">
                <h1 class="text-3xl" in:fade={{ delay: 800, duration: 500 }}>{heading}</h1>
                <p class="text-2xl text-left mt-5" in:fade={{ delay: 1200, duration: 500 }}>
                    {text}
                </p>
            </article>
        {/if}
    </div>
</div>