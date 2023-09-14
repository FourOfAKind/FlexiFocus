let [sSeconds, sMinutes, sHours] = [0, 0, 0];
const sStartStopButton = document.querySelector(".stopwatch-start-stop-btn");
let sStartStop = 0;
const sResetButton = document.querySelector(".stopwatch-reset-btn");

function incrementTimer() {
    sSeconds++;
    if (sSeconds >= 60) {
        sSeconds = 0;
        sMinutes++;
        if (sMinutes >= 60) {
            sMinutes = 0;
            sHours++;
        }
    }

    let s = sSeconds < 10 ? `0${sSeconds}` : `${sSeconds}`;
    let m = sMinutes < 10 ? `0${sMinutes}` : `${sMinutes}`;
    let h = sHours < 10 ? `0${sHours}` : `${sHours}`;

    document.querySelector(".stopwatch-display").innerHTML = `${h}:${m}:${s}`;
    document.title = `Active Stopwatch: ${h}:${m}:${s}`;
}

sStartStopButton.addEventListener("click", () => {
    sStartStop++;
    if (sStartStop === 1) {
        timer = setInterval(incrementTimer, 1000);
        sStartStopButton.innerHTML = "Pause";
         bgColor.style.backgroundColor = activeColor;
    }
    else {
        clearInterval(timer);
        sStartStopButton.innerHTML = "Start";
        sStartStop = 0;
        bgColor.style.backgroundColor = inactiveColor;
        document.title = `Paused Stopwatch`;
    }
});

sResetButton.addEventListener("click", () => {
    clearInterval(timer);
    bgColor.style.backgroundColor = inactiveColor;
    [sSeconds, sMinutes, sHours] = [0, 0, 0];
    document.querySelector(".stopwatch-display").innerHTML = "00:00:00";
    document.title = `FlexiFocus`;
    sStartStopButton.innerHTML = "Start";
    sStartStop = 0;
});