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

/***/ "./src/comet.js":
/*!**********************!*\
  !*** ./src/comet.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const OrbitingPlanet = __webpack_require__(/*! ./orbiting_planet */ \"./src/orbiting_planet.js\");\nconst Utils = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\nclass Comet extends OrbitingPlanet {\n\tconstructor(options) {\n\t\tsuper(options);\n\t\tthis.tailLength = 20;\n\t};\n\n\tdraw(ctx, tilt) {\n\t\ttilt -= .1;\n\n\t\tsuper.draw(ctx, tilt);\n\n\t\tthis.drawTail(ctx,tilt);\n\t}\n\n\tdrawTail(ctx,tilt) {\n\t\t// let y = this.yAfterTilt;\n\t\t// let x = this.pos.x;\n\n\t\tconst endOfTail = this.findEndOfTail(tilt);\n\n\n\n\t\tUtils.drawFilledCircle(ctx,\n\t\t\tendOfTail.x, endOfTail.y,\n\t\t\tthis.radius * this.radiusMult, this.color);\n\n\t}\n\n\tfindEndOfTail(tilt) {\n\t\tconst deltaX = this.pos.x - this.centerOfSS.x;\n\t\tconst deltaY = this.pos.y - this.centerOfSS.y;\n\n\t\tconst ratio = (this.tailLength + this.distance) / this.distance;\n\n\t\tlet tailX = deltaX * ratio + this.centerOfSS.x;\n\t\tlet tailY = deltaY * ratio + this.centerOfSS.y;\n\n\n\t\tconst distanceFromSunY = tailY - this.centerOfSS.y;\n\t\tconst tailYAfterTilt = distanceFromSunY * tilt + this.centerOfSS.y;\n\n\t\treturn {x:tailX, y:tailYAfterTilt};\n\t}\n\n}\n\nmodule.exports = Comet;\n\n//# sourceURL=webpack:///./src/comet.js?");

/***/ }),

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

eval("const OrbitingPlanet = __webpack_require__(/*! ./orbiting_planet */ \"./src/orbiting_planet.js\");\nconst Utils = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\nclass Moon extends OrbitingPlanet {\n\tconstructor(options) {\n\t\tsuper(options);\n\t};\n\n\taddSun(sun) { this.suns.push(sun); };\n\n\n\tshift(shiftX, shiftY) {\n\t\tthis.pos.x +=\tshiftX;\n\t\tthis.pos.y += shiftY;\n\t}\n\n\tdraw(ctx, tilt, orbitCenterY, mult) {\n\t\tconst positionOffsetY = (this.pos.y - this.suns[0].getPosition().y) * tilt *mult;\n\n\t\tconst positionOffsetX = (this.pos.x - this.suns[0].getPosition().x);\n\t\tconst newX = this.suns[0].getPosition().x + positionOffsetX*mult;\n\n\t\tUtils.drawFilledCircle(ctx, newX, orbitCenterY + positionOffsetY, this.radius*mult, this.color);\n\t\t\n\t}\n}\n\nmodule.exports = Moon;\n\n//# sourceURL=webpack:///./src/moon.js?");

/***/ }),

/***/ "./src/orbiting_planet.js":
/*!********************************!*\
  !*** ./src/orbiting_planet.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const SolarObject = __webpack_require__(/*! ./solar_object */ \"./src/solar_object.js\");\nconst Utils = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\nclass OrbitingPlanet extends SolarObject {\n\tconstructor(options) {\n\t\tsuper(options);\n\t\tthis.path = options.path;\n\n\t\tthis.moons = [];\n\n\t\tthis.rings = options.rings;\n\t\tthis.gradientColors = options.gradientColors;\n\t\tthis.centerOfSS = options.centerOfSS;\n\t\tthis.yAfterTilt;\n\t};\n\n\taddMoon(moon) { this.moons.push(moon); };\n\t\n\n\tmove() {\n\t\tthis.suns.forEach(sun => {\n\n\t\t\tconst constant = 2.5;\n\t\t\tthis.distance = Utils.distance([this.pos.x, this.pos.y],\n\t\t\t\t[sun.getPosition().x, sun.getPosition().y]);\n\n\t\t\tconst deltaX = sun.getPosition().x - this.pos.x;\n\t\t\tconst deltaY = sun.getPosition().y - this.pos.y;\n\n\t\t\tconst gravity = constant * this.getMass() * sun.getMass() / \n\t\t\t\t(this.distance * this.distance);\n\n\t\t\tthis.dir.x += deltaX / this.distance * gravity / this.mass;\n\t\t\tthis.dir.y += deltaY / this.distance * gravity / this.mass;\n\t\t});\n\n\t\tconst movementX = this.dir.x * this.speed;\n\t\tconst movementY = this.dir.y * this.speed;\n\n\t\tthis.pos.x += movementX;\n\t\tthis.pos.y += movementY;\n\n\t\tthis.moons.forEach(moon =>{\n\t\t\tmoon.shift(movementX, movementY);\n\t\t\tmoon.move();\n\t\t});\n\n\t};\n\n\n\tdraw(ctx, tilt) {\n\t\tif (this.path) this.drawPath(ctx, tilt);\n\n\t\tlet orbitingPosY = this.centerOfSS.y;\n\n\t\tconst distanceFromSunY = this.pos.y - orbitingPosY;\n\t\tthis.yAfterTilt =  distanceFromSunY*tilt +orbitingPosY ;\n\n\t\tthis.radiusMult = 1 +  distanceFromSunY/300;\n\n\t\tthis.radiusMult = this.radiusMult - this.radiusMult*tilt + 1;\n\n\t\tif (this.gradientColors) {\n\t\t\tthis.color = this.generateGradient(ctx, this.pos.x, this.yAfterTilt, \n\t\t\t\tthis.radius*this.radiusMult);\n\t\t}\n\n\t\t// back of rings drawn\n\t\tif (this.rings) \n\t\t\tthis.rings.forEach((ring)=> this.drawRings(ctx, ring, this.yAfterTilt, Math.PI));\n\n\t\t// planet drawn\n\t\tUtils.drawFilledCircle(ctx, \n\t\t\tthis.pos.x, this.yAfterTilt, \n\t\t\tthis.radius * this.radiusMult, this.color);\n\n\t\t// front of rings drawn\n\t\tif (this.rings)\n\t\t\tthis.rings.forEach((ring) => this.drawRings(ctx, ring, this.yAfterTilt, 0));\n\n\t\tthis.moons.forEach(moon => moon.draw(ctx, tilt, this.yAfterTilt, this.radiusMult));\n\t};\n\n\n\tgenerateGradient(ctx,x,y,radius){\n\t\tconst gradient = ctx.createLinearGradient(x-radius, y, x+radius,y);\n\t\tgradient.addColorStop(0, this.gradientColors.a);\n\t\tgradient.addColorStop(1, this.gradientColors.b);\n\n\t\treturn gradient;\n\t};\n\n\n\tdrawRings(ctx, ring, y, start) {\n\t\tctx.beginPath();\n\t\tctx.lineWidth = ring.thickness * this.radiusMult;\n\t\tctx.strokeStyle = ring.color;\n\t\tctx.ellipse(this.pos.x, y, \n\t\t\tring.radius*this.radiusMult, \n\t\t\tring.radius/3*this.radiusMult,\n\t\t\tring.angle, start-.01, start+Math.PI+.01);\n\t\tctx.stroke();\n\t};\n\n\n\tdrawPath(ctx, tilt) {\n\t\tctx.beginPath();\n\t\tctx.lineWidth = 1;\n\t\tctx.strokeStyle = \"white\";\n\t\tctx.ellipse(this.centerOfSS.x, this.centerOfSS.y,\n\t\t\tthis.distance, this.distance * tilt, 0, 0, 2 * Math.PI);\n\t\tctx.stroke();\n\t};\n}\n\nmodule.exports = OrbitingPlanet\n\n//# sourceURL=webpack:///./src/orbiting_planet.js?");

/***/ }),

/***/ "./src/solar_object.js":
/*!*****************************!*\
  !*** ./src/solar_object.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Utils = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\nclass SolarObject {\n\tconstructor(options) {\n\t\tthis.pos = options.pos;\n\t\tthis.radius = options.radius;\n\t\tthis.mass = options.mass;\n\t\tthis.color = options.color;\n\t\tthis.dir = options.dir;\n\t\tthis.speed = options.speed;\n\t\tthis.suns = options.suns;\n\t\tthis.centerOfSS = options.center;\n\t};\n\n\tgetPosition() { return this.pos; };\n\tgetMass() { return this.mass; };\n\t\n\n\tdraw(ctx){\n\t\tUtils.drawFilledCircle(ctx, this.pos.x, this.pos.y, this.radius, this.color);\n\t};\n\n\n}\n\nmodule.exports = SolarObject\n\n//# sourceURL=webpack:///./src/solar_object.js?");

/***/ }),

/***/ "./src/solar_system.js":
/*!*****************************!*\
  !*** ./src/solar_system.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Utils = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\nconst Star = __webpack_require__(/*! ./star */ \"./src/star.js\");\nconst SolarObject = __webpack_require__(/*! ./solar_object */ \"./src/solar_object.js\");\nconst OrbitingPlanet = __webpack_require__(/*! ./orbiting_planet */ \"./src/orbiting_planet.js\");\nconst Comet = __webpack_require__(/*! ./comet */ \"./src/comet.js\");\nconst Moon = __webpack_require__(/*! ./moon */ \"./src/moon.js\");\n\nclass SolarSystem {\n\n\tconstructor(tilt, center) {\n\t\tthis.suns = [];\n\t\tthis.planets = [];\n\n\t\tthis.tilt = tilt;\n\t\tthis.center = center;\n\n\t\tthis.stars = [];\n\t\tthis.createStarField();\n\t};\n\n\tgetTilt() { return this.tilt; };\n\tsetTilt(tilt) { this.tilt = tilt; };\n\tgetSuns() { return this.suns; };\n\n\taddSun(options) {\n\t\toptions.centerOfSS = this.center;\n\t\tthis.suns.push(new SolarObject(options));\n\t};\n\n\n\taddPlanet(options) {\n\t\toptions.centerOfSS = this.center;\n\t\tthis.planets.push(new OrbitingPlanet(options));\n\t};\n\n\n\taddComet(options) {\n\t\toptions.centerOfSS = this.center;\n\t\tthis.planets.push(new Comet(options));\n\t};\n\n\n\taddPlanetWithMoon(planetOptions, moonOptions) {\n\t\tmoonOptions.centerOfSS = this.center;\n\t\tplanetOptions.centerOfSS = this.center\n\n\t\tconst moon = new Moon(moonOptions);\n\t\tconst jup = new OrbitingPlanet(planetOptions);\n\n\t\tjup.addMoon(moon);\n\t\tmoon.addSun(jup);\n\n\t\tthis.planets.push(jup);\n\t};\n\n\n\t// factory method to create stars\n\t// a version of this came from http://thenewcode.com/81/Make-A-Starfield-Background-with-HTML5-Canvas\n\tcreateStarField() {\n\t\tconst starCount = 250;\n\t\tconst colorrange = [0, 60, 240];\n\n\t\tfor (let i = 0; i < starCount; i++) {\n\t\t\tthis.stars.push(new Star({\n\t\t\t\tpos: [Math.random() * Utils.getCanvasDim().x, Math.random() * Utils.getCanvasDim().y],\n\t\t\t\tradius: Math.random() * 2.0,\n\t\t\t\thue: colorrange[this.getRandom(0, colorrange.length - 1)],\n\t\t\t\tsat: this.getRandom(50, 100),\n\t\t\t}))\n\t\t}\n\t};\n\n\tgetRandom(min, max) {\n\t\treturn Math.floor(Math.random() * (max - min + 1)) + min;\n\t};\n\n\n\tstep() {\n\t\tthis.moveObjects();\n\t};\n\n\n\tdraw(ctx) {\n\n\t\tctx.clearRect(0, 0, Utils.getCanvasDim().x, Utils.getCanvasDim().y);\n\t\tctx.fillStyle = \"black\";\n\t\tctx.fillRect(0, 0, Utils.getCanvasDim().x, Utils.getCanvasDim().y);\n\n\t\tthis.stars.forEach((star) => star.draw(ctx));\n\n\t\tthis.suns.forEach((sun) => sun.draw(ctx));\n\t\tthis.planets.forEach((planet) => planet.draw(ctx, this.tilt));\n\t\t// console.log(this.tilt);\n\t};\n\n\tmoveObjects(){\n\t\tthis.planets.forEach((planet) => planet.move());\n\t};\n}\n\nmodule.exports = SolarSystem;\n\n\n//# sourceURL=webpack:///./src/solar_system.js?");

/***/ }),

/***/ "./src/solar_view.js":
/*!***************************!*\
  !*** ./src/solar_view.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const SolarSystem = __webpack_require__(/*! ./solar_system */ \"./src/solar_system.js\");\n\nconst Utils = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\nclass SolarView {\n\tconstructor(ctx) {\n\t\tthis.ctx = ctx;\n\t\tthis.center = {x:Utils.getCanvasDim().x / 2, y:Utils.getCanvasDim().y / 2};\n\t\tthis.ss = new SolarSystem(.294, this.center);\n\n\t\tthis.addScen1();\n\t\tthis.pause = false;\n\t}\n\t\n\n\tgetSS() { return this.ss; };\n\n\taddScen1() {\n\n\t\tthis.addSun({\n\t\t\tpos:this.center, \n\t\t\tradius:60, \n\t\t\tmass:300, \n\t\t\tcolor: \"yellow\"\n\t\t});\n\n\n\t\tthis.ss.addPlanet({\n\t\t\tpos: { x: this.center.x + 250, y: this.center.y },\n\t\t\tradius: 9,\n\t\t\tgradientColors: { a: \"blue\", b: \"lightblue\" },\n\t\t\tmass: 10,\n\t\t\tsuns: this.ss.getSuns(),\n\t\t\tspeed:3,\n\t\t\tdir: {x: 0, y: -1},\n\t\t\tpath: true,\n\t\t\trings: [{ color: \"darkblue\", radius: 18, angle: Math.PI /6, thickness:2 },\n\t\t\t\t{ color: \"darkblue\", radius: 15, angle: Math.PI / 6, thickness:2 },\n\t\t\t\t{ color: \"darkblue\", radius: 12, angle: Math.PI / 6, thickness: 2 }]\n\t\t});\n\t\n\n\t\tconst jup = {\n\t\t\tpos: { x: this.center.x + 400, y: this.center.y },\n\t\t\tradius: 12,\n\t\t\tgradientColors: {a: \"orange\", b: \"red\"},\n\t\t\tmass: 40,\n\t\t\tsuns: this.ss.getSuns(),\n\t\t\tspeed: 1.95,\n\t\t\tdir: { x: 0, y: -1 },\n\t\t\tpath: true\n\t\t};\n\n\t\tconst jupsMoon = {\n\t\t\tpos: { x: jup.pos.x - 50, y: jup.pos.y },\n\t\t\tradius: 2,\n\t\t\tcolor: \"pink\",\n\t\t\tmass: 1.5,\n\t\t\tspeed: 2,\n\t\t\tdir: { x: 0, y: -1 },\n\t\t\tsuns : []\n\t\t};\n\n\n\t\tthis.ss.addPlanetWithMoon(jup, jupsMoon);\n\n\n\t\tthis.ss.addComet({\n\t\t\tpos: { x: this.center.x + 150, y: this.center.y + 250 },\n\t\t\tradius: 2,\n\t\t\tcolor: \"white\",\n\t\t\tmass: 1,\n\t\t\tsuns: this.ss.getSuns(),\n\t\t\tspeed: 1.8,\n\t\t\tdir: { x: 0, y: -1 },\n\t\t});\n\t\t\n\n\t\tthis.ss.addPlanet({\n\t\t\tpos: { x: this.center.x - 150, y: this.center.y },\n\t\t\tradius: 6,\n\t\t\tgradientColors: { a: \"green\", b: \"lightgreen\" },\n\t\t\tmass: 8,\n\t\t\tsuns: this.ss.getSuns(),\n\t\t\tspeed:5,\n\t\t\tdir: { x: 0, y: 1 },\n\t\t\tpath: true\n\t\t});\n\t\t\n\n\t}\n\n\n\t// this logic needs to be in here insead of in solar_system because of access\n\t// to ctx\n\taddSun(options){\n\t\tconst gradient = this.ctx.createRadialGradient(\n\t\t\toptions.pos.x, options.pos.y, options.radius / 4,\n\t\t\toptions.pos.x, options.pos.y, options.radius);\n\n\t\tgradient.addColorStop(0, options.color);\n\t\tgradient.addColorStop(1, \"transparent\");\n\t\toptions.color = gradient;\n\n\t\tthis.ss.addSun(options);\n\t}\n\n\n\n\tpauseGameToggle() {\n\t\tthis.pause = this.pause === false;\n\t};\n\n\n\tstart(){\n\t\trequestAnimationFrame(this.animate.bind(this));\n\t};\n\n\n\tanimate(){\n\n\t\tif (!this.pause) this.ss.step();\n\t\tthis.ss.draw(this.ctx);\n\t\trequestAnimationFrame(this.animate.bind(this));\n\t};\n};\nmodule.exports = SolarView;\n\n//# sourceURL=webpack:///./src/solar_view.js?");

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