/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#0A4C6A',
				secondary: '#F8F9FA',
				accent: '#E63946',
				text: '#333333',
			},
			fontFamily: {
				heading: ['Montserrat', 'sans-serif'],
				body: ['"Open Sans"', 'sans-serif'],
			},
		},
	},
	plugins: [],
}