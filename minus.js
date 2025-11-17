let display = document.getElementById("display");
let buttons = document.querySelectorAll(".btn[data-value]");
let plusBtn = document.getElementById("plus");
let minusBtn = document.getElementById("minus");
let equalsBtn = document.getElementById("equals");
let deleteBtn = document.getElementById("delete");

let expression = ""; // Store full expression

// Number buttons
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        expression += this.getAttribute("data-value");
        display.value = expression;
    });
});

// PLUS button
plusBtn.addEventListener("click", function() {
    if (expression !== "" && !expression.endsWith("+") && !expression.endsWith("-")) {
        expression += "+";
        display.value = expression;
    }
});

// MINUS button
minusBtn.addEventListener("click", function() {
    if (expression !== "" && !expression.endsWith("+") && !expression.endsWith("-")) {
        expression += "-";
        display.value = expression;
    }
});

// EQUALS button
equalsBtn.addEventListener("click", function() {
    // Split numbers and operators
    let numbers = expression.split(/[\+\-]/).map(Number);
    let operators = expression.replace(/[0-9]/g,'').split('');

    let result = numbers[0];

    for(let i=0; i<operators.length; i++){
        if(operators[i] === "+") result += numbers[i+1];
        if(operators[i] === "-") result -= numbers[i+1];
    }

    display.value = result;
    expression = result.toString(); // allow further calculations
});

// DELETE button
deleteBtn.addEventListener("click", function() {
    expression = expression.slice(0, -1);
    display.value = expression;
});
