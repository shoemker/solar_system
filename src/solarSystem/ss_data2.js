const OrbitingObject = require("./orbiting_object");
const Sun = require("./sun");
const Comet = require("./comet");

const SSData2 = {

	addDataToSS(ss, center) {

		if (center) ss.setCenter(center);
		else center = ss.getCenter();

		const sun1 = new Sun({
			center,
			pos: { x: center.x - 100, y: center.y },
			radius: 60,
			gradientColor: "yellow",
			mass: 300,
			speed: 2.4,
			suns: [],
			dir: { x: 0, y: 1 }
		});

		const sun2 = new Sun({
			center,
			pos: { x: center.x + 100, y: center.y },
			radius: 60,
			gradientColor: "yellow",
			mass: 300,
			speed: 2.4,
			suns: [sun1],
			dir: { x: 0, y: -1 }
		});

		sun1.addSun(sun2);

		ss.addSun(sun1);
		ss.addSun(sun2);
	}

}

module.exports = SSData2;
