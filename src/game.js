const Utils = require("./utils");

class Game {

	constructor() {
	
	};

	step() {
		this.moveObjects();
	};

	draw(ctx) {
		ctx.clearRect(0, 0, Utils.getCanvasDim().x, Utils.getCanvasDim().y);
		ctx.fillStyle = "black";
		ctx.fillRect(0, 0, Utils.getCanvasDim().x, Utils.getCanvasDim().y);
	};

	moveObjects(){

	};
}

module.exports = Game;