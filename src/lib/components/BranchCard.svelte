<script lang="ts">
    export let branchName: string;
    export let address: string;
    export let image: string;
</script>

<div class="branch-card">
    <img src={image} alt={`Image of ${branchName}`} class="branch-image" />
    <div class="branch-info">
        <h3 class="branch-name">{branchName}</h3>
        <p class="branch-address">{address}</p>
    </div>
</div>

<style>
    .branch-card {
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 1rem;
        text-align: center;
        background-color: #fff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s, box-shadow 0.2s;
    }

    .branch-card:hover {
        transform: scale(1.02);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }

    .branch-image {
        width: 100%;
        max-width: 200px;
        height: auto;
        border-radius: 4px;
        margin-bottom: 1rem;
    }

    .branch-info {
        text-align: left;
    }

    .branch-name {
        font-size: 1.25rem;
        margin: 0;
        color: #333;
    }

    .branch-address {
        font-size: 1rem;
        color: #555;
    }
</style>
