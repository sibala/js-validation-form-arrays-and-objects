let form = document.getElementById('register-form');
form.addEventListener('submit', function(event) {
    // Prevents the default behavior of an element
    // In this case prevents the form from reloading the page
    event.preventDefault()


    const formValidation = new FormValidation();
    formValidation.requiredFields = [
        'inputEmail',
        'inputPassword',
        'inputAddress',
        'inputAddress2',
        // 'inputCity',
        // 'inputZip',
    ]

    formValidation.succesMessage = "Success, the form is submitted!";
    document.getElementById('form-messages').innerHTML = formValidation.getFormattedMessage();
})









let currentYear = new Date().getFullYear(); // 2022
document.getElementById('selectBirthYear').innerHTML = generateBirthYearRangeSelectOptionsHTML(currentYear, currentYear - 100, 1990);

/**
    * Hpw to use validation with regex
    * In this case we are looking for a string with at least 1 capital letter
    */
    // const inputPassword = document.getElementById('inputPassword');
    // const regex = new RegExp("(?=.*[A-Z])");
    // if (regex.test(inputPassword.value)) {
    //    alert('There is a capital letter in the password')
    // } else {
    //     alert('There is NOT a capital letter in the password')
    // }