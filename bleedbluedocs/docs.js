const burgerButton = document.querySelector("#btn-burger");
const mobileNavbrandContainer = document.querySelector("#bb-navbar-brand-container");
burgerButton.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log(burgerButton);
    mobileNavbrandContainer.style.display = "block";
});

const burgerCloseButton = document.querySelector("#btn-burger-close");
burgerCloseButton.addEventListener("click",(e)=>{
    e.preventDefault();
    mobileNavbrandContainer.style.display = "none";
})