const Utils = require("./utils");

class SolarSystem {

	constructor() {
		this.suns = [];
		this.planets = [];
		this.path = [];
	};

	getSuns() { return this.suns; };
	getPath() { return this.path; };

	addSun(sun) {
		this.suns.push(sun);
	};

	addPlanet(planet) {
		// this.planets.push(planet.addPath(this.path));
		this.planets.push(planet);
	};


	step() {
		this.moveObjects();
	};

	draw(ctx) {
		ctx.clearRect(0, 0, Utils.getCanvasDim().x, Utils.getCanvasDim().y);
		ctx.fillStyle = "black";
		ctx.fillRect(0, 0, Utils.getCanvasDim().x, Utils.getCanvasDim().y);
		this.suns.forEach((sun) => sun.draw(ctx));
		this.planets.forEach((planet) => planet.draw(ctx));
		// this.path.forEach((dot) => Utils.drawFilledCircle(ctx, dot.x, dot.y, 1,"white"));

	};

	moveObjects(){
		this.planets.forEach((planet) => planet.move());
	};
}

module.exports = SolarSystem;
