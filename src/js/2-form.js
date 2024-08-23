const feedbackFormEl = document.querySelector('.js-feedback-form');
let formData = {
  email: '',
  message: '',
};

const STORAGE_KEY = 'feedback-form-state';

const fillFormFields = () => {
  const formDataFromLS = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (formDataFromLS === null) {
    return;
  }

  formData = formDataFromLS;

  for (const key in formDataFromLS) {
    if (Object.hasOwn(formDataFromLS, key)) {
      feedbackFormEl.elements[key].value = formDataFromLS[key];
    }
  }
};

fillFormFields();

const onFormFieldChange = event => {
  const fieldName = event.target.name;
  const fieldValue = event.target.value.trim();

  formData[fieldName] = fieldValue;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

const onFeedbackFormSubmit = event => {
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  event.preventDefault();
  event.target.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formData);
};

feedbackFormEl.addEventListener('input', onFormFieldChange);
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);
