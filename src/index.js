const SolarView = require("./solar_view");
const Utils = require("./utils");

document.addEventListener("DOMContentLoaded", function () {
	const canvasEl = document.getElementsByTagName("canvas")[0];
	canvasEl.width = Utils.getCanvasDim().x;
	canvasEl.height =Utils.getCanvasDim().y;
	const ctx = canvasEl.getContext("2d");

	let gv = new SolarView(ctx)
	gv.start();

	this.mouseDown = false;
	this.mouseY = 0;

	canvasEl.addEventListener('mousedown', (e) => {
		this.mouseDown = true;
		this.mouseY = e.offsetY;
	});
	canvasEl.addEventListener('mousemove', (e) => {
		if (this.mouseDown) {
			let tilt = gv.getSS().getTilt();

			const deltaY = e.offsetY - this.mouseY;

			tilt = tilt + deltaY/2000;

			if (tilt > 1) tilt = 1;
			else if (tilt < 0) tilt = 0;

			gv.getSS().setTilt(tilt);
			this.mouseY = e.offsetY;
		}
	});
	canvasEl.addEventListener('mouseup', () => {
		this.mouseDown = false;
	});

});