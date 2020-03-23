const Utils = {

	getCanvasDim() { return {x:900, y:900}; },

	findAngle(point1, point2) {
		const xDelta = point2[0] - point1[0];
		const yDelta = point2[1] - point1[1];

		const arcTangent = Math.atan(yDelta / xDelta);
		let angle;

		if (xDelta < 0) angle = arcTangent + Math.PI;
		else if (xDelta > 0 && yDelta < 0) angle = arcTangent + Math.PI * 2;
		else angle = arcTangent;

		return angle;
	},
	

	distance(obj1, obj2) {
		let distance_x = obj1[0] - obj2[0];
		let distance_y = obj1[1] - obj2[1];
		return Math.sqrt(distance_x * distance_x + distance_y * distance_y);
	},


	// kind of a factory method to create a star
	// a version of this came from http://thenewcode.com/81/Make-A-Starfield-Background-with-HTML5-Canvas
	createStarData(xRange, yRange) {
		const colorrange = [0, 60, 240];
		return {
			pos: [Math.random() * xRange, Math.random() * yRange],
			radius: Math.random() * 2.0,
			hue: colorrange[Utils.getRandom(0, colorrange.length - 1)],
			sat: this.getRandom(50, 100),
		};
	},
	// helper method
	getRandom(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	},


	drawFilledCircle(ctx, x, y, radius, fillStyle) {
		ctx.beginPath();
		ctx.arc(x, y, radius, 0, Math.PI*2);
		ctx.fillStyle = fillStyle;
		ctx.fill();
	},

}
module.exports = Utils;