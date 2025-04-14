var Operator;
(function (Operator) {
    Operator["Add"] = "+";
    Operator["Subtract"] = "-";
    Operator["Multiply"] = "*";
    Operator["Divide"] = "/";
})(Operator || (Operator = {}));
function calculate() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operator = document.getElementById("operator").value;
    var result;
    switch (operator) {
        case Operator.Add:
            result = num1 + num2;
            break;
        case Operator.Subtract:
            result = num1 - num2;
            break;
        case Operator.Multiply:
            result = num1 * num2;
            break;
        case Operator.Divide:
            result = num2 !== 0 ? num1 / num2 : NaN;
            break;
        default:
            result = NaN;
    }
    document.getElementById("result").innerText = "Result: ".concat(isNaN(result) ? 'Invalid input' : result);
}
