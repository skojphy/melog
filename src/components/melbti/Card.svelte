<script lang="ts">
	import type { Question } from '$lib/types';

	export let question: Question;
	export let value: string | undefined;
	export let onAnswer: ((val: string) => void) | undefined;

	const onSelect = (val: string) => {
		onAnswer?.(val);
		setTimeout(() => {
			(document.activeElement as HTMLElement | null)?.blur?.();
		}, 0);
	};
</script>

<section class="melbti-card" aria-labelledby={`q-title-${question.id}`}>
	<h2 class="text-xl sm:text-2xl font-bold mb-4" id={`q-title-${question.id}`}>
		{question.id}. {question.text}
	</h2>

	<div class="flex flex-col sm:flex-row gap-4 w-full">
		<!-- Left choice -->
		<label
			class={`w-full ${value === question.leftChoice.value ? 'bg-pink-500 text-white border-pink-500' : ''}`}
		>
			<input
				type="radio"
				name={`q-${question.id}`}
				value={question.leftChoice.value}
				class="hidden"
				oninput={() => onSelect(question.leftChoice.value)}
				checked={value === question.leftChoice.value}
			/>
			{question.leftChoice.label}
		</label>

		<!-- Right choice -->
		<label
			class={`w-full ${value === question.rightChoice.value ? 'bg-pink-500 text-white border-pink-500' : ''}`}
		>
			<input
				type="radio"
				name={`q-${question.id}`}
				value={question.rightChoice.value}
				class="hidden"
				oninput={() => onSelect(question.rightChoice.value)}
				checked={value === question.rightChoice.value}
			/>
			{question.rightChoice.label}
		</label>
	</div>
</section>

<style>
	.melbti-card {
		background-color: #fff;
		border: 1px solid #ddd;
		border-radius: 1rem;
		padding: 1.5rem;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
		transition: box-shadow 0.2s ease;
		margin-bottom: 1rem;
	}

	.melbti-card:hover {
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
	}

	h2 {
		font-size: 1.25rem;
		font-weight: 700;
		margin-bottom: 1rem;
	}

	.melbti-card label {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.75rem 1rem;
		font-weight: 600;
		border-radius: 9999px;
		border: 2px solid #ccc;
		cursor: pointer;
		transition: all 0.2s ease;
		text-align: center;
		background-color: #fff;
	}

	.melbti-card label:hover {
		background-color: #f9f9f9;
	}
</style>
