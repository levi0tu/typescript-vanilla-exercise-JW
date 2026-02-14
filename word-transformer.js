"use strict";
const reverseWord = (word) => word.split('').reverse().join('');
const capitalizeWord = (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
const repeatWord = (word, times) => word.repeat(times);
// catered for swedish - feel free to change 😊
const countVowels = (word) => (word.match(/[aeiouyåäö]/gi) || []).length;
const transformWord = (operation, word, param) => {
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
    const wordInput = document.getElementById('word');
    const operationSelect = document.getElementById('operation');
    const paramInput = document.getElementById('param');
    const resultContainer = document.getElementById('result');
    if (!wordInput || !operationSelect || !paramInput || !resultContainer)
        return;
    const word = wordInput.value;
    const operation = operationSelect.value;
    const param = parseInt(paramInput.value, 10);
    const result = transformWord(operation, word, param);
    resultContainer.textContent = `Result: ${result}`;
    resultContainer.classList.toggle('active', result !== '');
};
// Show/hide param input based on selected operation
const operationSelect = document.getElementById('operation');
const paramContainer = document.getElementById('paramContainer');
if (operationSelect && paramContainer) {
    operationSelect.addEventListener('change', () => {
        paramContainer.classList.toggle('active', operationSelect.value === 'repeat');
    });
}
// Event listener for transform button
const transformButton = document.getElementById('transformButton');
if (transformButton) {
    transformButton.addEventListener('click', runTransformation);
}
//# sourceMappingURL=word-transformer.js.map