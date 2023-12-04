import { Loader } from '@googlemaps/js-api-loader';

export const initGoogleMaps = async (element, lat, lng, zoom = 10) => {
	try {
		const loader = new Loader({
			apiKey: import.meta.env.VITE_GMAPS_API_KEY,
			version: 'weekly'
		});

		await loader.load();

		/* eslint-disable-next-line */
		new google.maps.Map(document.getElementById(element), {
			center: { lat, lng },
			zoom: zoom
		});
	} catch (error) {
		return;
	}
};
