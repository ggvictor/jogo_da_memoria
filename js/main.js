// elementos
const number = document.querySelector("#number");
const vader = document.querySelectorAll(".vader")
const cards = document.querySelectorAll(".cards")
// funções

function flipCard(card) {
    card.classList.toggle("flipped");
    if (card.classList.contains("flipped")) {
        card.style.transform = "rotateY(180deg)";
    } else {
        card.style.transform = "rotateY(0)";
    }

    checkCards();
}

function checkCards(){
    const flippedCards = document.querySelectorAll(".cards.flipped"); 
    if (flippedCards.length === 2) {
        const firstCardId = flippedCards[0].querySelector(".card-back").id;
        const secondCardId = flippedCards[1].querySelector(".card-back").id;

        if (firstCardId !== secondCardId) {
            setTimeout(() => {
                flippedCards.forEach((card) => {
                    card.classList.remove("flipped");
                    card.style.transform = "rotateY(0)";
                });
            }, 1000); // Dá um tempo para mostrar as cartas antes de reverter
        }
    }
}
// eventos
addEventListener('click', () => gameDouble());