const aStartStopButton = document.querySelector(".adaptive-start-stop-btn");
const aResetButton = document.querySelector(".adaptive-reset-btn");
const aBreakButton = document.querySelector(".adaptive-break-btn");

let [aSeconds, aMinutes, aHours] = [0, 0, 0];
let aStartStop = 0;
let aMode = "Work";
let aCurrentMode = 0;

function checkBreak(workSeconds, workMinutes, workHours) {
    let totalWorkTimeInSeconds = (workHours * 3600) + (workMinutes * 60) + workSeconds;
    let breakTimeInSeconds = Math.floor(totalWorkTimeInSeconds / 5);
    let breakHours = Math.floor(breakTimeInSeconds / 3600);
    let breakMinutes = Math.floor((breakTimeInSeconds % 3600) / 60);
    let breakSeconds = breakTimeInSeconds % 60;
    
    return [breakHours, breakMinutes, breakSeconds];
}

