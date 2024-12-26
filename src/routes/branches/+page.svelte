<script lang="ts">
    import { about, branches } from "$lib/data/globals";
    import BranchCard from "../../lib/components/BranchCard.svelte";
</script>

<section class="about">
    <h1>{about.title}</h1>
    <p><strong>Partners:</strong> {about.partners}</p>
    <p><strong>Address:</strong> {about.address}</p>
    <p><strong>Contact:</strong> {about.contact}</p>
</section>

<section class="branches">
    <h2>Our Branches</h2>
    <div class="branch-list">
        {#each branches as branch (branch.id)}
            <BranchCard
                branchName={branch.name}
                address={branch.address}
                image={branch.image}
            />
        {/each}
    </div>
</section>

<style>
    .about {
        padding: 3rem;
        text-align: center;
        background-color: #f9f9f9;
        border-radius: 12px;
        margin-bottom: 2.5rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .about h1 {
        font-size: 2.5rem; /* Increased size for better prominence */
        margin-bottom: 1.5rem;
        color: #222; /* Slightly darker for better contrast */
        font-weight: 700;
    }

    .about p {
        font-size: 1.125rem; /* Slightly larger for readability */
        color: #444; /* Slightly darker shade */
        margin: 0.75rem 0;
        line-height: 1.6; /* Increased for better readability */
    }

    .about p strong {
        font-weight: 600; /* Bolder for emphasis */
        color: #222; /* Match with the heading */
    }

    .branches {
        padding: 2.5rem;
        text-align: center;
    }

    .branches h2 {
        font-size: 2rem; /* Increased size for the section heading */
        color: #333;
        font-weight: 700;
        margin-bottom: 2rem;
    }

    .branch-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Adjusted for better responsiveness */
        gap: 2rem; /* Increased gap for a cleaner layout */
        margin-top: 2rem;
    }

</style>
