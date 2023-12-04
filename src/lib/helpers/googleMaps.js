import { Loader } from '@googlemaps/js-api-loader';

export const initGoogleMaps = async (element, lat, lng, zoom = 10) => {
	try {
		const loader = new Loader({
			apiKey: import.meta.env.VITE_GMAPS_API_KEY,
			version: 'weekly'
		});

		// map.panTo(newLatLong);
		// marker.setPosition(newLatLong);
		await loader.load();

		/* eslint-disable-next-line */
		let map = new google.maps.Map(document.getElementById(element), {
			center: { lat, lng },
			zoom: zoom
		});
		new google.maps.Marker({
			position: { lat, lng },
			map: map,
			animation: google.maps.Animation.DROP
		});
	} catch (error) {
		return error;
	}
};
