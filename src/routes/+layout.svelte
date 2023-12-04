<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<main>
	<div class="w-8/12 mx-auto">
		<Navbar />
		<slot />
	</div>
</main>
