/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['Courier New', 'Courier', 'monospace'],
      },
        'space': ["Space Grotesk", 'serif'],
      
    },
  },
  plugins: [    require('@tailwindcss/aspect-ratio')
  ],
}

