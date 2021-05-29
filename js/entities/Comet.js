export default class Comet {
  constructor() {
    this.x = Math.random() * 1900;
    this.startX = this.x;
    this.y = Math.random() * 1200;
    this.startY = this.y;
    this.radius = Math.random() * 2;
    this.radian = 0;
    this.velocity = 0.1;
    this.dir = Math.random();
  }

  getCoord() {
    return [this.x, this.y];
  }

  update() {
    if (this.dir < 0.25) {
      this.radian += this.velocity;
      this.x += this.velocity;
      this.y += this.velocity;
    } else if (this.dir < 0.5) {
      this.radian -= this.velocity;
      this.x -= this.velocity;
      this.y += this.velocity;
    } else if (this.dir < 0.75) {
      this.radian += this.velocity;
      this.x += this.velocity;
      this.y -= this.velocity;
    } else {
      this.radian -= this.velocity;
      this.x -= this.velocity;
      this.y -= this.velocity;
    }
  }
}
