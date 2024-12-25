<script lang="ts">
    interface SocialLink {
        name: string;
        href: string;
        icon: any;
    }

    import Instagram from "lucide-svelte/icons/instagram";
    import Phone from "lucide-svelte/icons/phone";

    let socialLinks: SocialLink[] = [
        {
            name: "WhatsApp",
            href: "https://wa.me/917866862262",
            icon: Phone
        },
        { 
            name: "Instagram", 
            href: "https://www.instagram.com/plurfashion___/profilecard/?igsh=ZW5zajRicGZuamZx", 
            icon: Instagram 
        }
    ];
</script>

<footer class="footer">
    <div class="footer-content">
        <div class="footer-logo">
            <a href="/">PLUR</a>
        </div>
        <div class="footer-info">
            <p>&copy; {new Date().getFullYear()} PLUR. All Rights Reserved.</p>
            <p>Your trusted multi-branch apparel and shoes shop.</p>
        </div>
        <ul class="social-links">
            {#each socialLinks as { name, href, icon }}
                <li>
                    <a href={href} target="_blank" rel="noopener" class="social-link">
                        <svelte:component this={icon} size={16} />
                        <span>{name}</span>
                    </a>
                </li>
            {/each}
        </ul>
    </div>
</footer>

<style>
    .footer {
        background-color: #222;
        color: #ccc;
        padding: 2rem 1rem;
        text-align: center;
    }

    .footer-logo a {
        font-size: 1.5rem;
        font-weight: bold;
        color: #fff;
        text-decoration: none;
    }

    .footer-info {
        margin: 1rem 0;
    }

    .social-links {
        list-style: none;
        padding: 0;
        display: flex;
        justify-content: center;
        gap: 1.5rem;
    }

    .social-link {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .social-links a {
        color: #fff;
        text-decoration: none;
        font-size: 1rem;
        transition: color 0.3s;
    }

    .social-links a:hover {
        color: #f0a500;
    }
</style>
