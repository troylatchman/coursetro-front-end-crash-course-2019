import './css/main.css';
console.log('test');

const menu = document.getElementById('menu');
const nav = document.getElementById('nav');
const exit = document.getElementById('exit');

menu.addEventListener('click', e => {
  nav.classList.toggle('hide-mobile');
  e.preventDefault();
});

exit.addEventListener('click', e => {
  nav.classList.add('hide-mobile');
  e.preventDefault();
});
