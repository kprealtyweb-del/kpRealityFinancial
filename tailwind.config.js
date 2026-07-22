/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B3D91',
          hover: '#2563EB',
        },
        accent: '#F59E0B',
        background: '#F8FAFC',
        card: '#FFFFFF',
        heading: '#1E293B',
        paragraph: '#64748B',
        border: '#E2E8F0',
        success: '#16A34A',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      maxWidth: {
        container: '1280px',
      },
      height: {
        navbar: '80px',
      },
      borderRadius: {
        '2xl': '1rem',
        'xl': '0.75rem',
      },
    },
  },
  plugins: [],
}
