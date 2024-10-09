const body = document.body;
const lights = document.querySelectorAll(".light");

let active = 0;

function changeColor(){
    if(active > 0){
        lights[active - 1].classList.remove("active");
    }

    body.style.backgroundColor = getComputedStyle(lights[active]).getPropertyValue('--light-color');
    lights[active].classList.add('active');

    if(active === lights.length - 1){
        setTimeout(() => {
            lights[active - 1].classList.remove("active");
            active = 0;
        }, 900)
    }     
    else
        active++;
}

setInterval(() => {
    changeColor();
}, 1000);
