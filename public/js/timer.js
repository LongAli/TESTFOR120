//var activities = require('../activites.json');

var timeVal = parseInt(document.getElementById('timer').textContent.substr(0, 2));
// let clickCount = 0;
// var value = '00:00';

//console.log(timeVal);

// function resumeTimer() {
// 	var t = value.split(':');

// 	startTimer(parseInt(t[0], 10), parseInt(t[1], 10));
// }

function timer() {
	var countdownTime = timeVal * 60;
	var time = countdownTime,
		minutes,
		seconds;
	//console.log(time);
	var x = setInterval(function() {
		minutes = parseInt(time / 60, 10);
		//console.log('minutes' + minutes);
		seconds = parseInt(time % 60, 10);

		minutes = minutes < 10 ? '0' + minutes : minutes;
		seconds = seconds < 10 ? '0' + seconds : seconds;

		document.querySelector('#timer').textContent = minutes + ':' + seconds;

		if (--time < 0) {
			time = 0;
		}
	}, 1000);

	// clickCount++;
	// if (clickCount % 2 === 0) {
	// 	pauseTimer();
	// } else {
	// 	resumeTimer();
	// }
}

// function pauseTimer() {
// 	value = timer.textContent;
// 	clearTimeout(x);
// }
var button = document.querySelector('#primary');
button.addEventListener('click', timer);
