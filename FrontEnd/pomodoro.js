const pStartStopButton = document.querySelector(".pomodoro-start-stop-btn");
const pSkipButton = document.querySelector(".pomodoro-skip-btn");
const pResetButton = document.querySelector(".pomodoro-reset-btn");
const pElementToChange = document.querySelector('body');
const pActiveColor = getComputedStyle(document.documentElement).getPropertyValue('--active');
const pInactiveColor = getComputedStyle(document.documentElement).getPropertyValue('--inactive');

let [pSeconds, pMinutes] = [0, 25];
let pStartStop = 0;
let pMode = "Pomodoro";
let currentMode = 0;

function decrementTimer() {
    pSeconds--;
    if (pSeconds < 0) {
        pMinutes--;
        pSeconds = 59;
    }

    let s = pSeconds < 10 ? `0${pSeconds}` : `${pSeconds}`;
    let m = pMinutes < 10 ? `0${pMinutes}` : `${pMinutes}`;

    document.querySelector(".pomodoro-display").innerHTML = `${m}:${s}`;
    document.title = `Active Pomodoro: ${m}:${s}`;

    if(pMinutes < 0) {
        currentMode++;
        checkMode(currentMode);
    }
}

function checkMode() {
    clearInterval(timer);
    if (currentMode === 1) {
        pMinutes = 5;
        pSeconds = 0;
        pMode = "Short Break";
        document.querySelector(".pomodoro-display").innerHTML = `05:00`;
        document.querySelector('.pomodoro-mode').innerHTML = `${pMode}`;
        document.title = `Active Pomodoro: ${pMode}: 05:00`;
    } else {
        currentMode = 0;
        pMinutes = 25;
        pSeconds = 0;
        pMode = "Pomodoro";
        document.querySelector(".pomodoro-display").innerHTML = `25:00`;
        document.querySelector('.pomodoro-mode').innerHTML = `${pMode}`;    
        document.title = `Active Pomodoro: ${pMode}: 25:00`;    
    }
}

function checkTimerState(startStopValue) {
    if (pStartStop === 1) {
        timer = setInterval(decrementTimer, 1000);
        pStartStopButton.innerHTML = "Pause";
        pElementToChange.style.backgroundColor = pActiveColor;
    }
    else {
        clearInterval(timer);
        pStartStopButton.innerHTML = "Start";
        pStartStop = 0;
        pElementToChange.style.backgroundColor = pInactiveColor;
        document.title = `Paused Pomodoro`;
    }
}

pStartStopButton.addEventListener("click", () => {
    pStartStop++;
    checkTimerState(pStartStop);
});


pSkipButton.addEventListener("click", () => {
    pStartStop = 0;
    currentMode++;
    checkMode(currentMode);
    checkTimerState(pStartStop);
});