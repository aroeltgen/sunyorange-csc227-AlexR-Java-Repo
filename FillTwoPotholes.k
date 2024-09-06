function fillHoles() {

move();
fillPothole();
move();
move();
move();
fillPothole();
move();


}


function fillPothole() {

turnRight();
move();
putBeeper();
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
