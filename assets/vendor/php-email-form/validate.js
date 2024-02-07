(function () {
  "use strict";

  let forms = document.querySelectorAll('.php-email-form');

  forms.forEach( function(form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();

      let thisForm = this;

      let formData = new FormData(thisForm);

      fetch(thisForm.getAttribute('action'), {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        if (data.ok) {
          displaySuccess(thisForm);
        } else {
          displayError(thisForm, data.error);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        displayError(thisForm, 'An unexpected error occurred. Please try again later.');
      });

      thisForm.querySelector('.loading').classList.add('d-block');
      thisForm.querySelector('.error-message').classList.remove('d-block');
      thisForm.querySelector('.sent-message').classList.remove('d-block');
    });
  });

  function displaySuccess(thisForm) {
    thisForm.querySelector('.loading').classList.remove('d-block');
    thisForm.querySelector('.sent-message').innerHTML = 'Your email has been successfully sent!';
    thisForm.querySelector('.sent-message').classList.add('d-block');
    thisForm.reset(); // Reset the form after successful submission
  }

  function displayError(thisForm, error) {
    thisForm.querySelector('.loading').classList.remove('d-block');
    thisForm.querySelector('.error-message').innerHTML = error || 'An error occurred while processing your request. Please try again later.';
    thisForm.querySelector('.error-message').classList.add('d-block');
  }

})();
