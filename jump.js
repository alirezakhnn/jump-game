var full = document.getElementById('full');
var character = document.querySelector('.character');
var block = document.querySelector('.block');
var score = document.querySelector('.score');
var counter = 0;
let charTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
var btnAgain = document.querySelector('.restart button:nth-child(2)');
var startBtn = document.querySelector('.restart button:nth-child(1)');
var health = document.querySelector('.health');
var remain = 5;

function jump() {
    character.classList.add('animation');
    setTimeout(() => {
        character.classList.remove('animation');
    }, 600);
}
startBtn.addEventListener('click', () => {
    block.classList.add('block-anim');
    startBtn.innerHTML = '2x to stop';
    health.innerHTML = 'you have ' + remain + ' health';
    score.innerHTML = 'you have ' + counter + ' points';
})
startBtn.ondblclick = () => {
    block.classList.remove('block-anim');
    startBtn.innerHTML = 'start';
}

btnAgain.onclick = () => {
    window.location.reload();
}