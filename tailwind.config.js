/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '1.5xl': '1350px',
      },
      backgroundImage: {
        'conic-gradient' : 'conic-gradient(#0082FF 0% 70%, #FAA002 70%)',
        'blue-linear-gradient' : 'linear-gradient(135deg, #79F1A4, #0E5CAD)',
        'red-linear-gradient' : 'linear-gradient(135deg, #FF9865, #EF3031)',
        'rainbow-linear-gradient': 'linear-gradient(to right, #FF4949 0%, #FF4E11 16.66%, #FC870A 33.33%, #FFAF11 50%, #C2CB21 66.66%, #11EB68 83.33%)'
      },
    },
  },
  plugins: [],
}

