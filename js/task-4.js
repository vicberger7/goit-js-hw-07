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
