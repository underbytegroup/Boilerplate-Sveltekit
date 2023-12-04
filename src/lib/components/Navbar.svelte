<script>
	import { page } from '$app/stores';

	const navItem = [
		{ name: 'Home', route: '/' },
		{ name: 'Example', route: '/Example' }
	];
	$: activeUrl = $page.url.pathname;
</script>

<nav class="flex justify-between mx-auto p-4 text-xl">
	<h1>Svelte Flowbite</h1>
	<ul class="flex gap-4">
		{#each navItem as { name, route }}
			<li class={`${activeUrl === route ? 'text-orange-500' : ''}`}>
				<a href={route} rel="noopener noreferrer"> {name}</a>
			</li>
		{/each}
	</ul>
</nav>
