const createButton = document.querySelector('[data-create]');
const input = document.querySelector('input[type="number"]');

createButton.addEventListener('click', () => {
  const amount = Number(input.value);
  if (amount > 0 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  }
});

const boxesContainer = document.querySelector('#boxes');

function createBoxes(amount) {
  let boxSize = 30;
  let boxesHTML = '';

  for (let i = 0; i < amount; i++) {
    const color = getRandomHexColor();
    const boxHTML = `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${color}"></div>`;
    boxesHTML += boxHTML;
    boxSize += 10;
  }

  boxesContainer.innerHTML = boxesHTML;
}

const destroyButton = document.querySelector('[data-destroy]');

destroyButton.addEventListener('click', () => {
  destroyBoxes();
});

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}
