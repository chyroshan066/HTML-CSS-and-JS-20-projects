const passwordInput = document.querySelector("#password");
const copyButton = document.querySelector("#copyButton");
const generateButton = document.querySelector("#generateButton");
const show = document.querySelector("#show");
const passwordShow = document.querySelector("span");

generateButton.addEventListener("click", () => {
    const char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*_";
    let password = "";
    const passwordLength = 16;

    for(let i=0; i<passwordLength; i++){
        // const randomIndex = Math.floor(Math.random() * char.length);
        // const randomChar = char.substring(randomIndex, randomIndex+1);
        // password += randomChar;

        const randomChar = char[Math.floor(Math.random() * char.length)];
        password += randomChar;
    }

    passwordInput.value = password;
});

copyButton.addEventListener("click", () => {
    copyPassword = passwordInput.value;

    if(copyPassword.trim() === "")                                     // to ignore whitespaces
            alert("Password is empty. Generate a password first.");
    else{
        navigator.clipboard.writeText(copyPassword);
        show.classList.add("active");
        show.innerHTML = `Your new password is: <br>` + copyPassword;
        setTimeout(() => {
            show.classList.remove("active");
        }, 2000);
        passwordInput.value = "";
    }
});