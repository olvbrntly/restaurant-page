function renderPage() {
  const body = document.querySelector('body');

  const btnDiv = document.createElement('div');
  btnDiv.setAttribute('id', 'btnDiv');
  const homeBtn = document.createElement('button');
  const menuBtn = document.createElement('button');
  const contactBtn = document.createElement('button');

  homeBtn.textContent = 'home';
  menuBtn.textContent = 'menu';
  contactBtn.textContent = 'contact';

  btnDiv.appendChild(homeBtn);
  btnDiv.appendChild(menuBtn);
  btnDiv.appendChild(contactBtn);

  body.appendChild(btnDiv);
}

export default renderPage;
