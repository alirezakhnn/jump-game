let full = document.getElementById('full');
let character = document.querySelector('.character');
let block = document.querySelector('.block');


function jump() {
    character.classList.add('animation');
    setTimeout(() => {
        character.classList.remove('animation');
    }, 300)
}