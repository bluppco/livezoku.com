/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				"fade-in-up": {
                    "0%": {
                        opacity: 0,
                        transform: "translate3d(0, 100%, 0)",
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translate3d(0, 0, 0)",
                    },
                },
				"slide-in-up": {
                    "0%": {
                        visibility: "visible",
                        transform: "translate3d(0, 100%, 0)",
                    },
                    "100%": {
                        transform: "translate3d(0, 0, 0)",
                    },
                },
				"spinner-grow": {
                    "0%": {
                        transform: "scale(0)",
                    },
      
                    "100%": {
                        transform: "none",
                        opacity: "1",
                    },
                },
      		},
      		animation: {

				"fade-in-up": 'fade-in-up 1s ease-in-out 0.25s 1',
				"slide-in-up": 'slide-in-up 1s ease-in-out 0.25s 1',
				"spinner-grow": 'spinner-grow 1s ease-in-out 0.25s 1',

			},
			colors: {

				"light_red":"#fce9d8",
				"dark_red":"#ff6264",

			},
		},
	},
	plugins: [],
}
