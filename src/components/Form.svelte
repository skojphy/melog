<script lang="ts">
	import ScoreIcon from './icons/score.svelte';
	export let onClose: () => void;
	export let onSubmit: (ticket: any) => void;

	let location = '';
	let emotion = '';
	let comment = '';

	let query = '';
	let searchResults: { title: string; album: string; image_url: string }[] = [];
	let selectedSong: { title: string; album: string; image_url: string; id: number } | null = null;
	let searching = false;

	const handleSearch = async () => {
		if (!query.trim()) {
			searchResults = [];
			return;
		}
		searching = true;
		const res = await fetch(`/api/searchSong?q=${encodeURIComponent(query)}`);
		const result = await res.json();
		searchResults = result?.data || [];
		searching = false;
	};

	const handleSubmit = () => {
		const newTicket = {
			song: selectedSong?.title || '',
			songId: selectedSong?.id || '',
			location,
			emotion,
			comment,
			image:
				selectedSong?.image_url ||
				'https://images.unsplash.com/photo-1464376810568-596bdd5a1897?q=80&w=2284&auto=format&fit=crop&ixlib=rb-4.1.0',
			datetime: new Date().toISOString().slice(0, 16).replace('T', ' '),
			nickname: '🍀멜로버🍀'
		};
		onSubmit?.(newTicket);
		onClose();
	};
</script>

<div class="modal">
	<div class="modal-content">
		<h2>티켓 기록하기</h2>
		<form
			onsubmit={(e) => {
				e.preventDefault();
				handleSubmit();
			}}
		>
			<label for="title">노래 검색</label>
			<div class="search-container">
				<div class="search-box">
					<input
						type="text"
						class="search-input"
						placeholder="노래 제목을 검색하세요."
						bind:value={query}
						oninput={handleSearch}
					/>
				</div>

				{#if searchResults.length > 0}
					<div class="search-results">
						{#each searchResults as song}
							<button
								type="button"
								class="search-result-item"
								onclick={async () => {
									const res = await fetch(
										`/api/songDetail?title=${encodeURIComponent(song.title)}`
									);
									const result = await res.json();
									selectedSong = result?.data;
									query = '';
									searchResults = [];
								}}
							>
								<div class="icon-text-wrapper">
									<div class="score-icon">
										<ScoreIcon />
									</div>
									<span class="song-title">{song.title}</span>
								</div>
							</button>
						{/each}
					</div>
				{:else if query && searchResults.length === 0}
					<div class="search-results">
						<p class="search-result-item">검색 결과 없음</p>
					</div>
				{/if}
			</div>

			{#if selectedSong}
				<div class="song-preview">
					<img src={selectedSong.image_url} alt="cover" />
					<div>
						<p class="song-title">{selectedSong.title}</p>
						<p class="album-title">{selectedSong.album}</p>
					</div>
				</div>
			{/if}

			<label for="location">장소</label>
			<input id="location" name="location" type="text" required bind:value={location} />

			<label for="emotion">감정</label>
			<input id="emotion" name="emotion" type="text" required bind:value={emotion} />

			<label for="comment">감상</label>
			<textarea id="comment" name="comment" rows="4" bind:value={comment}></textarea>

			<div class="form-buttons">
				<button type="submit">기록하기</button>
				<button type="button" onclick={onClose}>닫기</button>
			</div>
		</form>
	</div>
</div>

<style>
	.modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.modal-content {
		background: white;
		border-radius: 10px;
		padding: 2.5rem 2rem;
		width: 80%;
		max-width: 500px;
		min-width: 300px;
		box-sizing: border-box;
		box-shadow:
			0 4px 16px rgba(0, 0, 0, 0.1),
			0 2px 8px rgba(0, 0, 0, 0.05);
		color: #333;
		border: none;
	}

	h2 {
		text-align: center;
		margin-bottom: 1.5rem;
		font-size: 1.6rem;
		color: #222;
		font-weight: 600;
	}

	.form-buttons {
		margin-top: 1rem;
		display: flex;
		gap: 1rem;
		justify-content: flex-end;
	}

	input,
	textarea {
		width: 100%;
		margin-bottom: 1.2rem;
		padding: 0.9rem 1rem;
		font-size: 0.95rem;
		border: none;
		background-color: #f8f8f8;
		color: #333;
		border-radius: 999px;
		outline: none;
		box-sizing: border-box;
		box-shadow: inset 0 0 0 1px #eee;
	}

	textarea {
		border-radius: 1rem;
		resize: none;
	}

	input::placeholder,
	textarea::placeholder {
		color: #bbb;
	}

	label {
		color: #777;
		font-size: 0.75rem;
		font-weight: 600;
		margin-bottom: 0.5rem;
		display: block;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}

	.form-buttons button {
		width: 100px;
		padding: 0.7rem;
		font-size: 0.95rem;
		cursor: pointer;
		transition: all 0.2s ease;
		border-radius: 999px;
		border: none;
		color: white;
		background: linear-gradient(to right, #faacae, #fbcdc1);
	}

	.form-buttons button:hover {
		filter: brightness(1.1);
	}

	.form-buttons button[type='button'] {
		background: #eee;
		color: #555;
	}

	.form-buttons button[type='button']:hover {
		background: #ddd;
	}

	.search-container {
		position: relative;
		margin-bottom: 1rem;
	}

	.search-box {
		border: none;
		border-radius: 6px;
	}

	.search-input {
		width: 100%;
		padding: 0.75rem 1rem;
		font-size: 0.95rem;
		border: none;
		outline: none;
		margin-bottom: 0;
	}

	.search-results {
		position: absolute;
		top: 100%;
		left: 0;
		right: 0;
		background: white;
		border: 1px solid #eee;
		max-height: 200px;
		overflow-y: auto;
		z-index: 10;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
	}

	.search-result-item {
		width: 100%;
		text-align: left;
		background: none;
		border: none;
		padding: 0.75rem 1rem;
		font-size: 0.95rem;
		cursor: pointer;
		transition: background 0.2s;
	}

	.search-result-item:hover {
		background: #f3f4f6;
	}

	.song-preview {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 1rem;
		background: #f8f8f8;
		border-radius: 1rem;
		padding: 0.8rem 1rem;
		box-shadow: inset 0 0 0 1px #eee;
	}

	.song-preview img {
		width: 60px;
		height: 60px;
		object-fit: cover;
		border-radius: 0.5rem;
	}

	.song-preview .song-title {
		font-weight: 600;
		color: #222;
		margin-bottom: 0.2rem;
	}

	.song-preview .album-title {
		color: #777;
		font-size: 0.85rem;
	}

	.icon-text-wrapper {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.score-icon {
		width: 1.25rem;
		height: 1.25rem;
		flex-shrink: 0;
	}

	.song-title {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
