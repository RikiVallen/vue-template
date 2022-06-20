import colors from 'windicss/colors';

export default {

	plugins: [
		// Other plugins
		require('@windicss/plugin-animations')({
			settings: {
				animatedSpeed: 1000,
				heartBeatSpeed: 1000,
				hingeSpeed: 2000,
				bounceInSpeed: 750,
				bounceOutSpeed: 750,
				animationDelaySpeed: 1000,
			},
		}),
	],
	theme: {
		extend: {
			colors: {
				bts: '#9e15ff',
			},
		},
	},
}