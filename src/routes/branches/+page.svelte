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
        padding: 2rem;
        text-align: center;
        background-color: #f9f9f9;
        border-radius: 8px;
        margin-bottom: 2rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .about h1 {
        font-size: 2rem;
        margin-bottom: 1rem;
        color: #333;
    }

    .about p {
        font-size: 1rem;
        color: #555;
        margin: 0.5rem 0;
    }

    .branches {
        padding: 2rem;
        text-align: center;
    }

    .branch-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1.5rem;
        margin-top: 2rem;
    }
</style>
