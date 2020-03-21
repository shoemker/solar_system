const OrbitingPlanet = require("./orbiting_planet");
const Utils = require("./utils");

class Comet extends OrbitingPlanet {
	constructor(options) {
		super(options);
		this.tailLength = 20;
	};

	draw(ctx, tilt) {
		tilt -= .1;

		super.draw(ctx, tilt);

		this.drawTail(ctx,tilt);
	}

	drawTail(ctx,tilt) {
		// let y = this.yAfterTilt;
		// let x = this.pos.x;

		const endOfTail = this.findEndOfTail(tilt);



		Utils.drawFilledCircle(ctx,
			endOfTail.x, endOfTail.y,
			this.radius * this.radiusMult, this.color);

	}

	findEndOfTail(tilt) {
		const deltaX = this.pos.x - this.centerOfSS.x;
		const deltaY = this.pos.y - this.centerOfSS.y;

		const ratio = (this.tailLength + this.distance) / this.distance;

		let tailX = deltaX * ratio + this.centerOfSS.x;
		let tailY = deltaY * ratio + this.centerOfSS.y;


		const distanceFromSunY = tailY - this.centerOfSS.y;
		const tailYAfterTilt = distanceFromSunY * tilt + this.centerOfSS.y;

		return {x:tailX, y:tailYAfterTilt};
	}

}

module.exports = Comet;