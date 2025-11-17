let display = document.getElementById("display");
let buttons = document.querySelectorAll(".btn[data-value]");
let plusBtn = document.getElementById("plus");
let equalsBtn = document.getElementById("equals");
let deleteBtn = document.getElementById("delete");

let expression = ""; 


buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        expression += this.getAttribute("data-value");
        display.value = expression;
    });
});


plusBtn.addEventListener("click", function() {
    if (expression !== "" && !expression.endsWith("+")) {
        expression += "+";
        display.value = expression;
    }
});


equalsBtn.addEventListener("click", function() {
    let parts = expression.split("+");
    let result = 0;
    parts.forEach(function(num) {
        if(num !== "") result += Number(num);
    });
    display.value = result;
    expression = result.toString(); 
});


deleteBtn.addEventListener("click", function() {
    expression = expression.slice(0, -1);
    display.value = expression;
});
