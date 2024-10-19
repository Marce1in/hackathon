/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Correct wildcard syntax to scan all files in subdirectories
  ],
  theme: {
    extend: {
      colors: {
        cadastre: '#526245', // verde escuro
        login: '#2B3B20', // verde clarinho
        texto: '#2B3B20', // verde de texto
        saibamais: '#526245', // verde do botao saiba mais e palavras chave
        branco: '#000', //branco dos botoes
        selecionado: '#E79E41', // dourado ao selecionar o botao
        loginform: '#E79E41',
        textoform: '#B05414', //texto pag form e login form
        cadastroform: '#E79E41', //cor de cadastro form
        loginhome: '#683814',    //aqui chague chague
        textohome: '#683814',    //e aqui tome tome
        cadastrohome:'#934521',  //não é verdade?
      },
    },
  },
  daisyui: {
    themes: ["light"]
  },
  variants: {},
  plugins: [
    require('daisyui'),
  ],
}
