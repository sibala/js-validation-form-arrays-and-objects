
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