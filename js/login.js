let form = document.getElementById('login-form');
form.addEventListener('submit', function(event) {
    // Prevents the default behavior of an element
    // In this case prevents the form from reloading the page
    event.preventDefault()


    const formValidation = new FormValidation();
    formValidation.requiredFields = [
      'inputEmail',
      'inputPassword',
    ]

    formValidation.succesMessage = "Success, the form is submitted!";
    document.getElementById('form-messages').innerHTML = formValidation.getFormattedMessage();
})
