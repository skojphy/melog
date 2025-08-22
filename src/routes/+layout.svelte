<script lang="ts">
	import favicon from '$lib/assets/melog_icon.svg';
	import Form from '$components/Form.svelte';
	import { writable } from 'svelte/store';

	const showForm = writable(false);
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="robots" content="noindex, nofollow" />
	<!-- TODO: 제거 -->
</svelte:head>

<div class="page-container">
	<header class="melog-header">
		<h1>melog</h1>
		<p class="subtitle">멜로망스로 물든 감정의 기록</p>
		<button onclick={() => showForm.set(true)} class="record-button">기록하기</button>
	</header>

	<main>
		{@render children?.()}
		{#if $showForm}
			<Form onClose={() => showForm.set(false)} onSubmit={() => showForm.set(false)} />
		{/if}
	</main>

	<footer class="melog-footer">
		<p>© {new Date().getFullYear()} seohey. All Rights Reserved.</p>
		<div class="footer-icons">
			<a href="mailto:seohey@kakao.com" aria-label="Email">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
					><g
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						><rect width="18.5" height="15.5" x="2.75" y="4.25" rx="3" /><path
							d="m2.75 8l8.415 3.866a2 2 0 0 0 1.67 0L21.25 8"
						/></g
					></svg
				>
			</a>
			<a
				href="https://www.instagram.com/hyeon___seo"
				target="_blank"
				rel="noopener"
				aria-label="Instagram"
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
					><g fill="none"
						><rect
							width="17"
							height="17"
							x="3.5"
							y="3.5"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							rx="5.5"
						/><circle
							cx="12"
							cy="12"
							r="3.606"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
						/><circle cx="16.894" cy="7.106" r="1.03" fill="currentColor" /></g
					></svg
				>
			</a>
			<a href="https://github.com/skojphy" target="_blank" rel="noopener" aria-label="GitHub">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
					><g
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						><path
							d="M9.096 21.25v-3.146a3.33 3.33 0 0 1 .758-2.115c-3.005-.4-5.28-1.859-5.28-5.798c0-1.666 1.432-3.89 1.432-3.89c-.514-1.13-.5-3.084.06-3.551c0 0 1.95.175 3.847 1.75c1.838-.495 3.764-.554 5.661 0c1.897-1.575 3.848-1.75 3.848-1.75c.558.467.573 2.422.06 3.551c0 0 1.432 2.224 1.432 3.89c0 3.94-2.276 5.398-5.28 5.798a3.33 3.33 0 0 1 .757 2.115v3.146"
						/><path
							d="M3.086 16.57c.163.554.463 1.066.878 1.496c.414.431.932.77 1.513.988a4.46 4.46 0 0 0 3.62-.216"
						/></g
					></svg
				>
			</a>
		</div>
	</footer>
</div>

<style>
	:global(body) {
		font-family: 'Courier New', Courier, monospace;
		letter-spacing: 0.04em;
		background-color: #fff;
		color: #000;
		margin: 0;
	}

	.melog-header {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.5rem 1rem;
		background: linear-gradient(to right, #ffe3ec, #e6f0ff);
		border-bottom: 1px solid #ddd;
	}

	.melog-header h1 {
		font-size: 1rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		display: inline-block;
		padding: 0.3em 1em;
		border-top: none;
		border-bottom: none;
		margin: 0;
	}

	.melog-header .subtitle {
		display: inline;
		margin-left: 0.5rem;
		font-size: 0.8rem;
		color: #999;
	}

	.record-button {
		margin: 0 0 0 0.5rem;
		background-color: #000;
		color: #fff;
		padding: 0.3rem 0.8rem;
		border: none;
		border-radius: 4px;
		font-family: inherit;
		font-size: 0.9rem;
		cursor: pointer;
	}

	.record-button:hover {
		background-color: #333;
	}

	.page-container {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		padding: 2rem 1rem;
		display: flex;
		justify-content: center;
		flex: 1;
	}

	.melog-footer {
		text-align: center;
		font-size: 0.9rem;
		color: #222;
		font-family: 'Courier New', Courier, monospace;
		letter-spacing: 0.04em;
		padding-bottom: 0.5rem;
		background-color: #f5f5f5;
	}

	.footer-icons {
		margin-top: 1rem;
		display: flex;
		justify-content: center;
		gap: 1.2rem;
	}

	.footer-icons a {
		color: #222;
		text-decoration: none;
		transition: color 0.2s;
	}

	.footer-icons a:hover {
		color: rgb(0, 255, 157);
	}

	.footer-icons svg {
		fill: currentColor;
	}
</style>
