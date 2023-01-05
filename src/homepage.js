

function renderHomePage() {
  const content = document.getElementById('content');

  const div = document.createElement('div');
  const title = document.createElement('p');
  const blurb = document.createElement('p');

  content.setAttribute('class', 'home-content');
  div.setAttribute('id', 'hp-div');
  title.setAttribute('id', 'hp-title');
  blurb.setAttribute('id','blurb');

  title.textContent = 'Welcome to Sweets Bakery';
  blurb.textContent = 'We deliver our famous treats all over the country!'
  div.appendChild(title);
  div.appendChild(blurb);
  content.appendChild(div);


}

export default renderHomePage;
