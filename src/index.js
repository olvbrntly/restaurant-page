import renderPage from './site';
import renderHomePage from './homepage';
import renderMenuPage from './menu'
import renderContactPage from './contact'
import clearPage from './clear';

// initial load
renderPage();
renderHomePage();

// button on top of page
const homeBtn = document.getElementById('homeBtn');
const menuBtn = document.getElementById('menuBtn');
const contactBtn = document.getElementById('contactBtn');

// changes Page based on button clicked
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

contactBtn.addEventListener('click', ()=>{
    clearPage();
    renderContactPage();
    console.log('clicked contact');
})
