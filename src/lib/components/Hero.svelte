<script lang="ts">
    import { fade } from 'svelte/transition';

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

    // Function to switch images
    setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % heroImages.length;
    }, 5000); // Switch images every 5 seconds
</script>

<section class="hero">
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
</section>

<style>
    .hero {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 200px;
        margin-bottom: 200px;
        padding: 2rem;
        background: linear-gradient(120deg, #f9f9f9, #f0f0f0);
    }

    .hero-content {
        display: flex;
        flex-wrap: wrap;
        max-width: 1200px;
        width: 100%;
        gap: 2rem;
        align-items: center;
    }

    .hero-text {
        flex: 1;
        min-width: 300px;
    }

    .hero-text h1 {
        font-size: 2.5rem;
        color: #333;
        margin-bottom: 0.5rem;
    }

    .hero-text h1 span {
        color: #333; 
        font-weight: bold;
    }

    .hero-text h2 {
        font-size: 1.5rem;
        color: #666;
        margin-bottom: 1rem;
    }

    .hero-text p {
        font-size: 1rem;
        color: #555;
        margin-bottom: 1.5rem;
        line-height: 1.6;
    }

    .cta-button {
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
        background-color: #333; 
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    .cta-button:hover {
        background-color: #444;
    }

    .hero-image {
        flex: 1;
        min-width: 300px;
        text-align: center;
        position: relative;
    }

    .fade-image {
        max-width: 100%;
        height: auto;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
    }
</style>
