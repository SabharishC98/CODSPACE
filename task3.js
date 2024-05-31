let displayElement = document.getElementById('display');

function appendToDisplay(value) {
    displayElement.innerText += value;
}

function clearDisplay() {
    displayElement.innerText = '';
}

function calculateResult() {
    try {
        displayElement.innerText = eval(displayElement.innerText);
    } catch (error) {
        displayElement.innerText = 'Error';
    }
}
