<script>
	import { Chart } from 'flowbite-svelte';

	export let colors = [];
	export let labels = [];
	export let series = [];

	export let options = {};

	let defaultOptions = {
		chart: {
			type: 'bar',
			height: 250,
			width: '600px',
			fontFamily: 'Sora, sans serif',
			toolbar: {
				show: false
			}
		},
		legend: {
			position: 'top',
			horizontalAlign: 'left',
			offsetX: 25
		},
		dataLabels: {
			enabled: false
		},
		xaxis: {
			labels: {}
		},
		colors,
		labels,
		series,
		...options
	};
</script>

<div class="h-full flex items-center">
	<div class="w-full">
		<Chart options={defaultOptions} />
	</div>
</div>
