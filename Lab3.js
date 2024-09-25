

//Lab 3


/*
Write a function named fToC that converts a Fahrenheit temperature to Celsius. 
We will also call this function multiple times to log the conversions of several Fahrenheit values.
*/

// Step 2: Convert Fahrenheit to Celsius
function fToC(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}

console.log("32 degrees F in C is " + fToC(32));   
console.log("212 degrees F in C is " + fToC(212)); 
console.log("68 degrees F in C is " + fToC(68));   





/*
Add another function named cToK that accepts a celsius temperature as its only parameter and
that returns the equivalent kelvin temperature. Then write a function named fToK and
implement that by chaining fToC and then cToK together with a variable in between for the
intermediate result (do not just implement the formula that goes straight from fahrenheit to
kelvin).
*/


// Step 3: Convert Celsius to Kelvin
function cToK(celsius) {
    let kelvin = celsius + 273.15;
    return kelvin;
}

// Convert Fahrenheit to Celsius (from step 2)
function fToC(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}

// Step 3: Convert Fahrenheit to Kelvin 
function fToK(fahrenheit) {
    let celsius = fToC(fahrenheit);
    
    let kelvin = cToK(celsius);
    
    return kelvin;
}

// Calling the fToK function
console.log("32 degrees F in K is " + fToK(32));   
console.log("212 degrees F in K is " + fToK(212)); 
console.log("68 degrees F in K is " + fToK(68));  
