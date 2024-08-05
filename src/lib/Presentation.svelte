<script lang="ts">
    import { fly } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import { inview } from 'svelte-inview';

    let isInView = false;

    // Exported variables for image data
    export let imageSrc = "images/aeondesktop.png"; // Default path
    export let imageAlt = "Gnome Desktop";

    // Exported variables for content
</script>

    <div class="mx-2 mt-10">
        <div
				class="wrapper"
				use:inview={{ unobserveOnEnter: false, rootMargin: '20%' }}
				on:change={({ detail }) => {
					isInView = detail.inView;
				}}
			>
            {#if isInView}
            <div class="">
                <img
                    class="rounded-2xl h-full w-full"
                    src={imageSrc}
                    alt={imageAlt}
                    in:fly={{ delay: 0, duration: 700, x: -100, opacity: 0.5, easing: quintOut }}
                />
            </div>
            {/if}
            {#if !isInView}
            <div class="opacity-0">
                <img
                    class="rounded-2xl h-full w-full"
                    src={imageSrc}
                    alt={imageAlt}
                    in:fly={{ delay: 0, duration: 700, x: -100, opacity: 0.5, easing: quintOut }}
                />
            </div>
           
            {/if}
           
        </div>
    </div>   
