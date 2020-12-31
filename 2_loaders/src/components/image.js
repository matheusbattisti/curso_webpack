import Bob from '../img/bob.jpg';

class Image {

  insertBobImage() {

    const img = document.createElement('img');

    img.src = Bob;
    img.width = 200;

    document.querySelector('body').appendChild(img);

  }

}

export default Image;
