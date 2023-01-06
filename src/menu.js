
function createMenuItem(name, cost){

  const content = document.getElementById('content');
  const item = document.createElement('div');
  const itemInfo = document.createElement('div');

  item.setAttribute('class', 'menu-item');
  itemInfo.setAttribute('class', 'item-info');

  const image = document.createElement('img');
  image.src = `/dist/images/${name.toLowerCase().replace(/\s/g, '')}.jpg`

  const description = document.createElement('p');
  description.textContent = name;

  const price = document.createElement('p');
  price.textContent = `$${cost}`;

  item.appendChild(image);
  item.appendChild(itemInfo);
  itemInfo.appendChild(description);
  itemInfo.appendChild(price);
  
  content.appendChild(item);
} 



function renderMenuPage() {
  const content = document.getElementById('content');
  
  const title = document.createElement('h1');
  title.textContent = " THIS WEEK'S MENU"

  content.setAttribute('class', 'menu-content');
  content.appendChild(title);

  createMenuItem('Raspberry Mint Chocolate Cupcake','4');
  createMenuItem('Macaroons', '5 / 3 pack');
  createMenuItem('Croissant', '2.50');
  createMenuItem('Mini Apple Pies', '6');
  createMenuItem('Chocolate Glazed Donut', '2');
  createMenuItem('Salted Caramel Ice Cream', '6 / pint');
}

export default renderMenuPage;