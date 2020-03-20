const SolarSystem = require("./solar_system");
const SolarObject = require("./solar_object");
const OrbitingPlanet = require("./orbiting_planet");
const Moon = require("./moon");
const Utils = require("./utils");

class SolarView {
	constructor(ctx) {
		this.ctx = ctx;
		this.ss = new SolarSystem(.5);

		this.addScen2();
		// this.mouseDown = false;
		// this.mouseStartingPos = {x:0, y:0};
	}
	
	// getMouseDown() { return this.mouseDown; };
	// setMouseDown(b) { this.mouseDown = b; };
	// setMouseStartingPos(pos) {this.mouseStartingPos = pos;};
	getSS() { return this.ss; };



	addScen1() {

		this.addSun(Utils.getCanvasDim().x / 2, Utils.getCanvasDim().y / 2, 
			60, 300,"yellow");


		this.ss.addPlanet(
			new OrbitingPlanet({
				pos: { x: Utils.getCanvasDim().x -200, y: Utils.getCanvasDim().y/2 },
				radius: 9,
				color: "blue",
				mass: 10,
				suns: this.ss.getSuns(),
				speed:3,
				dir: {x: 0, y: -1},
				path:true
			})
		);

		const jup = new OrbitingPlanet({
			pos: { x: Utils.getCanvasDim().x - 50, y: Utils.getCanvasDim().y / 2 },
			radius: 12,
			color: "orange",
			mass: 40,
			suns: this.ss.getSuns(),
			// speed: 0,
			speed: 1.95,
			dir: { x: 0, y: -1 },
			path: true
		});

		const moon = new Moon({
			pos: { x: jup.getPosition().x - 50, y: jup.getPosition().y },
			radius: 2,
			color: "pink",
			mass: 1.5,
			suns: [jup],
			speed: 2,
			dir: { x: 0, y: -1 }
		});

		jup.addMoon(moon);

		this.ss.addPlanet(jup);

		

	};

	addScen2() {
		this.addScen1();

		this.ss.addPlanet(
			new OrbitingPlanet({
				pos: { x: 600, y: 700 },
				radius: 2,
				color: "white",
				mass: 1,
				suns: this.ss.getSuns(),
				speed: 1.8,
				dir: { x: 0, y: -1 }
			})
		);

		this.ss.addPlanet(
			new OrbitingPlanet({
				pos: { x:300, y: Utils.getCanvasDim().y / 2 },
				radius: 6,
				color: "red",
				mass: 8,
				suns: this.ss.getSuns(),
				speed:5,
				dir: { x: 0, y: 1 },
				path: true
			})
		);

	}


	addSun(x,y,radius,mass,color) {
		const gradient = this.ctx.createRadialGradient(x, y, radius / 4, x,y, radius);
		gradient.addColorStop(0, color);
		gradient.addColorStop(1, "transparent");

		this.ss.addSun(
			new SolarObject({ pos: { x, y }, radius, color: gradient, mass})
		);
	}

	start(){
		requestAnimationFrame(this.animate.bind(this));
	};

	animate(){

		this.ss.step();
		this.ss.draw(this.ctx);
		requestAnimationFrame(this.animate.bind(this));
	};
};
module.exports = SolarView;