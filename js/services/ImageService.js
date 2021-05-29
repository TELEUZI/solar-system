export default class ImageService {
  static i = 0;

  constructor() {
    this.baseURL = './assets/img/';
    this.images = ['sun.png', 'mercury.png', 'venus.png', 'earth.png', 'mars.png', 'jupiter.png', 'saturn.png', 'uranus.png', 'neptune.png', 'pluto.png'];
  }

  getBaseURL() {
    return this.baseURL;
  }

  setBaseURL(base) {
    this.baseURL = base;
  }

  getNextImageSrc() {
    const index = ImageService.i % this.images.length;
    ImageService.i += 1;
    const imageSrc = this.baseURL + this.images[index];
    return imageSrc;
  }
}
