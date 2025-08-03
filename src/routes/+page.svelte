<script>
	import Ticket from '$components/Ticket.svelte';

	const tickets = Array.from({ length: 9 }, (_, i) => ({
		song: '고백',
		location: '서울시 강서구',
		image:
			'https://images.unsplash.com/photo-1464376810568-596bdd5a1897?q=80&w=2284&auto=format&fit=crop&ixlib=rb-4.1.0',
		emotion: '💞 설렘',
		comment: '지하철에서 듣기 너무 좋은 노래였다.',
		datetime: '2025.08.03 14:00',
		nickname: 'SEOHEY'
	}));
</script>

<div class="container">
	{#each tickets as ticket}
		<Ticket {...ticket} />
	{/each}
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
