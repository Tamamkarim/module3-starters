
const inputField = document.getElementById('calculation');
const calculateButton = document.getElementById('calculate');
const resultParagraph = document.getElementById('result');

calculateButton.addEventListener('click', () => {
  const input = inputField.value.trim(); // Get the input and trim whitespace
  let result;

 
  if (input.includes('+')) {
    const [num1, num2] = input.split('+').map(Number);
    result = num1 + num2;
  }

  else if (input.includes('-')) {
    const [num1, num2] = input.split('-').map(Number);
    result = num1 - num2;
  }
 
  else if (input.includes('*')) {
    const [num1, num2] = input.split('*').map(Number);
    result = num1 * num2;
  }
 
  else if (input.includes('/')) {
    const [num1, num2] = input.split('/').map(Number);
    result = num2 !== 0 ? Math.floor(num1 / num2) : 'Error: Division by zero';
  }
  else {
    result = 'Invalid input';
  }
 
  resultParagraph.textContent = `Result: ${result}`;
});