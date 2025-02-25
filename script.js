// script.js

function clearDisplay() {
    document.getElementById("display").innerText = "0";
}

function deleteDigit() {
    let display = document.getElementById("display").innerText;
    document.getElementById("display").innerText = display.length > 1 ? display.slice(0, -1) : "0";
}

function appendCharacter(char) {
    let display = document.getElementById("display").innerText;
    document.getElementById("display").innerText = display === "0" ? char : display + char;
}

function calculateResult() {
    let display = document.getElementById("display").innerText;
    try {
        document.getElementById("display").innerText = eval(display);
    } catch (e) {
        document.getElementById("display").innerText = "Error";
    }
}
