const OrbitingPlanet = require("./orbiting_planet");

class Moon extends OrbitingPlanet {
	constructor(options) {
		super(options);
	
	};




	shift(shiftX, shiftY) {
		this.pos.x +=	shiftX;
		this.pos.y += shiftY;
	}
}

module.exports = Moon;