<script>
	import Ticket from '$components/Ticket.svelte';
</script>

<div class="container">
	<Ticket />
	<Ticket />
	<Ticket />
	<Ticket />
	<Ticket />
	<Ticket />
	<Ticket />
	<Ticket />
	<Ticket />
</div>

<style>
	.container {
		column-count: 3;
		column-gap: 1.5rem;
		max-width: 1200px;
		margin: 0 auto;
	}

	.container :global(.ticket) {
		break-inside: avoid;
		margin-bottom: 1.5rem;
	}

	@media (max-width: 1024px) {
		.container {
			column-count: 2;
		}
	}

	@media (max-width: 640px) {
		.container {
			column-count: 1;
		}
	}
</style>
