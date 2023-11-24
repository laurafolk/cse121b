/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
//Below is what is called the function declaration
function add (number1, number2) {
    return number1 + number2;  //This is the function body returns the sum of the parameters number1 and number2.
}
function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.getElementById('sum').value = add(addNumber1, addNumber2);
}
document.querySelector('#addNumbers').addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function(subtract1, subtract2) {
    return subtract1 - subtract2;  //This is the function body returns the sum of the parameters number1 and number2.
}
function subtractNumbers() {
    let subtract1 = Number(document.querySelector('#subtract1').value);
    let subtract2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtract1, subtract2);
}
document.querySelector('#subtractNumbers').addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    document.getElementById('product').value = multiply(factor1, factor2);
};

document.querySelector('#multiplyNumbers').addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide(number1, number2) {
    return number1 / number2;
}

// Function declaration to handle division of input numbers
function divideNumbers() {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);

    if (divisor !== 0) {
        document.getElementById('quotient').value = divide(dividend, divisor);
    } else {
        alert("Cannot divide by zero!");
    }
}

// Event listener for the button click
document.querySelector('#divideNumbers').addEventListener("click", divideNumbers);

/* Decision Structure */

document.getElementById('getTotal').addEventListener('click', function () {
    // Step 1: Declare and instantiate a variable for the subtotal
    let subtotal = Number(document.getElementById('subtotal').value);

    // Step 2: Check IF the membership checkbox is checked
    let isClubMember = document.getElementById('member').checked;

    // Apply a 15% discount if the user is a club member
    if (isClubMember) {
        subtotal *= 0.85; // 15% discount
    }

    let totalDue = `$${subtotal.toFixed(2)}`;
    document.getElementById('total').textContent = totalDue;
});


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = Array.from({ length: 13 }, (_, index) => index + 1);
document.getElementById('array').textContent = numbersArray.join(', ');
/* Output Odds Only Array */
let oddNumbers = numbersArray.filter(number => number % 2 !== 0);
document.getElementById('odds').textContent = oddNumbers.join(', ');
/* Output Evens Only Array */
let evenNumbers = numbersArray.filter(number => number % 2 === 0);
document.getElementById('evens').textContent = evenNumbers.join(', ');
/* Output Sum of Org. Array */
let sumOfArray = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
document.getElementById('sumOfArray').textContent = sumOfArray;
/* Output Multiplied by 2 Array */
let multipliedArray = numbersArray.map(number => number * 2);
document.getElementById('multiplied').textContent = multipliedArray.join(', ');
/* Output Sum of Multiplied by 2 Array */
let sumOfMultiplied = multipliedArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
document.getElementById('sumOfMultiplied').textContent = sumOfMultiplied;