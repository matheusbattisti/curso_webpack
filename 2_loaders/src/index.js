import Title from './components/title.js';
import Image from './components/image.js';
import Button from './components/button.js';
import warning from './templates/warning.html';
import './styles/warning.css';
import fraseTxt from './files/frase.txt';
import descricao from './files/descricao.json';

const title = new Title();

title.create("Primeira página");

const image = new Image();

image.insertBobImage();

const button = new Button();

button.create();

// Babel Spread
const obj = {a: 1, b: 2, c: 3, d: 4, e: 99};

let {a, b, ...teste} = obj;

console.log(a);
console.log(b);
console.log(teste);

// Import de HTML
const body = document.querySelector('body');
body.innerHTML += warning;

// Import arquivo de texto
const frase = fraseTxt;

console.log(frase);

console.log(frase.toUpperCase());

// Import JSON
const pessoa = descricao;

console.log(pessoa);