const card = document.querySelectorAll(".card");

window.addEventListener("scroll", animateCards);

function animateCards(){
    const checkBottom = (window.innerHeight / 4) * (150 / 25);

    card.forEach((singleCard) => {
        const cardTop = singleCard.getBoundingClientRect().top;
        let toSlideIn = cardTop < checkBottom;

        if(toSlideIn)
            singleCard.classList.add("slidingIn");
        else
            singleCard.classList.remove("slidingIn");
    })
}