const container = document.querySelector(".container");
const input = document.querySelector(".search");
const button = document.querySelector(".button");
const searchIcon = document.querySelector(".fa-search");
const closeIcon = document.querySelector(".fa-times");

button.addEventListener("click", () => {
    container.classList.toggle("active");
    button.classList.toggle("active");
    closeIcon.classList.toggle("active");
    searchIcon.classList.toggle("active");
    input.focus();
})