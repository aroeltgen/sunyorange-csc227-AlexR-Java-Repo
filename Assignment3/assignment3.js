//Exercise 2

function quotient(x, y) {
    let result = 0;
    while (x >= y) {
        x = x - y;
        result++;
    }
    return result;
}

console.log(quotient(9, 4));  // Output: 2
console.log(quotient(15, 5)); // Output: 3
console.log(quotient(7, 2));  // Output: 3
console.log(quotient(20, 6)); // Output: 3






// Exercise 3

// Write a function sumFirstNIntegers that takes the value of N as
// its argument and returns the sum of those integers, as
// illustrated in the following sample run:



function sumFirstNIntegers(N) {

let sum = 0;

for (let i = 1; i <= N; i++) {
    sum += i;
}

return sum;

}



console.log(sumFirstNIntegers(3)); // 6
console.log(sumFirstNIntegers(100)); // 5050










// Exercise 5


function triangleArea(base, height) {
    let area = (base * height) / 2;
    return area;
}

console.log("Area of triangle with base 5 and height 10 is " + triangleArea(5, 10));  


//changes
