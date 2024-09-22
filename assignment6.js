

// page 892 for assignment 6 - 8,11,13

// #8
/*
The concept of a palindrome is often extended to full sentences by ignoring punctuation, 
spacing, and differences in the case of letters. For example, the sentence
Madam, I’m Adam.
is a sentence palindrome, because if you look only at the letters and ignore any case distinctions,
it reads identically backward and forward.
Write a predicate function.  that returns  if  fits this definition of a sentence palindrome.
*/

function isSentencePalindrome(str) {

    // Remove non-alphabetic characters and convert the string to lowercase
    let cleanedStr = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
    

    
    // Check if palindrome
    let reversedStr = cleanedStr.split('').reverse().join('');
    


    return cleanedStr === reversedStr;

}





// #11
/*
As in most languages, English includes two types of numbers. 
The cardinal numbers (such as one, two, three, and four) are used in counting; 
the ordinal numbers (such as first, second, third, and fourth) are used to indicate a position in a sequence. 
In text, ordinals are usually indicated by writing the digits in the number,
followed by the last two letters of the English word that names the corresponding ordinal. 
Thus, the ordinal numbers first, second, third, and fourth often appear in print as 1st, 2nd, 3rd, and 4th.
The ordinals for 11, 12, and 13, however, are 11th, 12th, and 13th. 
Devise a rule that determines what suffix should be added to each number, 
and then use this rule to write a function  that returns the ordinal form of the number  as a string.
*/





function createOrdinalForm(n) {
    // Get the last two digits of the number
    let lastTwoDigits = n % 100;


    // If the last two digits are 11, 12, or 13, return 'th'
    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
        return n + 'th';
    }



    // Get the last digit of the number
    let lastDigit = n % 10;




    // Determine the correct suffix based on the last digit
    if (lastDigit === 1) {
        return n + 'st';
    } else if (lastDigit === 2) {
        return n + 'nd';
    } else if (lastDigit === 3) {
        return n + 'rd';
    } else {
        return n + 'th';
    }





}







// #13

/*
When large numbers are written on paper, it is traditional—at least in the United States—to use commas 
to separate the digits into groups of three. For example, the number one million is usually written as 1,000,000. 
Implement a function  -- function addCommas(digits)
that takes a string of decimal digits representing a number and returns the string formed by inserting commas
at every third position, starting on the right. Your implementation of the  function should be able to reproduce 
the following console log:
> addCommas(12345678)
12,345,678
> addCommas(2001)
2,001
*/



function addCommas(digits) {


    // Convert the string into an array of characters, reverse it to insert commas every third character
    let reversed = digits.split('').reverse();
    let result = [];





    // Loop through the reversed array and insert commas after every 3 digits
    for (let i = 0; i < reversed.length; i++) {

        result.push(reversed[i]);
        // Add a comma after every third digit (but not after the last digit)
        if ((i + 1) % 3 === 0 && i + 1 !== reversed.length) {
            result.push(',');
        }

    }



    // Reverse the result array back and join it into a string
    return result.reverse().join('');


}



