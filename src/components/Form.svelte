<script lang="ts">
	export let onClose: () => void;
	export let onSubmit: (ticket: any) => void;

	let location = '';
	let emotion = '';
	let comment = '';

	let query = '';
	let searchResults: { title: string }[] = [];
	let selectedSong = '';
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
			song: selectedSong,
			location,
			emotion,
			comment,
			image:
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
			<input
				id="title"
				name="title"
				type="text"
				bind:value={query}
				placeholder="노래 제목 입력"
				oninput={handleSearch}
			/>

			{#if searching}
				<p>검색 중...</p>
			{:else if searchResults.length > 0}
				<select bind:value={selectedSong} required>
					<option value="" disabled selected>노래를 선택하세요</option>
					{#each searchResults as song}
						<option value={song.title}>{song.title}</option>
					{/each}
				</select>
			{:else if query}
				<p>검색 결과 없음</p>
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

	select {
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
		appearance: none;
		background-image: url("data:image/svg+xml;utf8,<svg fill='gray' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>");
		background-repeat: no-repeat;
		background-position: right 1rem center;
		background-size: 1rem;
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
</style>
