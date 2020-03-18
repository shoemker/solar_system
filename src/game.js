const Utils = require("./utils");
const SolarObject = require("./solar_object");

class Game {

	constructor() {
		this.sun = new SolarObject({
			pos: {x:Utils.getCanvasDim().x/2, y:Utils.getCanvasDim().y/2},
			radius:30,
			color: "yellow",
			mass: 30
		})
	};

	step() {
		this.moveObjects();
	};

	draw(ctx) {
		ctx.clearRect(0, 0, Utils.getCanvasDim().x, Utils.getCanvasDim().y);
		ctx.fillStyle = "black";
		ctx.fillRect(0, 0, Utils.getCanvasDim().x, Utils.getCanvasDim().y);
		this.sun.draw(ctx);
	};

	moveObjects(){

	};
}

module.exports = Game;