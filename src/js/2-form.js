const feedbackFormEl = document.querySelector('.js-feedback-form');
let formData = {
  email: '',
  message: '',
};

const STORAGE_KEY = 'feedback-form-state';

const fillFormFields = () => {
  const formDataFromLS = JSON.parse(localStorage.getItem('STORAGE_KEY'));

  if (formDataFromLS === null) {
    return;
  }

  formData = formDataFromLS;

  for (const key in formDataFromLS) {
    if (formDataFromLS.hasOwnProperty(key)) {
      feedbackFormEl.elements[key].value = formDataFromLS[key];
    }
  }
};

fillFormFields();

const onFormFieldChange = event => {
  const fieldName = event.target.name;
  const fieldValue = event.target.value;

  formData[fieldName] = fieldValue;

  localStorage.setItem('STORAGE_KEY', JSON.stringify(formData));
};

const onFeedbackFormSubmit = event => {
  event.preventDefault();
  event.target.reset();
  localStorage.removeItem('STORAGE_KEY');

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
};

feedbackFormEl.addEventListener('input', onFormFieldChange);
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);
