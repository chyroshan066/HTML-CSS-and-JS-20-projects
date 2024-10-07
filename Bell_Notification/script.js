const notify= document.querySelector(".notification");
const button = document.querySelector(".button");

button.addEventListener("click", () => {
    const counter = Number(notify.getAttribute("data-count")) || 0;

    notify.setAttribute("data-count", counter + 1);
    notify.classList.add("count");
    notify.classList.add("notify");
})

// If at the end of the animation, the class notify is not removed then the bell icon won't be animated no matter how much we click
notify.addEventListener("animationend", () => {
    notify.classList.remove("notify");
})