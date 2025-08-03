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
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
		gap: 1.5rem;
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		place-items: center;
	}
</style>
