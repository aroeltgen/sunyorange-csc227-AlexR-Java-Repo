// Exercises 2, 5, 9




// #2 Write a function max3 that returns the largest of its three arguments.



function max3(a, b, c){

if (a > b && a > c){
    return a;
} else if (b > a && b > c){
    return b;
} else {
    return c;
}

}




// #5 Write a function that takes a positive integer N and then calculates and displays the sum of the first N odd integers. 
// For example, if N is 4, your function should display the value 16, which is 1 + 3 + 5 + 7.


function sumOfOddNumbers(N){

let sum = 0;
let oddNumber = 1;

for (let i = 0; i < N; i++){
sum =+ oddNumber;
oddNumber =+ 2;

console.log(sum);
return sum;


}




}



// #9 Rewrite the countdown functionon page 96 so that it uses a while loop instead of a for loop



// function countdown(start) {

// for (let t = start; t >= 0; t--) {
// console.log(t);
// }

// }



function countdown(start) {

let t = start;
while (t >= 0){
console.log(t);
t--;
}


}




