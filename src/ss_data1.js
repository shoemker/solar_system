const SSData1 = {

	addDataToSS(ctx, ss, center) {

		ss.addSun(ctx,
			{pos: center,
			radius: 60,
			mass: 300,
			color: "yellow"
		});


		ss.addPlanet({
			pos: { x: center.x + 250, y: center.y },
			radius: 9,
			gradientColors: { a: "blue", b: "lightblue" },
			mass: 10,
			suns: ss.getSuns(),
			speed: 3,
			dir: { x: 0, y: -1 },
			path: true,
			rings: [{ color: "darkblue", radius: 18, angle: Math.PI / 6, thickness: 2 },
				{ color: "darkblue", radius: 15, angle: Math.PI / 6, thickness: 2 },
				{ color: "darkblue", radius: 12, angle: Math.PI / 6, thickness: 2 }]
		});


		const ven = {
			pos: { x: center.x - 150, y: center.y },
			radius: 6,
			gradientColors: { a: "green", b: "lightgreen" },
			mass: 8,
			suns: ss.getSuns(),
			speed: 5,
			dir: { x: 0, y: 1 },
			path: true
		};

		const vensMoon = {
			pos: { x: ven.pos.x - 15, y: ven.pos.y },
			radius: 1,
			color: "lightgreen",
			mass: .3,
			speed: 1,
			dir: { x: 0, y: -1 },
			suns: []
		};


		ss.addPlanetWithMoon(ven, vensMoon);


		const jup = {
			pos: { x: center.x + 400, y: center.y },
			radius: 12,
			gradientColors: { a: "orange", b: "red" },
			mass: 40,
			suns: ss.getSuns(),
			speed: 1.95,
			dir: { x: 0, y: -1 },
			path: true
		};

		const jupsMoon = {
			pos: { x: jup.pos.x - 50, y: jup.pos.y },
			radius: 2,
			color: "pink",
			mass: 1.5,
			speed: 2,
			dir: { x: 0, y: -1 },
			suns: []
		};


		ss.addPlanetWithMoon(jup, jupsMoon);


		ss.addComet({
			pos: { x: center.x + 150, y: center.y + 250 },
			radius: 2,
			color: "rgb(255, 255, 204)",
			mass: 1,
			suns: ss.getSuns(),
			speed: 1.8,
			dir: { x: 0, y: -1 },
		});
	},
}

module.exports = SSData1;
