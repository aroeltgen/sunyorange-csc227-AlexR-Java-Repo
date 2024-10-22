
/*
console.log(`part1`)

● Identify and list the objects that are part of this system
console.log(`
    The objects that are part of this system are:
    Train, Sensor, Gate.
    `)

● Identify and list the relationships that exist between those objects
console.log(`
    The relationships that exist between those objects:
    The Train location from sensor determines the sensor state.
    The Sensor state instructs the gate (open or close)
    The train moves along the track
    `)

● Describe how the system evolves over time
console.log(` System Evolution
    initially, the gate is open - cars can pass
    When the sensor detects the train is under 70 
    the gate closes for that distance
    The train moves along the track and when it passes 40 (becomes below 40)
    the crossing distance, the gate opens
    `)
*/

/*
Part 2
● Declare your `main` function
● Initialize your system objects
● Write the main simulation loop
*/

function main() {
    // Initialize the objects
    let train = {
        locationOnTrack: 100,
        speed: 10
    };
    let gate = {
        state: `open`
    };
    let sensor = {
        isTrainAtCrossing: `not crossing`
    };

    // main simulation loop
    for (let i = 0; i < 10; i++) {
        checkTrainCrossing(train, sensor);
        controlGate(sensor, gate);
        moveTrain(train);
        logState(train, gate);
    }
}


/*
Part 3
● Write the functions used in your main loop, each of which will accept one or more objects
and act (i.e. check / modify) those
*/

// check train location on track
// crossing is between 60 and 40 from sensor
function checkTrainCrossing(train, sensor) {
    if (train.locationOnTrack <= 70 && train.locationOnTrack > 40 ) {
        sensor.isTrainAtCrossing = `crossing`;
    } else {
        sensor.isTrainAtCrossing = `not crossing`;
    }
}

// change gate state based on sensor state
function controlGate(sensor, gate) {
    if (sensor.isTrainAtCrossing === `crossing`) {
        gate.state = `closed`;
    } else {
        gate.state = 'open';
    }
}

// function to move the train closer to sensor and crossing
function moveTrain(train) {
//  if (train.locationOnTrack > 0) {
        train.locationOnTrack -= train.speed;
//    }
}

// log the states of the system at each interval
function logState(train, gate) {
    console.log(`train distance from sensor: ${train.locationOnTrack}`);
    console.log(`gate is: ${gate.state}`);
}

main();


/*
Part 4
● Run your simulation in the browser’s JavaScript console
● Use `console.log` to observe the system’s state on each tick of the simulation
● Use your debugger to step through the program’s execution
*/
