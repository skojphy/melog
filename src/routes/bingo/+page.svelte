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

	let cells: { label: string; checked: boolean }[] = labelsToCells(DEFAULT_BINGO_LABELS);
	let title = '멜로버 빙고';
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

<div class="bingo-page">
	<div class="bingo-container">
		<header class="bingo-header">
			<div class="bingo-header-inner">
				<h1 class="bingo-title">{title}</h1>
				<div class="bingo-stats">
					<div class="bingo-progress-label">라인 <b>{lines}</b> / 진행률 <b>{progress}%</b></div>
					<button class="bingo-btn" on:click={resetBoard}>초기화</button>
				</div>
			</div>
			<progress class="bingo-progress" value={progress} max="100"></progress>
		</header>
		<main class="bingo-main">
			<section aria-label="빙고 보드" class="bingo-grid">
				{#each matrix as row, r}
					{#each row as cell, c}
						{#key r * 5 + c}
							<button
								class="bingo-cell {cell.checked ? 'checked' : ''}"
								aria-pressed={cell.checked}
								on:click={() => toggle(r * 5 + c)}
							>
								<span class="bingo-label">{cell.label}</span>
							</button>
						{/key}
					{/each}
				{/each}
			</section>
		</main>
	</div>
</div>

<style>
	.bingo-page {
		background-color: #fff;
		min-height: 100vh;
		padding: 1rem;
	}

	.bingo-container {
		max-width: 768px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.bingo-header {
		position: sticky;
		top: 0;
		background: rgba(255, 255, 255, 0.8);
		backdrop-filter: blur(4px);
		z-index: 10;
		padding: 0.75rem;
		border-bottom: 1px solid #e5e7eb;
		border-radius: 0.5rem;
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
	}

	.bingo-header-inner {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 0.75rem;
	}

	.bingo-title {
		font-size: 1.25rem;
		font-weight: 600;
		flex: 1;
		text-align: center;
	}

	.bingo-stats {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		font-size: 0.875rem;
		opacity: 0.8;
	}

	.bingo-btn {
		padding: 0.25rem 0.75rem;
		font-weight: 600;
		background-color: #f3f4f6;
		border: 1px solid #d1d5db;
		border-radius: 0.5rem;
		cursor: pointer;
	}

	.bingo-btn:hover {
		background-color: #e5e7eb;
	}

	.bingo-progress {
		width: 100%;
		margin-top: 0.5rem;
		height: 0.5rem;
		border-radius: 0.5rem;
		background-color: #e0f2fe;
		appearance: none;
	}

	.bingo-progress::-webkit-progress-value {
		background-color: #3b82f6;
		border-radius: 0.5rem;
	}

	.bingo-progress::-moz-progress-bar {
		background-color: #3b82f6;
		border-radius: 0.5rem;
	}

	.bingo-main {
		display: grid;
		gap: 1rem;
	}

	.bingo-grid {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 0.5rem;
	}

	.bingo-cell {
		aspect-ratio: 1 / 1;
		border: 1px solid #d1d5db;
		border-radius: 0.75rem;
		padding: 0.5rem;
		font-size: 0.875rem;
		background-color: #f9fafb;
		color: #111827;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		user-select: none;
		transition: transform 0.1s ease;
	}

	.bingo-cell:hover {
		border-color: rgba(59, 130, 246, 0.7);
	}

	.bingo-cell:active {
		transform: scale(0.98);
	}

	.bingo-cell.checked {
		background-color: #3b82f6;
		color: white;
		border-color: #3b82f6;
	}

	.bingo-label {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>
