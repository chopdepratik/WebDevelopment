
let display = document.getElementById('display');
let arithCalculator = document.getElementById('arithCalculator');
let bmiCalculator = document.getElementById('bmiCalculator');
let toggleButton = document.querySelector('.toggle-btn');
bmiCalculator.classList.add('hidden');

function appendToDisplay(value) {
    if (display.innerHTML === '0') {
        display.innerHTML = value;
    } else {
        display.innerHTML += value;
    }
}

function clearDisplay() {
    display.innerHTML = '0';
}

function deleteLast() {
    if (display.innerHTML.length > 1) {
        display.innerHTML = display.innerHTML.slice(0, -1);
    } else {
        display.innerHTML = '0';
    }
}

function calculateResult() {
    try {
        let display = document.getElementById('display');
        let expression = display.innerHTML;
        let result = math.evaluate(expression);
        display.innerHTML = result;
    } catch (error) {
        display.innerHTML = 'Error';
    }
}


function toggleCalculator() {
    if (arithCalculator.classList.contains('hidden')) {
        arithCalculator.classList.remove('hidden');
        bmiCalculator.classList.add('hidden');
        toggleButton.innerHTML = 'Switch to BMI Calculator';
        display.innerHTML = '0';
    } else {
        arithCalculator.classList.add('hidden');
        bmiCalculator.classList.remove('hidden');
        toggleButton.innerHTML = 'Switch to Simple Calculator';
        display.innerHTML = '';
    }
}

function calculateBMI() {
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
    if (height && weight) {
        let bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        document.getElementById('bmiResult').innerHTML = `BMI: ${bmi}`;
        if(bmi>=18 && bmi<24){
            document.getElementById('bmiResult2').innerHTML = `NormalWeight`;
        }
        else if(bmi<18){
            document.getElementById('bmiResult2').innerHTML = `UnderWeight`;
        }
        else{
            document.getElementById('bmiResult2').innerHTML = `OverWeight`;
        }
    } else {
        document.getElementById('bmiResult').innerHTML = 'Please enter valid values';
    }
}
