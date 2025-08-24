<script lang="ts">
	import type {
		AnswerMap,
		AxesResult,
		AxisScore,
		SocialAxis,
		FocusAxis,
		TypeInfo,
		VibeAxis
	} from '$lib/types';
	import { questions } from '$lib/data/questions';
	import { TYPE_MAP } from '$lib/data/typeMap';
	import Card from '../../components/melbti/Card.svelte';

	let answers: AnswerMap = {};
	let submitted = false;
	let result: { axes: AxesResult; type?: TypeInfo; key: string } | null = null;
	let currentQuestion = 1;

	const isComplete = () =>
		questions.every(
			(q) => answers[q.id] !== undefined && answers[q.id] !== null && answers[q.id] !== ''
		);

	const scoreAxes = (): AxesResult => {
		const axisScore: AxisScore = {
			social: { solo: 0, group: 0 },
			focus: { lyrics: 0, melody: 0 },
			vibe: { ballad: 0, upbeat: 0 }
		};

		questions.forEach((question) => {
			const a = answers[question.id];
			if (!a) return;
			if (question.axis === 'social') {
				if (a === 'solo') axisScore.social.solo += 1;
				else if (a === 'group') axisScore.social.group += 1;
			} else if (question.axis === 'focus') {
				if (a === 'lyrics') axisScore.focus.lyrics += 1;
				else if (a === 'melody') axisScore.focus.melody += 1;
			} else if (question.axis === 'vibe') {
				if (a === 'ballad') axisScore.vibe.ballad += 1;
				else if (a === 'upbeat') axisScore.vibe.upbeat += 1;
			}
		});

		const social: SocialAxis = axisScore.social.solo > axisScore.social.group ? 'solo' : 'group';
		const focus: FocusAxis = axisScore.focus.lyrics > axisScore.focus.melody ? 'lyrics' : 'melody';
		const vibe: VibeAxis = axisScore.vibe.ballad > axisScore.vibe.upbeat ? 'ballad' : 'upbeat';

		return { social, focus, vibe, raw: axisScore };
	};

	const onSubmit = () => {
		const s = scoreAxes();
		const key = `${s.social}-${s.focus}-${s.vibe}`;
		result = { axes: s, type: TYPE_MAP[key], key };
		submitted = true;
		setTimeout(() => {
			const el = document.getElementById('melbti-result');
			if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}, 0);
	};

	const reset = () => {
		answers = {};
		submitted = false;
		result = null;
		currentQuestion = 1;
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
</script>

<div class="melbti-page">
	<div class="container max-w-3xl mx-auto px-5 pb-20">
		<div class="hero bg-base-200 rounded-2xl shadow-md mb-4">
			<div class="hero-content flex gap-3">
				<div class="avatar placeholder">
					<div class="bg-neutral text-neutral-content rounded-full w-14">
						<span>BTI</span>
					</div>
				</div>
				<div>
					<h1 class="text-2xl font-extrabold mb-1">멜BTI</h1>
					<p class="text-base-content/70">
						나를 더 잘 설명하는 문장을 선택하고 나의 멜BTI를 알아보세요.
					</p>
				</div>
			</div>
		</div>

		{#if !submitted}
			{#if currentQuestion <= questions.length}
				{#key questions[currentQuestion - 1].id}
					<Card
						question={questions[currentQuestion - 1]}
						value={answers[questions[currentQuestion - 1].id]}
						onAnswer={(val) => {
							const q = questions[currentQuestion - 1];
							answers = { ...answers, [q.id]: val };
							if (currentQuestion < questions.length) {
								currentQuestion += 1;
							} else {
								currentQuestion += 1;
							}
						}}
					/>
				{/key}
			{:else}
				<div
					class="sticky bottom-0 bg-base-100/90 backdrop-blur pt-4 mt-6 border-t border-base-200"
				>
					<button class="btn btn-primary w-full" disabled={!isComplete()} onclick={onSubmit}
						>결과 보기</button
					>
				</div>
			{/if}
		{:else}
			<section id="melbti-result" class="card border border-primary bg-base-100">
				<div class="card-body">
					{#if result?.type}
						<div class="flex items-center gap-3 mb-3">
							<div class="avatar">
								<div
									class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
								></div>
							</div>
							<div>
								<div class="text-lg font-extrabold">{result.type.name}</div>
								<div class="text-xs text-base-content/60">{result.key.toUpperCase()}</div>
							</div>
						</div>

						<p class="overview">{result.type.description}</p>
						<div>
							<span class="badge badge-outline mr-1"
								>{result.axes.social === 'solo' ? '혼자형' : '함께형'}</span
							>
							<span class="badge badge-outline mr-1"
								>{result.axes.focus === 'lyrics' ? '가사형' : '멜로디형'}</span
							>
							<span class="badge badge-outline mr-1"
								>{result.axes.vibe === 'ballad' ? '발라드형' : '경쾌형'}</span
							>
						</div>
						{#if result.type.examples?.length}
							<div class="mt-2 text-base-content/80">
								추천곡 예시: {result.type.examples.join(', ')}
							</div>
						{/if}
					{:else}
						<p>유형을 계산하는 데 문제가 발생했어요. 다시 시도해 주세요.</p>
					{/if}
					<div style="margin-top:12px; display:flex; gap:8px;">
						<button class="btn btn-neutral" onclick={reset}>다시 하기</button>
					</div>
				</div>
			</section>
		{/if}
	</div>
</div>

<style>
	.melbti-page {
		background: linear-gradient(135deg, #fde2e4 0%, #fff5f5 40%, #ffffff 100%);
		min-height: 100vh;
	}
	.container {
		position: relative;
	}
</style>
