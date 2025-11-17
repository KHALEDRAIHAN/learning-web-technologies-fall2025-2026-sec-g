let display = document.getElementById("display");
let buttons = document.querySelectorAll(".btn[data-value]");
let plusBtn = document.getElementById("plus");
let minusBtn = document.getElementById("minus");
let multiplyBtn = document.getElementById("multiply");
let divideBtn = document.getElementById("divide");
let equalsBtn = document.getElementById("equals");
let deleteBtn = document.getElementById("delete");

let expression = ""; 

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        expression += this.getAttribute("data-value");
        display.value = expression;
    });
});


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


equalsBtn.addEventListener("click", function() {
    try {
       
        let result = eval(expression);
        display.value = result;
        expression = result.toString(); 
    } catch (e) {
        display.value = "Error";
        expression = "";
    }
});


deleteBtn.addEventListener("click", function() {
    expression = expression.slice(0, -1);
    display.value = expression;
});
