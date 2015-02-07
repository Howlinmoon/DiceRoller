// This function attempts to detect a collision between two whiskers defined by
// Ax,Ay and Bx,By and the target bounding box defined by boundBoxX and boundBoxY

function willCollide(Ax, Ay, Bx, By, boundBoxX, boundBoxY) {
	// For collision detection (avoidance) we check to see if either
	// Ax,Ay or Bx,By is within the player tank bounding box
	
	// init our four tests to all false
	var AcollideX = false;
	var AcollideY = false;
	var BcollideX = false;
	var BcollideY = false;
	
	// check Ax and Bx separately for simplicity
	if (Ax >= boundBoxX && Ax <= boundBoxX + 75) {
		console.log("Possible Collision on the X detected by Ax");
		console.log("Ax, boundBoxX: " + Ax + " , " + boundBoxX);
		AcollideX = true;
	}
	
	if (Bx >= boundBoxX && Bx <= boundBoxX + 75) {
		console.log("Possible Collision on the X detected by Bx");
		console.log("Bx, boundBoxX: " + Bx + " , " + boundBoxX);
		BcollideX = true;
	}
	
	if (Ay >= boundBoxY && Ay <= boundBoxY + 75) {
		console.log("Possible Collision on the Y detected by Ay");
		console.log("Ay, boundBoxY: " + Ay + " , " + boundBoxY);
		AcollideY = true;
	}
	
	if (By >= boundBoxY && By <= boundBoxY + 75) {
		console.log("Possible Collision on the Y detected by By");
		console.log("By, boundBoxY: " + By + " , " + boundBoxY);
		BcollideY = true;
	}
	
	// Now that we have gotten our collision votes - we examine them to see if we have an actual
	// collision or just a false alarm
	// init our overall results
	var ACollided = false;
	var BCollided = false;
	var collisionResult = "";
	
	if (AcollideX && AcollideY) {
		// legit collision detected by A
		ACollided = true;
	}
	
	if (BcollideX && BcollideY) {
		// legit collision detected by B
		BCollided = true;
	}
	
	// Now determine the proper result to return
	
	if (!ACollided && !BCollided) {
		// No collision detected by either whisker
		collisionResult = "None";
	}
	
	if (ACollided) {
		// assume A whisker is left - so instruct to turn right
		collisionResult = "Right";
	}

	if (BCollided) {
		// assume B whisker is right - so instruct to turn left
		collisionResult = "Left";
	}
	
	if (ACollided && BCollided) {
		// BOTH whiskers detected
		collisionResult = "Both";
	}

	return collisionResult;
}
