const OrbitingPlanet = require("./orbiting_planet");
const Utils = require("./utils");

class Moon extends OrbitingPlanet {
	constructor(options) {
		super(options);
	};


	shift(shiftX, shiftY) {
		this.pos.x +=	shiftX;
		this.pos.y += shiftY;
	}

	draw(ctx, angle, orbitCenterY, mult) {
		const positionOffsetY = (this.pos.y - this.suns[0].getPosition().y) * angle *mult;

		const positionOffsetX = (this.pos.x - this.suns[0].getPosition().x);
		const newX = this.suns[0].getPosition().x + positionOffsetX*mult;

		Utils.drawFilledCircle(ctx, newX, orbitCenterY + positionOffsetY, this.radius*mult, this.color);
		
	}
}

module.exports = Moon;