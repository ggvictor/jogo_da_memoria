function flipCard(card) {
    card.classList.toggle("flipped");
    if (card.classList.contains("flipped")) {
        card.style.transform = "rotateY(180deg)";
    } else {
        card.style.transform = "rotateY(0)";
    }
}