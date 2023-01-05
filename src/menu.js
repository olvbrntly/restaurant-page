
function createMenuItem(name, cost){
  const content = document.getElementById('content');
  const item = document.createElement('div');
  item.setAttribute('class', 'menu-item');

  const image = document.createElement('img');
  image.src = `/dist/images/${name.toLowerCase().replace(/\s/g, '')}.jpg`

  const description = document.createElement('p');
  description.textContent = name;

  const price = document.createElement('p');
  price.textContent = `$${cost}`;

  item.appendChild(image);
  item.appendChild(description);
  item.appendChild(price);
  
  content.appendChild(item);
} 



function renderMenuPage() {
  const content = document.getElementById('content');
  
  const title = document.createElement('h1');
  title.textContent = " OUR MENU"

  content.setAttribute('class', 'menu-content');
  content.appendChild(title);
  createMenuItem('Raspberry Mint Chocolate Cupcake','4');
}

export default renderMenuPage;