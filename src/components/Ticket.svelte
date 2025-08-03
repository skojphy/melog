<script>
	import Barcode0 from '$components/barcodes/Barcode0.svelte';
</script>

<div class="ticket --flex-column">
	<div class="top --flex-column">
		<div class="bandname -bold">melog</div>
		<div class="songName">고백</div>
		<img
			src="https://images.unsplash.com/photo-1464376810568-596bdd5a1897?q=80&w=2284&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			alt="Melomance ticket"
		/>
		<div class="deetz --flex-row-j!sb">
			<div class="event --flex-column">
				<div class="date">2025.08.03</div>
				<div class="location -bold">📍지하철 안</div>
			</div>
			<div class="price --flex-column">
				<div class="label">감정</div>
				<div class="cost -bold">💞 설렘</div>
			</div>
		</div>
	</div>

	<div class="rip"></div>
	<div class="bottom --flex-row-j!sb">
		<Barcode0 />
		<div class="submitted-by">seohey</div>
	</div>
</div>

<style>
	.ticket {
		display: block;
		width: 255px;
		filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.3));
		margin: 0 auto;
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
		align-items: center;
		justify-content: space-between;
		border-bottom-right-radius: 5px;
		border-bottom-left-radius: 5px;
		padding: 10px 18px;
	}

	.ticket .bandname,
	.ticket .songName,
	.ticket .deetz,
	.ticket .submitted-by {
		padding-left: 18px;
		padding-right: 18px;
	}

	.ticket .bandname {
		padding-top: 18px;
	}

	.ticket .deetz {
		padding-bottom: 18px;
	}

	.ticket img {
		display: block;
		width: 100%;
		object-fit: cover;
		padding: 18px 0;
	}

	.ticket .deetz {
		display: flex;
		justify-content: space-between;
		padding-bottom: 10px !important;
	}

	.ticket .event,
	.ticket .price {
		display: flex;
		flex-direction: column;
	}

	.ticket .label {
		font-size: 10px;
		text-transform: uppercase;
		color: #666;
	}

	.ticket .-bold {
		font-weight: bold;
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

	.ticket .submitted-by {
		font-size: 12px;
		color: #666;
		margin-left: auto;
	}
</style>
