<script>
    import Navbar from "./Navbar.svelte";
    import Footer from "./Footer.svelte";
    let { children } = $props();
</script>

<div class="layout">
    <Navbar />
    <main>{@render children()}</main>
    <Footer />
</div>

<style>
    .layout {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    main {
        flex: 1;
        padding: 2rem;
    }
</style>
