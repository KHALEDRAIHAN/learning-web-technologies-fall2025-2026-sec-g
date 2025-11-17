let display = document.getElementById("display");
let buttons = document.querySelectorAll(".btn[data-value]");
let plusBtn = document.getElementById("plus");
let minusBtn = document.getElementById("minus");
let multiplyBtn = document.getElementById("multiply");
let divideBtn = document.getElementById("divide");
let equalsBtn = document.getElementById("equals");
let deleteBtn = document.getElementById("delete");

let expression = "";

// Number buttons
buttons.forEach(button => {
    button.addEventListener("click", () => {
        expression += button.getAttribute("data-value");
        display.value = expression;
    });
});

// Operator buttons
function addOperator(op) {
    if (expression !== "" && !["+","-","*","/"].includes(expression.slice(-1))) {
        expression += op;
        display.value = expression;
    }
}

plusBtn.addEventListener("click", () => addOperator("+"));
minusBtn.addEventListener("click", () => addOperator("-"));
multiplyBtn.addEventListener("click", () => addOperator("*"));
divideBtn.addEventListener("click", () => addOperator("/"));

// Delete button
deleteBtn.addEventListener("click", () => {
    expression = expression.slice(0, -1);
    display.value = expression;
});

// Custom evaluate function
function customEval(expr) {
    let numbers = expr.split(/[\+\-\*\/]/).map(Number);
    let operators = expr.replace(/[0-9]/g, '').split('');

    // First handle * and /
    for (let i = 0; i < operators.length; i++) {
        if (operators[i] === "*") {
            numbers[i] = numbers[i] * numbers[i+1];
            numbers.splice(i+1,1);
            operators.splice(i,1);
            i--;
        }
        else if (operators[i] === "/") {
            numbers[i] = numbers[i] / numbers[i+1];
            numbers.splice(i+1,1);
            operators.splice(i,1);
            i--;
        }
    }

    // Then handle + and -
    let result = numbers[0];
    for (let i = 0; i < operators.length; i++) {
        if (operators[i] === "+") result += numbers[i+1];
        if (operators[i] === "-") result -= numbers[i+1];
    }

    return result;
}

// Equals button
equalsBtn.addEventListener("click", () => {
    if(expression !== "") {
        try {
            let result = customEval(expression);
            display.value = result;
            expression = result.toString();
        } catch (e) {
            display.value = "Error";
            expression = "";
        }
    }
});

