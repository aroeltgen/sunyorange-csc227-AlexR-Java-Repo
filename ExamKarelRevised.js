//Assignment 8

/*
Your solution is very well organized. My only suggestion is that to have Karel stop you must
cause your moveThroughMaze function to exit, which means that your loop(s) must end
eventually. You have the right check to detect the end of the maze but you should have applied
that logic to the loop condition rather than to a simple if control statement. Otherwise, perfect!

Original Code:

function main() {
    getToMaze();
    moveThroughMaze();
}

function getToMaze() {
    turnLeft();
    move();
    turnRight();
}

function moveThroughMaze() {
    while (frontIsClear()) {
        move();
        collectBeeper();
        while (frontIsBlocked()) {
            if (leftIsClear()) {
                turnLeft();
            } else {
                if (leftIsClear() && rightIsClear()) {
                    // this stops it
                } else {
                    turnRight();
                } 
            }
        }
    }
}

function collectBeeper() {
    if (beepersPresent()) {
        pickBeeper();
    }
}

function turnRight() {
    turnLeft();
    turnLeft();
    turnLeft();
}

*/


// Revised Karel Code

function main() {
    getToMaze();
    moveThroughMaze();
}

function getToMaze() {
    turnLeft();
    move();
    turnRight();
}

function moveThroughMaze() {
    while (frontIsClear()) {
        move();
        collectBeeper();
        checkIfMazeExit();

        while (frontIsBlocked()) {
            if (leftIsClear()) {
                turnLeft();
            } else {
                turnRight();
            }
        }
    }
}

function checkIfMazeExit() {
    if (frontIsBlocked() && leftIsClear() && rightIsClear()) {
        break; // Exit the loop when at the maze exit 
    }
}

function collectBeeper() {
    if (beepersPresent()) {
        pickBeeper();
    }
}

function turnRight() {
    turnLeft();
    turnLeft();
    turnLeft();
}
