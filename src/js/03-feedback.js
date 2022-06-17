import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = "feedback-form-state";
const formData = {};

populateFormOnReset();

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  const formDataJSON = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, formDataJSON);
}

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formData);
}

function populateFormOnReset() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedData) {
    form.elements.email.value = savedData.email;
    form.elements.message.value = savedData.message;
  }
}