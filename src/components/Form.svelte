<script lang="ts">
	export let onClose: () => void;
	export let onSubmit: (ticket: any) => void;

	let title = '';
	let location = '';
	let emotion = '';
	let comment = '';

	const handleSubmit = () => {
		const newTicket = {
			song: title,
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
			<label for="title">노래 제목</label>
			<input id="title" name="title" type="text" required bind:value={title} />

			<label for="location">장소</label>
			<input id="location" name="location" type="text" required bind:value={location} />

			<label for="emotion">감정</label>
			<input id="emotion" name="emotion" type="text" required bind:value={emotion} />

			<label for="comment">감상</label>
			<textarea id="comment" name="comment" rows="4" bind:value={comment}></textarea>

			<div class="form-buttons">
				<button type="submit">기록</button>
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
		padding: 2rem;
		border-radius: 8px;
		min-width: 300px;
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
		margin-bottom: 1rem;
		padding: 0.4rem;
		font-size: 1rem;
	}

	label {
		font-weight: bold;
	}
</style>
