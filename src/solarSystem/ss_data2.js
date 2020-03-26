const OrbitingObject = require("./orbiting_object");
const Comet = require("./comet");

const SSData2 = {

	addDataToSS(ctx, ss, center) {

		if (center) ss.setCenter(center);
		else center = ss.getCenter();

		const sun1 = new OrbitingObject({
			center,
			pos: { x: center.x - 100, y: center.y },
			radius: 6,
			mass: 300,
			speed: 2,
			suns: [],
			dir: { x: 0, y: 1 }
		});

		const sun2 = new OrbitingObject({
			center,
			pos: { x: center.x + 100, y: center.y },
			radius: 6,
			mass: 300,
			speed: 2,
			suns: [sun1],
			dir: { x: 0, y: -1 }
		});

		sun1.addSun(sun2);

		ss.addSun(ctx, "yellow", sun1);
		ss.addSun(ctx, "yellow", sun2);
	}

}

module.exports = SSData2;
