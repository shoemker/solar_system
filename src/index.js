const SolarView = require("./solar_view");
const Utils = require("./utils");

document.addEventListener("DOMContentLoaded", function () {
	const canvasEl = document.getElementsByTagName("canvas")[0];
	canvasEl.width = Utils.getCanvasDim().x;
	canvasEl.height =Utils.getCanvasDim().y;
	const ctx = canvasEl.getContext("2d");

	let gv = new SolarView(ctx)
	gv.start();

	// this.mouseDown = false;
	// this.mouseY = 0;

	// canvasEl.addEventListener('mousedown', (e) => {
	// 	this.mouseDown = true;
	// 	this.mouseY = e.offsetY;
	// });
	// canvasEl.addEventListener('mousemove', (e) => {
	// 	if (this.mouseDown) {
	// 		let tilt = gv.getSS().getAngle()
	// 	}
	// });
	// canvasEl.addEventListener('mouseup', () => {
	// 	this.mouseDown = false;
	// });

});