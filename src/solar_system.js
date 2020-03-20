const Utils = require("./utils");

class SolarSystem {

	constructor(angle) {
		this.suns = [];
		this.planets = [];
		this.path = [];
		this.angle = angle;
	};

	getAngle() { return this.angle; };
	setAngle(angle) { this.angle = angle; };
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
		this.planets.forEach((planet) => planet.draw(ctx, this.angle));
	};

	moveObjects(){
		this.planets.forEach((planet) => planet.move());
	};
}

module.exports = SolarSystem;
