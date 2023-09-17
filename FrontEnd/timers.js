let [seconds, minutes, hours] = [0, 0, 0];
let startStopButton;
let resetButton;
let miscButton;
let timerDisplay;
let startStop = 0;
let currentMode = 0;

function initialiseTimer(timer) {
    if (timer === "pomodoro") {
        startStopButton = document.querySelector(".pomodoro-start-stop-btn");
        resetButton = document.querySelector(".pomodoro-reset-btn");
        miscButton = document.querySelector(".pomodoro-skip-btn");
        timerDisplay = document.querySelector(".pomodoro-display");
    } else if (timer === "stopwatch") {
        startStopButton = document.querySelector(".stopwatch-start-stop-btn");
        resetButton = document.querySelector(".stopwatch-reset-btn");
        timerDisplay = document.querySelector(".stopwatch-display");
    } else if (timer === "adaptive") {
        startStopButton = document.querySelector(".adaptive-start-stop-btn");
        resetButton = document.querySelector(".adaptive-reset-btn");
        miscButton = document.querySelector(".adaptive-break-btn");
        timerDisplay = document.querySelector(".adaptive-display");
    }
}

function incrementTimer() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }

    let s = seconds < 10 ? `0${seconds}` : `${seconds}`;
    let m = minutes < 10 ? `0${minutes}` : `${minutes}`;
    let h = hours < 10 ? `0${hours}` : `${hours}`;
    document.querySelector(`.${timer}-display`).innerHTML = `${h}:${m}:${s}`;
}

function decrementTimer() {
    seconds--;
    if (seconds < 0) {
        minutes--;
        seconds = 59;
    } if (minutes < 0) {
        hours--;
        minutes = 59;
    }

    let s = seconds < 10 ? `0${seconds}` : `${seconds}`;
    let m = minutes < 10 ? `0${minutes}` : `${minutes}`;
    let h = hours < 10 ? `0${hours}` : `${hours}`;
    document.querySelector(`.${timer}-display`).innerHTML = `${h}:${m}:${s}`;

    if (minutes < 0 && hours < 0) {
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
    bgColor.style.backgroundColor = inactiveColor;
}

