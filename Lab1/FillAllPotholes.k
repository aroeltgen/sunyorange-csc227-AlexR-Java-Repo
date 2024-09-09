function fillHoles() {

move();
fillPothole();
move();
fillPothole();
move();
move();
move();
fillPothole();
move();
fillPothole();

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
