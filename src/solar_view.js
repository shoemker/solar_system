const SolarSystem = require("./solar_system");

const Utils = require("./utils");

class SolarView {
	constructor(ctx) {
		this.ctx = ctx;
		this.center = {x:Utils.getCanvasDim().x / 2, y:Utils.getCanvasDim().y / 2};
		this.ss = new SolarSystem(.5, this.center);

		this.addScen1();
		this.pause = false;
	}
	

	getSS() { return this.ss; };

	addScen1() {

		this.addSun({
			pos:this.center, 
			radius:60, 
			mass:300, 
			color: "yellow"
		});


		this.ss.addPlanet({
			pos: { x: Utils.getCanvasDim().x -200, y: Utils.getCanvasDim().y/2 },
			radius: 9,
			color: "blue",
			mass: 10,
			suns: this.ss.getSuns(),
			speed:3,
			dir: {x: 0, y: -1},
			path: true,
			rings: { color: "darkblue", radius: 15, angle: Math.PI /6, thickness:5 }
		});
	

		const jup = {
			pos: { x: Utils.getCanvasDim().x - 50, y: Utils.getCanvasDim().y / 2 },
			radius: 12,
			gradient: {a: "orange", b: "red"},
			mass: 40,
			suns: this.ss.getSuns(),
			speed: 1.95,
			dir: { x: 0, y: -1 },
			path: true
		};

		const jupsMoon = {
			pos: { x: jup.pos.x - 50, y: jup.pos.y },
			radius: 2,
			color: "pink",
			mass: 1.5,
			speed: 2,
			dir: { x: 0, y: -1 },
			suns : []
		};


		this.ss.addPlanetWithMoon(jup, jupsMoon);


		this.ss.addComet({
			pos: { x: 600, y: 700 },
			radius: 2,
			color: "white",
			mass: 1,
			suns: this.ss.getSuns(),
			speed: 1.8,
			dir: { x: 0, y: -1 },
		});
		

		this.ss.addPlanet({
			pos: { x:300, y: Utils.getCanvasDim().y / 2 },
			radius: 6,
			gradient: { a: "green", b: "lightgreen" },
			mass: 8,
			suns: this.ss.getSuns(),
			speed:5,
			dir: { x: 0, y: 1 },
			path: true
		});
		

	}


	// this logic needs to be in here insead of in solar_system because of access
	// to ctx
	addSun(options){
		const gradient = this.ctx.createRadialGradient(
			options.pos.x, options.pos.y, options.radius / 4,
			options.pos.x, options.pos.y, options.radius);

		gradient.addColorStop(0, options.color);
		gradient.addColorStop(1, "transparent");
		options.color = gradient;

		this.ss.addSun(options);
	}



	pauseGameToggle() {
		this.pause = this.pause === false;
	};


	start(){
		requestAnimationFrame(this.animate.bind(this));
	};


	animate(){

		if (!this.pause) this.ss.step();
		this.ss.draw(this.ctx);
		requestAnimationFrame(this.animate.bind(this));
	};
};
module.exports = SolarView;