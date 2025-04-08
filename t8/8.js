
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operatorSelect = document.getElementById('operator');
const calculateButton = document.getElementById('calculate');
const resultParagraph = document.getElementById('result');


calculateButton.addEventListener('click', () => {

  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const operator = operatorSelect.value;

 
  let result;
  if (operator === 'add') {
    result = num1 + num2;
  } else if (operator === 'subtract') {
    result = num1 - num2;
  } else if (operator === 'multiply') {
    result = num1 * num2;
  } else if (operator === 'divide') {
    result = num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
  } else {
    result = 'Invalid operation';
  }

  
  resultParagraph.textContent = `Result: ${result}`;
});