const reverseWord = (word: string) => word.split('').reverse().join('');

const capitalizeWord = (word: string) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

const repeatWord = (word: string, times: number) => word.repeat(times);

// catered for swedish - feel free to change 😊
const countVowels = (word: string) => (word.match(/[aeiouyåäö]/gi) || []).length;

const transformWord = (operation: string, word: string, param: number) => {
  switch (operation) {
    case 'reverse':
      return reverseWord(word);
    case 'capitalize':
      return capitalizeWord(word);
    case 'repeat':
      return repeatWord(word, param);
    case 'countVowels':
      return countVowels(word);
    default:
      return "Invalid operation";
  }
};

const runTransformation = () => {
  const wordInput = document.getElementById('word') as HTMLInputElement | null;
  const operationSelect = document.getElementById('operation') as HTMLSelectElement | null;
  const paramInput = document.getElementById('param') as HTMLInputElement | null;
  const resultContainer = document.getElementById('result') as HTMLElement | null;

  if (!wordInput || !operationSelect || !paramInput || !resultContainer) return;

  const word = wordInput.value;
  const operation = operationSelect.value;
  const param = parseInt(paramInput.value, 10);

  const result = transformWord(operation, word, param);
  resultContainer.textContent = `Result: ${result}`;
  resultContainer.classList.toggle('active', result !== '');
};

// Show/hide param input based on selected operation
const operationSelect = document.getElementById('operation') as HTMLSelectElement | null;
const paramContainer = document.getElementById('paramContainer') as HTMLElement | null;

if (operationSelect && paramContainer) {
  operationSelect.addEventListener('change', () => {
    paramContainer.classList.toggle('active', operationSelect.value === 'repeat');
  });
}
// Event listener for transform button
const transformButton = document.getElementById('transformButton') as HTMLButtonElement | null;
if (transformButton) {
  transformButton.addEventListener('click', runTransformation);
}
