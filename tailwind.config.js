/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orangebox: "#D26724",
        orange: "#FF8C0A",
        purple: "#323264",
      },
      boxShadow: {
        'custom-orange': '-4px -4px 10px #FF8C0A', // Top-left shadow with orange color
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

