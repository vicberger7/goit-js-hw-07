const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', event => {
  const trimmedValue = event.target.value.trim();
  nameOutput.textContent = trimmedValue || 'Anonymous';
});

const divElement = document.createElement('div');
divElement.classList.add('field');

const fieldElement = document.getElementById('field');
const inputElement = document.getElementById('name-input');
const h1Element = document.querySelector('h1');

fieldElement.appendChild(inputElement);
fieldElement.appendChild(h1Element);
