// script.js

function appendToDisplay(value) {
    let display = document.getElementById("display");
    if (display.innerText === "0" || display.innerText === "Error") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    document.getElementById("display").innerText = "0";
}

function deleteLastCharacter() {
    let display = document.getElementById("display");
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText = "0";
    }
}

function calculateResult() {
    let display = document.getElementById("display");
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = "Error";
    }
}

function reverseDisplay() {
    let display = document.getElementById("display");
    if (display.innerText !== "0" && display.innerText !== "Error") {
        display.innerText = display.innerText.startsWith("-") 
            ? display.innerText.slice(1) 
            : "-" + display.innerText;
    }
}
