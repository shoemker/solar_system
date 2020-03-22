const Utils = require("./utils");
const Star = require("./star");
const SolarObject = require("./solar_object");
const OrbitingPlanet = require("./orbiting_planet");
const Comet = require("./comet");
const Moon = require("./moon");

class SolarSystem {

	constructor(tilt, center) {
		this.suns = [];
		this.planets = [];

		this.tilt = tilt;
		this.center = center;

		this.stars = [];
		this.createStarField();
	};

	getTilt() { return this.tilt; };
	setTilt(tilt) { this.tilt = tilt; };
	getSuns() { return this.suns; };

	addSun(options) {
		options.centerOfSS = this.center;
		this.suns.push(new SolarObject(options));
	};


	addPlanet(options) {
		options.centerOfSS = this.center;
		this.planets.push(new OrbitingPlanet(options));
	};


	addComet(options) {
		options.centerOfSS = this.center;
		this.planets.push(new Comet(options));
	};


	addPlanetWithMoon(planetOptions, moonOptions) {
		moonOptions.centerOfSS = this.center;
		planetOptions.centerOfSS = this.center

		const moon = new Moon(moonOptions);
		const jup = new OrbitingPlanet(planetOptions);

		jup.addMoon(moon);
		moon.addSun(jup);

		this.planets.push(jup);
	};


	// factory method to create stars
	// a version of this came from http://thenewcode.com/81/Make-A-Starfield-Background-with-HTML5-Canvas
	createStarField() {
		const starCount = 250;
		const colorrange = [0, 60, 240];

		for (let i = 0; i < starCount; i++) {
			this.stars.push(new Star({
				pos: [Math.random() * Utils.getCanvasDim().x, Math.random() * Utils.getCanvasDim().y],
				radius: Math.random() * 2.0,
				hue: colorrange[this.getRandom(0, colorrange.length - 1)],
				sat: this.getRandom(50, 100),
			}))
		}
	};

	getRandom(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};


	step() {
		this.moveObjects();
	};


	draw(ctx) {

		ctx.clearRect(0, 0, Utils.getCanvasDim().x, Utils.getCanvasDim().y);
		ctx.fillStyle = "black";
		ctx.fillRect(0, 0, Utils.getCanvasDim().x, Utils.getCanvasDim().y);

		this.stars.forEach((star) => star.draw(ctx));

		this.suns.forEach((sun) => sun.draw(ctx));
		this.planets.forEach((planet) => planet.draw(ctx, this.tilt));
		// console.log(this.tilt);
	};

	moveObjects(){
		this.planets.forEach((planet) => planet.move());
	};
}

module.exports = SolarSystem;
