const SolarObject = require("./solar_object");
const Utils = require("./utils");

class OrbitingPlanet extends SolarObject {
	constructor(options) {
		super(options);
		this.moons=[];
	};

	addMoon(moon) { this.moons.push(moon); };

	move() {
		this.suns.forEach(sun => {

			const constant = 2.5;
			const distance = Utils.distance([this.pos.x, this.pos.y],
				[sun.getPosition().x, sun.getPosition().y]);

			const deltaX = (sun.getPosition().x - this.pos.x) / distance;
			const deltaY = (sun.getPosition().y - this.pos.y) / distance;
			const gravity = constant * this.getMass() * sun.getMass() / (distance * distance);

			this.dir.x += deltaX * gravity / this.mass;
			this.dir.y += deltaY * gravity / this.mass;
		});

		const movementX = this.dir.x * this.speed;
		const movementY = this.dir.y * this.speed;

		this.pos.x += movementX;
		this.pos.y += movementY;

		this.moons.forEach(moon =>{
			moon.shift(movementX, movementY);
			moon.move();
		});

		// this.path.push({x:this.pos.x, y:this.pos.y});
	};


	draw(ctx) {
		super.draw(ctx);
		this.moons.forEach(moon => moon.draw(ctx));

	}


}

module.exports = OrbitingPlanet