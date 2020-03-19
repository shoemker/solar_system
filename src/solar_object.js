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

	move() {
		this.suns.forEach(sun => {
			// const angle = Utils.findAngle([this.pos.x,this.pos.y], 
			// 	[sun.getPositon().x, sun.getPosition().y])
			const constant = .25;
			const distance = Utils.distance([this.pos.x, this.pos.y],
				[sun.getPosition().x, sun.getPosition().y]);

			const deltaX = (sun.getPosition().x - this.pos.x) / distance;
			const deltaY = (sun.getPosition().y - this.pos.y) / distance;
			const gravity = constant * this.getMass() * sun.getMass() / (distance * distance);

			this.dir.x += deltaX * gravity;
			this.dir.y += deltaY * gravity;
		});

		this.pos.x += this.dir.x * this.speed;
		this.pos.y += this.dir.y * this.speed;
	};

	draw(ctx){
		Utils.drawFilledCircle(ctx, this.pos.x, this.pos.y, this.radius, this.color);
	};


}

module.exports = SolarObject