var full = document.getElementById('full');
var character = document.querySelector('.character');
var block = document.querySelector('.block');
var score = document.querySelector('.score');
var counter = 0;
var guide = document.querySelector('.guide');
var btnAgain = document.querySelector('.restart button:nth-child(2)');
var startBtn = document.querySelector('.restart button:nth-child(1)');
var health = document.querySelector('.health');
var remain = 5;

function jump() {
    character.classList.add('animation');
}
function fall() {
        setTimeout(() => {
        character.classList.remove('animation');
    }, 600);
}
function rise() {
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
    setInterval(() => {
        let charTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
        //lose condition =>
        if (blockLeft <= 26 && blockLeft >= 0 && charTop >= 240) {
            startBtn.innerHTML = 'continue';
            alert('crashed !');
            score.innerHTML = 'you have ' + counter + ' points';
            block.classList.remove('block-anim');
            remain--;
            health.innerHTML = 'you have ' + remain + ' health';
            if (startBtn.onclick) {
                block.classList.add('block-anim');
                startBtn.innerHTML = '2x to stop';
            }
        } else if (startBtn.innerHTML == '2x to stop') { //win condition =>
            counter++;
            score.innerHTML = 'you have ' + counter + ' points';
        } else {
            score.innerHTML = 'you have ' + counter + ' points';
        }
        if (remain == 0) { //finish condition =>
            startBtn.disabled = true;
            startBtn.innerHTML = 'disabled';
            guide.innerHTML = 'game is finished';
            guide.style.color = 'orange';
        }
    }, 124)

})

startBtn.ondblclick = () => {
    block.classList.remove('block-anim');
    startBtn.innerHTML = 'start';
}

btnAgain.onclick = () => {
    window.location.reload();
}
