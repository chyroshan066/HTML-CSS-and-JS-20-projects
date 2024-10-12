const myBtn = document.querySelector("#myBtn");
const myPopover = document.querySelector("#myPopover");
const closeBtn = document.querySelector("#closeBtn");

myBtn.addEventListener("click", () => {
    myPopover.style.display = "block";
})

closeBtn.addEventListener("click", () => {
    myPopover.style.display = "none";
})