const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

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

const buttons = document.querySelectorAll('button');
const display = document.querySelector('#display');


//To display numbers only and clear
buttons.forEach(button => {
    button.addEventListener('click', () => {
        switch (button.textContent) {
            case 'AC':
                display.textContent = '';
                break;
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
        }
    })
});


