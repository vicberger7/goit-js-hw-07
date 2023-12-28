const form = document.querySelector('.login-form');
const emailInput = form.elements.email;
const passwordInput = form.elements.password;

form.addEventListener('submit', function (event) {
  event.preventDefault();
  if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
    alert('All form fields must be filled in');
  } else {
    const formData = {
      email: emailInput.value.trim(),
      password: passwordInput.value.trim(),
    };
    console.log(formData);
    form.reset();
  }
});

const labelsDiv = document.querySelectorAll('.login-form label');

const div = document.createElement('div');
div.className = 'labels-form';

labelsDiv[0].parentElement.insertBefore(div, labelsDiv[0]);

labelsDiv.forEach(label => {
  div.appendChild(label);
});

const label = document.querySelectorAll('label');
label.forEach(label => {
  label.classList.add('label-form');
});

const inputElem = document.querySelector('input[name="email"]');
inputElem.classList.add('textarea-form');

const inputElement = document.querySelector('input[name="password"]');
inputElement.classList.add('textarea-form');

document.querySelector('input[name="email"]').placeholder = 'Type your email';
document.querySelector('input[name="password"]').placeholder =
  'Type your password';
