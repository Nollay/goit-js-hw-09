// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";

import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.5.min.css";

const inputEl = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const timerEl = document.querySelector('.timer');
const fieldsEl = document.querySelectorAll('.field');
const fieldValuesEl = document.querySelectorAll('.field .value');
const fieldLabelsEl = document.querySelectorAll('.field .label');

// Add Style
timerEl.style.display = "flex";
timerEl.style.paddingTop = "30px";
fieldsEl.forEach(element => {
    element.style.marginRight = "20px";
    element.style.textAlign = "center";
})

fieldValuesEl.forEach(element => {
    element.style.display = "flex";
    element.style.fontSize = "40px";
});

fieldLabelsEl.forEach(element => {
    element.style.textTransform = "uppercase";
    element.style.fontSize = "20px";
});

startBtn.setAttribute('disabled', '');

//Seting flatpickr
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        if (DateFuture(selectedDates[0])) {
    startBtn.removeAttribute('disabled', ''); 
    } else {
    startBtn.setAttribute('disabled', '');
    Notiflix.Notify.failure("Please choose a date in the future");
    }
    },
};


const flatPickr = flatpickr(inputEl, options);
startBtn.addEventListener('click', startDateTimer);

function convertMs(ms) {
// Number of milliseconds per unit of time
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// Remaining days
const days = Math.floor(ms / day);
// Remaining hours
const hours = Math.floor((ms % day) / hour);
// Remaining minutes
const minutes = Math.floor(((ms % day) % hour) / minute);
// Remaining seconds
const seconds = Math.floor((((ms % day) % hour) % minute) / second);

return { days, hours, minutes, seconds };
}


function DateFuture(date) {
    const ifDate = new Date(date)
    const newDate = new Date();
    return ifDate > newDate;
}

function addZero(value) {
    return value.toString().padStart(2, '0');
}

function AddTimer({ days, hours, minutes, seconds }) {
    document.querySelector('span[data-days]').innerText = addZero(days);
    document.querySelector('span[data-hours]').innerText = addZero(hours);
    document.querySelector('span[data-minutes]').innerText = addZero(minutes);
    document.querySelector('span[data-seconds]').innerText = addZero(seconds);
}

function startDateTimer(evt) {
    startBtn.setAttribute('disabled', '');
    let timeLeftSecond, timeLeft;

    let timerId = setInterval(() => {
        timeLeftSecond = flatPickr.selectedDates[0] - Date.now();
        timeLeft = convertMs(timeLeftSecond);
        AddTimer(timeLeft);
        
        if (timeLeftSecond <= 999) {
            clearInterval(timerId)
        }
    }, 1000);
};