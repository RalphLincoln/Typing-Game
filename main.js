// Initialize game
window.addEventListener("load", () => {
    // Show words from the array
    showWords(words);
    // Matching words to input
    wordInput.addEventListener("input", startMatch)
    // Count down Interval
    setInterval(countDown, 1000);
    // Check the status of the game
    setInterval(checkStatus, 50);
});

// Creating some Global variable
let time = 7;
let score = 0;
let isPlaying;

// DOM elements
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");


// My random words
const words = [
    "cocktail",
    "runaway",
    "distance",
    "formula",
    "accident",
    "developer",
    "establishment",
    "investigate",
    "horrendous",
    "symptoms",
    "laughter",
    "definition",
    "nutrition",
    "generate",
    "stubborn",
    "siblings",
    "revolver",
    "incident",
    "communicate",
    "tertiary",
    "revised",
    "language",
    "gender",
    "notebook",
    "important",
    "alphabet",
    "booting",
    "document",
    "retrieve",
    "download",
    "relationship",
    "semantic",
    "innocents",
    "employment",
    "situation",
    "deliberate",
    "satisfactory",
    "beautiful",
    "happiness",
    "construction",
    "ingredient",
    "sentences",
    "collection",
    "aggressive",
    "grammatically",
    "graduation",
]


function showWords(words) {
    // generate a random index
    const randomIndex = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randomIndex];
}

// countDown function
function countDown() {
    if (time > 0) {
        // decrement time
        time--
    } else if (time === 0) {
        isPlaying = false
    }
    timeDisplay.innerHTML = time
}

// Check game status function
function checkStatus() {
    if (!isPlaying && time === 0) {
        message.innerHTML = "Game Over!!!!"
        score = -1;
    }
}

// Start Matching words
function startMatch() {
    if (matchWords()) {
        isPlaying = true
        time = 8
        showWords(words)
        wordInput.value = ""
        score++

        // Checking to see if scoreis -1
        if (score === -1) {
            scoreDisplay.innerHTML = 0
        } else {
            scoreDisplay.innerHTML = score;
        }
    }
}

// matching words function
function matchWords() {
    if (wordInput.value === currentWord.innerHTML) {
        message.innerHTML = "correct!!!"
        return true
    } else {
        message.innerHTML = ""
        return false
    }
}