import Canvas from './components/Canvas';
import Planet from './entities/Planet';
import Star from './entities/Star';
import Comet from './entities/Comet';
import ImageService from './services/ImageService';

class Controller {
  constructor() {
    this.canvas = new Canvas('canvas');
    this.planets = [];
    this.stars = [];
    this.comets = [];
    this.data = new ImageService();
    this.getPlanetForOptions = (radius, velocity, orbitRadius, image = '') => new Planet(
      this.canvas.getWidth() / 2,
      this.canvas.getHeight() / 2,
      radius,
      velocity / 1000,
      orbitRadius,
      image,
    );
  }

  createPlanets() {
    this.planets.push(this.getPlanetForOptions(45, 0, 0, this.data.getNextImageSrc())); // sun
    this.planets.push(this.getPlanetForOptions(5, 5, 65, this.data.getNextImageSrc())); // mercury
    this.planets.push(this.getPlanetForOptions(10, 4, 90, this.data.getNextImageSrc())); // venus
    this.planets.push(this.getPlanetForOptions(15, 3, 125, this.data.getNextImageSrc())); // earth
    this.planets.push(this.getPlanetForOptions(20, 3.5, 175, this.data.getNextImageSrc())); // mars
    this.planets.push(this.getPlanetForOptions(25, 3, 225, this.data.getNextImageSrc())); // jupiter
    this.planets.push(this.getPlanetForOptions(50, 2.5, 275, this.data.getNextImageSrc())); // sat
    this.planets.push(this.getPlanetForOptions(15, 2, 325, this.data.getNextImageSrc())); // uranus
    this.planets.push(this.getPlanetForOptions(25, 1.5, 375, this.data.getNextImageSrc())); // nept
    this.planets.push(this.getPlanetForOptions(7, 1, 475, this.data.getNextImageSrc())); // pluto
  }

  createStars() {
    for (let i = 0; i < 400; i += 1) {
      this.stars.push(new Star(this.canvas.getWidth(), this.canvas.getHeight()));
    }
  }

  createComets() {
    for (let i = 0; i < 50; i += 1) {
      this.comets.push(new Comet());
    }
  }

  draw() {
    this.planets.forEach((el) => this.canvas.drawPlanet(el.startX, el.startY, el.radius, el.image));
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.canvas.clearField();
    this.stars.forEach((star) => {
      this.canvas.drawStar(star.x, star.y, star.radius);
    });
    this.planets.forEach((planet) => {
      planet.update();
      this.canvas.drawPlanet(planet.x, planet.y, planet.radius, planet.image);
      this.canvas.drawPlanetPath(planet.startX, planet.startY, planet.orbitRadius);
    });
    this.comets.forEach((comet) => {
      comet.update();
      this.canvas.drawComet(comet.x, comet.y, comet.radius);
    });
  }
}
const control = new Controller();
control.createComets();
control.createPlanets();
control.createStars();
control.draw();
control.animate();
