import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = "feedback-form-state";
const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

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

  const {
    elements: { email, message }
  } = event.currentTarget;

  if (email.value === "" || message.value === "") {
    return console.log("Please fill in all the fields!");
  }

  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formData);
  for (const key in formData) {
    delete formData[key];
}
}

function populateFormOnReset() {
  if (formData) {
    form.elements.email.value = formData.email || "";
    form.elements.message.value = formData.message || "";
  }
}