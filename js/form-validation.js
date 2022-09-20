const nameForm = document.querySelector("#name");
const emailForm = document.querySelector("#email");
const phoneForm = document.querySelector("#phone");
const messageForm = document.querySelector("#message");
const successMsg = document.querySelector("#success-message");

const form = document.querySelector("#contact-me-form")


const isRequired = value => value === '' ? false : true;

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPhoneValid = (phone) => {
        const re = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
        return re.test(phone);
};

const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.classList.add("text-danger");
    error.textContent = message;
};

const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}

const checkName = () => {

    let valid = false;


    const name = nameForm.value.trim();

    if (!isRequired(name)) {
        showError(nameForm, 'Vos nom et prénom sont requis.');
    } else {
        showSuccess(nameForm);
        valid = true;
    }
    return valid;
};

const checkEmail = () => {
    let valid = false;
    const email = emailForm.value.trim();
    if (!isRequired(email)) {
        showError(emailForm, "Ce champ est obligatoire !");
    } else if (!isEmailValid(email)) {
        showError(emailForm, "L'adresse saisie n'est pas valide.")
    } else {
        showSuccess(emailForm);
        valid = true;
    }
    return valid;
}

const checkPhone = () => {
    let valid = false;
    const phone = phoneForm.value.trim();
    if (!isRequired(phone)) {
        showError(phoneForm, "Merci de renseigner votre numéro de téléphone.");
    } else if (!isPhoneValid(phone)) {
        showError(phoneForm, "Un numéro de téléphone Français est requis.")
    } else {
        showSuccess(phoneForm);
        valid = true;
    }
    return valid;
}

const checkMessage = () => {
    let valid = false;
    const message = messageForm.value.trim();
    if (!isRequired(message)) {
        showError(messageForm, "Merci d'écrire un message à me transmettre.'");
    } else {
        showSuccess(messageForm);
        valid = true;
    }
    return valid;
}

const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();


    // validate fields
    let isNameValid = checkName(),
        isEmailValid = checkEmail(),
        isPhoneValid = checkPhone(),
        isMessageValid = checkMessage();

    let isFormValid = isEmailValid
        && isEmailValid
        && isPhoneValid
        && isMessageValid;

    // submit to the server if the form is valid
    if (isFormValid) {
        nameForm.value = "";
        emailForm.value = "";
        phoneForm.value = "";
        messageForm.value = "";
        successMsg.classList.remove('d-none');
    }

});

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'name':
            checkName();
            break;
        case 'email':
            checkEmail();
            break;
        case 'phone':
            checkPhone();
            break;
        case 'message':
            checkMessage();
            break;
    }
}));