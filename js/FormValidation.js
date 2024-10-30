class FormValidation {
  // Properties
  requiredFields = [];
  errorMessages = "";
  succesMessage = "You are registered :)";

  checkRequiredFields = function() {
    for (let requiredField of this.requiredFields) {
      this.errorMessages += this.getRequiredFieldErrorMessage(requiredField)
    }
  }

  getRequiredFieldErrorMessage = function(requiredField) {
    const inputField = document.getElementById(requiredField);
    if (this.isInputEmpty(inputField)) {
        return `${this.getFieldName(requiredField)} is required <br>`;
    }
    
    return "";
  }

  getFieldName = function(requiredField) {
    let fieldName = requiredField.replace('input', '');

    switch(fieldName) {
        case 'Address2':
            fieldName = 'Second Address'
            break;
    }

    return fieldName;
  }

  isInputEmpty = function(input) {
    return input.value.trim() === ""
  }

  getFormattedSuccessMessage = function() {
    return `
        <div class="alert alert-success">
            ${this.succesMessage}
        </div>`;
  }

  getFormattedErrorMessage = function() {
    return `
        <div class="alert alert-danger">
          ${this.errorMessages}
        </div>`;
  }

  getFormattedMessage = function() {
    this.checkRequiredFields()
    if (this.errorMessages == "") {
        return this.getFormattedSuccessMessage();
    } else { 
        return this.getFormattedErrorMessage(this.errorMessages);
    }
  }
}
