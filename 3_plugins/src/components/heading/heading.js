import './heading.css';

class Heading {

  create(title) {

    const h1 = document.createElement('h1');

    h1.innerText = title;

    h1.classList.add('title');

    document.querySelector('body').appendChild(h1);

  }

}

export default Heading;