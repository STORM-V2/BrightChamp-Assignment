var success = 0;
var cardList = [
    "Apple",
    "Mango",
    "Orange",
    "Cherry",
    "Pineapple",
    "Watermelon",
    "Aa",
    "Cc",
    "Oo",
    "Mm",
    "Pp",
    "Ww",
]
var cardSet;
var board = [];
var rows = 4; 
var columns = 5;

var card1Selected;
var card2selected;

window.onload = function () {
    shuffleCards();
    startGame();
}

// function to shuffle position of cards
function shuffleCards() {
    cardSet = cardList.length / 2;
    console.log(cardSet);

    for (let i = 0; i < cardSet.length; i++) {
        let j = Math.floor(Math.random() * cardSet.length);
        //swap
        let temp = cardSet[i];
        cardSet[i] = cardSet[j];
        cardSet[j] = temp;
    }
}

function startGame() {
    //arrange the board 4x5
    for (let r=0;r<rows; r++){
        let row=[];
        for (let c=0; c<columns; c++){
            let cardImg = cardSet.pop();
            row.push(cardImg);

            // <img id="0-0" class="card" src="water.jpg">
            let card = document.createElement("img");
            card.id = r.toString() + "-" + c.toString();
            card.src = cardImg + ".jpg";
            card.classList.add("card");
            card.addEventListener("click",selectCard);
            document.getElementById("board").append(card);

        }
        board.push(row);
    }

    setTimeout(hideCards, 1000);
}


function hideCards() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let card = document.getElementById(r.toString() + "-" + c.toString());
            card.src = "back.jpg"
        }
    }
}

function selectCard() {
    if (this.src.includes("back")){
        if (!card1Selected){
            card1Selected = this;

            let coords = card1Selected.id.split("-") // "0-1" -> ["0","1"]
            let r = parseInt(coords[0]);
            let c = parseInt(coords[1]);

            card1Selected.src = board[r][c] + ".jpg";
        }
        else if (!card2Selected && this != card1Selected){
            card2selected = this;

            let coords = card1Selected.id.split("-") // "0-1" -> ["0","1"]
            let r = parseInt(coords[0]);
            let c = parseInt(coords[1]);

            card2selected.src= board[r][c] + ".jpg";
            setTimeout(update, 1000)
        }
    } 
}

function update() {
    //if cards aren't same flip both back

    if( card1Selected.src != card2selected.src ){
        card1Selected.src = "back.jpg";
        card2selected.src = "back.jpg";
    }
    card1Selected = null;
    card2selected = null;
}
