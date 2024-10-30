let form = document.getElementById('register-form');
form.addEventListener('submit', function(event) {
    // Prevents the default behavior of an element
    // In this case prevents the form from reloading the page
    event.preventDefault()

   let inputEmail       = document.getElementById('inputEmail');
   let inputPassword    = document.getElementById('inputPassword');
   let inputAddress     = document.getElementById('inputAddress');
   let inputAddress2    = document.getElementById('inputAddress2');
   let inputCity        = document.getElementById('inputCity');
   let inputZip         = document.getElementById('inputZip');
   let formMessages     = document.getElementById('form-messages');
   // let inputConfirmPassword = document.getElementById('inputConfirmPassword');
   // console.log(inputEmail);
   // console.log(inputEmail.value);

  
   let errorMessages = "";
   if (isInputEmpty(inputEmail)) {
       errorMessages += 'Email is required <br>';
   } 

   if (isInputEmpty(inputAddress)) {
       errorMessages += 'Address is required <br>';
   } 

   if (isInputEmpty(inputAddress2)) {
       errorMessages += 'Second address is required <br>';
   } 

   if (isInputEmpty(inputCity)) {
       errorMessages += 'City is required <br>';
   } 

   if (isInputEmpty(inputZip)) {
       errorMessages += 'Zip is required <br>';
   } 

   if (isInputEmpty(inputPassword)) {
       errorMessages += 'Password is required <br>';
   } 

   // if (inputConfirmPassword.value != inputPassword.value) {
   //     errorMessages += 'Confirm password does not match <br>';
   // }

      
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
