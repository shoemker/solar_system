const SolarObject = require("./solar_object");
const Utils = require("./utils");

class OrbitingPlanet extends SolarObject {
	constructor(options) {
		super(options);
		this.moons=[];
		this.path = options.path;
		this.moon = options.moon;
	};

	addMoon(moon) { this.moons.push(moon); };




	move() {
		this.suns.forEach(sun => {

			const constant = 2.5;
			this.distance = Utils.distance([this.pos.x, this.pos.y],
				[sun.getPosition().x, sun.getPosition().y]);

			const deltaX = (sun.getPosition().x - this.pos.x) / this.distance;
			const deltaY = (sun.getPosition().y - this.pos.y) / this.distance;
			const gravity = constant * this.getMass() * sun.getMass() / 
				(this.distance * this.distance);

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

	};


	draw(ctx, tilt) {
		if (this.path) this.drawPath(ctx, tilt);

		let orbitingPosY = this.suns[0].getPosition().y

		const distanceFromSunY = this.pos.y - orbitingPosY;
		const newY =  distanceFromSunY*tilt +orbitingPosY ;

		let radiusMult = 1 +  distanceFromSunY/300;

		radiusMult = radiusMult - radiusMult*tilt + 1;

		Utils.drawFilledCircle(ctx, 
			this.pos.x, newY, 
			this.radius * radiusMult, this.color);

		this.moons.forEach(moon => moon.draw(ctx, tilt, newY, radiusMult));
	}


	drawPath(ctx, tilt) {
		ctx.beginPath();
		ctx.lineWidth = 1;
		ctx.strokeStyle = "white";
		ctx.ellipse(this.suns[0].getPosition().x, this.suns[0].getPosition().y,
			this.distance, this.distance * tilt, 0, 0, 2 * Math.PI);
		ctx.stroke();
	}


}

module.exports = OrbitingPlanet