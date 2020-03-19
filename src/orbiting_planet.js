const SolarObject = require("./solar_object");
const Utils = require("./utils");

class OrbitingPlanet extends SolarObject {
	constructor(options) {
		super(options);
		this.dir = options.dir;
		this.speed = options.speed;
		this.suns = options.suns;
	};


	move() {
		this.suns.forEach(sun => {
			// const angle = Utils.findAngle([this.pos.x,this.pos.y], 
			// 	[sun.getPositon().x, sun.getPosition().y])
			const constant = .25;
			const distance = Utils.distance([this.pos.x, this.pos.y],
				[sun.getPosition().x, sun.getPosition().y]);
			
			const deltaX = (sun.getPosition().x - this.pos.x) / distance;
			const deltaY = (sun.getPosition().y - this.pos.y) / distance;
			const gravity = constant * this.getMass() * sun.getMass() / (distance*distance);

			this.dir.x  +=  deltaX * gravity;
			this.dir.y += deltaY * gravity;
		});
		
		this.pos.x += this.dir.x * this.speed;
		this.pos.y += this.dir.y * this.speed;
	};


}

module.exports = OrbitingPlanet