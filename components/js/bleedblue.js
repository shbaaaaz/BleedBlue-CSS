// close alert

const alertCloseExample = document.querySelector("#alert-close-example");
const btnAlertCloseExample = document.querySelector("#btn-alert-close-example");

btnAlertCloseExample.addEventListener("click", ()=>{
    alertCloseExample.style.display = "none";
});

// login form validation

const loginForm = document.querySelector("#example-login-form");
loginForm.addEventListener("submit", (e)=>{
    const emailElement = document.querySelector("#email-example");
    const passwordElement = document.querySelector("#password-example");
    const emailError = document.querySelector("#email-error");
    const passwordError = document.querySelector("#password-error");

    emailError.style.display = emailElement.value && emailElement.value.includes("@") ?  "none" : "block";
    passwordError.style.display = passwordElement.value && passwordElement.value.length >= 8 ?  "none" : "block";
    e.preventDefault();
});

// //launching and closing modal

const body = document.querySelector("body");
const exampleModal = document.querySelector("#example-modal");
const openModalButton = document.querySelector("#btn-open-example-modal");
const closeModalIcon = document.querySelector("#icon-modal-close-example");
const closeModalButton = document.querySelector("#btn-modal-close-example");

openModalButton.addEventListener("click", () => { 
    exampleModal.style.display = "flex";
    body.style.overflow = "hidden"
});
const closeModal = () => {
    exampleModal.style.display = "none";
    body.style.overflow = "auto";
}
closeModalIcon.addEventListener("click", closeModal);
closeModalButton.addEventListener("click", closeModal);


