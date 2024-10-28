// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightPurple: '#D8B4FE', // Roxo Claro
        pink: '#FCA5A5',        // Rosa
        lightGreen: '#A7F3D0',  // Verde Claro
        darkPurple: '#8B5CF6',  // Roxo Escuro para contrastes
      },
      // backgroundImage: {
      //   'gradient-r-purple-pink': 'linear-gradient(to right, #D8B4FE, #FCA5A5)', // Roxo Claro para Rosa
      // },
      backgroundImage: {
        // Atualizando o gradiente para roxo escuro e amarelo escuro
        'gradient-r-purple-yellow': 'linear-gradient(to right, #6A0DAD, #B8860B)', // Roxo Escuro para Amarelo Escuro
      },
    },
  },
  plugins: [],
}
