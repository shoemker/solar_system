const SolarSystem = require("./solarSystem/solar_system");
const SSData1 = require("./solarSystem/ss_data1");
const SSData2 = require("./solarSystem/ss_data2");

const Utils = require("./utils");

class SolarView {
	constructor(ctx) {
		this.ctx = ctx;

		this.ss = new SolarSystem(300, Utils.getCanvasDim().y);
		SSData2.addDataToSS(this.ss);

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
		this.ctx.clearRect(0, 0, Utils.getCanvasDim().x, Utils.getCanvasDim().y);
		this.ctx.fillStyle = "rgb(0,0,0)";
		this.ctx.fillRect(0, 0, Utils.getCanvasDim().x, Utils.getCanvasDim().y);

		if (!this.pause) this.ss.step();
		this.ss.draw(this.ctx);
		requestAnimationFrame(this.animate.bind(this));
	};
};

module.exports = SolarView;