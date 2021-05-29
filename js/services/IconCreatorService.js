export default class iconCreatorService {
  static createIcon(src) {
    const image = new Image();
    image.src = src;
    return image;
  }
}
