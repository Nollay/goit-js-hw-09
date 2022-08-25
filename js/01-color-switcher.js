const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
let timerId = 0;

btnStop.setAttribute('disabled', '');


btnStart.addEventListener('click', strartRandomBgr);
btnStop.addEventListener('click', stopRandomBgr);



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function strartRandomBgr(evt) {
    timerId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000)
    btnStart.setAttribute('disabled', '');
    btnStop.removeAttribute('disabled', '');

}

function stopRandomBgr(evt) {
    clearInterval(timerId);
    btnStart.removeAttribute('disabled', '');
    btnStop.setAttribute('disabled', '');
}