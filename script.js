function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    let display = document.getElementById('display').value;
    try {
        // Evaluate the mathematical expression in the display
        display = eval(display);
        document.getElementById('display').value = display;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
