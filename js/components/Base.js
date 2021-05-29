export default class BaseComponent {
  constructor(tagName = 'div', className = '', content = '') {
    this.node = document.createElement(tagName);
    this.node.classList.add(className);
    this.node.innerText = content;
  }

  insertChild(child) {
    this.node.appendChild(child);
  }

  getNode() {
    return this.node;
  }

  addClass(className) {
    this.node.classList.add(className);
  }

  setContent(content) {
    this.content = content;
  }

  setWidth(width) {
    this.node.width = width;
  }

  setHeight(height) {
    this.node.height = height;
  }

  getWidth() {
    return this.node.width;
  }

  getHeight() {
    return this.node.height;
  }
}
