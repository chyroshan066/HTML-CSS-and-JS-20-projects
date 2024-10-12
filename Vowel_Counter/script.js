function checkVowels(){
    let text = document.querySelector("#inputText").value;
    const result = document.querySelector(".result");

    let vowelCount = 0;
    //convert to lowercase
    text = text.toLowerCase();
    
    for(let i=0; i<text.length; i++){
        let char = text.charAt(i);

        if(isVowel(char))
            vowelCount++;
    }

    result.textContent = "Total Vowels: " + vowelCount;
}

function isVowel(char){
    let vowels = ['a', 'e', 'i', 'o', 'u']
    return vowels.includes(char);
}