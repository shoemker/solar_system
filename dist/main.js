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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const SolarView = __webpack_require__(/*! ./solar_view */ \"./src/solar_view.js\");\nconst Utils = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n\tconst canvasEl = document.getElementsByTagName(\"canvas\")[0];\n\tcanvasEl.width = Utils.getCanvasDim().x;\n\tcanvasEl.height =Utils.getCanvasDim().y;\n\tconst ctx = canvasEl.getContext(\"2d\");\n\n\tlet sv = new SolarView(ctx)\n\tsv.start();\n\n\tthis.mouseDown = false;\n\tthis.mouseY = 0;\n\n\tcanvasEl.addEventListener('mousedown', (e) => {\n\t\tthis.mouseDown = true;\n\t\tthis.mouseY = e.offsetY;\n\t});\n\n\tcanvasEl.addEventListener('mousemove', (e) => {\n\t\tif (this.mouseDown) {\n\t\t\tlet tilt = sv.getSS().getTilt();\n\n\t\t\tconst deltaY = e.offsetY - this.mouseY;\n\n\t\t\ttilt += deltaY/500;\n\n\t\t\tif (tilt > 1) tilt = 1;\n\t\t\telse if (tilt < 0) tilt = 0;\n\n\t\t\tsv.getSS().setTilt(tilt);\n\t\t\tthis.mouseY = e.offsetY;\n\t\t}\n\t});\n\n\tcanvasEl.addEventListener('mouseup', () => {\n\t\tthis.mouseDown = false;\n\t});\n\n\twindow.addEventListener('keydown', (e) => {\n\t\t// p pauses game\n\t\tif (e.target == document.body && e.keyCode === 80) sv.pauseGameToggle(); \n\t});\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moon.js":
/*!*********************!*\
  !*** ./src/moon.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const OrbitingPlanet = __webpack_require__(/*! ./orbiting_planet */ \"./src/orbiting_planet.js\");\nconst Utils = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\nclass Moon extends OrbitingPlanet {\n\tconstructor(options) {\n\t\tsuper(options);\n\t};\n\n\n\tshift(shiftX, shiftY) {\n\t\tthis.pos.x +=\tshiftX;\n\t\tthis.pos.y += shiftY;\n\t}\n\n\tdraw(ctx, tilt, orbitCenterY, mult) {\n\t\tconst positionOffsetY = (this.pos.y - this.suns[0].getPosition().y) * tilt *mult;\n\n\t\tconst positionOffsetX = (this.pos.x - this.suns[0].getPosition().x);\n\t\tconst newX = this.suns[0].getPosition().x + positionOffsetX*mult;\n\n\t\tUtils.drawFilledCircle(ctx, newX, orbitCenterY + positionOffsetY, this.radius*mult, this.color);\n\t\t\n\t}\n}\n\nmodule.exports = Moon;\n\n//# sourceURL=webpack:///./src/moon.js?");

/***/ }),

/***/ "./src/orbiting_planet.js":
/*!********************************!*\
  !*** ./src/orbiting_planet.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const SolarObject = __webpack_require__(/*! ./solar_object */ \"./src/solar_object.js\");\nconst Utils = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\nclass OrbitingPlanet extends SolarObject {\n\tconstructor(options) {\n\t\tsuper(options);\n\t\tthis.moons=[];\n\t\tthis.path = options.path;\n\t\tthis.moon = options.moon;\n\t\tthis.rings = options.rings;\n\t};\n\n\taddMoon(moon) { this.moons.push(moon); };\n\t\n\n\tmove() {\n\t\tthis.suns.forEach(sun => {\n\n\t\t\tconst constant = 2.5;\n\t\t\tthis.distance = Utils.distance([this.pos.x, this.pos.y],\n\t\t\t\t[sun.getPosition().x, sun.getPosition().y]);\n\n\t\t\tconst deltaX = (sun.getPosition().x - this.pos.x) / this.distance;\n\t\t\tconst deltaY = (sun.getPosition().y - this.pos.y) / this.distance;\n\n\t\t\tconst gravity = constant * this.getMass() * sun.getMass() / \n\t\t\t\t(this.distance * this.distance);\n\n\t\t\tthis.dir.x += deltaX * gravity / this.mass;\n\t\t\tthis.dir.y += deltaY * gravity / this.mass;\n\t\t});\n\n\t\tconst movementX = this.dir.x * this.speed;\n\t\tconst movementY = this.dir.y * this.speed;\n\n\t\tthis.pos.x += movementX;\n\t\tthis.pos.y += movementY;\n\n\t\tthis.moons.forEach(moon =>{\n\t\t\tmoon.shift(movementX, movementY);\n\t\t\tmoon.move();\n\t\t});\n\n\t};\n\n\n\tdraw(ctx, tilt) {\n\t\tif (this.path) this.drawPath(ctx, tilt);\n\n\n\t\tlet orbitingPosY = this.suns[0].getPosition().y\n\n\t\tconst distanceFromSunY = this.pos.y - orbitingPosY;\n\t\tconst newY =  distanceFromSunY*tilt +orbitingPosY ;\n\n\t\tlet radiusMult = 1 +  distanceFromSunY/300;\n\n\t\tradiusMult = radiusMult - radiusMult*tilt + 1;\n\n\t\tif (this.rings) this.drawRings(ctx, newY, radiusMult, Math.PI);\n\n\t\tUtils.drawFilledCircle(ctx, \n\t\t\tthis.pos.x, newY, \n\t\t\tthis.radius * radiusMult, this.color);\n\n\t\tif (this.rings) this.drawRings(ctx, newY, radiusMult, 0);\n\n\t\tthis.moons.forEach(moon => moon.draw(ctx, tilt, newY, radiusMult));\n\t}\n\n\tdrawRings(ctx, y, radiusMult, start) {\n\t\tctx.beginPath();\n\t\tctx.fillStyle = this.rings.color;\n\t\tctx.ellipse(this.pos.x, y, \n\t\t\tthis.rings.radius*radiusMult, \n\t\t\tthis.rings.radius/2*radiusMult,\n\t\t\tthis.rings.angle, start, start+Math.PI);\n\t\tctx.fill();\n\t}\n\n\n\tdrawPath(ctx, tilt) {\n\t\tctx.beginPath();\n\t\tctx.lineWidth = 1;\n\t\tctx.strokeStyle = \"white\";\n\t\tctx.ellipse(this.suns[0].getPosition().x, this.suns[0].getPosition().y,\n\t\t\tthis.distance, this.distance * tilt, 0, 0, 2 * Math.PI);\n\t\tctx.stroke();\n\t}\n\n\n}\n\nmodule.exports = OrbitingPlanet\n\n//# sourceURL=webpack:///./src/orbiting_planet.js?");

/***/ }),

/***/ "./src/solar_object.js":
/*!*****************************!*\
  !*** ./src/solar_object.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Utils = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\nclass SolarObject {\n\tconstructor(options) {\n\t\tthis.pos = options.pos;\n\t\tthis.radius = options.radius;\n\t\tthis.mass = options.mass;\n\t\tthis.color = options.color;\n\t\tthis.dir = options.dir;\n\t\tthis.speed = options.speed;\n\t\tthis.suns = options.suns;\n\t};\n\n\tgetPosition() { return this.pos; };\n\tgetMass() { return this.mass; };\n\t\n\n\tdraw(ctx){\n\t\tUtils.drawFilledCircle(ctx, this.pos.x, this.pos.y, this.radius, this.color);\n\t};\n\n\n}\n\nmodule.exports = SolarObject\n\n//# sourceURL=webpack:///./src/solar_object.js?");

/***/ }),

/***/ "./src/solar_system.js":
/*!*****************************!*\
  !*** ./src/solar_system.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Utils = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\nconst Star = __webpack_require__(/*! ./star */ \"./src/star.js\");\n\nclass SolarSystem {\n\n\tconstructor(tilt) {\n\t\tthis.suns = [];\n\t\tthis.planets = [];\n\t\tthis.path = [];\n\t\tthis.tilt = tilt;\n\n\t\tthis.stars = [];\n\t\tthis.createStarField();\n\t};\n\n\tgetTilt() { return this.tilt; };\n\tsetTilt(tilt) { this.tilt = tilt; };\n\tgetSuns() { return this.suns; };\n\n\taddSun(sun) {\n\t\tthis.suns.push(sun);\n\t};\n\n\taddPlanet(planet) {\n\t\tthis.planets.push(planet);\n\t};\n\n\n\t// factory method to create stars\n\t// a version of this came from http://thenewcode.com/81/Make-A-Starfield-Background-with-HTML5-Canvas\n\tcreateStarField() {\n\t\tconst starCount = 250;\n\t\tconst colorrange = [0, 60, 240];\n\n\t\tfor (let i = 0; i < starCount; i++) {\n\t\t\tthis.stars.push(new Star({\n\t\t\t\tpos: [Math.random() * Utils.getCanvasDim().x, Math.random() * Utils.getCanvasDim().y],\n\t\t\t\tradius: Math.random() * 2.0,\n\t\t\t\thue: colorrange[this.getRandom(0, colorrange.length - 1)],\n\t\t\t\tsat: this.getRandom(50, 100),\n\t\t\t}))\n\t\t}\n\t};\n\n\tgetRandom(min, max) {\n\t\treturn Math.floor(Math.random() * (max - min + 1)) + min;\n\t};\n\n\n\tstep() {\n\t\tthis.moveObjects();\n\t};\n\n\n\tdraw(ctx) {\n\n\t\tctx.clearRect(0, 0, Utils.getCanvasDim().x, Utils.getCanvasDim().y);\n\t\tctx.fillStyle = \"black\";\n\t\tctx.fillRect(0, 0, Utils.getCanvasDim().x, Utils.getCanvasDim().y);\n\t\t// this.path.forEach((dot) => Utils.drawFilledCircle(ctx, dot.x, dot.y, 1, \"white\"));\n\n\t\tthis.stars.forEach((star) => star.draw(ctx));\n\t\t\n\t\tthis.suns.forEach((sun) => sun.draw(ctx));\n\t\tthis.planets.forEach((planet) => planet.draw(ctx, this.tilt));\n\t};\n\n\tmoveObjects(){\n\t\tthis.planets.forEach((planet) => planet.move());\n\t};\n}\n\nmodule.exports = SolarSystem;\n\n\n//# sourceURL=webpack:///./src/solar_system.js?");

/***/ }),

/***/ "./src/solar_view.js":
/*!***************************!*\
  !*** ./src/solar_view.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const SolarSystem = __webpack_require__(/*! ./solar_system */ \"./src/solar_system.js\");\nconst SolarObject = __webpack_require__(/*! ./solar_object */ \"./src/solar_object.js\");\nconst OrbitingPlanet = __webpack_require__(/*! ./orbiting_planet */ \"./src/orbiting_planet.js\");\nconst Moon = __webpack_require__(/*! ./moon */ \"./src/moon.js\");\nconst Utils = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\nclass SolarView {\n\tconstructor(ctx) {\n\t\tthis.ctx = ctx;\n\t\tthis.ss = new SolarSystem(.5);\n\n\t\tthis.addScen1();\n\t\tthis.pause = false;\n\t}\n\t\n\n\tgetSS() { return this.ss; };\n\n\taddScen1() {\n\n\t\tthis.addSun(Utils.getCanvasDim().x / 2, Utils.getCanvasDim().y / 2, \n\t\t\t60, 300,\"yellow\");\n\n\n\t\tthis.ss.addPlanet(\n\t\t\tnew OrbitingPlanet({\n\t\t\t\tpos: { x: Utils.getCanvasDim().x -200, y: Utils.getCanvasDim().y/2 },\n\t\t\t\tradius: 9,\n\t\t\t\tcolor: \"blue\",\n\t\t\t\tmass: 10,\n\t\t\t\tsuns: this.ss.getSuns(),\n\t\t\t\tspeed:3,\n\t\t\t\tdir: {x: 0, y: -1},\n\t\t\t\tpath: true,\n\t\t\t\trings: { color: \"brown\", radius: 14, angle: Math.PI / 4 }\n\t\t\t})\n\t\t);\n\n\t\tconst jup = new OrbitingPlanet({\n\t\t\tpos: { x: Utils.getCanvasDim().x - 50, y: Utils.getCanvasDim().y / 2 },\n\t\t\tradius: 12,\n\t\t\tcolor: \"orange\",\n\t\t\tmass: 40,\n\t\t\tsuns: this.ss.getSuns(),\n\t\t\tspeed: 1.95,\n\t\t\tdir: { x: 0, y: -1 },\n\t\t\tpath: true\n\t\t});\n\n\t\tconst moon = new Moon({\n\t\t\tpos: { x: jup.getPosition().x - 50, y: jup.getPosition().y },\n\t\t\tradius: 2,\n\t\t\tcolor: \"pink\",\n\t\t\tmass: 1.5,\n\t\t\tsuns: [jup],\n\t\t\tspeed: 2,\n\t\t\tdir: { x: 0, y: -1 }\n\t\t});\n\n\t\tjup.addMoon(moon);\n\n\t\tthis.ss.addPlanet(jup);\n\n\n\t\tthis.ss.addPlanet(\n\t\t\tnew OrbitingPlanet({\n\t\t\t\tpos: { x: 600, y: 700 },\n\t\t\t\tradius: 2,\n\t\t\t\tcolor: \"white\",\n\t\t\t\tmass: 1,\n\t\t\t\tsuns: this.ss.getSuns(),\n\t\t\t\tspeed: 1.8,\n\t\t\t\tdir: { x: 0, y: -1 }\n\t\t\t})\n\t\t);\n\n\t\tthis.ss.addPlanet(\n\t\t\tnew OrbitingPlanet({\n\t\t\t\tpos: { x:300, y: Utils.getCanvasDim().y / 2 },\n\t\t\t\tradius: 6,\n\t\t\t\tcolor: \"red\",\n\t\t\t\tmass: 8,\n\t\t\t\tsuns: this.ss.getSuns(),\n\t\t\t\tspeed:5,\n\t\t\t\tdir: { x: 0, y: 1 },\n\t\t\t\tpath: true\n\t\t\t})\n\t\t);\n\n\t}\n\n\n\taddSun(x,y,radius,mass,color) {\n\t\tconst gradient = this.ctx.createRadialGradient(x, y, radius / 4, x,y, radius);\n\t\tgradient.addColorStop(0, color);\n\t\tgradient.addColorStop(1, \"transparent\");\n\n\t\tthis.ss.addSun(\n\t\t\tnew SolarObject({ pos: { x, y }, radius, color: gradient, mass})\n\t\t);\n\t};\n\n\n\tpauseGameToggle() {\n\t\tthis.pause = this.pause === false;\n\t};\n\n\n\tstart(){\n\t\trequestAnimationFrame(this.animate.bind(this));\n\t};\n\n\n\tanimate(){\n\n\t\tif (!this.pause) this.ss.step();\n\t\tthis.ss.draw(this.ctx);\n\t\trequestAnimationFrame(this.animate.bind(this));\n\t};\n};\nmodule.exports = SolarView;\n\n//# sourceURL=webpack:///./src/solar_view.js?");

/***/ }),

/***/ "./src/star.js":
/*!*********************!*\
  !*** ./src/star.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Utils = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\nclass Star {\n\tconstructor(options){\n\n\t\tthis.pos = options.pos;\n\t\tthis.radius = options.radius;\n\t\tthis.hue = options.hue;\n\t\tthis.sat = options.sat;\n\t};\n\n\n\tdraw(ctx) {\n\t\tconst fillStyle = \"hsl(\" + this.hue + \", \" + this.sat + \"%, 88%)\";\n\t\tUtils.drawFilledCircle(ctx, this.pos[0], this.pos[1], this.radius, fillStyle);\n\t};\n\t\n\t\n\tshift(direction, speed) {\n\t\tsuper.shift(direction, speed);\n\n\t\tif (this.pos[0] > Utils.getCanvasDim().x) this.pos[0] = 0;\n\t\telse if (this.pos[0] < 0) this.pos[0] = Utils.getCanvasDim().x;\n\n\t\tif (this.pos[1] > Utils.getCanvasDim().y) this.pos[1] = 0;\n\t\telse if (this.pos[1] < 0) this.pos[1] = Utils.getCanvasDim().y;\n\t};\n\n}\n\nmodule.exports = Star;\n\n//# sourceURL=webpack:///./src/star.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Utils = {\n\n\tgetCanvasDim() { return {x:900, y:900}; },\n\n\tfindAngle(point1, point2) {\n\t\tconst xDelta = point2[0] - point1[0];\n\t\tconst yDelta = point2[1] - point1[1];\n\n\t\tconst arcTangent = Math.atan(yDelta / xDelta);\n\t\tlet angle;\n\n\t\tif (xDelta < 0) angle = arcTangent + Math.PI;\n\t\telse if (xDelta > 0 && yDelta < 0) angle = arcTangent + Math.PI * 2;\n\t\telse angle = arcTangent;\n\n\t\treturn angle;\n\t},\n\n\tdistance(obj1, obj2) {\n\t\tlet distance_x = obj1[0] - obj2[0];\n\t\tlet distance_y = obj1[1] - obj2[1];\n\t\treturn Math.sqrt(distance_x * distance_x + distance_y * distance_y);\n\t},\n\n\n\tdrawFilledCircle(ctx, x, y, radius, fillStyle) {\n\t\tctx.beginPath();\n\t\tctx.arc(x, y, radius, 0, Math.PI*2);\n\t\tctx.fillStyle = fillStyle;\n\t\tctx.fill();\n\t},\n\n}\nmodule.exports = Utils;\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });