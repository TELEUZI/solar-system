import IconCreatorService from '../services/IconCreatorService';

export default class Planet {
  constructor(x, y, radius, velocity, orbitRadius, src) {
    this.image = IconCreatorService.createIcon(src);
    this.startX = x;
    this.startY = y;
    this.radius = radius;
    this.velocity = velocity;
    this.radian = 0;
    this.orbitRadius = orbitRadius;
  }

  update() {
    if (this.velocity > 0) {
      this.radian += this.velocity;
      this.x = this.startX + Math.cos(this.radian) * this.orbitRadius;
      this.y = this.startY + Math.sin(this.radian) * this.orbitRadius;
    }
  }
}
