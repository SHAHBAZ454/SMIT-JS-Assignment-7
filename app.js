// //*  CHAPTER 38-44

// //* | FUNCTIONS| SWITCH | WHILE.. DO-WHILE |

//! Q 1 Write a custom function power ( a, b ), to calculate the value of
//! a raised to b.
//? function power(a, b) {
//?     if (b === 0) {
//?         return 1;
//?     } else if (b < 0) {
//?         return 1 / power(a, -b);
//?     } else {
//?         let result = 1;
//?         for (let i = 0; i < b; i++) {
//?             result *= a;
//?         }
//?         return result;
//?     }
//? }

//? let base = prompt("Enter the number as a base");
//? let exponent = prompt("Enter the number as a exponent");
//? result = power(base, exponent);
//? document.write(base + " raised to the power of " + exponent + " is: " + result);

//! Q 2 . Any year is entered through the keyboard. Write a function to
//! determine whether the year is a leap year or not.
//? function LeapYear(year) {
//?     if (year % 4 === 0) {
//?         return "Its a leap  year"   
//?     }
//?      else if(year % 4 !== 0){ 
//?         return "Its not a leap year"
//?     }
//? }
//? let input = parseInt(prompt("Enter a Year"))
//? LeapYear(input)
//?  document.write(LeapYear(input))


//! Q 3 . If the lengths of the sides of a triangle are denoted by a, b, and c,
//! then area of triangle is given by area = S(S − a)(S − b)(S − c)
//! where, S = ( a + b + c ) / 2
//! Calculate area of triangle using 2 functions
//? function is_triangle(a, b, c) {
//?     if (a <= 0 || b <= 0 || c <= 0) {
//?         return false;
//?     }
//?     if (a + b <= c || a + c <= b || b + c <= a) {
//?         return false;
//?     }
//?     return true;
//? }
//? function area_of_triangle(a, b, c) {
//?     if (!is_triangle(a, b, c)) {
//?         return "The provided lengths cannot form a triangle.";
//?     }
//?     const S = (a + b + c) / 2;
//?     const area = Math.sqrt(S * (S - a) * (S - b) * (S - c));

//?     return area;
//? }

//? console.log(area_of_triangle(3, 4, 5)); 
//? console.log(area_of_triangle(6, 8, 10)); 


//! Q 4 Write a function that receives marks received by a student in 3subjects and returns the average and percentage of these
//! marks. there should be 3 functions one is the mainFunction and other are for average and percentage. Call those functions
//! from mainFunction and display result in mainFunction.
//? function mainFunction() {
//?     const marksReceived = [90, 85, 80];

//?     const average = averageOfMarks(marksReceived);
//?     const percentage = percentageOfMarks(marksReceived);

//?     console.log("The average of marks received is: " + average);
//?     console.log("The percentage of marks received is: " + percentage + "%");
//? }
//? function averageOfMarks(marks) {
//?     const sum = marks.reduce((previous, current) => current += previous);
//?     return sum / marks.length;
//? }

//? function percentageOfMarks(marks) {
//?     const average = averageOfMarks(marks);
//?     return (average / 100) * 100;
//? }

//? mainFunction();

//! Q 5 You have learned the function indexOf. Code your own custom function that will perform the same functionality. You can code
//! for single character as of now.
//? function customIndexOf(string, char) {
//?     let charCount = 0;
//?     for (let i = 0; i < string.length; i++) {
//?        if (string[i] === char) {
//?          return i;
//?        }
//?     }
//?     return -1;
//?    }
   
//?    console.log(customIndexOf("Hello World", "H")); 
//?    console.log(customIndexOf("Hello World", "e")); 
//?    console.log(customIndexOf("Hello World", "o")); 
//?    console.log(customIndexOf("Hello World", "Z"));

//! Q 6 Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long
//? function removeVowels(sentence) {
//?     const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//?     return sentence.split('').filter(char => !vowels.includes(char)).join('');
//? }

//? console.log(removeVowels("Hello World"));

//! Q 7 Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text.
//! For example, in the sentence
//! “Pleases read this application and give me gratuity”
//! Such occurrences are ea, ea, ui.
//? function countVowelOccurrences(line) {
//?     const vowels = ['a', 'e', 'i', 'o', 'u'];
//?     let count = 0;

//?     for (let i = 0; i < line.length - 1; i++) {
//?         const char1 = line[i];
//?         const char2 = line[i + 1];

//?         if (vowels.includes(char1) && vowels.includes(char2)) {
//?             count++;
//?         }
//?     }

//?     return count;
//? }

//? console.log(countVowelOccurrences("Pleases read this application and give me gratuity"));

//! Q 8 The distance between two cities (in km.) is input through the keyboard. Write four functions to convert and print this
//! distance in meters, feet, inches and centimeters.
//? function convertToMeters(distance) {
//?     return distance * 1000;
//? }

//? function convertToFeet(distance) {
//?     return distance * 3280.84;
//? }

//? function convertToInches(distance) {
//?     return distance * 39370.08;
//? }

//? function convertToCentimeters(distance) {
//?     return distance * 100000;
//? }

//? const distance = parseInt(prompt("enter ur distance"));
//? main(distance)
//? function main() {
    
//?     console.log(`In meters: ${convertToMeters(distance)}`);
//?     console.log(`In feet: ${convertToFeet(distance)}`);
//?     console.log(`In inches: ${convertToInches(distance)}`);
//?     console.log(`In centimeters: ${convertToCentimeters(distance)}`);
//? }


//! Q 9 Write a program to calculate overtime pay of employees. Overtime is paid at the rate of Rs. 12.00 per hour for every hour
//! worked above 40 hours. Assume that employees do not work for fractional part of an hour.
//? function calculateOvertimePay(hoursWorked) {
//?     const normalPayHours = 40;
//?     const overtimePayRate = 12.00;

//?     if (hoursWorked <= normalPayHours) {
//?         return 0;
//?     }

//?     const overtimeHours = hoursWorked - normalPayHours;
//?     const overtimePay = overtimeHours * overtimePayRate;

//?     return overtimePay;
//? }

//? let hoursWorked = 45;
//? let overtimePay = calculateOvertimePay(hoursWorked);
//? console.log(`Overtime pay for ${hoursWorked} hours: ${overtimePay} Rs.`);

//! Q 10 A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the
//! keyboard in hundreds, find the total number of currency notes of each denomination the cashier will have to give to the withdrawer.
//? function calculateCurrencyNotes(withdrawalAmount) {
//?     let notesOf100 = 0;
//?     let notesOf50 = 0;
//?     let notesOf10 = 0;

//?     notesOf100 = Math.floor(withdrawalAmount / 100);
//?     withdrawalAmount -= notesOf100 * 100;

//?     notesOf50 = Math.floor(withdrawalAmount / 50);
//?     withdrawalAmount -= notesOf50 * 50;

//?     notesOf10 = Math.floor(withdrawalAmount / 10);
//?     withdrawalAmount -= notesOf10 * 10;

//?     return {notesOf100, notesOf50, notesOf10};
//? }

//? let withdrawalAmount = parseInt(prompt("enter your amount"));

//? let currencyNotes = calculateCurrencyNotes(withdrawalAmount);
//? console.log(`Total number of notes: ${currencyNotes.notesOf100} x 100, ${currencyNotes.notesOf50} x 50, ${currencyNotes.notesOf10} x 10`);
