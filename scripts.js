let numberCards;
let firstCard;
let secondCard;
let correctCards = 0;
let numberMoves = 0;
const imgs = ["images/bobrossparrot.gif","images/bobrossparrot.gif",
            "images/explodyparrot.gif","images/explodyparrot.gif",
            "images/fiestaparrot.gif","images/fiestaparrot.gif",
            "images/metalparrot.gif","images/metalparrot.gif",
            "images/revertitparrot.gif","images/revertitparrot.gif",
            "images/tripletsparrot.gif","images/tripletsparrot.gif",
            "images/unicornparrot.gif","images/unicornparrot.gif"]

function game() {

    let numberCards = parseInt(prompt("Com quantas cartas você quer jogar? Escolha um valor entre 4 e 14."));
    while (numberCards < 4 || numberCards > 14 || (numberCards % 2) === 1) {
        numberCards = parseInt(prompt("Com quantas cartas você quer jogar? Escolha um valor entre 4 e 14."));
    }

    function comparador() {
        return Math.random() - 0.5;
    }
      
    let imgsShuffled = imgs.slice(0,(numberCards));
    imgsShuffled.sort(comparador);

    for (let i = 0; i < numberCards; i++) {
        const list = document.querySelector(".container");
        list.innerHTML += `
                <div class="card" onClick="turnCard(this)">
                    <div class="front-face face">
                        <img class="imageParrot" src="images/front.png">
                    </div>
                    <div class="back-face face">
                        <img class="imageAnimations" src=${imgsShuffled[i]} />
                    </div>
                </div>
        `
    }
}

function turnCard(cardClicked) {
        if (cardClicked.classList.contains("turn") || secondCard !== undefined) {
            return;
        }
        numberMoves ++;
        cardClicked.classList.add("turn");
        if (firstCard === undefined) {
            firstCard = cardClicked;
        } else {
            secondCard = cardClicked;
            if (firstCard.innerHTML === secondCard.innerHTML) {
                correctCards += 2;
                checkGameOver();
                reseteCards();
            } else {
                setTimeout(turnCardsOver,1000);
            }
        }
        
    
}

function turnCardsOver() {
    firstCard.classList.remove("turn");
    secondCard.classList.remove("turn");
    reseteCards();
}

function reseteCards() {
    firstCard = undefined;
    secondCard = undefined;
}

function checkGameOver() {
    if (correctCards === numberCards) {
        alert(`Você ganhou em ${numberMoves} jogadas!`);
    }
}

game(); 