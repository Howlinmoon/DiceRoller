// Given two objects X and Y location, their angle (course) and velocity, compute their intersection.
// if the intersection is within minRange, then we have an imminent collision and need to avoid it.

// our global for converting from degrees to radians
var TO_RADIANS = Math.PI / 180;

function willCollide(start_x1, start_y1, dir1, velo1, start_x2, start_y2, dir2,
		velo2) {
	console.log(ctx.canvas.id + " -|- " + ctx.canvas.width + " -|- "
			+ ctx.canvas.height);
	

	// for our purposes, we shall make the length of the line, the same as our
	// velocity.
	// calculate end_x1 and end_y1 for the first object
	var end_x1 = Math.round(start_x1 + velo1 * Math.cos(dir1 * TO_RADIANS));
	var end_y1 = Math.round(start_y1 + velo1 * Math.sin(dir1 * TO_RADIANS));

	// calculate end_x2 and end_y2 for the second object
	var end_x2 = Math.round(start_x2 + velo2 * Math.cos(dir2 * TO_RADIANS));
	var end_y2 = Math.round(start_y2 + velo2 * Math.sin(dir2 * TO_RADIANS));

	console.log("start_x1, start_y1, end_x1, end_y1: " + start_x1 + " , "
			+ start_y1 + " |  " + end_x1 + " , " + end_y1);
	console.log("start_x2, start_y2, end_x2, end_y2: " + start_x2 + " , "
			+ start_y2 + " |  " + end_x2 + " , " + end_y2);


	/*
	// draw the lines on the canvas
	ctx.lineWidth = 2;
	ctx.fillStyle = "red";
	ctx.beginPath();
	ctx.moveTo(start_x1, start_y1);
	ctx.lineTo(end_x1, end_y1);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(start_x2, start_y2);
	ctx.lineTo(end_x2, end_y2);
	ctx.stroke();
*/
	
	// Now, determine if these two lines intersect
	if (intersects(start_x1, start_y1, end_x1, end_y1, start_x2, start_y2,
			end_x2, end_y2)) {
		return true;
	} else {
		return false;
	}
}

// returns true iff the line from (a,b)->(c,d) intersects with (p,q)->(r,s)
function intersects(a, b, c, d, p, q, r, s) {
	var det, gamma, lambda;
	det = (c - a) * (s - q) - (r - p) * (d - b);
	console.log("det = "+det);
	if (det == 0) {
		return false;
	} else {
		lambda = ((s - q) * (r - a) + (p - r) * (s - b)) / det;
		gamma = ((b - d) * (r - a) + (c - a) * (s - b)) / det;
		
		console.log("lambda = "+lambda);
		console.log("gamma = "+gamma);
		return (0 < lambda && lambda < 1) && (0 < gamma && gamma < 1);
	}
};