function renderPage() {
  const body = document.querySelector('body');
  const content = document.getElementById('content');
  const btnDiv = document.createElement('div');
  btnDiv.setAttribute('id', 'btnDiv');

  const homeBtn = document.createElement('button');
  const menuBtn = document.createElement('button');
  const contactBtn = document.createElement('button');

  homeBtn.textContent = 'HOME';
  menuBtn.textContent = 'MENU';
  contactBtn.textContent = 'CONTACT';

  btnDiv.appendChild(homeBtn);
  btnDiv.appendChild(menuBtn);
  btnDiv.appendChild(contactBtn);

  body.insertBefore(btnDiv, content);
}

export default renderPage;
