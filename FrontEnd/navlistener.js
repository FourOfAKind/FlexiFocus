const pomodoroButton = document.querySelector('.pomodoro-btn');
const stopwatchButton = document.querySelector('.stopwatch-btn');
const unselectedDiv = document.querySelector('.unselected');
const pomodoroDiv = document.querySelector('.pomodoro');
const stopwatchDiv = document.querySelector('.stopwatch');

pomodoroButton.addEventListener('click', function() {
  // Show the pomodoro div and hide the others
  pomodoroDiv.style.display = 'flex';
  stopwatchDiv.style.display = 'none';
  unselectedDiv.style.display = 'none';
});

stopwatchButton.addEventListener('click', function() {
  // Show the stopwatch div and hide the others
  pomodoroDiv.style.display = 'none';
  stopwatchDiv.style.display = 'flex';
  unselectedDiv.style.display = 'none';
});