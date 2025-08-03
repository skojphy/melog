<script>
	import Barcode0 from '$components/barcodes/Barcode0.svelte';
</script>

<div class="ticket --flex-column">
	<div class="top --flex-column">
		<div class="title">
			<svg
				class="rotating-icon"
				xmlns="http://www.w3.org/2000/svg"
				width="26"
				height="26"
				viewBox="0 0 48 48"
			>
				<defs>
					<mask id="ipTCd0">
						<g fill="none" stroke="#fff" stroke-width="3">
							<circle cx="24" cy="24" r="18" />
							<path stroke-linecap="round" d="M13 24c0-6.075 4.925-11 11-11" />
							<circle cx="24" cy="24" r="5" fill="#555555" />
						</g>
					</mask>
				</defs>
				<path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTCd0)" />
			</svg>
			<span class="song-title">고백</span>
		</div>
		<div class="location">
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
				<g
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1.3"
				>
					<path
						d="M13.618 21.367A2.37 2.37 0 0 1 12 22a2.37 2.37 0 0 1-1.617-.633C6.412 17.626 1.09 13.447 3.685 7.38C5.09 4.1 8.458 2 12.001 2s6.912 2.1 8.315 5.38c2.592 6.06-2.717 10.259-6.698 13.987"
					/>
					<path
						d="M9.388 7.831c.939-.548 1.758-.327 2.25.025c.202.144.303.216.362.216c.06 0 .16-.072.362-.216c.492-.352 1.311-.573 2.25-.025c1.232.72 1.51 3.094-1.33 5.097c-.542.381-.813.572-1.282.572s-.74-.19-1.281-.572C7.878 10.925 8.156 8.55 9.389 7.83"
					/>
				</g>
			</svg>
			<span>서울시 강서구</span>
		</div>
		<img
			src="https://images.unsplash.com/photo-1464376810568-596bdd5a1897?q=80&w=2284&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			alt="Melomance ticket"
		/>
		<div class="emotion">💞 설렘</div>
		<div class="comment">지하철에서 듣기 너무 좋은 노래였다.</div>
	</div>

	<div class="rip"></div>
	<div class="bottom">
		<div class="barcode-wrapper">
			<Barcode0 />
		</div>
		<div class="info-right">
			<div class="datetime">2025.08.03 14:00</div>
			<div class="submitted-by">SEOHEY</div>
		</div>
	</div>
</div>

<style>
	.ticket {
		display: flex;
		flex-direction: column;
		width: 260px;
		max-width: 260px;
		min-width: 0;
		filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.3));
	}

	.ticket .top,
	.ticket .bottom,
	.ticket .rip {
		background-color: #fff;
	}

	.ticket .top {
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
	}

	.ticket .bottom {
		display: flex;
		flex-direction: row;
		align-items: stretch;
		gap: 8px;
		padding: 10px 12px;
		border-bottom-right-radius: 5px;
		border-bottom-left-radius: 5px;
	}

	.ticket .bottom .info-right {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: center;
		width: auto;
	}

	.ticket .submitted-by {
		font-size: 12px;
		color: #666;
		text-align: left;
	}

	.ticket img {
		display: block;
		width: 100%;
		object-fit: cover;
		padding: 10px 0;
	}

	.ticket .title {
		padding: 18px 18px 6px;
		font-size: 16px;
		display: flex;
		align-items: center;
		gap: 6px;
	}

	.location {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: 4px;
		padding: 0 18px;
		font-size: 12px;
		color: #555;
		line-height: 1.4;
		margin: 0;
	}

	.ticket .datetime {
		font-size: 12px;
		color: #666;
		padding-bottom: 2px;
		text-align: left;
	}

	.ticket .emotion {
		padding: 0px 18px 6px;
		font-weight: bold;
		color: #333;
	}

	.ticket .comment {
		padding: 0 18px 18px;
		font-size: 13px;
		color: #444;
		line-height: 1.4;
		white-space: pre-line;
	}

	.ticket .rip {
		height: 20px;
		margin: 0 10px;
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAACCAYAAAB7Xa1eAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuOWwzfk4AAAAaSURBVBhXY5g7f97/2XPn/AcCBmSMQ+I/AwB2eyNBlrqzUQAAAABJRU5ErkJggg==);
		background-size: 4px 2px;
		background-repeat: repeat-x;
		background-position: center;
		position: relative;
		box-shadow:
			0 1px 0 0 #fff,
			0 -1px 0 0 #fff;
	}

	.ticket .rip:before,
	.ticket .rip:after {
		content: '';
		position: absolute;
		width: 20px;
		height: 20px;
		top: 50%;
		transform: translate(-50%, -50%) rotate(45deg);
		border: 5px solid transparent;
		border-top-color: #fff;
		border-right-color: #fff;
		border-radius: 50%;
		pointer-events: none;
	}

	.ticket .rip:before {
		left: -10px;
	}

	.ticket .rip:after {
		right: -40px;
		transform: translate(-50%, -50%) rotate(225deg);
	}

	.ticket .rotating-icon {
		display: flex;
		align-items: center;
		animation: rotate360 3s linear infinite;
		font-weight: normal;
	}

	@keyframes rotate360 {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	.song-title {
		font-weight: bold;
		font-size: 16px;
	}

	.barcode-wrapper {
		width: 43%;
		max-width: 150px;
		display: flex;
		align-items: center;
	}
</style>
