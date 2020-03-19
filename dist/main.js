/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const SolarSystem = __webpack_require__(/*! ./solar_system */ \"./src/solar_system.js\");\nconst Sun = __webpack_require__(/*! ./sun */ \"./src/sun.js\");\nconst OrbitingPlanet = __webpack_require__(/*! ./orbiting_planet */ \"./src/orbiting_planet.js\");\nconst Utils = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\nclass GameView {\n\tconstructor(ctx) {\n\t\tthis.ctx = ctx;\n\t\tthis.ss = new SolarSystem();\n\n\t\tthis.addScen1();\n\t}\n\n\taddScen1() {\n\t\tthis.ss.addSun(\n\t\t\tnew Sun({\n\t\t\t\tpos: { x: Utils.getCanvasDim().x / 2, y: Utils.getCanvasDim().y / 2 },\n\t\t\t\tradius: 15,\n\t\t\t\tcolor: \"yellow\",\n\t\t\t\tmass: 300\n\t\t\t})\n\t\t);\n\n\t\tthis.ss.addPlanet(\n\t\t\tnew OrbitingPlanet({\n\t\t\t\tpos: { x: Utils.getCanvasDim().x -200, y: Utils.getCanvasDim().y/2 },\n\t\t\t\tradius: 6,\n\t\t\t\tcolor: \"blue\",\n\t\t\t\tmass: 10,\n\t\t\t\tsuns: this.ss.getSuns(),\n\t\t\t\tspeed:3,\n\t\t\t\tdir: {x: 0, y: -1}\n\t\t\t})\n\t\t);\n\n\t};\n\n\t// addScen2() {\n\t// \tthis.addScen1();\n\n\t// \tthis.ss.addPlanet(\n\t// \t\tnew OrbitingPlanet({\n\t// \t\t\tpos: { x: Utils.getCanvasDim().x - 50, y: Utils.getCanvasDim().y / 2 },\n\t// \t\t\tradius: 12,\n\t// \t\t\tcolor: \"orange\",\n\t// \t\t\tmass: 40,\n\t// \t\t\tsuns: this.ss.getSuns(),\n\t// \t\t\tspeed: 2,\n\t// \t\t\tdir: { x: 0, y: -1 }\n\t// \t\t})\n\t// \t);\n\t// }\n\n\tstart(){\n\t\trequestAnimationFrame(this.animate.bind(this));\n\t};\n\n\tanimate(){\n\n\t\tthis.ss.step();\n\t\tthis.ss.draw(this.ctx);\n\t\trequestAnimationFrame(this.animate.bind(this));\n\t};\n};\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\nconst Utils = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n\tconst canvasEl = document.getElementsByTagName(\"canvas\")[0];\n\tcanvasEl.width = Utils.getCanvasDim().x;\n\tcanvasEl.height =Utils.getCanvasDim().y;\n\tconst ctx = canvasEl.getContext(\"2d\");\n\n\tlet gv = new GameView(ctx)\n\tgv.start();\n\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/orbiting_planet.js":
/*!********************************!*\
  !*** ./src/orbiting_planet.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const SolarObject = __webpack_require__(/*! ./solar_object */ \"./src/solar_object.js\");\nconst Utils = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\nclass OrbitingPlanet extends SolarObject {\n\tconstructor(options) {\n\t\tsuper(options);\n\n\t};\n\n\n\tmove() {\n\t\tthis.suns.forEach(sun => {\n\t\t\t// const angle = Utils.findAngle([this.pos.x,this.pos.y], \n\t\t\t// \t[sun.getPositon().x, sun.getPosition().y])\n\t\t\tconst constant = .25;\n\t\t\tconst distance = Utils.distance([this.pos.x, this.pos.y],\n\t\t\t\t[sun.getPosition().x, sun.getPosition().y]);\n\t\t\t\n\t\t\tconst deltaX = (sun.getPosition().x - this.pos.x) / distance;\n\t\t\tconst deltaY = (sun.getPosition().y - this.pos.y) / distance;\n\t\t\tconst gravity = constant * this.getMass() * sun.getMass() / (distance*distance);\n\n\t\t\tthis.dir.x  +=  deltaX * gravity;\n\t\t\tthis.dir.y += deltaY * gravity;\n\t\t});\n\t\t\n\t\tthis.pos.x += this.dir.x * this.speed;\n\t\tthis.pos.y += this.dir.y * this.speed;\n\t};\n\n\n}\n\nmodule.exports = OrbitingPlanet\n\n//# sourceURL=webpack:///./src/orbiting_planet.js?");

/***/ }),

/***/ "./src/solar_object.js":
/*!*****************************!*\
  !*** ./src/solar_object.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Utils = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\nclass SolarObject {\n\tconstructor(options) {\n\t\tthis.pos = options.pos;\n\t\tthis.radius = options.radius;\n\t\tthis.mass = options.mass;\n\t\tthis.color = options.color;\n\t\tthis.dir = options.dir;\n\t\tthis.speed = options.speed;\n\t\tthis.suns = options.suns;\n\t};\n\n\tgetPosition() { return this.pos; };\n\tgetMass() { return this.mass; };\n\n\tmove() {\n\t\tthis.suns.forEach(sun => {\n\t\t\t// const angle = Utils.findAngle([this.pos.x,this.pos.y], \n\t\t\t// \t[sun.getPositon().x, sun.getPosition().y])\n\t\t\tconst constant = .25;\n\t\t\tconst distance = Utils.distance([this.pos.x, this.pos.y],\n\t\t\t\t[sun.getPosition().x, sun.getPosition().y]);\n\n\t\t\tconst deltaX = (sun.getPosition().x - this.pos.x) / distance;\n\t\t\tconst deltaY = (sun.getPosition().y - this.pos.y) / distance;\n\t\t\tconst gravity = constant * this.getMass() * sun.getMass() / (distance * distance);\n\n\t\t\tthis.dir.x += deltaX * gravity;\n\t\t\tthis.dir.y += deltaY * gravity;\n\t\t});\n\n\t\tthis.pos.x += this.dir.x * this.speed;\n\t\tthis.pos.y += this.dir.y * this.speed;\n\t};\n\n\tdraw(ctx){\n\t\tUtils.drawFilledCircle(ctx, this.pos.x, this.pos.y, this.radius, this.color);\n\t};\n\n\n}\n\nmodule.exports = SolarObject\n\n//# sourceURL=webpack:///./src/solar_object.js?");

/***/ }),

/***/ "./src/solar_system.js":
/*!*****************************!*\
  !*** ./src/solar_system.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Utils = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\nclass SolarSystem {\n\n\tconstructor() {\n\t\tthis.suns = [];\n\t\tthis.planets = [];\n\t};\n\n\tgetSuns() { return this.suns; };\n\n\taddSun(sun) {\n\t\tthis.suns.push(sun);\n\t};\n\n\taddPlanet(planet) {\n\t\tthis.planets.push(planet);\n\t};\n\n\n\tstep() {\n\t\tthis.moveObjects();\n\t};\n\n\tdraw(ctx) {\n\t\tctx.clearRect(0, 0, Utils.getCanvasDim().x, Utils.getCanvasDim().y);\n\t\tctx.fillStyle = \"black\";\n\t\tctx.fillRect(0, 0, Utils.getCanvasDim().x, Utils.getCanvasDim().y);\n\t\tthis.suns.forEach((sun) => sun.draw(ctx));\n\t\tthis.planets.forEach((planet) => planet.draw(ctx));\n\t};\n\n\tmoveObjects(){\n\t\tthis.planets.forEach((planet) => planet.move());\n\t};\n}\n\nmodule.exports = SolarSystem;\n\n\n//# sourceURL=webpack:///./src/solar_system.js?");

/***/ }),

/***/ "./src/sun.js":
/*!********************!*\
  !*** ./src/sun.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const SolarObject = __webpack_require__(/*! ./solar_object */ \"./src/solar_object.js\");\nconst Utils = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\nclass Sun extends SolarObject {\n\tconstructor(options) {\n\t\tsuper(options);\n\t\tthis.dir = options.dir;\n\t\tthis.speed = options.speed;\n\t\tthis.suns = options.suns;\n\t};\n\n\tdraw(ctx) {\n\n\t\tconst gradient = ctx.createRadialGradient(this.pos.x, this.pos.y, this.radius/2, this.pos.x, this.pos.y, this.radius*2);\n\t\tgradient.addColorStop(0, \"yellow\");\n\t\tgradient.addColorStop(1, \"transparent\");\n\n\t\tUtils.drawFilledCircle(ctx, this.pos.x, this.pos.y, this.radius*2, gradient);\n\n\t\tctx.fill();\n\t\t// super.draw(ctx);\n\t};\n\n\n\n}\n\nmodule.exports = Sun;\n\n//# sourceURL=webpack:///./src/sun.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Utils = {\n\n\tgetCanvasDim() { return {x:900, y:900}; },\n\n\tfindAngle(point1, point2) {\n\t\tconst xDelta = point2[0] - point1[0];\n\t\tconst yDelta = point2[1] - point1[1];\n\n\t\tconst arcTangent = Math.atan(yDelta / xDelta);\n\t\tlet angle;\n\n\t\tif (xDelta < 0) angle = arcTangent + Math.PI;\n\t\telse if (xDelta > 0 && yDelta < 0) angle = arcTangent + Math.PI * 2;\n\t\telse angle = arcTangent;\n\n\t\treturn angle;\n\t},\n\n\tdistance(obj1, obj2) {\n\t\tlet distance_x = obj1[0] - obj2[0];\n\t\tlet distance_y = obj1[1] - obj2[1];\n\t\treturn Math.sqrt(distance_x * distance_x + distance_y * distance_y);\n\t},\n\n\n\tdrawFilledCircle(ctx, x, y, radius, fillStyle) {\n\t\tctx.beginPath();\n\t\tctx.arc(x, y, radius, 0, 360);\n\t\tctx.fillStyle = fillStyle;\n\t\tctx.fill();\n\t},\n\n}\nmodule.exports = Utils;\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });