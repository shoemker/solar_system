const SolarSystem = require("./solar_system");

const Utils = require("./utils");

class SolarView {
	constructor(ctx) {
		this.ctx = ctx;
		this.center = {x:Utils.getCanvasDim().x / 2, y:Utils.getCanvasDim().y / 2};
		this.ss = new SolarSystem(.294, this.center);

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
			pos: { x: this.center.x + 250, y: this.center.y },
			radius: 9,
			gradientColors: { a: "blue", b: "lightblue" },
			mass: 10,
			suns: this.ss.getSuns(),
			speed:3,
			dir: {x: 0, y: -1},
			path: true,
			rings: [{ color: "darkblue", radius: 18, angle: Math.PI /6, thickness:2 },
				{ color: "darkblue", radius: 15, angle: Math.PI / 6, thickness:2 },
				{ color: "darkblue", radius: 12, angle: Math.PI / 6, thickness: 2 }]
		});
	

		const jup = {
			pos: { x: this.center.x + 400, y: this.center.y },
			radius: 12,
			gradientColors: {a: "orange", b: "red"},
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
			pos: { x: this.center.x + 150, y: this.center.y + 250 },
			radius: 2,
			color: "white",
			mass: 1,
			suns: this.ss.getSuns(),
			speed: 1.8,
			dir: { x: 0, y: -1 },
		});
		

		this.ss.addPlanet({
			pos: { x: this.center.x - 150, y: this.center.y },
			radius: 6,
			gradientColors: { a: "green", b: "lightgreen" },
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