/** @type {import('tailwindcss').Config} */
export default {
  "content": [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"
  ],
  "theme": {
    "extend": {
      "colors": {
        "primary": "#4A90E2",
        "secondary": "#87CEEB",
        "accent": "#FF69B4",
        "background": "#F5F5F5",
        "text": "#212121",
        "success": "#4CAF50",
        "warning": "#FF4444"
      },
      "fontFamily": {
        "sans": [
          "Inter",
          "system-ui",
          "sans-serif"
        ]
      }
    }
  },
  "plugins": [
    "@tailwindcss/typography"
  ]
}