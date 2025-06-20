<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let title = '';
	let content = '';
	let song = '';

	const songs = [
		'선물',
		'고백',
		'사랑인가 봐',
		'찬란한 하루',
		'부끄럼',
		'짙어져',
		'인사',
		'하나',
		'축제',
		'You',
		'동화',
		'고양이'
	];

	export let open = false;

	function handleSubmit() {
		if (!title || !content || !song) return;
		dispatch('submit', { title, content, song });
		title = '';
		content = '';
		song = '';
	}
</script>

{#if open}
	<div class="modal modal-open">
		<div class="modal-box bg-base-200 text-base-content">
			<h3 class="font-bold text-lg mb-2">✍️ 사연 등록</h3>
			<div class="form-control mb-2">
				<label class="label">
					<span class="label-text">제목</span>
				</label>
				<input bind:value={title} class="input input-bordered" />
			</div>
			<div class="form-control mb-2">
				<label class="label">
					<span class="label-text">내용</span>
				</label>
				<textarea bind:value={content} class="textarea textarea-bordered" rows="4" />
			</div>
			<div class="form-control mb-4">
				<label class="label">
					<span class="label-text">노래 선택</span>
				</label>
				<select bind:value={song} class="select select-bordered">
					<option value="" disabled selected>노래를 선택하세요</option>
					{#each songs as s}
						<option value={s}>{s}</option>
					{/each}
				</select>
			</div>
			<div class="modal-action">
				<button on:click={handleSubmit} class="btn btn-primary">등록</button>
				<button on:click={() => dispatch('close')} class="btn">취소</button>
			</div>
		</div>
	</div>
{/if}
