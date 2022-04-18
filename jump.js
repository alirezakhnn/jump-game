var full = document.getElementById('full');
var character = document.querySelector('.character');
var block = document.querySelector('.block');
var score = document.querySelector('.score');
var counter = 0;
var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
var btnAgain = document.querySelector('.restart button:nth-child(2)');
var startBtn = document.querySelector('.restart button:nth-child(1)');
var health = document.querySelector('.health');
var remain = 5;

function jump() {
    character.classList.add('animation');
    setTimeout(() => {
        character.classList.remove('animation');
    }, 500);
}
startBtn.addEventListener('click', function() {
    block.classList.add('blockanim');
    startBtn.innerHTML = 'pause';
    if (blockLeft <= 12 && characterTop >= 285) {
        alert('crash');
        health.innerHTML = 'you have ' + Number(remain - 1) + ' health';
        if (remaim == 0) {
            score.innerHTML = 'your score is ' + Number(counter);
            counter = 0;
        }
    } else {
        counter++;
        health.innerHTML = 'you have ' + Number(remain) + ' health';

    }

})

btnAgain.onclick = () => {
    window.location.reload();
}