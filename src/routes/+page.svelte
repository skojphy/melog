<script>
	import WriteModal from '$lib/components/WriteModal.svelte';

	let showModal = false;

	const sampleStories = [
		{
			id: 1,
			title: '퇴근길 버스 창가에서',
			content:
				'‘선물’을 듣는 순간, 오늘 하루가 조금은 괜찮아졌어요. 마치 그 순간만큼은 내가 보호받고 있다는 기분이 들었달까...'
		},
		{
			id: 2,
			title: '혼자 걷는 밤',
			content:
				'‘고백’이 이어폰에서 흘러나오는데, 용기가 났어요. 괜히 눈물이 났지만 그게 나쁘지 않았어요.'
		},
		{
			id: 3,
			title: '비 오는 날의 위로',
			content: '‘사랑인가 봐’ 덕분에 울컥한 감정을 안고 잠들었어요.'
		},
		{
			id: 4,
			title: '책상 앞에서',
			content: '‘찬란한 하루’라는 노래가 흐르고 있었고, 나는 그날 처음으로 나 자신을 토닥였어요.'
		}
	];
</script>

<WriteModal open={showModal} onClose={() => (showModal = false)} />

<div class="min-h-screen bg-base-100 text-base-content px-4 py-12 font-sans">
	<!-- Header -->
	<header class="text-center mb-16">
		<h1 class="text-4xl md:text-5xl font-bold tracking-tight">Melog</h1>
		<p class="mt-2 text-base md:text-lg text-primary italic">멜로망스가 위로가 된 순간들</p>
	</header>

	<!-- Cards -->
	<section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
		{#each sampleStories as story}
			<div
				class="card border border-base-300 shadow-sm hover:shadow-md transition duration-300 bg-base-100 rounded-xl h-full"
			>
				<div class="card-body p-6">
					<h2 class="text-lg font-semibold text-primary">{story.title}</h2>
					<p class="text-sm text-base-content mt-2 leading-relaxed line-clamp-5">{story.content}</p>
				</div>
			</div>
		{/each}
	</section>

	<!-- Button -->
	<div class="text-center mt-16">
		<button
			on:click={() => (showModal = true)}
			class="btn btn-primary btn-wide rounded-full text-white"
		>
			✍️ 사연 쓰러 가기
		</button>
	</div>
</div>
