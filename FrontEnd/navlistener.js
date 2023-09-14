const pomodoroButton = document.querySelector('.pomodoro-btn');
const stopwatchButton = document.querySelector('.stopwatch-btn');
const unselectedDiv = document.querySelector('.unselected');
const pomodoroDiv = document.querySelector('.pomodoro');
const stopwatchDiv = document.querySelector('.stopwatch');
const bgColor = document.querySelector('body');
const activeColor = getComputedStyle(document.documentElement).getPropertyValue('--active');
const inactiveColor = getComputedStyle(document.documentElement).getPropertyValue('--inactive');

pomodoroButton.addEventListener('click', function() {
  try {
  clearInterval(timer); 
  } catch (error) {
    console.log("Timer not started yet");
  }
  pomodoroDiv.style.display = 'flex';
  stopwatchDiv.style.display = 'none';
  unselectedDiv.style.display = 'none';
});

stopwatchButton.addEventListener('click', function() {
  try {
    clearInterval(timer); 
    } catch (error) {
      console.log("Timer not started yet");
    }
  pomodoroDiv.style.display = 'none';
  stopwatchDiv.style.display = 'flex';
  unselectedDiv.style.display = 'none';
});