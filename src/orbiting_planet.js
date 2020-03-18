const SolarObject = require("./solar_object");

class OrbitingPlanet extends SolarObject {
	constructor(options) {
		super(options);
		this.direction = options.dir;
		this.speed = options.speed

	};


	move() {
		this.pos.x += this.direction.x * this.speed;
		this.pos.y -= this.direction.y * this.speed;
	};


}

module.exports = OrbitingPlanet