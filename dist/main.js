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

/***/ "./src/non-ship_space_objects/star.js":
/*!********************************************!*\
  !*** ./src/non-ship_space_objects/star.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Utils = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n\nclass Star {\n\tconstructor(options){\n\n\t\tthis.pos = options.pos;\n\t\tthis.radius = options.radius;\n\t\tthis.hue = options.hue;\n\t\tthis.sat = options.sat;\n\t};\n\n\n\tdraw(ctx) {\n\t\tconst fillStyle = \"hsl(\" + this.hue + \", \" + this.sat + \"%, 88%)\";\n\t\tUtils.drawFilledCircle(ctx, this.pos[0], this.pos[1], this.radius, fillStyle);\n\t};\n\t\n\t\n\tshift(direction, speed) {\n\t\tsuper.shift(direction, speed);\n\n\t\tif (this.pos[0] > Utils.getCanvasDim().x) this.pos[0] = 0;\n\t\telse if (this.pos[0] < 0) this.pos[0] = Utils.getCanvasDim().x;\n\n\t\tif (this.pos[1] > Utils.getCanvasDim().y) this.pos[1] = 0;\n\t\telse if (this.pos[1] < 0) this.pos[1] = Utils.getCanvasDim().y;\n\t};\n\n}\n\nmodule.exports = Star;\n\n//# sourceURL=webpack:///./src/non-ship_space_objects/star.js?");

/***/ }),

/***/ "./src/solarSystem/comet.js":
/*!**********************************!*\
  !*** ./src/solarSystem/comet.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const OrbitingPlanet = __webpack_require__(/*! ./orbiting_planet */ \"./src/solarSystem/orbiting_planet.js\");\nconst Utils = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n\nclass Comet extends OrbitingPlanet {\n\tconstructor(options) {\n\t\tsuper(options);\n\t\tthis.tailLength = 100;\n\t};\n\n\n\tdraw(ctx, tilt) {\n\t\ttilt -= .1;\n\n\t\tconst orbitPos = this.suns[0].getPosition();\n\t\tconst orbitRad = this.suns[0].radius;\n\n\t\t// hopefully comet isn't drawn when it's behind sun\n\t\tif (this.pos.x > orbitPos.x + orbitRad/3 || \n\t\t\tthis.pos.x < orbitPos.x - orbitRad/3 ||\n\t\t\tthis.pos.y > orbitPos.y) {\n\t\t\t\t\t\n\t\t\tsuper.draw(ctx, tilt);\n\t\t\tthis.drawTail(ctx,tilt);\n\t\t}\n\t};\n\n\n\t// the tail is a gradient in a triangle that extends behind the comet away from sun\n\tdrawTail(ctx,tilt) {\n\t\tlet y = this.yAfterTilt;\n\t\tlet x = this.pos.x;\n\n\t\tconst endOfTail = this.findEndOfTail(tilt);\n\n\t\tconst angle = Utils.findAngle([x,y], \n\t\t\t[this.suns[0].getPosition().x, this.suns[0].getPosition().y]);\n\n\t\tconst leftEdgeOfComet = this.getEdgeOfComet(x,y,angle + Math.PI / 2);\n\t\tconst rightEdgeOfComet = this.getEdgeOfComet(x,y,angle - Math.PI / 2);\n\n\t\tctx.fillStyle = this.createGradient(ctx, {x,y}, endOfTail);\n\n\t\tctx.moveTo(leftEdgeOfComet.x, leftEdgeOfComet.y);\n\t\tctx.lineTo(rightEdgeOfComet.x, rightEdgeOfComet.y);\n\t\tctx.lineTo(endOfTail.x, endOfTail.y);\n\t\tctx.lineTo(leftEdgeOfComet.x, leftEdgeOfComet.y);\n\t\tctx.fill();\n\t};\n\n\n\tcreateGradient(ctx, start, end) {\n\t\tconst gradient = ctx.createLinearGradient(start.x, start.y, end.x, end.y);\n\t\tgradient.addColorStop(0, this.color);\n\t\tgradient.addColorStop(1, \"transparent\");\n\t\treturn gradient;\n\t};\n\n\n\tgetEdgeOfComet(x, y, angle) {\n\t\tconst xOffset = Math.cos(angle) * this.radius * this.radiusMult;\n\t\tconst yOffset = Math.sin(angle) * this.radius * this.radiusMult;\n\n\t\treturn {x: x + xOffset, y: y + yOffset};\n\t};\n\n\n\tfindEndOfTail(tilt) {\n\t\tconst deltaX = this.pos.x - this.centerOfSS.x;\n\t\tconst deltaY = this.pos.y - this.centerOfSS.y;\n\n\t\tconst ratio = (this.tailLength + this.distance) / this.distance;\n\n\t\tlet tailX = deltaX * ratio + this.centerOfSS.x;\n\t\tlet tailY = deltaY * ratio + this.centerOfSS.y;\n\n\n\t\tconst distanceFromSunY = tailY - this.centerOfSS.y;\n\t\tconst tailYAfterTilt = distanceFromSunY * tilt + this.centerOfSS.y;\n\n\t\treturn {x:tailX, y:tailYAfterTilt};\n\t};\n\n}\n\nmodule.exports = Comet;\n\n//# sourceURL=webpack:///./src/solarSystem/comet.js?");

/***/ }),

/***/ "./src/solarSystem/moon.js":
/*!*********************************!*\
  !*** ./src/solarSystem/moon.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const OrbitingPlanet = __webpack_require__(/*! ./orbiting_planet */ \"./src/solarSystem/orbiting_planet.js\");\nconst Utils = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n\nclass Moon extends OrbitingPlanet {\n\tconstructor(options) {\n\t\tsuper(options);\n\t};\n\n\taddSun(sun) { this.suns.push(sun); };\n\n\n\tshift(shiftX, shiftY) {\n\t\tthis.pos.x +=\tshiftX;\n\t\tthis.pos.y += shiftY;\n\t}\n\n\tdraw(ctx, tilt, orbitCenterY, mult) {\n\t\tconst positionOffsetY = (this.pos.y - this.suns[0].getPosition().y) * tilt *mult;\n\n\t\tconst positionOffsetX = (this.pos.x - this.suns[0].getPosition().x);\n\t\tconst newX = this.suns[0].getPosition().x + positionOffsetX*mult;\n\n\t\tUtils.drawFilledCircle(ctx, newX, orbitCenterY + positionOffsetY, this.radius*mult, this.color);\n\t\t\n\t}\n}\n\nmodule.exports = Moon;\n\n//# sourceURL=webpack:///./src/solarSystem/moon.js?");

/***/ }),

/***/ "./src/solarSystem/orbiting_planet.js":
/*!********************************************!*\
  !*** ./src/solarSystem/orbiting_planet.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const SolarObject = __webpack_require__(/*! ./solar_object */ \"./src/solarSystem/solar_object.js\");\nconst Utils = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n\nclass OrbitingPlanet extends SolarObject {\n\tconstructor(options) {\n\t\tsuper(options);\n\t\tthis.path = options.path;\n\n\t\tthis.moons = [];\n\n\t\tthis.gradientColors = options.gradientColors;\n\n\t\tthis.rings = options.rings;\n\t\tthis.ringsColor = options.ringsColor;\n\t\tthis.yAfterTilt;\n\t};\n\n\taddMoon(moon) { this.moons.push(moon); };\n\tgetMoons() { return this.moons; };\n\n\tmove() {\n\t\tthis.suns.forEach(sun => {\n\n\t\t\tconst constant = 2.5;\n\t\t\tthis.distance = Utils.distance([this.pos.x, this.pos.y],\n\t\t\t\t[sun.getPosition().x, sun.getPosition().y]);\n\n\t\t\tconst deltaX = sun.getPosition().x - this.pos.x;\n\t\t\tconst deltaY = sun.getPosition().y - this.pos.y;\n\n\t\t\tconst gravity = constant * this.mass * sun.getMass() / \n\t\t\t\t(this.distance * this.distance);\n\n\t\t\t// mass of planet acutally cancels out so is actually unnecessary\n\t\t\tthis.dir.x += deltaX / this.distance * gravity / this.mass;\n\t\t\tthis.dir.y += deltaY / this.distance * gravity / this.mass;\n\t\t});\n\n\t\tconst movementX = this.dir.x * this.speed;\n\t\tconst movementY = this.dir.y * this.speed;\n\n\t\tthis.pos.x += movementX;\n\t\tthis.pos.y += movementY;\n\n\t\tthis.moons.forEach(moon =>{\n\t\t\tmoon.shift(movementX, movementY);\n\t\t\tmoon.move();\n\t\t});\n\n\t};\n\n\n\tdraw(ctx, tilt) {\n\n\t\tlet orbitingPosY = this.centerOfSS.y;\n\n\t\tconst distanceFromSunY = this.pos.y - orbitingPosY;\n\t\tthis.yAfterTilt =  distanceFromSunY*tilt +orbitingPosY ;\n\n\t\tthis.radiusMult = 1 +  distanceFromSunY/300;\n\n\t\tthis.radiusMult = this.radiusMult - this.radiusMult*tilt + 1;\n\n\n\t\tif (this.gradientColors) this.color = this.generateRGradient(ctx, this.gradientColors);\n\t\t\n\t\t// back of rings drawn\n\t\tif (this.rings) \n\t\t\tthis.rings.forEach((ring)=> this.drawRings(ctx, ring, this.yAfterTilt, Math.PI));\n\n\t\t// planet drawn\n\t\tUtils.drawFilledCircle(ctx, \n\t\t\tthis.pos.x, this.yAfterTilt, \n\t\t\tthis.radius * this.radiusMult, this.color);\n\n\t\t// front of rings drawn\n\t\tif (this.rings)\n\t\t\tthis.rings.forEach((ring) => this.drawRings(ctx, ring, this.yAfterTilt, 0));\n\n\t\tthis.moons.forEach(moon => moon.draw(ctx, tilt, this.yAfterTilt, this.radiusMult));\n\t};\n\n\n\tgenerateRGradient(ctx, colors) {\n\t\tconst distance = Utils.distance([this.pos.x, this.yAfterTilt], \n\t\t\t[this.centerOfSS.x,this.centerOfSS.y]);\n\t\t\n\t\tconst gradient = ctx.createRadialGradient(\n\t\t\tthis.centerOfSS.x, this.centerOfSS.y-distance/8, distance-distance/10,\n\t\t\tthis.centerOfSS.x, this.centerOfSS.y-distance/8, distance+this.radius*2);\n\n\t\tgradient.addColorStop(0, colors.a);\n\t\tgradient.addColorStop(1, colors.b);\n\n\t\treturn gradient;\n\t};\n\n\n\tdrawRings(ctx, ring, y, start) {\n\t\tctx.beginPath();\n\t\tctx.lineWidth = ring.thickness * this.radiusMult;\n\t\tctx.strokeStyle = this.ringsColor;\n\t\tctx.ellipse(this.pos.x, y, \n\t\t\tring.radius*this.radiusMult, \n\t\t\tring.radius/3*this.radiusMult,\n\t\t\tring.angle, start-.01, start+Math.PI+.01);\n\t\tctx.stroke();\n\t};\n\n\n\n\tdrawPath(ctx, tilt) {\n\t\tif (this.path) {\n\t\t\tctx.beginPath();\n\t\t\tctx.lineWidth = 1;\n\t\t\tctx.strokeStyle = \"white\";\n\t\t\tctx.ellipse(this.centerOfSS.x, this.centerOfSS.y,\n\t\t\t\tthis.distance, this.distance * tilt, 0, 0, 2 * Math.PI);\n\t\t\tctx.stroke();\n\t\t}\n\t};\n}\n\nmodule.exports = OrbitingPlanet\n\n//# sourceURL=webpack:///./src/solarSystem/orbiting_planet.js?");

/***/ }),

/***/ "./src/solarSystem/solar_object.js":
/*!*****************************************!*\
  !*** ./src/solarSystem/solar_object.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Utils = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n\nclass SolarObject {\n\tconstructor(options) {\n\t\tthis.pos = options.pos;\n\t\tthis.radius = options.radius;\n\t\tthis.mass = options.mass;\n\t\tthis.color = options.color;\n\t\tthis.dir = options.dir;\n\t\tthis.speed = options.speed;\n\t\tthis.suns = options.suns;\n\t\tthis.centerOfSS = options.centerOfSS;\n\t};\n\n\tgetPosition() { return this.pos; };\n\tgetMass() { return this.mass; };\n\t\n\n\tdraw(ctx){\n\t\tUtils.drawFilledCircle(ctx, this.pos.x, this.pos.y, this.radius, this.color);\n\t};\n\n\n}\n\nmodule.exports = SolarObject\n\n//# sourceURL=webpack:///./src/solarSystem/solar_object.js?");

/***/ }),

/***/ "./src/solarSystem/solar_system.js":
/*!*****************************************!*\
  !*** ./src/solarSystem/solar_system.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Star = __webpack_require__(/*! ../non-ship_space_objects/star */ \"./src/non-ship_space_objects/star.js\");\nconst SolarObject = __webpack_require__(/*! ./solar_object */ \"./src/solarSystem/solar_object.js\");\nconst OrbitingPlanet = __webpack_require__(/*! ./orbiting_planet */ \"./src/solarSystem/orbiting_planet.js\");\nconst Comet = __webpack_require__(/*! ./comet */ \"./src/solarSystem/comet.js\");\nconst Moon = __webpack_require__(/*! ./moon */ \"./src/solarSystem/moon.js\");\nconst Utils = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n\nclass SolarSystem {\n\n\tconstructor(tilt, starCount, bottomOfStarField) {\n\t\tthis.suns = [];\n\t\tthis.planets = [];\n\n\t\tthis.tilt = tilt;\n\t\tthis.center = { x: Utils.getCanvasDim().x / 2, y: Utils.getCanvasDim().y / 2 };\n\n\t\tthis.stars = new Array(starCount);\n\t\tfor (let i = 0; i < this.stars.length; i++) {\n\t\t\tconst starData = Utils.createStarData(Utils.getCanvasDim().x, bottomOfStarField);\n\t\t\tthis.stars[i] = new Star(starData);\n\t\t};\t\n\t};\n\n\tgetTilt() { return this.tilt; };\n\tsetTilt(tilt) { this.tilt = tilt; };\n\tgetSuns() { return this.suns; };\n\tgetCenter() { return this.center; }\n\tsetCenter(center) { this.center = center; }\n\n\n\taddSun(ctx, options) {\n\t\toptions.centerOfSS = this.center;\n\n\t\tconst gradient = ctx.createRadialGradient(\n\t\t\toptions.pos.x, options.pos.y, options.radius / 4,\n\t\t\toptions.pos.x, options.pos.y, options.radius);\n\n\t\tgradient.addColorStop(0, options.color);\n\t\tgradient.addColorStop(1, \"transparent\");\n\n\t\toptions.color = gradient;\n\t\toptions.centerOfSS = this.center;\n\n\t\tthis.suns.push(new OrbitingPlanet(options));\n\t};\n\n\n\taddPlanet(options) {\n\t\toptions.centerOfSS = this.center;\n\t\tconst planet = new OrbitingPlanet(options);\n\t\tlet moon;\n\n\t\t// construct moons from data in datafile\n\t\tif (options.moonData) {\n\t\t\toptions.moonData.forEach(data => {\n\t\t\t\tmoon = new Moon(data);\n\t\t\t\tmoon.addSun(planet);\n\t\t\t\tplanet.getMoons().push(moon);\n\t\t\t})\n\t\t}\n\t\tthis.planets.push(planet);\n\t};\n\n\n\taddComet(options) {\n\t\toptions.centerOfSS = this.center;\n\t\tthis.planets.push(new Comet(options));\n\t};\n\n\n\tstep() {\n\t\tthis.moveObjects();\n\t};\n\n\n\tdraw(ctx) {\n\t\tthis.stars.forEach((star) => star.draw(ctx));\n\t\tthis.suns.forEach((sun) => sun.draw(ctx, this.tilt));\n\t\tthis.planets.forEach((planet) => planet.drawPath(ctx, this.tilt));\n\t\tthis.planets.forEach((planet) => planet.draw(ctx, this.tilt));\n\t};\n\n\tmoveObjects(){\n\t\tthis.planets.forEach((planet) => planet.move());\n\t};\n}\n\nmodule.exports = SolarSystem;\n\n\n//# sourceURL=webpack:///./src/solarSystem/solar_system.js?");

/***/ }),

/***/ "./src/solarSystem/ss_data1.js":
/*!*************************************!*\
  !*** ./src/solarSystem/ss_data1.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Utils = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\nconst SolarObject = __webpack_require__(/*! ./solar_object */ \"./src/solarSystem/solar_object.js\");\n\nconst SSData1 = {\n\t\n\n\taddDataToSS(ctx, ss, center) {\n\t\tif (center) ss.setCenter(center);\n\t\telse center = ss.getCenter();\n\t\tlet x;\n\t\tlet y;\n\n\t\t// const o = new SolarObject( {\n\t\t// \tpos: center,\n\t\t// \tradius: 60,\n\t\t// \tmass: 300,\n\t\t// \tcolor: \"yellow\"\n\t\t// });\n\n\t\tss.addSun(ctx, \n\t\t\t{ pos: center,\n\t\t\tradius: 60,\n\t\t\tmass: 300,\n\t\t\tcolor: \"yellow\",\n\t\t\tspeed: 0,\n\t\t\tsuns: [],\n\t\t\tdir: {x:0, y:0}\n\t\t});\n\n\n\t\tx = center.x - 150\n\t\ty = center.y\n\n\t\tconst vensMoon = {\n\t\t\tpos: { x: x - 15, y:y },\n\t\t\tradius: 1,\n\t\t\tcolor: \"lightgreen\",\n\t\t\tmass: .3,\n\t\t\tspeed: 1,\n\t\t\tdir: { x: 0, y: -1 },\n\t\t\tsuns: []\n\t\t};\n\n\t\tss.addPlanet( {\n\t\t\tpos: { x, y },\n\t\t\tradius: 6,\n\t\t\tgradientColors: { a: \"lightgreen\", b: \"darkgreen\" },\n\t\t\tmass: 8,\n\t\t\tsuns: ss.getSuns(),\n\t\t\tspeed: 4.98,\n\t\t\tdir: { x: 0, y: 1 },\n\t\t\tpath: true,\n\t\t\tmoonData: [vensMoon]\n\t\t});\n\n\n\t\tss.addPlanet({\n\t\t\tpos: { x: center.x + 250, y: center.y },\n\t\t\tradius: 9,\n\t\t\tgradientColors: { a: \"lightblue\", b: \"blue\" },\n\t\t\tmass: 10,\n\t\t\tsuns: ss.getSuns(),\n\t\t\tspeed: 3,\n\t\t\tdir: { x: 0, y: -1 },\n\t\t\tpath: true,\n\t\t\tringsColor: \"darkblue\",\n\t\t\t// ringsGradient: { a: \"blue\", b: \"darkblue\" },\n\t\t\trings: [{radius: 18, angle: Math.PI / 6, thickness: 2 },\n\t\t\t\t{radius: 15, angle: Math.PI / 6, thickness: 2 },\n\t\t\t\t{radius: 12, angle: Math.PI / 6, thickness: 2 }]\n\t\t});\n\n\n\t\t// ss.addPlanet({\n\t\t// \tpos: { x: center.x -300, y: center.y },\n\t\t// \tradius: 3,\n\t\t// \tgradientColors: {a: \"#cc66ff\", b: \"#9900cc\" },\n\t\t// \tmass: 6,\n\t\t// \tsuns: ss.getSuns(),\n\t\t// \tspeed: 2.5,\n\t\t// \tdir: { x: 0, y: 1 },\n\t\t// \tpath: true,\n\t\t// });\n\n\t\tx = center.x + 400;\n\t\ty = center.y;\n\n\t\tconst jupsMoon = {\n\t\t\tpos: { x: x - 50, y },\n\t\t\tradius: 2,\n\t\t\tcolor: \"brown\",\n\t\t\tmass: 1.5,\n\t\t\tspeed: 2,\n\t\t\tdir: { x: 0, y: -1 },\n\t\t\tsuns: []\n\t\t};\n\n\t\tss.addPlanet( {\n\t\t\tpos: { x: x, y: y },\n\t\t\tradius: 12,\n\t\t\tgradientColors: { a: \"rgb(255, 153, 51)\", b: \"darkred\" },\n\t\t\tmass: 40,\n\t\t\tsuns: ss.getSuns(),\n\t\t\tspeed: 1.90,\n\t\t\tdir: { x: 0, y: -1 },\n\t\t\tpath: true,\n\t\t\tmoonData: [jupsMoon]\n\t\t});\n\n\n\n\t\tss.addComet({\n\t\t\tpos: { x: center.x + 150, y: center.y + 250 },\n\t\t\tradius: 1.5,\n\t\t\tcolor: \"rgb(255, 255, 204)\",\n\t\t\t// color: \"#9933ff\",\n\t\t\tmass: 1,\n\t\t\tsuns: ss.getSuns(),\n\t\t\tspeed: 1.8,\n\t\t\tdir: { x: 0, y: -1 },\n\t\t});\n\t}\n};\n\nmodule.exports = SSData1;\n\n\n//# sourceURL=webpack:///./src/solarSystem/ss_data1.js?");

/***/ }),

/***/ "./src/solarSystem/ss_data2.js":
/*!*************************************!*\
  !*** ./src/solarSystem/ss_data2.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Utils = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n\nconst SSData2 = {\n\n\taddDataToSS(ctx, ss) {\n\n\t\tconst center = { x: Utils.getCanvasDim().x / 2, y: Utils.getCanvasDim().y / 2 }\n\t\tss.setCenter(center);\n\n\n\t\tss.addSun(ctx,\n\t\t\t{\n\t\t\t\tpos: center,\n\t\t\t\tradius: 60,\n\t\t\t\tmass: 300,\n\t\t\t\tcolor: \"yellow\",\n\t\t\t\tspeed: 0,\n\t\t\t\tsuns: [],\n\t\t\t\tdir: { x: 0, y: 0 }\n\t\t\t});\n\t}\n\n}\n\nmodule.exports = SSData2;\n\n\n//# sourceURL=webpack:///./src/solarSystem/ss_data2.js?");

/***/ }),

/***/ "./src/solar_view.js":
/*!***************************!*\
  !*** ./src/solar_view.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const SolarSystem = __webpack_require__(/*! ./solarSystem/solar_system */ \"./src/solarSystem/solar_system.js\");\nconst SSData1 = __webpack_require__(/*! ./solarSystem/ss_data1 */ \"./src/solarSystem/ss_data1.js\");\nconst SSData2 = __webpack_require__(/*! ./solarSystem/ss_data2 */ \"./src/solarSystem/ss_data2.js\");\n\nconst Utils = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\nclass SolarView {\n\tconstructor(ctx) {\n\t\tthis.ctx = ctx;\n\n\t\tthis.ss = new SolarSystem(.294, 300, Utils.getCanvasDim().y);\n\t\tSSData1.addDataToSS(this.ctx, this.ss);\n\n\t\tthis.pause = false;\n\t}\n\t\n\n\tgetSS() { return this.ss; };\n\n\n\tpauseGameToggle() {\n\t\tthis.pause = this.pause === false;\n\t};\n\n\n\tstart(){\n\t\trequestAnimationFrame(this.animate.bind(this));\n\t};\n\n\n\tanimate(){\n\t\tthis.ctx.clearRect(0, 0, Utils.getCanvasDim().x, Utils.getCanvasDim().y);\n\t\tthis.ctx.fillStyle = \"rgb(0,0,0)\";\n\t\tthis.ctx.fillRect(0, 0, Utils.getCanvasDim().x, Utils.getCanvasDim().y);\n\n\t\tif (!this.pause) this.ss.step();\n\t\tthis.ss.draw(this.ctx);\n\t\trequestAnimationFrame(this.animate.bind(this));\n\t};\n};\n\nmodule.exports = SolarView;\n\n//# sourceURL=webpack:///./src/solar_view.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Utils = {\n\n\tgetCanvasDim() { return {x:900, y:900}; },\n\n\tfindAngle(point1, point2) {\n\t\tconst xDelta = point2[0] - point1[0];\n\t\tconst yDelta = point2[1] - point1[1];\n\n\t\tconst arcTangent = Math.atan(yDelta / xDelta);\n\t\tlet angle;\n\n\t\tif (xDelta < 0) angle = arcTangent + Math.PI;\n\t\telse if (xDelta > 0 && yDelta < 0) angle = arcTangent + Math.PI * 2;\n\t\telse angle = arcTangent;\n\n\t\treturn angle;\n\t},\n\t\n\n\tdistance(obj1, obj2) {\n\t\tlet distance_x = obj1[0] - obj2[0];\n\t\tlet distance_y = obj1[1] - obj2[1];\n\t\treturn Math.sqrt(distance_x * distance_x + distance_y * distance_y);\n\t},\n\n\n\t// kind of a factory method to create a star\n\t// a version of this came from http://thenewcode.com/81/Make-A-Starfield-Background-with-HTML5-Canvas\n\tcreateStarData(xRange, yRange) {\n\t\tconst colorrange = [0, 60, 240];\n\t\treturn {\n\t\t\tpos: [Math.random() * xRange, Math.random() * yRange],\n\t\t\tradius: Math.random() * 2.0,\n\t\t\thue: colorrange[Utils.getRandom(0, colorrange.length - 1)],\n\t\t\tsat: this.getRandom(50, 100),\n\t\t};\n\t},\n\t// helper method\n\tgetRandom(min, max) {\n\t\treturn Math.floor(Math.random() * (max - min + 1)) + min;\n\t},\n\n\n\tdrawFilledCircle(ctx, x, y, radius, fillStyle) {\n\t\tctx.beginPath();\n\t\tctx.arc(x, y, radius, 0, Math.PI*2);\n\t\tctx.fillStyle = fillStyle;\n\t\tctx.fill();\n\t},\n\n}\nmodule.exports = Utils;\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });