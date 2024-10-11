function removeNum() {
    document.getElementById('display').value = '';
}

function dellLastNum() {
    let result = document.getElementById('display').value;
    document.getElementById('display').value = result.slice(0, -1);
}

function addNum(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    var result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
}