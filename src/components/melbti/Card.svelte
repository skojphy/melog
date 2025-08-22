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

<section
	class="card bg-white border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 rounded-xl px-6 py-4"
	aria-labelledby={`q-title-${question.id}`}
>
	<h2 class="text-xl sm:text-2xl font-bold mb-4" id={`q-title-${question.id}`}>
		{question.id}. {question.text}
	</h2>

	<div class="flex flex-col sm:flex-row gap-4 w-full">
		<!-- Left choice -->
		<label
			class={`w-full btn btn-lg font-semibold rounded-full border-2 ${value === question.leftChoice.value ? 'bg-primary text-white border-primary' : 'bg-white text-gray-800 border-gray-300'}`}
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
			class={`w-full btn btn-lg font-semibold rounded-full border-2 ${value === question.rightChoice.value ? 'bg-primary text-white border-primary' : 'bg-white text-gray-800 border-gray-300'}`}
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
	.card-title {
		line-height: 1.4;
	}
	.card:hover .card-title {
		text-decoration-color: currentColor;
	}
</style>
