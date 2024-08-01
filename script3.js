// Write a function that takes a string input representing a simple arithmetic expression (only addition and subtraction) and returns the result.

function evaluateExpression(expression) {

    expression = expression.replace(/\s+/g, ''); 
    let result = 0;
    let currentNumber = 0;
    let currentOperator = '+';
    
    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];

        if (char >= '0' && char <= '9') {
            currentNumber = currentNumber * 10 + (char - '0');
        }
        
        if (char === '+' || char === '-' || i === expression.length - 1) {
           
            if (currentOperator === '+') {
                result += currentNumber;
            } else if (currentOperator === '-') {
                result -= currentNumber;
            }
        
            currentOperator = char;
            currentNumber = 0;
        }
    }
 
    if (currentOperator === '+') {
        result += currentNumber;
    } else if (currentOperator === '-') {
        result -= currentNumber;
    }
    
    return result;
}

console.log(evaluateExpression("13 + 10 - 3")); 