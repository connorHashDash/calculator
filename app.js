// Calculator Display
const inputDisp = document.querySelector('.numDisplay');

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
let moreThanTwo = false

// Special Button Functions
function clearAll(){    // Clears all values and resets calculator
  inputDisp.innerHTML = '0';
  dispVal = '0';
  operator = '';
  num1 = 0;
  num2 = 0;
};

function opClear(){         // Clears all but the operator
  dispVal = '';
};

function opSet(op){
  return op
  moreThanTwo = true
}

// Changes the operator 
function plusFunction(){
  if(moreThanTwo = true){
    valStore()
  }
  operator = opSet('plus')
  valStore()
  opClear()
};

function minusFunction(){
  if(moreThanTwo = true){
    valStore()
  }
  operator = opSet('subtract')
  valStore()
  opClear()
};

function multFunction(){
  if(moreThanTwo = true){
    valStore()
  }
  operator = opSet('mult')
  valStore()
  opClear()
};

function divideFunction(){
  if(moreThanTwo = true){
    valStore()
  }
  operator = opSet('divide')
  valStore()
  opClear()
};

function equalsFunction(){
  if(num1 == 0 && num2 == 0 && operator == 'divide'){
    inputDisp.innerHTML = '( ͡° ͜ʖ ͡°)'
  }else{
  valStore()
  }
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
  if (dispVal == 0){
   inputDisp.innerHTML = '' 
  }
  inputDisp.innerHTML += parseInt(num);
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
    num1 = parseInt(dispVal)
    inputDisp.innerHTML = '';
    //console.log(num1)
  } else if(num2 == 0) {
    num2 = parseInt(dispVal)
    //console.log(num2)
    } 
  if (num1 !== 0 && num2 !== 0){
    longSum()
  }
}

// Creates Numbers on the numpad
for(i = 1; i <= 10; i++){
  if(i == 10){
    let numbers = document.createElement('div')
    numbers.className = 'buttons'
    numbers.id = `button 0`
    numbers.innerHTML = `<p> 0 </p>`
    numpad.appendChild(numbers)
    numbers.addEventListener('click', function(){
      valSet(0)
    });
  } else {
    let numbers = document.createElement('div')
    numbers.className = 'buttons'
    numbers.id = `button${i}`
    numbers.innerHTML =  i
    numpad.appendChild(numbers)
    numbers.addEventListener('click', function(){
      valSet(this.innerHTML)
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
