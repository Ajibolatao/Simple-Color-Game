var num = 6;
var colors = generateRandomColors(6);


// VARIABLES

var square = document.querySelectorAll('.square');
var display = document.querySelector("#display");
var smallDisplay = document.querySelector('#try-again');
var header = document.querySelector('header');
var correctSquare = colors[randomNumber()];
var easyLevel = document.querySelectorAll('.easy-level');

// BUTTON selectors
var newGame = document.querySelector('#new-game');
var easy = document.querySelector('#easy');
var hard = document.querySelector('#hard');



// Generate a RANDOM NUMBER which is equal to colors.length
function randomNumber() {
    return Math.floor(Math.random() * colors.length);  
}

// Generate a RANDOM COLOR ARRAY
function generateRandomColors(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        randomColors();
        arr.push(randomColors());
    }

    return arr;
}

// Generate a RANDOM RGB number
function randomColors() {
    

    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    //  "rgb(255, 0, 255)",
    var arrColor = "rgb("+r+", "+g+", "+b+")";
    return arrColor;
}

// Change the DISPLAY of 'New COlors'to 'Play Again'
function playAgain() {
    newGame.textContent = 'PLAY AGAIN?';
}

// Make all squares the same when you win
function pickColor(){
    for (var a = 0; a < colors.length; a++) {
        square[a].style.background = correctSquare;   
    }
}

function reset() {
    header.style.background = "rgb(55, 0, 255)";
    newGame.textContent = 'NEW COLORS';
    smallDisplay.textContent = '';
    colors = generateRandomColors(num);
    correctSquare = colors[randomNumber()];
    display.textContent = correctSquare;
    for (var i = 0; i < colors.length; i++) {
        square[i].style.background = colors[i];    
    }
}

function selectEasy(){
    num = 3;
    colors = generateRandomColors(num);
    reset();
    document.querySelector('.del-square1').style.background = "rgb(27, 45, 71)";
    document.querySelector('.del-square2').style.background = "rgb(27, 45, 71)";
    document.querySelector('.del-square3').style.background = "rgb(27, 45, 71)";
    easy.style.background = 'rgb(55, 0, 255)';
    hard.style.background = 'white';
}

function selectHard(){
    num = 6;
    colors = generateRandomColors(num);
    reset();
    hard.style.background = 'rgb(55, 0, 255)';
    easy.style.background = 'white';
}


display.textContent = correctSquare;

for (var i = 0; i < colors.length; i++) {
    square[i].style.background = colors[i];
    
    square[i].addEventListener('click', function(){
        if (this.style.background === correctSquare) {
            smallDisplay.textContent = 'Correct!';
            header.style.background = this.style.background;
            pickColor();
            playAgain();
            

        } else {
            this.style.background = "rgb(27, 45, 71)";
            smallDisplay.textContent = 'Try again!';
        }
    });
}


// EVENT LISTENERS

newGame.addEventListener('click', reset);
easy.addEventListener('click', selectEasy);
hard.addEventListener('click', selectHard);
