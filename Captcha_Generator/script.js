const body = document.body;
const display = document.querySelector(".status");

document.querySelector(".client-text")
const submit = document.querySelector(".submit");
const refresh = document.querySelector(".refresh");

const char = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; //Captcha generated using this variable
let captcha = ""; // To generate the captcah

body.onload = function generateCaptcha(){
    const captchaLength = 6;
    
    for(let i=0; i<captchaLength; i++){
        const randomIndex = Math.floor(Math.random() * char.length);
        captcha += char.substring(randomIndex, randomIndex+1);
    }

    document.querySelector(".generator").value = captcha;
    display.innerText = "Captcha Generator";
}

submit.addEventListener("click", () => {
    const input = document.querySelector(".client-text").value;
    const captchaValue = document.querySelector(".generator").value;

    if(input === "")
        display.innerText = "Please enter the text shown below👇";
    else if(input === captchaValue)
        display.innerText = "Matched😎";
    else
    display.innerText = "Mot Matched😖";
})

refresh.addEventListener("click", () => {
    let newCaptcha  = ""; 

    for(let i=0; i<captcha.length; i++){

        //This is also right
        // const randomIndex = Math.floor(Math.random() * char.length);
        // newCaptcha += char.substring(randomIndex, randomIndex+1);

        const randomChar = char[ Math.floor(Math.random() * char.length)];
        newCaptcha += randomChar;
    }

    document.querySelector(".generator").value = newCaptcha;
    display.innerText = "Captcha Generator";
})