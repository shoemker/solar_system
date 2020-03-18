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

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Utils = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\nconst SolarObject = __webpack_require__(/*! ./solar_object */ \"./src/solar_object.js\");\n\nclass Game {\n\n\tconstructor() {\n\t\tthis.sun = new SolarObject({\n\t\t\tpos: {x:Utils.getCanvasDim().x/2, y:Utils.getCanvasDim().y/2},\n\t\t\tradius:30,\n\t\t\tcolor: \"yellow\",\n\t\t\tmass: 30\n\t\t})\n\t};\n\n\tstep() {\n\t\tthis.moveObjects();\n\t};\n\n\tdraw(ctx) {\n\t\tctx.clearRect(0, 0, Utils.getCanvasDim().x, Utils.getCanvasDim().y);\n\t\tctx.fillStyle = \"black\";\n\t\tctx.fillRect(0, 0, Utils.getCanvasDim().x, Utils.getCanvasDim().y);\n\t\tthis.sun.draw(ctx);\n\t};\n\n\tmoveObjects(){\n\n\t};\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nclass GameView {\n\tconstructor(ctx) {\n\t\tthis.ctx = ctx;\n\t\tthis.game = new Game();\n\t}\n\n\tstart(){\n\t\trequestAnimationFrame(this.animate.bind(this));\n\t}\n\n\tanimate(){\n\n\t\tthis.game.step();\n\t\tthis.game.draw(this.ctx);\n\t\trequestAnimationFrame(this.animate.bind(this));\n\t}\n}\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\nconst Utils = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n\tconst canvasEl = document.getElementsByTagName(\"canvas\")[0];\n\tcanvasEl.width = Utils.getCanvasDim().x;\n\tcanvasEl.height =Utils.getCanvasDim().y;\n\tconst ctx = canvasEl.getContext(\"2d\");\n\n\tlet gv = new GameView(ctx)\n\tgv.start();\n\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/solar_object.js":
/*!*****************************!*\
  !*** ./src/solar_object.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Utils = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\nclass SolarObject {\n\tconstructor(options) {\n\t\tthis.pos = options.pos;\n\t\tthis.radius = options.radius;\n\t\tthis.mass = options.mass;\n\t\tthis.color = options.color;\n\t};\n\n\n\tdraw(ctx){\n\t\tUtils.drawFilledCircle(ctx, this.pos.x, this.pos.y, this.radius, this.color);\n\t}\n\n\n}\n\nmodule.exports = SolarObject\n\n//# sourceURL=webpack:///./src/solar_object.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Utils = {\n\n\tgetCanvasDim() { return {x:900, y:900}; },\n\n\tdrawFilledCircle(ctx, x, y, radius, fillStyle) {\n\t\tctx.beginPath();\n\t\tctx.arc(x, y, radius, 0, 360);\n\t\tctx.fillStyle = fillStyle;\n\t\tctx.fill();\n\t},\n\n}\nmodule.exports = Utils;\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });