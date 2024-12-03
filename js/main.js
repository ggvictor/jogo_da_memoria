// elementos
const number = document.querySelector("#number");
const vader = document.querySelectorAll(".vader");
const game = document.querySelector(".game")
const cards = document.querySelectorAll(".cards");
const body = document.querySelector("#body")

const arrayCards = Array.from(cards)
// funções

function shuffleCards(){
    const shuffledCards = shuffleArray(arrayCards)
    shuffledCards.forEach(card => game.appendChild(card))
}
function shuffleArray(array){
    for (let i = array.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
} 
function timeNumber(){
    let numberInt = Number(number.textContent);
    setTimeout(() => {
        const interval = setInterval(() => {
            if (numberInt >= 200) { // Condição de parada
                clearInterval(interval); // Para o incremento
                console.log("Finalizado:", numberInt);
            } else {
                numberInt += 1; // Incrementa o valor
                number.innerHTML = numberInt // Mostra o valor atual
            }
        }, 1000); // Incrementa a cada 50ms
    }, 1000); // Aguarda 1 segundo antes de começar
}

function flipCard(card) {
    card.classList.toggle("flipped");
    if (card.classList.contains("flipped")) {
        card.style.transform = "rotateY(180deg)";
       
    } 
    else {
        card.style.transform = "rotateY(0)";
    }

    checkCards();
}

function checkCards(){
    const flippedCards = document.querySelectorAll(".cards.flipped:not(.matched)"); 
    if (flippedCards.length === 2) {
        const firstCardId = flippedCards[0].querySelector(".card-back").id;
        const secondCardId = flippedCards[1].querySelector(".card-back").id;

        if (firstCardId == secondCardId) {
             // Marca as cartas como "matched" se forem iguais
                flippedCards.forEach((card) => {
                card.classList.add("matched");
                card.classList.remove("flipped"); // Opcional, para limpar a classe flipped
         });
        }else{
            setTimeout(() => {
                flippedCards.forEach((card) => {
                    card.classList.remove("flipped");
                    card.style.transform = "rotateY(0)";
                });
            }, 1000); // Dá um tempo para mostrar as cartas antes de reverter
         }    
        };
    };
// eventos
window.addEventListener('load', ()=>{
    timeNumber(),
    shuffleCards()
});
