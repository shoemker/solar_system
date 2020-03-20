const Utils = require("./utils");

class SolarSystem {

	constructor(tilt) {
		this.suns = [];
		this.planets = [];
		this.path = [];
		this.tilt = tilt;
	};

	getTilt() { return this.tilt; };
	setTilt(tilt) { this.tilt = tilt; };
	getSuns() { return this.suns; };

	addSun(sun) {
		this.suns.push(sun);
	};

	addPlanet(planet) {
		this.planets.push(planet);
	};


	step() {
		this.moveObjects();
	};

	draw(ctx) {

		ctx.clearRect(0, 0, Utils.getCanvasDim().x, Utils.getCanvasDim().y);
		ctx.fillStyle = "black";
		ctx.fillRect(0, 0, Utils.getCanvasDim().x, Utils.getCanvasDim().y);
		// this.path.forEach((dot) => Utils.drawFilledCircle(ctx, dot.x, dot.y, 1, "white"));

		this.suns.forEach((sun) => sun.draw(ctx));
		this.planets.forEach((planet) => planet.draw(ctx, this.tilt));
	};

	moveObjects(){
		this.planets.forEach((planet) => planet.move());
	};
}

module.exports = SolarSystem;
