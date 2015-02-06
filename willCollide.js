function willCollide(Ax, Ay, Bx, By, boundBoxX, boundBoxY) {
	// For collision detection (avoidance) we check to see if either
	// Ax,Ay or Bx,By is within the player tank bounding box
	var collideX = false;
	var collideY = false;
	var collisionResult = "None";
	// check Ax and Bx separately for simplicity
	if (Ax >= boundBoxX && Ax <= boundBoxX + 75) {
		console.log("Possible Collision on the X detected by Ax");
		console.log("Ax, boundBoxX: " + Ax + " , " + boundBoxX);
		collideX = true;
		collisionResult = "Left";
	} else {
		console.log("No collision on the X detected by Ax");
	}

	if (Bx >= boundBoxX && Bx <= boundBoxX + 75) {
		console.log("Possible Collision on the X detected by Bx");
		console.log("Bx, boundBoxX: " + Bx + " , " + boundBoxX);
		collideX = true;
		if ( collisionResult == "None") {
			collisionResult = "Right";
		} else {
			collisionResult = "Both";
		}
	} else {
		console.log("No collision on the X detected by Bx");
	}

	if (Ay >= boundBoxY && Ay <= boundBoxY + 75) {
		console.log("Possible Collision on the Y detected by Ay");
		console.log("Ay, boundBoxY: " + Ay + " , " + boundBoxY);
		collideY = true;
		if ( collisionResult == "None") {
			collisionResult = "Left";
		} else {
			collisionResult = "Both";
		}
	} else {
		console.log("No collision on the Y detected by Ay");
	}

	if (By >= boundBoxY && By <= boundBoxY + 75) {
		console.log("Possible Collision on the Y detected by By");
		console.log("By, boundBoxY: " + By + " , " + boundBoxY);
		collideY = true;
		if ( collisionResult == "None") {
			collisionResult = "Right";
		} else {
			collisionResult = "Both";
		}
	} else {
		console.log("No collision on the Y detected by By");
	}

	if (collideX && collideY) {
		collisionResult = "Both";
	}
	return collisionResult;
}
