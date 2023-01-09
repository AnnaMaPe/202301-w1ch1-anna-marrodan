function display(value) {
    document.getElementById("result").value += value;
}

function clearWholeScreen(value){
    document.getElementById("result").value = ''
}

function clearLastInput(value){
    document.getElementById("result").value = value.pop()
}

function calculate() {
    let numberForCalcualtion = document.getElementById("result").value;
    let calculations = eval(numberForCalcualtion);
    document.getElementById("result").value = calculations;
}

function squareRoot() {
    let numberForSquareRoot = document.getElementById("result").value;
    let squareRootCalcualtions = Math.sqrt(numberForSquareRoot)
    document.getElementById("result").value = squareRootCalcualtions;
}