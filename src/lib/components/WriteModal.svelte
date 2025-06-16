<script>
	export let open = false;
	export let onClose = () => {};

	let nickname = '';
	let song = '';
	let emotion = '';
	let content = '';

	const handleSubmit = () => {
		if (!content.trim()) {
			alert('사연 내용을 입력해주세요.');
			return;
		}

		console.log({ nickname, song, emotion, content });
		alert('감사합니다. 당신의 이야기가 등록되었습니다.');

		nickname = '';
		song = '';
		emotion = '';
		content = '';
		onClose();
	};
</script>

{#if open}
	<dialog class="modal modal-open z-50">
		<div
			class="modal-box p-0 rounded-2xl bg-base-200 text-base-content shadow-xl w-full max-w-2xl font-serif"
		>
			<div class="card bg-base-100 rounded-2xl">
				<div class="card-body p-8">
					<form method="dialog" class="absolute top-3 right-4">
						<button on:click={onClose} class="btn btn-sm btn-circle btn-ghost text-xl">✕</button>
					</form>

					<h3 class="card-title text-2xl font-[PlayfairDisplay] justify-center mb-6">
						💌 사연 남기기
					</h3>

					<div class="space-y-5">
						<div class="form-control">
							<label class="label"><span class="label-text">닉네임 (선택)</span></label>
							<input
								type="text"
								bind:value={nickname}
								class="input input-bordered w-full"
								placeholder="예: 조용한 리스너"
							/>
						</div>

						<div class="form-control">
							<label class="label"><span class="label-text">곡 제목 (선택)</span></label>
							<input
								type="text"
								bind:value={song}
								class="input input-bordered w-full"
								placeholder="예: 선물"
							/>
						</div>

						<div class="form-control">
							<label class="label"><span class="label-text">감정 태그 (선택)</span></label>
							<select bind:value={emotion} class="select select-bordered w-full">
								<option value="">선택하지 않음</option>
								<option value="위로">위로</option>
								<option value="용기">용기</option>
								<option value="그리움">그리움</option>
								<option value="행복">행복</option>
								<option value="눈물">눈물</option>
							</select>
						</div>

						<div class="form-control">
							<label class="label"><span class="label-text">사연 내용 *</span></label>
							<textarea
								bind:value={content}
								class="textarea textarea-bordered w-full resize-none"
								rows="5"
								placeholder="당신의 이야기를 자유롭게 남겨주세요."
							></textarea>
						</div>
					</div>

					<div class="mt-8 text-center">
						<button on:click={handleSubmit} class="btn btn-primary btn-wide rounded-full">
							등록하기
						</button>
					</div>
				</div>
			</div>
		</div>
	</dialog>
{/if}
