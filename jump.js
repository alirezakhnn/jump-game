var full = document.getElementById('full');
var character = document.querySelector('.character');
var block = document.querySelector('.block');
var score = document.querySelector('.score');
var counter = 0;
var btnAgain = document.querySelector('.restart-again-btn');
var startBtn = document.querySelector('.restart button:nth-child(1)');
var health = document.querySelector('.health');
var remain = 5;

function jump() {
    character.classList.add('animation');
    setTimeout(() => {
        character.classList.remove('animation');
    }, 500);
}
//need new plan