const pomodoroButton = document.querySelector('.pomodoro-btn');
const stopwatchButton = document.querySelector('.stopwatch-btn');
const adaptiveButton = document.querySelector('.adaptive-btn');
const unselectedDiv = document.querySelector('.unselected');
const pomodoroDiv = document.querySelector('.pomodoro');
const stopwatchDiv = document.querySelector('.stopwatch');
const adaptiveDiv = document.querySelector('.adaptive');
const bgColor = document.querySelector('body');
const activeColor = getComputedStyle(document.documentElement).getPropertyValue('--active');
const inactiveColor = getComputedStyle(document.documentElement).getPropertyValue('--inactive');

function hideModes(remainingDiv) {
  try {
    clearInterval(timer); 
    } catch (error) {
      // No action needed - catch is left blank
    }
  bgColor.style.backgroundColor = inactiveColor;
  pomodoroDiv.style.display = 'none';
  stopwatchDiv.style.display = 'none';
  adaptiveDiv.style.display = 'none';
  unselectedDiv.style.display = 'none';
  remainingDiv.style.display = 'flex';
}

pomodoroButton.addEventListener('click', function() {
  hideModes(pomodoroDiv);
});

stopwatchButton.addEventListener('click', function() {
  hideModes(stopwatchDiv);
});

adaptiveButton.addEventListener('click', function() {
  hideModes(adaptiveDiv);
});