<script>
	import Ticket from '$components/Ticket.svelte';

	const tickets = [
		{
			song: '고백',
			location: '서울시 강서구',
			image:
				'https://images.unsplash.com/photo-1464376810568-596bdd5a1897?q=80&w=2284&auto=format&fit=crop&ixlib=rb-4.1.0',
			emotion: '💞 설렘',
			comment: '지하철에서 듣기 너무 좋은 노래였다.',
			datetime: '2025.08.03 14:00',
			nickname: 'SEOHEY'
		},
		{
			song: '사랑인가 봐',
			location: '부산 해운대구',
			image:
				'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2284&auto=format&fit=crop&ixlib=rb-4.1.0',
			emotion: '🌊 평온',
			comment: '파도 소리랑 너무 잘 어울리는 곡이었다.',
			datetime: '2025.07.15 18:45',
			nickname: 'LOVELYDAY'
		},
		{
			song: '찬란한 하루',
			location: '제주도 서귀포시',
			image:
				'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2284&auto=format&fit=crop&ixlib=rb-4.1.0',
			emotion: '☀️ 희망',
			comment: '햇살이랑 함께 듣기 딱 좋은 멜로디!',
			datetime: '2025.06.30 10:15',
			nickname: 'SUNNYJ'
		},
		{
			song: '인사',
			location: '대전 중구',
			image:
				'https://images.unsplash.com/photo-1495433324511-bf8e92934d90?q=80&w=2284&auto=format&fit=crop&ixlib=rb-4.1.0',
			emotion: '🍂 쓸쓸함',
			comment: '작별 인사처럼 가슴에 남는 곡이었다.',
			datetime: '2025.08.01 22:10',
			nickname: 'NOSTALGIA'
		},
		{
			song: '선물',
			location: '서울시 마포구',
			image:
				'https://images.unsplash.com/photo-1483347756197-71ef80e95f73?q=80&w=2284&auto=format&fit=crop&ixlib=rb-4.1.0',
			emotion: '🎁 감사',
			comment: '지친 하루에 위로가 되었던 선물 같은 노래.',
			datetime: '2025.08.02 20:00',
			nickname: 'GRATEFULME'
		}
	];
</script>

<div class="container">
	{#each tickets as ticket}
		<Ticket {...ticket} />
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
