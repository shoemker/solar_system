const SolarObject = require("./solar_object");
const Utils = require("./utils");

class OrbitingPlanet extends SolarObject {
	constructor(options) {
		super(options);
		this.moons=[];
		this.path = options.path;
		this.moon = options.moon;
		this.rings = options.rings;
		this.gradient = options.gradient;

		this.yAfterTilt;
	};

	addMoon(moon) { this.moons.push(moon); };
	

	move() {
		this.suns.forEach(sun => {

			const constant = 2.5;
			this.distance = Utils.distance([this.pos.x, this.pos.y],
				[sun.getPosition().x, sun.getPosition().y]);

			const deltaX = sun.getPosition().x - this.pos.x;
			const deltaY = sun.getPosition().y - this.pos.y;

			const gravity = constant * this.getMass() * sun.getMass() / 
				(this.distance * this.distance);

			this.dir.x += deltaX / this.distance * gravity / this.mass;
			this.dir.y += deltaY / this.distance * gravity / this.mass;
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

		let orbitingPosY = this.suns[0].getPosition().y;

		const distanceFromSunY = this.pos.y - orbitingPosY;
		this.yAfterTilt =  distanceFromSunY*tilt +orbitingPosY ;

		this.radiusMult = 1 +  distanceFromSunY/300;

		this.radiusMult = this.radiusMult - this.radiusMult*tilt + 1;

		if (this.gradient) 
			this.generateGradient(ctx, this.pos.x, this.yAfterTilt, this.radius*this.radiusMult);

		// back of rings drawn
		if (this.rings) this.drawRings(ctx, this.yAfterTilt, Math.PI);

		// planet drawn
		Utils.drawFilledCircle(ctx, 
			this.pos.x, this.yAfterTilt, 
			this.radius * this.radiusMult, this.color);

		// front of rings drawn
		if (this.rings) this.drawRings(ctx, this.yAfterTilt, 0);

		this.moons.forEach(moon => moon.draw(ctx, tilt, this.yAfterTilt, this.radiusMult));
	};


	generateGradient(ctx,x,y,radius){
		const grd = ctx.createLinearGradient(x-radius, y, x+radius,y);
		grd.addColorStop(0, this.gradient.a);
		grd.addColorStop(1, this.gradient.b);

		this.color = grd;
	};


	drawRings(ctx, y, start) {
		ctx.beginPath();
		ctx.lineWidth = this.rings.thickness * this.radiusMult;
		ctx.strokeStyle = this.rings.color;
		ctx.ellipse(this.pos.x, y, 
			this.rings.radius*this.radiusMult, 
			this.rings.radius/3*this.radiusMult,
			this.rings.angle, start-.1, start+Math.PI+.1);
		ctx.stroke();
	};


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