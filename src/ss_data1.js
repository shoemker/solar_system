const SSData1= {

	addDataToSS(ctx, ss, center) {
		this.addSun(ctx, ss,
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


		ss.addPlanet({
			pos: { x: center.x - 150, y: center.y },
			radius: 6,
			gradientColors: { a: "green", b: "lightgreen" },
			mass: 8,
			suns: ss.getSuns(),
			speed: 5,
			dir: { x: 0, y: 1 },
			path: true
		});


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
			color: "white",
			mass: 1,
			suns: ss.getSuns(),
			speed: 1.8,
			dir: { x: 0, y: -1 },
		});
	},
		

	// this logic needs to be in here insead of in solar_system because of access
	// to ctx
	addSun(ctx, ss, options){
		// debugger
		const gradient = ctx.createRadialGradient(
			options.pos.x, options.pos.y, options.radius / 4,
			options.pos.x, options.pos.y, options.radius);

		gradient.addColorStop(0, options.color);
		gradient.addColorStop(1, "transparent");
		options.color = gradient;

		ss.addSun(options);
	}
}

module.exports = SSData1;
