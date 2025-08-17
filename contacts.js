const form = document.querySelector("form");
const success = document.querySelector(".success");
const nameInput = document.querySelector('input[name="inputFName"]');
const inputEmail = document.querySelector('input[name="inputEmail"]');
const inputNum = document.querySelector('input[name="inputNum"]');
const inputFeedback = document.querySelector('textarea[name="inputFeedback"]');

//textarea validation

//Validate Email
const isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
//Validate Phone number
const isValidPhone = (phone) => {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/im;
  return re.test(String(phone).toLowerCase());
};


// Function so I dont have to repeat code.
const loopInput = (element) => {
    element.classList.remove("invalid");
    element.nextElementSibling.classList.add("hidden");
};

const refuseInput = (element) => {
    element.classList.add("invalid");
    element.nextElementSibling.classList.remove("hidden");
};

let isThisValid = false;

 //Loop
const validateInput = () => {
    isThisValid = true;
    loopInput(nameInput);
    loopInput(inputEmail);
    loopInput(inputNum);
    loopInput(inputFeedback);

    if (!nameInput.value) {
        isThisValid = false;
        refuseInput(nameInput);
    }
    if (!isValidEmail(inputEmail.value)) {
        isThisValid = false;
        refuseInput(inputEmail);
    }
    if (!isValidPhone(inputNum.value)) {
        isThisValid = false;
        refuseInput(inputNum);
    }
    if (!inputFeedback.value) {
        isThisValid = false;
        refuseInput(inputFeedback);
    }
  
  
};
//EventListener
form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateInput();
    if (isThisValid) {
        form.remove();
        success.classList.remove("hidden")
    }
});

nameInput.addEventListener("input", () => {
    validateInput();
});

inputEmail.addEventListener("input", () => {
    validateInput();
});

inputNum.addEventListener("input", () => {
    validateInput();
});

inputFeedback.addEventListener("textarea", () => {
    validateInput();
});

