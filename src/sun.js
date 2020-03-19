const SolarObject = require("./solar_object");
const Utils = require("./utils");

class Sun extends SolarObject {
	constructor(options) {
		super(options);
		this.dir = options.dir;
		this.speed = options.speed;
		this.suns = options.suns;
	};

	draw(ctx) {

		const gradient = ctx.createRadialGradient(this.pos.x, this.pos.y, this.radius/2, this.pos.x, this.pos.y, this.radius*2);
		gradient.addColorStop(0, "yellow");
		gradient.addColorStop(1, "transparent");

		Utils.drawFilledCircle(ctx, this.pos.x, this.pos.y, this.radius*2, gradient);

		ctx.fill();
		// super.draw(ctx);
	};



}

module.exports = Sun;