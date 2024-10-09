const body = document.body;
const tabOne = document.querySelector(".react");
const tabTwo = document.querySelector(".vue");
const tabThree = document.querySelector(".angular");
const item = document.querySelector(".item");
const icon = document.querySelector(".big-icon");
const active = document.querySelector(".active");

function setColors(tab, bgColor, iconClass, infoColor){
    body.style.backgroundColor = bgColor;
    icon.innerHTML = `<i class = "${iconClass}"></i>`;
    item.style.color = infoColor;
    // for(let i=0; item.length; i++){
    //         item[i].style.color = infoColor;
    // }
}

tabOne.addEventListener("click", () => {
    setColors(tabOne, "#00d8ff", "fab fa-react", "#00d8ff");
    tabOne.classList.add("tabOne");
    tabTwo.classList.remove("tabOne");
    tabThree.classList.remove("tabOne");
});

tabTwo.addEventListener("click", () => {
    setColors(tabTwo, "#42b883", "fab fa-vuejs", "#42b883");
    tabOne.classList.remove("tabOne");
    tabTwo.classList.add("tabOne");
    tabThree.classList.remove("tabOne");
});

tabThree.addEventListener("click", () => {
    setColors(tabThree, "#b52e31", "fab fa-angular", "#b52e31");
    tabOne.classList.remove("tabOne");
    tabTwo.classList.remove("tabOne");
    tabThree.classList.add("tabOne");
});

setColors(tabOne, "#00d8ff", "fab fa-react", "#00d8ff");
tabOne.classList.add("tabOne");
