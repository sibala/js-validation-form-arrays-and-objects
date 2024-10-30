let form = document.getElementById('register-form');
form.addEventListener('submit', function(event) {
    // Prevents the default behavior of an element
    // In this case prevents the form from reloading the page
    event.preventDefault()

    const requiredFields = [
        'inputEmail',
        'inputPassword',
        'inputAddress',
        'inputAddress2',
        'inputCity',
        'inputZip',
    ]

   let errorMessages = "";
   for (let requiredField of requiredFields) {
    errorMessages += getRequiredFieldErrorMessage(requiredField)
   }


   


   
   

   document.getElementById('form-messages').innerHTML = getFormattedMessage(errorMessages);
})

function getRequiredFieldErrorMessage(requiredField) {
    const inputField = document.getElementById(requiredField);
    if (isInputEmpty(inputField)) {
        return `${getFieldName(requiredField)} is required <br>`;
    }
    
    return "";
}

function getFieldName(requiredField) {
    let fieldName = requiredField.replace('input', '');

    switch(fieldName) {
        case 'Address2':
            fieldName = 'Second Address'
            break;
    }

    return fieldName;
}

function getFormattedSuccessMessage() {
    return `
        <div class="alert alert-success">
            You are registered :)
        </div>`;
}

function getFormattedErrorMessage(errorMessages) {
    return `
        <div class="alert alert-danger">
           ${errorMessages}
        </div>`;
}

function getFormattedMessage(errorMessages) {
    if (errorMessages == "") {
        return getFormattedSuccessMessage();
    } else { 
        return getFormattedErrorMessage(errorMessages);
    }
}

function isInputEmpty(input) {
    return input.value.trim() === ""
}


function generateBirthYearRangeSelectOptionsHTML(startYear, endYear, defaultYear) {
    let birthYearOptionsHTML = "";
    for (let i = startYear; i >= endYear; i--) {
        if (i === defaultYear) {
            birthYearOptionsHTML += `<option selected>${i}</option>`;
        } else {
            birthYearOptionsHTML += `<option>${i}</option>`;
        }
    }

    return birthYearOptionsHTML;
}


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