function renderContactPage(){
    const content = document.getElementById('content');
    const infoDiv = document.createElement('div')
    const title = document.createElement('h1');

    const address = document.createElement('div');
    const hours = document.createElement('div');
    const number = document.createElement('div');
    const email = document.createElement('div');

    content.setAttribute('class', 'contact-content');
    infoDiv.setAttribute('class', 'info-div');

    title.textContent = "Let's stay in touch!";

    address.textContent = 'Address: 123 Sweets St. Los Angeles, 90007';
    hours.textContent = 'Hours: Mon - Sun: 7am - 2pm' ;
    number.textContent = 'Phone: 555-555-5555';
    email.textContent = 'Email: contact@sweetsbakery.com';

    content.appendChild(infoDiv);

    infoDiv.appendChild(title);
    
    infoDiv.appendChild(address);
    infoDiv.appendChild(hours);
    infoDiv.appendChild(number);
    infoDiv.appendChild(email);



}

export default renderContactPage;