import BaseComponent from './Base';

export default class Canvas extends BaseComponent {
  constructor(node) {
    super(node, 'canvas');
    document.body.appendChild(this.node);
    this.context = this.node.getContext('2d');
    this.setHeight(window.innerHeight);
    this.setWidth(window.innerWidth);
  }

  getContext() {
    return this.node.getContext('2d');
  }

  drawImg(image, x, y, width, height) {
    this.context.drawImage(image, x, y, width * 2, height * 2);
  }

  clearField() {
    this.context.clearRect(0, 0, this.node.width, this.node.height);
    this.context.fillStyle = 'rgb(0, 0, 0)';
    this.context.fillRect(0, 0, this.node.width, this.node.height);
  }

  drawCircle(x, y, radius, fillStyle = '', strokeStyle = '') {
    this.context.beginPath();
    this.context.arc(x, y, radius, 0, Math.PI * 2, false);
    this.context.fillStyle = fillStyle || '';
    this.context.fill();
    this.context.strokeStyle = strokeStyle || '';
    this.context.stroke();
  }

  drawStar(x, y, radius) {
    this.drawCircle(x, y, radius, 'white');
  }

  drawPlanetPath(startX, startY, orbitRadius) {
    this.drawCircle(startX, startY, orbitRadius, 'rgba(0, 0, 0, 0)', 'rgba(255, 255, 255, 0.35)');
  }

  drawPlanet(x, y, radius, image) {
    this.drawImg(image, x - radius, y - radius, radius, radius);
  }

  drawComet(x, y, radius) {
    this.context.beginPath();
    this.context.arc(x, y, radius, 0, Math.PI * 2, false);
    this.context.fillStyle = 'white';
    this.context.fill();
  }
}
