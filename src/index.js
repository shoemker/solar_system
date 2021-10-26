const SolarView = require("./solar_view");
const Utils = require("./utils");

document.addEventListener("DOMContentLoaded", function () {
	const canvasEl = document.getElementsByTagName("canvas")[0];
	canvasEl.width = Utils.getCanvasDim().x;
	canvasEl.height =Utils.getCanvasDim().y;
	const ctx = canvasEl.getContext("2d");

	let sv = new SolarView(ctx)
	sv.start();

	this.mouseDown = false;
	this.mouseY = 0;

	canvasEl.addEventListener('mousedown', (e) => {
		this.mouseDown = true;
		this.mouseY = e.offsetY;
	});

	canvasEl.addEventListener('mousemove', (e) => {
		if (this.mouseDown) {
			let tilt = sv.getSS().getTilt();

			const deltaY = e.offsetY - this.mouseY;

			tilt += deltaY/500;

			if (tilt > 1) tilt = 1;
			else if (tilt < 0) tilt = 0;

			sv.getSS().setTilt(tilt);
			this.mouseY = e.offsetY;
		}
	});

	canvasEl.addEventListener('mouseup', () => {
		this.mouseDown = false;
	});

	window.addEventListener('keydown', (e) => {
		// p pauses game
		if (e.target == document.body && e.key === 'p') sv.pauseGameToggle(); 
	});
});