const Game = require("./game");

class GameView {
	constructor(ctx) {
		this.ctx = ctx;
		this.game = new Game();
	}

	start(){
		requestAnimationFrame(this.animate.bind(this));
	}

	animate(){

		this.game.step();
		this.game.draw(this.ctx);
		requestAnimationFrame(this.animate.bind(this));
	}
}
module.exports = GameView;