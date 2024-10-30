let form = document.getElementById('register-form');
form.addEventListener('submit', function(event) {
    // Prevents the default behavior of an element
    // In this case prevents the form from reloading the page
    event.preventDefault()

   
   // let inputConfirmPassword = document.getElementById('inputConfirmPassword');
   // console.log(inputEmail);
   // console.log(inputEmail.value);


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
    const inputField = document.getElementById(requiredField);
    if (isInputEmpty(inputField)) {
        let fieldName = requiredField.replace('input', '');

        switch(fieldName) {
            case 'Address2':
                fieldName = 'Second Address'
                break;
        }
        // console.log(fieldName)
        errorMessages += `${fieldName} is required <br>`;
    } 
   }


   let formMessages     = document.getElementById('form-messages');
   if (errorMessages == "") {
       formMessages.innerHTML = `
       <div class="alert alert-success">
          You are registered :)
       </div>`;
   } else { 
       formMessages.innerHTML = `
       <div class="alert alert-danger">
           ${errorMessages}
       </div>`;
   }
})



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
