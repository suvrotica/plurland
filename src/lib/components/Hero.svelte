<script lang="ts">
    import { fade } from 'svelte/transition';
    import { onMount } from "svelte";

    // Array of hero images
    const heroImages: string[] = [
        "/images/m1.png",
        "/images/m2.png",
        "/images/m3.png",
        "/images/fm1.png",
        "/images/fm2.png",
        "/images/k1.png"
    ];

    let currentImageIndex = 0;

    // Reactive variable to detect portrait mode
    let isPortrait = false;

    // Function to update orientation
    const updateOrientation = () => {
        isPortrait = window.matchMedia("(orientation: portrait)").matches;
    };

    // Set up interval for image switching and detect orientation changes
    onMount(() => {
        updateOrientation(); // Initial check
        window.addEventListener("resize", updateOrientation);

        // Switch images every 5 seconds
        const interval = setInterval(() => {
            currentImageIndex = (currentImageIndex + 1) % heroImages.length;
        }, 5000);

        return () => {
            window.removeEventListener("resize", updateOrientation);
            clearInterval(interval); // Cleanup interval
        };
    });
</script>

<section class="hero">
    {#if isPortrait}
        <!-- Portrait mode: Only display text -->
        <div class="hero-text">
            <h1>Welcome to <span>PLUR Marketplace</span></h1>
            <h2>Your One-Stop Shop for Fashion</h2>
            <p>
                Discover the latest trends for men, women, and kids at our multi-branch
                store. From trendy styles to timeless classics, we’ve got something for everyone.
            </p>
            <button class="cta-button">Explore Now</button>
        </div>
    {:else}
        <!-- Landscape mode: Display text and rotating images -->
        <div class="hero-content">
            <div class="hero-text">
                <h1>Welcome to <span>PLUR Marketplace</span></h1>
                <h2>Your One-Stop Shop for Fashion</h2>
                <p>
                    Discover the latest trends for men, women, and kids at our multi-branch
                    store. From trendy styles to timeless classics, we’ve got something for everyone.
                </p>
                <button class="cta-button">Explore Now</button>
            </div>
            <div class="hero-image">
                {#each heroImages as image, i (image)}
                    {#if i === currentImageIndex}
                        <img
                            src={image}
                            alt="PLUR Marketplace"
                            class="fade-image"
                            transition:fade
                        />
                    {/if}
                {/each}
            </div>
        </div>
    {/if}
</section>

<style>
    .hero {
        padding: 2rem;
        background: linear-gradient(120deg, #f9f9f9, #f0f0f0);
    }

    .hero-content {
        display: grid;
        grid-template-columns: 1fr 1fr; /* Text and image side-by-side */
        gap: 2rem;
        align-items: center;
    }

    .hero-text {
        text-align: left;
    }

    .hero-text h1 {
        font-size: 2.5rem;
        color: #333;
        margin-bottom: 0.75rem;
    }

    .hero-text h1 span {
        color: #333;
        font-weight: bold;
    }

    .hero-text h2 {
        font-size: 1.75rem;
        color: #555;
        margin-bottom: 1rem;
    }

    .hero-text p {
        font-size: 1.125rem;
        color: #666;
        margin-bottom: 1.5rem;
        line-height: 1.8;
    }

    .cta-button {
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
        background-color: #333;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    .cta-button:hover {
        background-color: #444;
    }

    .hero-image {
        display: flex;
        justify-content: center;
        align-items: center;
         
    }

    .hero-image img {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
        object-fit: contain;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        transition: opacity 3.5s ease-in-out; /* Smoother transition with longer duration and easing */
        opacity: 0; /* Default state is hidden */
    }

    

    .hero-image img.fade-image {
    opacity: 1; /* Fade-in effect */
    }


    /* Portrait mode adjustments */
    @media (max-width: 768px) and (orientation: portrait) {
        .hero {
            text-align: center; /* Center-align text for portrait mode */
        }
    }

    /* Tablet and larger screens */
    @media (min-width: 768px) {
        .hero-content {
            grid-template-columns: 1fr 1fr;
        }
    }
</style>
