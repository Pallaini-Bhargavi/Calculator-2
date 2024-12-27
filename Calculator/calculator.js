
function appendtodisplay(input) {
    display.value += input;
}

function cleardisplay() {
    display.value = "";
}

function calculate() {
    try {
        let calcExpression = display.value;
        calcExpression = calcExpression.replace(/tan/g, 'Math.tan')
                                       .replace(/sin/g, 'Math.sin')
                                       .replace(/cos/g, 'Math.cos')
                                       .replace(/log/g, 'Math.log')
                                       .replace(/sqrt/g, 'Math.sqrt');  

        display.value = eval(calcExpression);
    } catch (error) {
        display.value = "Error";
    }
}


function toggleCalculatorTheme() {
    calculator.classList.toggle("dark-theme");
}
