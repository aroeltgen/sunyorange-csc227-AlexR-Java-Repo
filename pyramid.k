function GetOverPyramid() {
    while (frontIsClear()) {  
        move();
    }

    while (leftIsClear()) { 
        moveUp();
    }

    moveAcrossTop();  
    
    while (rightIsClear()) {  
        moveDown();
    }

    while (frontIsClear()) {  
        move();
    }
}

function moveUp() {
    turnLeft();
    move();
    turnRight();
    move();
}

function moveAcrossTop() {
    move();
}

function moveDown() {
    turnRight();
    move();
    turnLeft();
    move();
}

function turnRight() {
    turnLeft();
    turnLeft();
    turnLeft();
}