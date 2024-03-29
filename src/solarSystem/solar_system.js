const Star = require("../non-ship_space_objects/star");
const Moon = require("./moon");
const Utils = require("../utils");

class SolarSystem {

	constructor(starCount, bottomOfStarField) {
		this.suns = [];
		this.planets = [];

		this.tilt = 1;
		this.center = { x: Utils.getCanvasDim().x / 2, y: Utils.getCanvasDim().y / 2 };

		this.stars = new Array(starCount);
		for (let i = 0; i < this.stars.length; i++) {
			const starData = Utils.createStarData(Utils.getCanvasDim().x, bottomOfStarField);
			this.stars[i] = new Star(starData);
		};	
	};

	getTilt() { return this.tilt; };
	setTilt(tilt) { this.tilt = tilt; };
	getSuns() { return this.suns; };
	getCenter() { return this.center; }
	setCenter(center) { this.center = center; }


	addSun(sun) {
		this.suns.push(sun);
	};


	addPlanet(planet) {
		let moon;
		
		// construct moons from data in the planet object
		if (planet.getMoonData()) {
			planet.getMoonData().forEach(data => {
				moon = new Moon(data);
				moon.addSun(planet);
				planet.addMoon(moon);
			})
		}
		this.planets.push(planet);
	};


	step() {
		this.moveObjects();
	};


	draw(ctx) {
		this.stars.forEach((star) => star.draw(ctx));
		

		// the sun and planets are sorted before they are drawn so that 
		// they are drawn correctly when they move in front of each other
		let all = this.suns.concat(this.planets);
		let cb = ((a, b) => (a.getPosition().y - b.getPosition().y));
		all.sort(cb);

		all.forEach((ele) => ele.drawPath(ctx, this.tilt));
		all.forEach((ele) => ele.draw(ctx, this.tilt));
	};

	moveObjects(){
		this.suns.forEach((sun) => sun.move());

		this.planets.forEach((planet) => planet.move());
	};
}

module.exports = SolarSystem;
