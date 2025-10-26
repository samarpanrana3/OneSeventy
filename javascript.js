let toggle = false;
let hoursCount = 0;
let minutesCount = 0;
let secondsCount = 0;
let hoursDOM = document.querySelector('.hours');
let minutesDOM = document.querySelector('.minutes');
let secondsDOM = document.querySelector('.seconds');
let colons = document.querySelectorAll('.colon');
let finishDOM = document.querySelector('.finish-text');
const targetDate = new Date (2026,3,14,0,0,0);
const miliSecondsToHours = 1000 * 60 * 60;

function updateCountdown () {
    hoursDOM.textContent = hoursCount;
    minutesDOM.textContent = minutesCount;
    secondsDOM.textContent = secondsCount;

    if (toggle == true) {
        clearInterval(myInterval);
        for (colon of colons) {
            colon.textContent = '';
        }
        finishDOM.textContent = 'Happy New Year and Good Luck.';
        hoursDOM.textContent = '';
        minutesDOM.textContent = '';
        secondsDOM.textContent = '';
        return;
    }
}

function fetchCount () {
    let currentDate = new Date ();
    
    let currentDateInHours = (currentDate.getTime() / miliSecondsToHours);
    let targetDateInHours = (targetDate.getTime() / miliSecondsToHours);
    // console.log(currentDateInHours, targetDateInHours);

    if ((targetDateInHours - currentDateInHours) <= 0) {
        toggle = true;
    }
    
    let preciseHoursCount = (targetDateInHours - currentDateInHours);
    let preciseMinutesCount = ((preciseHoursCount % 1 )) * 60;
    let preciseSecondsCount = ((preciseMinutesCount % 1 )) * 60;

    hoursCount = Math.floor(preciseHoursCount);
    minutesCount = Math.floor(preciseMinutesCount);
    secondsCount = Math.floor(preciseSecondsCount);
}

fetchCount();
updateCountdown();

const myInterval = setInterval(() => {
    fetchCount();
    updateCountdown();
}, 1000)