const Utils = {

	getCanvasDim() { return {x:900, y:900}; },

	drawFilledCircle(ctx, x, y, radius, fillStyle) {
		ctx.beginPath();
		ctx.arc(x, y, radius, 0, 360);
		ctx.fillStyle = fillStyle;
		ctx.fill();
	},

}
module.exports = Utils;