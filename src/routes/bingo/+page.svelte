<script lang="ts">
	import { onMount } from 'svelte';
	import {
		DEFAULT_BINGO_LABELS,
		STORAGE_KEY,
		labelsToCells,
		chunk,
		countLines,
		checkedCount
	} from '$lib/bingo/defaultTemplate';
	import '../../app.css';

	let cells: { label: string; checked: boolean }[] = labelsToCells(DEFAULT_BINGO_LABELS);
	let title = '멜로망스 빙고';
	let lines = 0;
	let progress = 0;

	const save = () => {
		try {
			localStorage.setItem(STORAGE_KEY, JSON.stringify({ title, cells }));
		} catch (e) {
			console.warn('localStorage save failed', e);
		}
	};

	const load = () => {
		try {
			const raw = localStorage.getItem(STORAGE_KEY);
			if (!raw) return;
			const data = JSON.parse(raw);
			if (Array.isArray(data?.cells) && data.cells.length === 25) {
				cells = data.cells.map((c, i) => ({
					label: DEFAULT_BINGO_LABELS[i],
					checked: !!c.checked
				}));
			}
			if (typeof data?.title === 'string') title = data.title;
		} catch (e) {
			console.warn('localStorage load failed', e);
		}
	};

	const recalc = () => {
		lines = countLines(cells);
		progress = Math.round((checkedCount(cells) / 25) * 100);
	};

	const toggle = (index: number) => {
		cells[index].checked = !cells[index].checked;
		recalc();
		save();
	};

	const resetBoard = () => {
		cells = labelsToCells(DEFAULT_BINGO_LABELS);
		recalc();
		save();
	};

	onMount(() => {
		load();
		recalc();
	});

	$: matrix = chunk(cells, 5);
</script>

<div class="max-w-3xl mx-auto p-4 space-y-6">
	<header class="sticky top-0 bg-base-100/80 backdrop-blur z-10 py-3 border-b">
		<div class="flex items-center justify-between gap-3">
			<h1 class="text-xl font-bold">{title}</h1>
			<div class="flex items-center gap-3">
				<div class="text-sm opacity-80">라인 <b>{lines}</b> / 진행률 <b>{progress}%</b></div>
				<button class="btn btn-sm" on:click={resetBoard}>초기화</button>
			</div>
		</div>
		<progress class="progress progress-primary w-full mt-2" value={progress} max="100"></progress>
	</header>

	<main class="grid grid-cols-1 gap-4">
		<section aria-label="빙고 보드" class="grid grid-cols-5 gap-2">
			{#each matrix as row, r}
				{#each row as cell, c}
					{#key r * 5 + c}
						<button
							class="aspect-square rounded-xl border p-2 text-sm flex items-center justify-center text-center select-none transition active:scale-[0.98] hover:border-primary/70 {cell.checked
								? 'bg-primary text-primary-content border-primary'
								: 'bg-base-100'}"
							aria-pressed={cell.checked}
							on:click={() => toggle(r * 5 + c)}
						>
							<span class="line-clamp-3">{cell.label}</span>
						</button>
					{/key}
				{/each}
			{/each}
		</section>
	</main>
</div>

<style>
	.line-clamp-3 {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>
