<script>
	import { initGoogleMaps } from '$lib/helpers/googlemaps';
	import { onMount } from 'svelte';

	onMount(async () => {
		await initGoogleMaps('map', -6.301809, 106.797348, 10);
	});
</script>

<div id="map" class="h-[600px]" />
