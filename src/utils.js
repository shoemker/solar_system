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


	drawFilledCircle(ctx, x, y, radius, fillStyle) {
		ctx.beginPath();
		ctx.arc(x, y, radius, 0, Math.PI*2);
		ctx.fillStyle = fillStyle;
		ctx.fill();
	},

}
module.exports = Utils;