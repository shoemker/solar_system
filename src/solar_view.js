const SolarSystem = require("./solar_system");
const SSData1 = require("./ss_data1");

const Utils = require("./utils");

class SolarView {
	constructor(ctx) {
		this.ctx = ctx;
		this.center = {x:Utils.getCanvasDim().x / 2, y:Utils.getCanvasDim().y / 2};

		this.ss = new SolarSystem(.294, this.center);
		SSData1.addDataToSS(this.ctx, this.ss, this.center);

		this.pause = false;
	}
	

	getSS() { return this.ss; };


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