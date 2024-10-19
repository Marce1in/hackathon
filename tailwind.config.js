/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Correct wildcard syntax to scan all files in subdirectories
  ],
  theme: {
    extend: {
      colors: {
        cadastre: '#526245', // verde claro
        login: '#2B3B20', // verde escuro
        texto: '#2B3B20', // verde de texto
        saibamais: '#526245', // verde do botao saiba mais e palavras chave
        branco: '#000', //branco dos botoes
        selecionado: '#E79E41', // dourado ao selecionar o botao
      },
    },
  },
  variants: {},
  plugins: [
    require('daisyui'),
  ],
}
