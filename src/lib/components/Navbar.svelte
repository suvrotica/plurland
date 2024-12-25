<script lang="ts">
    interface NavLink {
        name: string;
        href: string;
    }

    let navLinks: NavLink[] = [
        { name: "Home", href: "/" },
        { name: "Branches", href: "/branches" },
        { name: "Contact", href: "/contact" }
    ];
</script>

<nav class="navbar">
    <div class="logo">
        <a href="/">PLUR</a>
    </div>
    <ul class="nav-links">
        {#each navLinks as { name, href }}
            <li><a href={href}>{name}</a></li>
        {/each}
    </ul>
</nav>

<style>
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
        background-color: #333;
        color: #fff;
    }

    .logo a {
        font-size: 1.5rem;
        font-weight: bold;
        color: #fff;
        text-decoration: none;
    }

    .nav-links {
        list-style: none;
        display: flex;
        gap: 1.5rem;
        margin: 0;
        padding: 0;
    }

    .nav-links li {
        margin: 0;
    }

    .nav-links a {
        color: #fff;
        text-decoration: none;
        font-size: 1rem;
        transition: color 0.3s;
    }

    .nav-links a:hover {
        color: #f0a500;
    }
</style>
