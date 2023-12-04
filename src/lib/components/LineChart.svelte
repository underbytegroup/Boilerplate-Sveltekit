<script>
	import { Chart } from 'flowbite-svelte';

	export let colors = [];
	export let labels = [];
	export let series = [];

	export let options = {};

	let defaultOptions = {
		chart: {
			type: 'line',
			width: '600px',
			height: 250,
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
		plotOptions: {
			bar: {
				columnWidth: '25em'
			}
		},
		dataLabels: {
			enabled: false
		},
		colors,
		labels,
		series,
		...options
	};
</script>

<div class="pr-5 h-full flex items-center overflow-auto">
	<Chart options={defaultOptions} />
</div>
