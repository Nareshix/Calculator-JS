const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;
const TEN_BILLION = 10000000000;

const operation = (num1,num2, operator) => {
    switch (operator) {
        case '+':
            return add(num1,num2);
        case '-':
            return subtract(num1,num2);    
        
        case '*':
            return multiply(num1,num2);

        case '/':
            return divide(num1,num2);
    }
}

const numbers = document.querySelectorAll('.number');
const display = document.querySelector('#display');
const operators = document.querySelectorAll('.operation');
const clear = document.querySelector('#clear');
const equal = document.querySelector('#equal');
const decimal = document.querySelector('#decimal');
const remove = document.querySelector('#delete');

let operatorToBeUsed;
let num1;
let num2;

let operatorUsed = false; 

const clearAllColours = () => {
    operators.forEach(operator => {
        operator.style.backgroundColor = 'orange';
    });
}

clear.addEventListener('click', () => {
    clearAllColours();
    display.textContent = '';
    num1 = undefined;
    num2 = undefined;
})

remove.addEventListener('click', () => {
    let tmpNum = Number(display.textContent);
    tmpNum = Math.floor(tmpNum/10);
    display.textContent = String(tmpNum);
})

decimal.addEventListener('click', () => {
    if (display.textContent.indexOf('.') === -1){
        display.textContent += '.';
    }
})
numbers.forEach(number => {
    number.addEventListener('click', () => {
        switch (number.textContent) {
            case '1':
                display.textContent += '1';
                break;
            case '2':
                display.textContent += '2';
                break;
            case '3':
                display.textContent += '3';
                break;
            case '4':
                display.textContent += '4';
                break;
            case '5':
                display.textContent += '5';
                break;
            case '6':
                display.textContent += '6';
                break;
            case '7':
                display.textContent += '7';
                break;
            case '8':
                display.textContent += '8';
                break;
            case '9':
                display.textContent += '9';
                break;
            case '0':
                display.textContent += '0';
                break;
        }
    })
});



// stores num1 and operator
operators.forEach(operator => {
    operator.addEventListener('click', () => {
        operatorUsed = true
        clearAllColours();
        operatorToBeUsed = operator.textContent;
        
        // If user wants to change operation, doesnt affect num1
        if (display.textContent !== ''){
            num1 = Number(display.textContent);
        }
        
        display.textContent = '';
        operator.style.backgroundColor = 'rgb(183, 193, 202)'
    })
});


equal.addEventListener('click', () => {
    if (operatorUsed){
        num2 = Number(display.textContent);
        if (num2 === 0 && operatorToBeUsed === '/'){
        display.textContent = 'NaN';
        }
        else{
            // round off to 10 d.p
        display.textContent = Math.round(operation(num1,num2,operatorToBeUsed) * TEN_BILLION) /TEN_BILLION;
        }
        clearAllColours()
    }
    operatorUsed = false;
})