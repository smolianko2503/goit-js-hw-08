import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const KEY_LOCAL = "feedback-form-state";
const dataInput = {};


function onInput(evt) {
    dataInput[evt.target.name] = evt.target.value;
    const stringifyDataInput = JSON.stringify(dataInput);
  localStorage.setItem(KEY_LOCAL, stringifyDataInput);
}

function onClickBtn(evt) {
  const parsedDataInput = JSON.parse(localStorage.getItem(KEY_LOCAL));
  console.log(parsedDataInput);

  evt.preventDefault();
  localStorage.removeItem(KEY_LOCAL);
  evt.currentTarget.reset();

  delete dataInput.email;
  delete dataInput.message;
}

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onClickBtn);

if (localStorage.getItem(KEY_LOCAL)) {
    const parsedDataInput = JSON.parse(localStorage.getItem(KEY_LOCAL));
    form.elements.email.value = parsedDataInput.email || '';
    form.elements.message.value = parsedDataInput.message;
};


