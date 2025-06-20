<script lang="ts">
	// 사연 등록 모달 (기존 그대로 사용)
	import WriteModal from '$lib/components/WriteModal.svelte';

	let showModal = false;

	/* 카드 색상 팔레트(톤다운 뉴트럴) */
	const cardColors = [
		'#EFEDE9', // 라이트 베이지
		'#F4F0EA', // 웜 화이트
		'#E7E1D9', // 토프
		'#F0ECE4', // 페일 그레이시 베이지
		'#F8F5F0' // 거의 화이트
	];

	/* 기본 샘플 사연 */
	let sampleStories = [
		{
			id: 1,
			song: '선물',
			content:
				'‘선물’을 듣는 순간, 오늘 하루가 조금은 괜찮아졌어요. 마치 그 순간만큼은 내가 보호받고 있다는 기분이 들었달까...'
		},
		{
			id: 2,
			song: '고백',
			content:
				'‘고백’을 들으며 밤길을 걸었어요. 나 자신에게 조금 더 솔직해지고 싶었던 날이었거든요.'
		},
		{
			id: 3,
			song: '사랑인가 봐',
			content:
				'비 오는 날 ‘사랑인가 봐’가 흘러나오자 눈물이 왈칵… 이유는 모르겠지만 마음이 정화됐어요.'
		},
		{
			id: 4,
			song: '찬란한 하루',
			content: '‘찬란한 하루’를 들으며 처음으로 나를 토닥였어요. 언젠가 웃으며 떠올릴 수 있을까요?'
		}
	].map((s) => ({
		...s,
		color: cardColors[Math.floor(Math.random() * cardColors.length)]
	}));

	/* 모달에서 사연 제출 시 호출 */
	function handleAddStory(event) {
		const { title, content, song } = event.detail;
		const newStory = {
			id: Date.now(),
			song,
			content,
			color: cardColors[Math.floor(Math.random() * cardColors.length)]
		};
		sampleStories = [newStory, ...sampleStories];
		showModal = false;
	}
</script>

<!-- 사연 등록 모달 -->
<WriteModal open={showModal} on:submit={handleAddStory} on:close={() => (showModal = false)} />

<!-- 배경 & 본문 -->
<div class="min-h-screen bg-[#f7f5f2] text-base-content px-4 py-14 font-sans">
	<header class="text-center mb-16">
		<h1 class="text-4xl md:text-5xl font-bold tracking-tight">Melog</h1>
		<p class="mt-2 text-base md:text-lg text-primary italic">멜로망스가 위로가 된 순간들</p>
	</header>

	<!-- 폴라로이드 카드 그리드 -->
	<section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
		{#each sampleStories as story}
			<!-- 폴라로이드 카드 -->
			<div
				class="w-full max-w-xs mx-auto rounded-lg shadow-md p-6 flex flex-col"
				style="background:{story.color}"
			>
				<!-- 노래 제목 -->
				<p class="text-[11px] text-gray-600 tracking-widest uppercase mb-4">
					🎵&nbsp;{story.song}
				</p>

				<!-- 이미지 영역 : 무드·앨범커버·placeholder -->
				<div
					class="aspect-square bg-gray-200/40 rounded-md mb-4 flex items-center justify-center text-3xl text-gray-400"
				>
					📷
				</div>

				<!-- 짧은 사연 -->
				<p class="text-sm leading-relaxed text-gray-700 whitespace-pre-wrap line-clamp-6">
					{story.content}
				</p>
			</div>
		{/each}
	</section>

	<!-- 사연 쓰기 버튼 -->
	<div class="text-center mt-16">
		<button
			class="btn btn-primary btn-wide rounded-full text-white"
			on:click={() => (showModal = true)}
		>
			✍️ 사연 쓰러 가기
		</button>
	</div>
</div>

<style>
	/* line-clamp 플러그인이 없다면 간단히 overflow 처리 */
	.line-clamp-6 {
		display: -webkit-box;
		-webkit-line-clamp: 6;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>
