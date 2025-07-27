let words = ["train", "movie", "diamond", "bridge", "guitar", "puzzle", "laptop", "monster"];
let alphabets = document.querySelectorAll(".alphabet");
let play = document.querySelector("#play");
let word = document.querySelector("#word");
let about = document.querySelector("#about");
let image = document.querySelector(".img");
let content = document.querySelector("#box1");
let rightWord = document.querySelector("#right-word");
let playAgain = document.querySelector("#play-again");

let selected = "";
let displayed = [];
let wrongGuess = 1;
let gameStarted = false;

let playFunction = () => {
    gameStarted = true;
    alphabets.forEach((alphabet) => {
        alphabet.disabled = false;
    })
    let i = Math.floor(Math.random()*8)
    selected = words[i];
    displayed = selected.split("").map(() => "_");
    word.innerHTML = displayed.join(" ");
    if (selected == "train") {
        about.innerHTML = "Vehicle on rail tracks"
    } else if (selected == "movie") {
        about.innerHTML = "Motion picture for entertainment"
    } else if (selected == "diamond") {
        about.innerHTML = "Precious gemstone or material"
    } else if (selected == "bridge") {
        about.innerHTML = "Structure spanning a gap"
    } else if (selected == "guitar") {
        about.innerHTML = "Stringed musical instrument"
    } else if (selected == "puzzle") {
        about.innerHTML = "Problem-solving or brain teaser"
    } else if (selected == "laptop") {
        about.innerHTML = "Portable personal computer"
    } else {
        about.innerHTML = "Imaginary or creepy creature"
    }
}

alphabets.forEach((alphabet) => {
    alphabet.addEventListener("click", () => {
        if (!gameStarted) {
            return;
        }

        let letter = alphabet.getAttribute("id");
        console.log(letter);
        alphabet.style.color = "#cdd4d2";
        alphabet.disabled = true;

        let guess = false;

        for (let k = 0; k < selected.length; k++) {
            if (letter == selected[k]) {
                displayed[k] = letter;
                guess = true;
            }
        }

        word.innerHTML = displayed.join(" ");

        if (!guess) {
            console.log("wrong");
            wrongGuess++;
            image.style.backgroundImage = `url("${wrongGuess}.png")`;
        }

        if (wrongGuess == 7) {
            content.style.display = "none";
            rightWord.style.display = "block";
            rightWord.innerHTML = `Correct word is ${selected}`;
            playAgain.style.display = "block";
        }
        if (!displayed.includes("_")) {
            content.style.display = "none";
            rightWord.style.display = "block";
            rightWord.innerHTML = `Congratulations! You've guessed the word`;
            playAgain.style.display = "block";
        }
    });
});

play.addEventListener("click", () => {
    playFunction();
});

playAgain.addEventListener("click", () => {
    gameStarted = true;
    alphabets.forEach((alphabet) => {
        alphabet.style.color = "black";
        alphabet.disabled = false;
    });
    image.style.backgroundImage = `url("1.png")`;
    wrongGuess = 0;
    content.style.display = "flex";
    rightWord.style.display = "none";
    playAgain.style.display = "none";
    playFunction();
});
