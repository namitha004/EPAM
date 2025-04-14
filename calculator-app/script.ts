
enum Operator {
  Add = "+",
  Subtract = "-",
  Multiply = "*",
  Divide = "/"
}

function calculate(): void {
  const num1 = parseFloat((document.getElementById("num1") as HTMLInputElement).value);
  const num2 = parseFloat((document.getElementById("num2") as HTMLInputElement).value);
  const operator = (document.getElementById("operator") as HTMLSelectElement).value as Operator;

  let result: number;

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

  (document.getElementById("result") as HTMLElement).innerText = `Result: ${isNaN(result) ? 'Invalid input' : result}`;
}
