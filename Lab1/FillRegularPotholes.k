
function fillFivePotholes() {


   	 repeat (5) {

         	move();
        	fillPothole();
        	move();

}


}





function fillPothole() {

turnRight();
move();


if (noBeepersPresent()) {
putBeeper();
}

turnAround();
move();
turnRight();

}

function turnAround() {

turnLeft();
turnLeft();

}

function turnRight() {

turnLeft();
turnLeft();
turnLeft();

}
