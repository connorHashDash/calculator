
// max char limit 9

//Delcaring Elements
const display = document.querySelector('.numDisplay')
const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const four = document.querySelector('#four')
const five = document.querySelector('#five')
const six = document.querySelector('#six')
const seven = document.querySelector('#seven')
const eight = document.querySelector('#eight')
const nine = document.querySelector('#nine')
const zero = document.querySelector('#zero')
const cancel = document.querySelector('#cancel')
const plus = document.querySelector('#plus')
const equals = document.querySelector('#equals')
const minus = document.querySelector('#minus')
const multiply = document.querySelector('#mult')
const div = document.querySelector('#divide')

let dispVal = '';
let num1 = 0;
let num2 = 0;
let operater = '';
let answer = 0;

//delaring Functions
function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function mult(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(a, b, c) {
    if (c == 'plus') {
        return add(a, b)
    } else if (c == 'subtract') {
        return subtract(a, b)
    } else if (c == 'mult') {
        return mult(a, b)
    } else if (c == 'divide') {
        return divide(a, b)
    }
}

function valStore(num) {
    let val = num;
    dispVal += val;
    display.innerHTML = dispVal
    console.log(dispVal);
}

// Type Input
// press modifier, assigns num1 
// num1 = 1
// type input 
// press equals OR modifier, assigns num2
// num2 = 2 

function valSet() {
    if (num1 == 0) {
        num1 = parseFloat(dispVal)
    } else if (num2 == 0) {
        num2 = parseFloat(dispVal)
    } else if (num1 !== 0 && num2 !== 0){
        
      
    }
    dispVal = '';
    console.log(num1);
    console.log(num2);
}

//numerical buttons
one.addEventListener('click', function() {
    valStore(1)
})

two.addEventListener('click', function() {
    valStore(2)
})

three.addEventListener('click', function() {
    valStore(3)
})

four.addEventListener('click', function() {
    valStore(4)
})

five.addEventListener('click', function() {
    valStore(5)
})

six.addEventListener('click', function() {
    valStore(6)
})

seven.addEventListener('click', function() {
    valStore(7)
})

eight.addEventListener('click', function() {
    valStore(8)
})

nine.addEventListener('click', function() {
    valStore(9)
})

zero.addEventListener('click', function() {
    valStore(0)
})

//Operator Buttons
cancel.addEventListener('click', function() {
    dispVal = ''
    num1 = 0
    num2 = 0
    operater = ''
    display.innerHTML = ''
})

plus.addEventListener('click', function() {
    display.innerHTML = ''
    valSet()
    operater = 'plus'
    console.log('num1: ' + num1)
    console.log('num2: ' + num2)
})

minus.addEventListener('click', function() {
    display.innerHTML = ''
    valSet()
    operater = 'subtract'
})

multiply.addEventListener('click', function() {
    display.innerHTML = ''
    valSet()
    operater = 'mult'
})

div.addEventListener('click', function() {
    display.innerHTML = ''
    valSet()
    operater = 'divide'
})

equals.addEventListener('click', function() {
    display.innerHTML = ''
    valSet()
    answer = operate(num1, num2, operater)
    display.innerHTML = answer
    num2 = 0
    console.log('num1: ' + num1)
    console.log('num2: ' + num2)
    console.log('answer: ' + answer)
})

