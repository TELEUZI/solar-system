/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Canvas */ \"./components/Canvas.js\");\n/* harmony import */ var _entities_Planet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entities/Planet */ \"./entities/Planet.js\");\n/* harmony import */ var _entities_Star__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entities/Star */ \"./entities/Star.js\");\n/* harmony import */ var _entities_Comet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entities/Comet */ \"./entities/Comet.js\");\n/* harmony import */ var _services_ImageService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/ImageService */ \"./services/ImageService.js\");\n\n\n\n\n\n\nclass Controller {\n  constructor() {\n    this.canvas = new _components_Canvas__WEBPACK_IMPORTED_MODULE_0__.default('canvas');\n    this.planets = [];\n    this.stars = [];\n    this.comets = [];\n    this.data = new _services_ImageService__WEBPACK_IMPORTED_MODULE_4__.default();\n    this.getPlanetForOptions = (radius, velocity, orbitRadius, image = '') => new _entities_Planet__WEBPACK_IMPORTED_MODULE_1__.default(\n      this.canvas.getWidth() / 2,\n      this.canvas.getHeight() / 2,\n      radius,\n      velocity / 1000,\n      orbitRadius,\n      image,\n    );\n  }\n\n  createPlanets() {\n    this.planets.push(this.getPlanetForOptions(45, 0, 0, this.data.getNextImageSrc())); // sun\n\n    this.planets.push(this.getPlanetForOptions(5, 5, 65, this.data.getNextImageSrc())); // mercury\n    this.planets.push(this.getPlanetForOptions(10, 4, 90, this.data.getNextImageSrc())); // venus\n    this.planets.push(this.getPlanetForOptions(15, 3, 125, this.data.getNextImageSrc())); // earth\n    this.planets.push(this.getPlanetForOptions(20, 3.5, 175, this.data.getNextImageSrc())); // mars\n    this.planets.push(this.getPlanetForOptions(25, 3, 225, this.data.getNextImageSrc())); // jupiter\n    this.planets.push(this.getPlanetForOptions(50, 2.5, 275, this.data.getNextImageSrc())); // sat\n    this.planets.push(this.getPlanetForOptions(15, 2, 325, this.data.getNextImageSrc())); // uranus\n    this.planets.push(this.getPlanetForOptions(25, 1.5, 375, this.data.getNextImageSrc())); // nept\n    this.planets.push(this.getPlanetForOptions(7, 1, 475, this.data.getNextImageSrc())); // pluto\n  }\n\n  createStars() {\n    for (let i = 0; i < 400; i += 1) {\n      this.stars.push(new _entities_Star__WEBPACK_IMPORTED_MODULE_2__.default(this.canvas.getWidth(), this.canvas.getHeight()));\n    }\n  }\n\n  createComets() {\n    for (let i = 0; i < 50; i += 1) {\n      this.comets.push(new _entities_Comet__WEBPACK_IMPORTED_MODULE_3__.default());\n    }\n  }\n\n  draw() {\n    this.planets.forEach((el) => this.canvas.drawPlanet(el.startX, el.startY, el.radius, el.image));\n  }\n\n  animate() {\n    requestAnimationFrame(this.animate.bind(this));\n    this.canvas.clearField();\n    this.stars.forEach((star) => {\n      this.canvas.drawStar(star.x, star.y, star.radius);\n    });\n    this.planets.forEach((planet) => {\n      planet.update();\n      this.canvas.drawPlanet(planet.x, planet.y, planet.radius, planet.image);\n      this.canvas.drawPlanetPath(planet.startX, planet.startY, planet.orbitRadius);\n    });\n    this.comets.forEach((comet) => {\n      comet.update();\n      this.canvas.drawComet(comet.x, comet.y, comet.radius);\n    });\n  }\n}\nconst control = new Controller();\ncontrol.createComets();\ncontrol.createPlanets();\ncontrol.createStars();\ncontrol.draw();\ncontrol.animate();\n\n\n//# sourceURL=webpack://solarsystem/./app.js?");

/***/ }),

/***/ "./components/Base.js":
/*!****************************!*\
  !*** ./components/Base.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BaseComponent)\n/* harmony export */ });\nclass BaseComponent {\n  constructor(tagName = 'div', className = '', content = '') {\n    this.node = document.createElement(tagName);\n    this.node.classList.add(className);\n    this.node.innerText = content;\n  }\n\n  insertChild(child) {\n    this.node.appendChild(child);\n  }\n\n  getNode() {\n    return this.node;\n  }\n\n  addClass(className) {\n    this.node.classList.add(className);\n  }\n\n  setContent(content) {\n    this.content = content;\n  }\n\n  setWidth(width) {\n    this.node.width = width;\n  }\n\n  setHeight(height) {\n    this.node.height = height;\n  }\n\n  getWidth() {\n    return this.node.width;\n  }\n\n  getHeight() {\n    return this.node.height;\n  }\n}\n\n\n//# sourceURL=webpack://solarsystem/./components/Base.js?");

/***/ }),

/***/ "./components/Canvas.js":
/*!******************************!*\
  !*** ./components/Canvas.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Canvas)\n/* harmony export */ });\n/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base */ \"./components/Base.js\");\n\n\nclass Canvas extends _Base__WEBPACK_IMPORTED_MODULE_0__.default {\n  constructor(node) {\n    super(node, 'canvas');\n    document.body.appendChild(this.node);\n    this.context = this.node.getContext('2d');\n    this.setHeight(window.innerHeight);\n    this.setWidth(window.innerWidth);\n  }\n\n  getContext() {\n    return this.node.getContext('2d');\n  }\n\n  drawImg(image, x, y, width, height) {\n    this.context.drawImage(image, x, y, width * 2, height * 2);\n  }\n\n  clearField() {\n    this.context.clearRect(0, 0, this.node.width, this.node.height);\n    this.context.fillStyle = 'rgb(0, 0, 0)';\n    this.context.fillRect(0, 0, this.node.width, this.node.height);\n  }\n\n  drawCircle(x, y, radius, fillStyle = '', strokeStyle = '') {\n    this.context.beginPath();\n    this.context.arc(x, y, radius, 0, Math.PI * 2, false);\n    this.context.fillStyle = fillStyle || '';\n    this.context.fill();\n    this.context.strokeStyle = strokeStyle || '';\n    this.context.stroke();\n  }\n\n  drawStar(x, y, radius) {\n    this.drawCircle(x, y, radius, 'white');\n  }\n\n  drawPlanetPath(startX, startY, orbitRadius) {\n    this.drawCircle(startX, startY, orbitRadius, 'rgba(0, 0, 0, 0)', 'rgba(255, 255, 255, 0.35)');\n  }\n\n  drawPlanet(x, y, radius, image) {\n    this.drawImg(image, x - radius, y - radius, radius, radius);\n  }\n\n  drawComet(x, y, radius) {\n    this.context.beginPath();\n    this.context.arc(x, y, radius, 0, Math.PI * 2, false);\n    this.context.fillStyle = 'white';\n    this.context.fill();\n  }\n}\n\n\n//# sourceURL=webpack://solarsystem/./components/Canvas.js?");

/***/ }),

/***/ "./entities/Comet.js":
/*!***************************!*\
  !*** ./entities/Comet.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Comet)\n/* harmony export */ });\nclass Comet {\n  constructor() {\n    this.x = Math.random() * 1900;\n    this.startX = this.x;\n    this.y = Math.random() * 1200;\n    this.startY = this.y;\n    this.radius = Math.random() * 2;\n    this.radian = 0;\n    this.velocity = 0.1;\n    this.dir = Math.random();\n  }\n\n  getCoord() {\n    return [this.x, this.y];\n  }\n\n  update() {\n    if (this.dir < 0.25) {\n      this.radian += this.velocity;\n      this.x += this.velocity;\n      this.y += this.velocity;\n    } else if (this.dir < 0.5) {\n      this.radian -= this.velocity;\n      this.x -= this.velocity;\n      this.y += this.velocity;\n    } else if (this.dir < 0.75) {\n      this.radian += this.velocity;\n      this.x += this.velocity;\n      this.y -= this.velocity;\n    } else {\n      this.radian -= this.velocity;\n      this.x -= this.velocity;\n      this.y -= this.velocity;\n    }\n  }\n}\n\n\n//# sourceURL=webpack://solarsystem/./entities/Comet.js?");

/***/ }),

/***/ "./entities/Planet.js":
/*!****************************!*\
  !*** ./entities/Planet.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Planet)\n/* harmony export */ });\n/* harmony import */ var _services_IconCreatorService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/IconCreatorService */ \"./services/IconCreatorService.js\");\n\n\nclass Planet {\n  constructor(x, y, radius, velocity, orbitRadius, src) {\n    this.image = _services_IconCreatorService__WEBPACK_IMPORTED_MODULE_0__.default.createIcon(src);\n    this.startX = x;\n    this.startY = y;\n    this.radius = radius;\n    this.velocity = velocity;\n    this.radian = 0;\n    this.orbitRadius = orbitRadius;\n  }\n\n  update() {\n    if (this.velocity > 0) {\n      this.radian += this.velocity;\n      this.x = this.startX + Math.cos(this.radian) * this.orbitRadius;\n      this.y = this.startY + Math.sin(this.radian) * this.orbitRadius;\n    }\n  }\n}\n\n\n//# sourceURL=webpack://solarsystem/./entities/Planet.js?");

/***/ }),

/***/ "./entities/Star.js":
/*!**************************!*\
  !*** ./entities/Star.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Star)\n/* harmony export */ });\nclass Star {\n  constructor(fieldWidth, fieldHeight) {\n    this.x = Math.random() * fieldWidth;\n    this.y = Math.random() * fieldHeight;\n    this.radius = Math.random() * 2;\n  }\n\n  getCoord() {\n    return [this.x, this.y];\n  }\n}\n\n\n//# sourceURL=webpack://solarsystem/./entities/Star.js?");

/***/ }),

/***/ "./services/IconCreatorService.js":
/*!****************************************!*\
  !*** ./services/IconCreatorService.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ iconCreatorService)\n/* harmony export */ });\nclass iconCreatorService {\n  static createIcon(src) {\n    const image = new Image();\n    image.src = src;\n    return image;\n  }\n}\n\n\n//# sourceURL=webpack://solarsystem/./services/IconCreatorService.js?");

/***/ }),

/***/ "./services/ImageService.js":
/*!**********************************!*\
  !*** ./services/ImageService.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ImageService)\n/* harmony export */ });\nclass ImageService {\n  static i = 0;\n\n  constructor() {\n    this.baseURL = './assets/img/';\n    this.images = ['sun.png', 'mercury.png', 'venus.png', 'earth.png', 'mars.png', 'jupiter.png', 'saturn.png', 'uranus.png', 'neptune.png', 'pluto.png'];\n  }\n\n  getBaseURL() {\n    return this.baseURL;\n  }\n\n  setBaseURL(base) {\n    this.baseURL = base;\n  }\n\n  getNextImageSrc() {\n    const index = ImageService.i % this.images.length;\n    ImageService.i += 1;\n    const imageSrc = this.baseURL + this.images[index];\n    return imageSrc;\n  }\n}\n\n\n//# sourceURL=webpack://solarsystem/./services/ImageService.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app.js");
/******/ 	
/******/ })()
;