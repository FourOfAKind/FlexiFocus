const pStartStopButton = document.querySelector(".pomodoro-start-stop-btn");
const pSkipButton = document.querySelector(".pomodoro-skip-btn");
const pResetButton = document.querySelector(".pomodoro-reset-btn");

let [pSeconds, pMinutes, pHours] = [0, 25, 0];
let pStartStop = 0;
let pMode = "Pomodoro";
let currentMode = 0;

function decrementTimer() {
    pSeconds--;
    if (pSeconds < 0) {
        pMinutes--;
        pSeconds = 59;
    } if (pMinutes < 0) {
        pHours--;
        pMinutes = 59;
    }

    let s = pSeconds < 10 ? `0${pSeconds}` : `${pSeconds}`;
    let m = pMinutes < 10 ? `0${pMinutes}` : `${pMinutes}`;
    let h = pHours < 10 ? `0${pHours}` : `${pHours}`;

    document.querySelector(".pomodoro-display").innerHTML = `${h}:${m}:${s}`;
    document.title = `Active Pomodoro: ${h}:${m}:${s}`;

    if(pMinutes < 0 && pHours < 0) {
        currentMode++;
        checkMode(currentMode);
    }
}

function checkMode() {
    try {
        clearInterval(timer);
    } catch (error) {
        console.log("Timer not started yet");
    }

    if (currentMode === 1) {
        pMinutes = 5;
        pSeconds = 0;
        pMode = "Short Break";
        document.querySelector(".pomodoro-display").innerHTML = `05:00`;
        document.querySelector('.pomodoro-mode').innerHTML = `Current Mode: ${pMode}`;
    } else {
        currentMode = 0;
        pMinutes = 25;
        pSeconds = 0;
        pMode = "Pomodoro";
        document.querySelector(".pomodoro-display").innerHTML = `25:00`;
        document.querySelector('.pomodoro-mode').innerHTML = `Current Mode: ${pMode}`;        
    }
}

function checkTimerState() {
    if (pStartStop === 1) {
        timer = setInterval(decrementTimer, 1000);
        pStartStopButton.innerHTML = "Pause";
        bgColor.style.backgroundColor = activeColor;
    }
    else {
        clearInterval(timer);
        pStartStopButton.innerHTML = "Start";
        pStartStop = 0;
        bgColor.style.backgroundColor = inactiveColor;
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

pResetButton.addEventListener("click", () => {
    pStartStop = 0;
    currentMode = 0;
    checkMode(currentMode);
    checkTimerState(pStartStop);
});