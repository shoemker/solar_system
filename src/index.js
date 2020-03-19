const SolarView = require("./solar_view");
const Utils = require("./utils");

document.addEventListener("DOMContentLoaded", function () {
	const canvasEl = document.getElementsByTagName("canvas")[0];
	canvasEl.width = Utils.getCanvasDim().x;
	canvasEl.height =Utils.getCanvasDim().y;
	const ctx = canvasEl.getContext("2d");

	let gv = new SolarView(ctx)
	gv.start();

});