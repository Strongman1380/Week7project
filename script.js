// 1. Create an array called ages
const ages = [3, 9, 23, 64, 2, 8, 28, 93];

// 2. Subtract first element from the last dynamically
console.log(ages[ages.length - 1] - ages[0]);

// 3. Add a new age dynamically and repeat step above
ages.push(45);
console.log(ages[ages.length - 1] - ages[0]);

// 4. Calculate the average age
let sumAges = 0;
for (let i = 0; i < ages.length; i++) {
    sumAges += ages[i];
}
console.log(sumAges / ages.length);

// 5. Create an array called names
const names = ['Joe', 'Tommy', 'Bill', 'Sally', 'Hill', 'Bob'];

// 6. Calculate the average number of letters per name
let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
    totalLetters += names[i].length;
}
console.log(totalLetters / names.length);

// 7. Concatenate all names together separated by spaces
let allNames = "";
for (let i = 0; i < names.length; i++) {
    allNames += names[i] + " ";
}
console.log(allNames.trim());

// 8. Accessing elements in an array
console.log(names[0]); // First element
console.log(names[names.length - 1]); // Last element

// 9. Create an array with name lengths
let nameLengths = [];
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}
console.log(nameLengths);

// 10. Calculate sum of name lengths
let sumNameLengths = 0;
for (let i = 0; i < nameLengths.length; i++) {
    sumNameLengths += nameLengths[i];
}
console.log(sumNameLengths);

// 11. Function to repeat a word n times
function repeatWord(word, n) {
    let result = "";
    for (let i = 0; i < n; i++) {
        result += word;
    }
    return result;
}
console.log(repeatWord("Hello", 3));

// 12. Function to return full name
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
console.log(fullName("John", "Doe"));

// 13. Function to check if sum of array is greater than 100
function isSumGreaterThan100(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum > 100;
}
console.log(isSumGreaterThan100([50, 30, 25]));

// 14. Function to return average of an array
function average(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(average([10, 20, 30, 40]));

// 15. Function to compare averages of two arrays
function isFirstAvgGreater(arr1, arr2) {
    return average(arr1) > average(arr2);
}
console.log(isFirstAvgGreater([10, 20, 30], [5, 15, 25]));

// 16. Function to determine if drink can be bought
function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
}
console.log(willBuyDrink(true, 15));

// 17. Custom function - Check if a number is even or odd
function isEven(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(isEven(29)); // Example output: "Odd"