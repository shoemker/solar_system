const OrbitingPlanet = require("./orbiting_planet");
const Utils = require("./utils");

class Comet extends OrbitingPlanet {
	constructor(options) {
		super(options);
		this.tailLength = 20;
	};

	draw(ctx, tilt) {
		// debugger
		super.draw(ctx, tilt);

		this.drawTail(ctx,tilt);
	}

	drawTail(ctx,tilt) {
		let y = this.yAfterTilt;
		let x = this.pos.x;

		const deltaX = this.pos.x - this.suns[0].getPosition().x;
		const deltaY = this.pos.y - this.suns[0].getPosition().y;
		
		const ratio = (this.tailLength + this.distance) /this.distance;

		let tailX = deltaX * ratio + this.suns[0].getPosition().x;
		let tailY = deltaY * ratio + this.suns[0].getPosition().y;


		const distanceFromSunY = tailY - this.suns[0].getPosition().y;
		const tailYAfterTilt = distanceFromSunY * tilt + this.suns[0].getPosition().y;


		Utils.drawFilledCircle(ctx,
			tailX, tailYAfterTilt,
			this.radius * this.radiusMult, this.color);

	}

}

module.exports = Comet;