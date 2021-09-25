// Calculator Display
const inputDisp = document.querySelector('.numDisplay');
const runSum = document.querySelector('.runSum');

// Numberpad parent
let numpad = document.getElementById('nums');

//Special Buttons
const cancel = document.getElementById('cancel');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const multButton = document.getElementById('mult');
const divideButton = document.getElementById('divide');
const equalsButton = document.getElementById('equals');

// Variables
let dispVal = '0';   // Value of the display
let operator = ''   // Currently selected operator "plus" or "minus"
let num1 = 0;
let num2 = 0;
let moreThanTwo = false;
let dottedOnce = false;

// Special Button Functions
function clearAll(){    // Clears all values and resets calculator
  inputDisp.innerHTML = '0';
  dispVal = '0';
  operator = '';
  num1 = 0;
  num2 = 0;
  dottedOnce = false;
  runSum.innerHTML = ''
};

function runningSum(){
  runSum.innerHTML += parseFloat(dispVal)
}

function opClear(){         // Clears all but the operator
  dispVal = '0';
  dottedOnce = false;
};

function opSet(op){
  moreThanTwo = true;
  if(op == 'plus'){
    runSum.innerHTML += '+'
  }
  if(op == 'subtract'){
    runSum.innerHTML += '-'
  }
  if(op == 'mult'){
    runSum.innerHTML += 'x'
  }
  if(op == 'divide'){
    runSum.innerHTML += '÷'
  }
  return op
}

// Changes the operator 
function plusFunction(){
  if(moreThanTwo = true){
    valStore()
  }
  runningSum()
  operator = opSet('plus')
  valStore()
  opClear()
};

function minusFunction(){
  if(moreThanTwo = true){
    valStore()
  }
  runningSum()
  operator = opSet('subtract')
  valStore()
  opClear()
};

function multFunction(){
  if(moreThanTwo = true){
    valStore()
  }
  runningSum()
  operator = opSet('mult')
  valStore()
  opClear()
};

function divideFunction(){
  if(moreThanTwo = true){
    valStore()
  }
  runningSum()
  operator = opSet('divide')
  valStore()
  opClear()
};

function equalsFunction(){
  runningSum()
  if(num1 == 0 && num2 == 0 && operator == 'divide'){
    inputDisp.innerHTML = '( ͡° ͜ʖ ͡°)'
  }else{
  valStore()
  }
  runSum.innerHTML += '='
};

// Math Functions
function add(a, b){return a + b}
function subtract(a, b) {return a - b}
function mult(a, b) {return a * b}
function divide(a, b) {return a / b}

// All functions run through here, with the operator decided
function operate(num1, num2, op) {
  if (op == 'plus'){ return add(num1, num2) }
  if (op == 'subtract'){return subtract(num1, num2)}
  if (op == 'mult'){return mult(num1, num2)}
  if (op == 'divide'){return divide(num1, num2)}
}

// Puts numbers on display and stores them in a value simultaniously 
function valSet(num){
  if (dispVal === '0'){
    inputDisp.innerHTML = '' 
  } else if (dispVal === '.'){
    inputDisp.innerHTML = '0.'
  }
  inputDisp.innerHTML += num;
  dispVal += num;
}

function longSum(){
    num1 = operate(num1, num2, operator)
    num2 = 0
    inputDisp.innerHTML = num1
    dispVal = '0'
}

function valStore(){
  if(operator)
  if (num1 == 0){
    console.log(dispVal)
    num1 = parseFloat(dispVal) 
    inputDisp.innerHTML = '';
    console.log(num1)
  } else if(num2 == 0) {
    num2 = parseFloat(dispVal)
    //console.log(num2)
  } 
  if (num1 !== 0 && num2 !== 0){
    longSum()
  }
}

// Creates Numbers on the numpad
for(i = 1; i <= 11; i++){
  if (i < 10){
    let numbers = document.createElement('div')
    numbers.className = 'buttons'
    numbers.id = `button${i}`
    numbers.innerHTML =  i
    numpad.appendChild(numbers)
    numbers.addEventListener('click', function(){
      valSet(this.innerHTML)
    });
  } else if(i == 10){
    let numbers = document.createElement('div')
    numbers.className = 'buttons'
    numbers.id = `button0`
    numbers.innerHTML = `<p> 0 </p>`
    numpad.appendChild(numbers)
    numbers.addEventListener('click', function(){
      valSet(0)
    });
  } else if(i == 11){
    let numbers = document.createElement('div')
    numbers.className = 'buttons'
    numbers.id = `button .`
    numbers.innerHTML = `<p> . </p>`
    numpad.appendChild(numbers)
    numbers.addEventListener('click', function(){
      if(dottedOnce == false && dispVal == '0'){
        valSet('0.')
        dottedOnce = true;
      } else if (dottedOnce == false){
        valSet('.');
        dottedOnce = true;
      }else if(dottedOnce == true){
        return
      }
    });
  }
}

// Special Buttons 
cancel.addEventListener('click', clearAll);

plusButton.addEventListener('click', function(){
  plusFunction()
});

minusButton.addEventListener('click', function(){
  minusFunction()
})

multButton.addEventListener('click', function(){
  multFunction()
})

divideButton.addEventListener('click', function(){
  divideFunction()
})

equalsButton.addEventListener('click', function(){
  equalsFunction()
})

inputDisp.innerHTML = dispVal
