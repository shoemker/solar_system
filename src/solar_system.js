const Utils = require("./utils");

class SolarSystem {

	constructor() {
		this.suns = [];
		this.planets = [];
	};

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
		this.suns.forEach((sun) => sun.draw(ctx));
		this.planets.forEach((planet) => planet.draw(ctx));
	};

	moveObjects(){
		this.planets.forEach((planet) => planet.move());
	};
}

module.exports = SolarSystem;
