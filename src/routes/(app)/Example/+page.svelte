<script>
	import BarChart from '$lib/components/BarChart.svelte';
	import LineChart from '$lib/components/LineChart.svelte';
	import Maps from '$lib/components/Maps.svelte';

	const charts = {
		label: 'Visual Object',
		chart: {
			type: 'bar',
			colors: ['#B95561', '#B99755', '#558FB9', '#B99755'],
			labels: ['Hat', 'Watch', 'Speaker', 'Shirt', 'Bootle', 'Pant', 'Glasses'],
			series: [
				{
					data: [
						{
							x: 'Hat',
							y: 50,
							fillColor: '#165BAA'
						},
						{
							x: 'Watch',
							y: 35,
							fillColor: '#A155B9'
						},
						{
							x: 'Speaker',
							y: 62,
							fillColor: '#B95561'
						},
						{
							x: 'Shirt',
							y: 88,
							fillColor: '#7BB955'
						},
						{
							x: 'Bootle',
							y: 13,
							fillColor: '#B99755'
						},
						{
							x: 'Pant',
							y: 33,
							fillColor: '#558FB9'
						},
						{
							x: 'Glasses',
							y: 20,
							fillColor: '#B99755'
						}
					]
				}
			]
		}
	};

	const line = {
		colors: ['#A155B9'],
		labels: [
			'01',
			'02',
			'03',
			'04',
			'05',
			'06',
			'07',
			'08',
			'09',
			'10',
			'11',
			'12',
			'13',
			'14',
			'15',
			'16',
			'17',
			'18',
			'19',
			'20',
			'21',
			'22',
			'23',
			'24',
			'25',
			'26',
			'27',
			'28',
			'29',
			'30'
		],

		series: [
			{
				name: 'Text',
				data: [
					21, 7, 25, 13, 22, 8, 29, 13, 15, 9, 21, 7, 25, 13, 22, 8, 29, 13, 15, 9, 21, 7, 25, 13,
					22, 8, 29, 13, 15, 9
				]
			}
		]
	};
</script>

<div class="flex flex-col gap-6">
	<h1 class="text-5xl">
		Below is the implementation for the use of the library integrated into the boilerplate :
	</h1>
	<hr class="border-2" />
	<div>
		<ul class="flex flex-col gap-6">
			<li class="">
				<div class="flex flex-col gap-2">
					<span class="flex gap-2 p-2 bg-blue-300 w-[15%]">
						<img
							src="https://apexcharts.com/wp-content/themes/apexcharts/img/apexcharts-logo-white-trimmed.svg"
							alt="Google Maps Icon"
							class="w-[20%]"
						/>

						<a href="https://apexcharts.com/" class="text-2xl">Apexcharts</a>
					</span>
					<div class="flex gap-10">
						<BarChart
							colors={charts.chart.colors}
							labels={charts.chart.labels}
							series={charts.chart.series}
						/>
						<LineChart colors={line.colors} labels={line.labels} series={line.series} />
					</div>
				</div>
			</li>

			<li class="">
				<div class="flex flex-col gap-10">
					<span class="flex gap-2 p-1 bg-green-300 w-[15%]">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Google_Maps_icon_%282020%29.svg/62px-Google_Maps_icon_%282020%29.svg.png"
							alt="Google Maps Icon"
							class="w-[15%]"
						/>
						<a href="https://www.npmjs.com/package/@googlemaps/js-api-loader" class="text-2xl"
							>Google Maps</a
						>
					</span>

					<div>
						<Maps />
					</div>
				</div>
			</li>
		</ul>
	</div>
</div>
