<script lang="ts">
    export let heroImage: string = "images/background_removed_image_zRIMna50TsCjq9ikT99k0w.png"; // Update this with your provided image path
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
            <img src={heroImage} alt="PLUR Marketplace" />
        </div>
    </div>
</section>

<style>
    .hero {
        display: flex;
        justify-content: center;
        align-items: center;
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
        color: #25d366; /* WhatsApp green for accent */
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
        background-color: #25d366; /* WhatsApp green */
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    .cta-button:hover {
        background-color: #1da851;
    }

    .hero-image {
        flex: 1;
        min-width: 300px;
        text-align: center;
    }

    .hero-image img {
        max-width: 100%;
        height: auto;
    }

    @media (max-width: 768px) {
        .hero-content {
            flex-direction: column;
        }

        .hero-text {
            text-align: center;
        }

        .cta-button {
            align-self: center;
        }
    }
</style>
