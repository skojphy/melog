<script lang="ts">
	import Ticket from '$components/Ticket.svelte';
	import { onMount } from 'svelte';

	type Ticket = {
		id: number;
		created_at: string;
		song_id: number;
		location: string;
		emotion: string;
		comment: string;
		nickname: string;
	};

	let tickets: Ticket[] = [];

	onMount(async () => {
		const res = await fetch('/api/tickets');
		const result = await res.json();

		if (result.data) {
			tickets = result.data;
		}
	});
</script>

<div class="container">
	{#each tickets as ticket}
		<Ticket
			songId={ticket.song_id}
			created_at={ticket.created_at}
			location={ticket.location}
			emotion={ticket.emotion}
			comment={ticket.comment}
			nickname={ticket.nickname}
		/>
	{/each}
</div>

<style>
	.container {
		column-count: 4;
		column-gap: 1.5rem;
		max-width: 1600px;
		margin: 0 auto;
	}

	.container :global(.ticket) {
		break-inside: avoid;
		margin-bottom: 1.5rem;
	}

	@media (max-width: 1280px) {
		.container {
			column-count: 3;
		}
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
