export default class Star {
  constructor(fieldWidth, fieldHeight) {
    this.x = Math.random() * fieldWidth;
    this.y = Math.random() * fieldHeight;
    this.radius = Math.random() * 2;
  }

  getCoord() {
    return [this.x, this.y];
  }
}
