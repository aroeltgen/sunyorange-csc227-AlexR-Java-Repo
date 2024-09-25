//Write a function named diamond that takes an argument centerWidth and have it print (to the
//console) a diamond shape comprised of * characters where the center row has the specified
//number of characters. For example, if the function is called like:
//diamond(5);
//Then it should print the following to the console:
//  *
// ***
//*****
// ***
//  *



function diamond(centerWidth){

    for (let i = 1; i <= centerWidth; i += 2) {
        let line = '';

        for (let j = 0; j < (centerWidth - i) / 2; j++) {
            line += ' ';
        }

        for (let k = 0; k < i; k++) {
            line += '*';
        }

        console.log(line);
    }


    // Bottom half of the diamond
    for (let i = centerWidth - 2; i > 0; i -= 2) {
        let line = '';

        for (let j = 0; j < (centerWidth - i) / 2; j++) {
            line += ' ';
        }

        for (let k = 0; k < i; k++) {
            line += '*';
        }

        console.log(line);
    }

}



function diamondOnClickHandler() {

const arg1Text = document.getElementById('arg1').value;
const arg1 = Number(arg1Text);

const res = diamond(arg1);
document.getElementById('res').value = res;

}








