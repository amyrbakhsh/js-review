
// 📓 Console Logging Practice

// 1. Simple Logging: Log the message "Hello, Bootcamp!" to the console.
// Your code here
console.log('Hello, Bootcamp')

// 2. Variable Logging: Declare a variable named `greeting` with the value "Welcome to JavaScript!" and log it to the console.
// Your code here
const greeting ='Welcome to JavaScript!'
console.log(greeting)

// 3. Logging Multiple Values: Declare variables `firstName` and `lastName`. Combine them into a message that says "Hello, [firstName] [lastName]!" and log it.
// Your code here
// let firstName='Abdulla'
// let lastName='Hamdan'
// console.log(`Hello, ${firstName} ${lastName}`)

// 4. Logging Calculations: Calculate the sum of `5 + 10`, and log the result with the message "The sum of 5 and 10 is: [result]".
// Your code here
let numA =1
let numB =2
console.log(numA+numB)

// 📓 `let` and `const` Variable Declaration
let myCar='Toyota'
const myName='Abdulla'

// 5. Basic Variable with `let`: Use `let` to declare a variable called `age` and assign it `25`. Update `age` to `26` and log it to the console.
// Your code here
let age=25
newAge = age + 1
console.log(newAge)

// 6. Basic Constant with `const`: Declare a variable `birthYear` using `const` with a value of `1995`. Try changing `birthYear` to `1996` and see what happens.
// Your code here

//TypeError
// const birthYear = 1995
// birthYear = birthYear +1
// console.log(birthYear)

// 📓 Template Literals

// 7. Basic Template Literal: Create a greeting using template literals to log "Hello, [firstName] [lastName]!".
// Your code here

const  firstName = 'Abdulla'
const lastName = 'Younis'
console.log(`Hello, ${firstName} ${lastName}`)



// 8. Greeting with Current Year: Use template literals to log "Hello, Taylor! Welcome to the year 2024" with variables `name` and `year`.
// Your code here

let name = 'Hamdan'
let year = 2024
console.log(`Hello, ${name}! Welcome to the year ${year}`)


// 📓 Conditional Statements

// 9. Simple `if` Statement: Declare a variable `temperature`. If `temperature` is greater than 30, log "It's hot outside."
// Your code here

let temperature = 35
if (temperature >= 30){
    console.log("It's hot outside")
}



// 10. Basic `if/else` Statement: Declare a variable `isRaining`. If it’s true, log "Take an umbrella"; if false, log "No umbrella needed."
// Your code here

let isRaining = false
if (isRaining ){
    console.log('Take an umbrella')
} else {
    console.log('No umbrella needed')
}


// 11. `if/else` with Comparison: Check if `age` is 18 or older. Log "You are eligible to vote" or "You are not eligible to vote" based on the result.
// Your code here

let myAge = 20 
    if (myAge >= 18) {
      console.log('You are eligible to vote')
    } else {
      console.log('You are not eligible to vote')
    }



// 12. `if/else if/else` Chain: Use `score` to determine grades: log "Grade: A" for 90+, "Grade: B" for 80-89, otherwise "Grade: C".
// Your code here

let grade = 99 
    if (grade >= 90) {
      console.log('Grade: A')
    } else if (grade >80 && grade< 89)
    {
      console.log('Grade: B')
    } else {
        console.log('Grade: C')
    }


// 13. Combined Conditions with Logical Operators: Declare variables `isMember` and `purchaseAmount`. Log "You qualify for a discount" if `isMember` is true and `purchaseAmount` is greater than 100.
// Your code here


const isMemeber = true
const purchaseAmount = 200
    if (isMemeber === true && purchaseAmount > 100) {
      console.log('You qualify for a discount')
    }  else {
        console.log('Better luck next time')
    }




// 📓 `for` Loops

// 14. Counting with `for` Loop: Write a `for` loop to log numbers from 1 to 5.
// Your code here

let numberA = 1
for ( numberA = 1 ; numberA <= 5 ; numberA ++)
    console.log(numberA)


// 15. Counting Down with `for` Loop: Use a `for` loop to log numbers from 5 down to 1.
// Your code here

// let numberB = 5
for ( let numberB = 5 ; numberB >= 1; numberB -- )
    console.log(numberB)


// 16. Summing with `for` Loop: Use a `for` loop to calculate and log the sum of numbers from 1 to 10.
// Your code here

let sum = 0

for (let i = 1; i <= 10; i++) {
    sum += i}

console.log(sum)


// 📓 Functions

// 17. Simple Function: Define a function `greet` that logs "Hello, world!" when called. Call the function.
// Your code here

const greetUser = (strA, strB) => {
    return strA + strB
}

console.log(greetUser('Hello,','World!'));


// 18. Function with Parameter: Define a function `square` that takes a number, squares it, and returns the result. Call the function with a test number and log the result.
// Your code here


const  square= (num) => {
    return num * num
}
const testNumber = 5
const result = square(testNumber)
console.log(result)


// 19. Function with Multiple Parameters: Write a function `add` that takes two numbers and returns their sum. Call it and log the result.
// Your code here


//Exercise 9

function add (numA, numB, operation){
    if (operation === 'add'){
        return numA + numB
    }
}
console.log( add(10, 5, "add"))


// 20. Conditional Logic Function without Modulo: Write a function `checkNumber` that takes a number and returns "Positive", "Negative", or "Zero". Test the function with several values and log the results.
// Your code here

function checkNumber(num) {
    if (num > 0) {
        return "Positive";  
    } else if (num < 0) {
        return "Negative";  
    } else {
        return "Zero";      
    }
}



// 21. Function with Conditional Logic: Write a function `isEven` that returns `true` if a number is even and `false` if odd. Call it with a number and log the result.
// Your code here

function isEven(num) {
    return num % 2 === 0
}
const numberC = 4
const checkResult = isEven(numberC)
console.log(checkResult)


