/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {

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

				"spinner-grow": 'spinner-grow 1s ease-in-out 0.25s 1',

			},
		},
	},
	plugins: [],
}
