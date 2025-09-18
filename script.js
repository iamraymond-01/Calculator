let display = document.getElementById("display");

function keyToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    display.value = eval(display.value)
}

function del(){
    let val = display.value
    val.split('')
    let newVal = val.split('')
    newVal.splice(-1, 1)
    newVal = newVal.join('')
    display.value = newVal
}
