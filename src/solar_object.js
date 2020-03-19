const Utils = require("./utils");

class SolarObject {
	constructor(options) {
		this.pos = options.pos;
		this.radius = options.radius;
		this.mass = options.mass;
		this.color = options.color;
		this.dir = options.dir;
		this.speed = options.speed;
		this.suns = options.suns;
	};

	getPosition() { return this.pos; };
	getMass() { return this.mass; };
	
	addPath(path) { this.path = path; };

	draw(ctx){
		Utils.drawFilledCircle(ctx, this.pos.x, this.pos.y, this.radius, this.color);
	};


}

module.exports = SolarObject