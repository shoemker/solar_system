const SolarSystem = require("./solar_system");
const Sun = require("./sun");
const OrbitingPlanet = require("./orbiting_planet");
const Utils = require("./utils");

class GameView {
	constructor(ctx) {
		this.ctx = ctx;
		this.ss = new SolarSystem();

		this.addScen1();
	}

	addScen1() {
		this.ss.addSun(
			new Sun({
				pos: { x: Utils.getCanvasDim().x / 2, y: Utils.getCanvasDim().y / 2 },
				radius: 15,
				color: "yellow",
				mass: 300
			})
		);

		this.ss.addPlanet(
			new OrbitingPlanet({
				pos: { x: Utils.getCanvasDim().x -200, y: Utils.getCanvasDim().y/2 },
				radius: 6,
				color: "blue",
				mass: 10,
				suns: this.ss.getSuns(),
				speed:3,
				dir: {x: 0, y: -1}
			})
		);

	};

	// addScen2() {
	// 	this.addScen1();

	// 	this.ss.addPlanet(
	// 		new OrbitingPlanet({
	// 			pos: { x: Utils.getCanvasDim().x - 50, y: Utils.getCanvasDim().y / 2 },
	// 			radius: 12,
	// 			color: "orange",
	// 			mass: 40,
	// 			suns: this.ss.getSuns(),
	// 			speed: 2,
	// 			dir: { x: 0, y: -1 }
	// 		})
	// 	);
	// }

	start(){
		requestAnimationFrame(this.animate.bind(this));
	};

	animate(){

		this.ss.step();
		this.ss.draw(this.ctx);
		requestAnimationFrame(this.animate.bind(this));
	};
};
module.exports = GameView;