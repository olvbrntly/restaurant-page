import renderPage from './site';
import renderHomePage from './homepage';
import renderMenuPage from './menu'
import clearPage from './clear';

renderPage();
renderHomePage();

const homeBtn = document.getElementById('homeBtn');
const menuBtn = document.getElementById('menuBtn');
// const contactBtn = document.getElementById('contactBtn');

homeBtn.addEventListener('click', ()=>{
    clearPage();
    renderHomePage();
    console.log('clicked home');
})

menuBtn.addEventListener('click', ()=>{
    clearPage();
    renderMenuPage();
    console.log('clicked menu');
})

// import site.js
// load homepage -- as default --
// when menu is clicked
// re-render with menu page
// when contact is clicked
// re-render with contact page
// when home is clicked
// re-render with home page
