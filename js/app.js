const h2s = document.getElementsByTagName('h2');
for (const h2 of h2s) {
    h2.style.color = 'lightblue';
}

const backPack = document.getElementById('backpack');
backPack.style.backgroundColor = 'tomato';

const cards = document.getElementsByClassName('card');
for (const card of cards) {
    card.style.borderRadius = '30px';
}


function consoleLog() {
    console.log('I am Clicked!');
}

const myButtons = document.querySelectorAll('#button');
for (const buttons of myButtons) {
    buttons.addEventListener('click', function (e) {
        e.target.parentNode.removeChild(buttons);
    })
}


// Lets Stay In Touch
const submit = document.getElementById('submit').addEventListener('keyup', function (e) {
    const deleteButton = document.getElementById('buttonSubmit');

    if (e.target.value == 'email') {
        deleteButton.removeAttribute('disabled');
    } else {
        deleteButton.setAttribute('disabled', true);
    }
})

const backPackImg = document.querySelectorAll('#bacpackImg');
for (const img of backPackImg) {
    img.addEventListener('mouseenter', function (e) {
        img.style.transform = 'rotate(45deg)'
    })
}

