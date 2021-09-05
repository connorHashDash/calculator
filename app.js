// todo 
// max char limit 9
// creat function which takes numbers
// neaten up numpad

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

let dispVal = ''
let num1 = 0
let num2 = 0
//delaring Functions
function add(a, b) {
    a + b
}

function subtract(a, b) {
    a - b
}

function mult(a, b) {
    a * b
}

function divide(a, b) {
    a / b
}

function operate(a, b, c) {
    if (c == 'plus') {
        add(a, b)
    } else if (c == 'subtract') {
        subtract(a, b)
    } else if (c == 'mult') {
        mult(a, b)
    } else if (c == 'divide') {
        divide(a, b)
    }
}

function valStore(num) {
    let val = num;
    dispVal += val;
    console.log(dispVal);
}

function valSet() {
    if (num1 == 0) {
        num1 = parseFloat(dispVal)
        console.log(num1)
    } else {
        num2 = parseFloat(dispVal)
        console.log()
    }
    dispVal = ''
}

//Event Listeners
one.addEventListener('click', function(e) {
    display.innerHTML += '1'
    valStore(1)
})

two.addEventListener('click', function(e) {
    display.innerHTML += '2'
    valStore(2)
})

three.addEventListener('click', function(e) {
    display.innerHTML += '3'
    valStore(3)
})

four.addEventListener('click', function(e) {
    display.innerHTML += '4'
    valStore(4)
})

five.addEventListener('click', function(e) {
    display.innerHTML += '5'
    valStore(5)
})

six.addEventListener('click', function(e) {
    display.innerHTML += '6'
    valStore(6)
})

seven.addEventListener('click', function(e) {
    display.innerHTML += '7'
    valStore(7)
})

eight.addEventListener('click', function(e) {
    display.innerHTML += '8'
    valStore(8)
})

nine.addEventListener('click', function(e) {
    display.innerHTML += '9'
    valStore(9)
})

zero.addEventListener('click', function(e) {
    display.innerHTML += '0'
    valStore(0)
})

cancel.addEventListener('click', function(e) {
    dispVal = ''
    display.innerHTML = ''
})

plus.addEventListener('click', function(e) {
    display.innerHTML = ''
    valSet()
})
