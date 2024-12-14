/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'move-text': 'move-text 10s linear infinite',
      },
      keyframes: {
        'move-text': {
          '0%': {
            transform: 'translateX(100%)',  // Start from the right
          },
          '100%': {
            transform: 'translateX(-100%)',  // End at the left
          },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class'
};
