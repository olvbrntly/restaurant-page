import renderPage from './site';

function renderHomePage() {
  renderPage();
  const content = document.getElementById('content');
  const div = document.createElement('div');
  const title = document.createElement('p');

  div.setAttribute('id', 'hp-div');
  title.setAttribute('id', 'hp-title');
  title.textContent = 'Welcome to Bestie Bakery';

  content.appendChild(title);
  content.appendChild(div);
}

export default renderHomePage;
