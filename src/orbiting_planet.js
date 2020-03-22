const SolarObject = require("./solar_object");
const Utils = require("./utils");

class OrbitingPlanet extends SolarObject {
	constructor(options) {
		super(options);
		this.path = options.path;

		this.moons = [];

		this.rings = options.rings;
		this.gradientColors = options.gradientColors;
		this.centerOfSS = options.centerOfSS;
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

		let orbitingPosY = this.centerOfSS.y;

		const distanceFromSunY = this.pos.y - orbitingPosY;
		this.yAfterTilt =  distanceFromSunY*tilt +orbitingPosY ;

		this.radiusMult = 1 +  distanceFromSunY/300;

		this.radiusMult = this.radiusMult - this.radiusMult*tilt + 1;

		if (this.gradientColors) {
			this.color = this.generateGradient(ctx, this.pos.x, this.yAfterTilt, 
				this.radius*this.radiusMult);
		}

		// back of rings drawn
		if (this.rings) 
			this.rings.forEach((ring)=> this.drawRings(ctx, ring, this.yAfterTilt, Math.PI));

		// planet drawn
		Utils.drawFilledCircle(ctx, 
			this.pos.x, this.yAfterTilt, 
			this.radius * this.radiusMult, this.color);

		// front of rings drawn
		if (this.rings)
			this.rings.forEach((ring) => this.drawRings(ctx, ring, this.yAfterTilt, 0));

		this.moons.forEach(moon => moon.draw(ctx, tilt, this.yAfterTilt, this.radiusMult));
	};


	generateGradient(ctx,x,y,radius){
		const gradient = ctx.createLinearGradient(x-radius, y, x+radius,y);
		gradient.addColorStop(0, this.gradientColors.a);
		gradient.addColorStop(1, this.gradientColors.b);

		return gradient;
	};


	drawRings(ctx, ring, y, start) {
		ctx.beginPath();
		ctx.lineWidth = ring.thickness * this.radiusMult;
		ctx.strokeStyle = ring.color;
		ctx.ellipse(this.pos.x, y, 
			ring.radius*this.radiusMult, 
			ring.radius/3*this.radiusMult,
			ring.angle, start-.01, start+Math.PI+.01);
		ctx.stroke();
	};


	drawPath(ctx, tilt) {
		ctx.beginPath();
		ctx.lineWidth = 1;
		ctx.strokeStyle = "white";
		ctx.ellipse(this.centerOfSS.x, this.centerOfSS.y,
			this.distance, this.distance * tilt, 0, 0, 2 * Math.PI);
		ctx.stroke();
	};
}

module.exports = OrbitingPlanet