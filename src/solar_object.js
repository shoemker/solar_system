const Utils = require("./utils");

class SolarObject {
	constructor(options) {
		this.pos = options.pos;
		this.radius = options.radius;
		this.mass = options.mass;
		this.color = options.color;
	};

	getPosition() { return this.pos; };
	getMass() { return this.mass; };

	draw(ctx){
		Utils.drawFilledCircle(ctx, this.pos.x, this.pos.y, this.radius, this.color);
	};


}

module.exports = SolarObject