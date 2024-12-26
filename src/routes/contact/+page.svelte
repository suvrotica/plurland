<script lang="ts">
    // Contact information
    const businessDetails = {
        whatsapp: "+917866862262" // WhatsApp number
    };

    function handleSubmit(event: Event) {
        event.preventDefault();

        const form = event.target as HTMLFormElement;
        const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

        // Construct the WhatsApp message
        const whatsappMessage = `Hello from PLUR Marketplace, I have a query: ${message}`;

        // Redirect to WhatsApp
        const whatsappUrl = `https://wa.me/${businessDetails.whatsapp.replace(
            /[^+\d]/g,
            ""
        )}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, "_blank");
    }
</script>

<section class="contact">
    <h1 class="heading">Send us a <span>WhatsApp</span></h1>

    <form class="contact-form" on:submit={handleSubmit}>
        <div class="form-group">
            <textarea id="message" name="message" required placeholder="Type your message here..." class="message-field"></textarea>
        </div>
        <button type="submit" class="send-button">Send WhatsApp</button>
    </form>
</section>

<style>
    .contact {
        padding: 2rem;
        max-width: 800px;
        margin: 0 auto;
        text-align: left;
    }

    .heading {
        font-size: 2rem;
        margin-bottom: 1rem;
        color: #333;
    }

    .heading span {
        font-weight: bold;
        color: #444 
    }

    .contact-form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .form-group {
        display: flex;
        flex-direction: column;
    }

    .message-field {
        width: 100%;
        padding: 1rem;
        font-size: 1rem;
        border: 1px solid #ddd;
        border-radius: 4px;
        resize: vertical;
        min-height: 150px;
    }

    .send-button {
        align-self: flex-start;
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
        color: #fff;
        background-color: #444; 
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.2s;
    }

    .send-button:hover {
        background-color: #333; 
    }
</style>
