<header class="melog-header">
	<h1>melog</h1>
</header>

<nav class="melog-nav">
	<ul>
		<li><a href="/melog">melog</a></li>
		<li><a href="/bingo">bingo</a></li>
		<li><a href="/melbti">melbti</a></li>
	</ul>
</nav>

<slot />

<style>
	.melog-header {
		background-color: #ff5e99;
		color: white;
		padding: 1rem;
		text-align: center;
	}

	.melog-nav {
		background-color: #fff;
		border-bottom: 1px solid #ddd;
		padding: 0.5rem 1rem;
		text-align: center;
	}

	.melog-nav ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		justify-content: center;
		gap: 1rem;
	}

	.melog-nav a {
		text-decoration: none;
		color: #333;
		font-size: 0.9rem;
		font-weight: bold;
	}

	.melog-nav a:hover {
		color: #ff5e99;
	}
</style>
