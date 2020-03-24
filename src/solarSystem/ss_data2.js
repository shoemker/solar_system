const Utils = require("../utils");

const SSData2 = {

	addDataToSS(ctx, ss) {

		const center = { x: Utils.getCanvasDim().x / 2, y: Utils.getCanvasDim().y / 2 }
		ss.setCenter(center);


		ss.addSun(ctx,
			{
				pos: center,
				radius: 60,
				mass: 300,
				color: "yellow",
				speed: 0,
				suns: [],
				dir: { x: 0, y: 0 }
			});
	}

}

module.exports = SSData2;
