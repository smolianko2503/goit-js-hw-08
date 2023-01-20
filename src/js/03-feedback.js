import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const KEY_LOCAL = "feedback-form-state";

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onClickBtn);

const dataInput = JSON.parse(localStorage.getItem(KEY_LOCAL)) || {};;

function onInput(evt) {
  
  dataInput[evt.target.name] = evt.target.value;
  const stringifyDataInput = JSON.stringify(dataInput);
  localStorage.setItem(KEY_LOCAL, stringifyDataInput);
};

function onClickBtn(evt) {

  evt.preventDefault();

  if (
    form.elements.email.value === '' ||
    form.elements.message.value === ''
  ) {
    alert('Fill in all fields');
  } else {
    console.log(dataInput);
    localStorage.removeItem(KEY_LOCAL);
    evt.currentTarget.reset();
    
    delete dataInput.email;
    delete dataInput.message;
  }
  
};

if (localStorage.getItem(KEY_LOCAL)) {
  const parsedDataInput = JSON.parse(localStorage.getItem(KEY_LOCAL));
  if (parsedDataInput) {
    form.elements.email.value = parsedDataInput.email || '';
    form.elements.message.value = parsedDataInput.message || '';
  }
};
 
