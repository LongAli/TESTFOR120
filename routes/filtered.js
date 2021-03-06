/*
 * Search in database based on filter function.
 first filter:
 1- <= 10
 2 - <= 20
 3 - <= 30
 4 - <= 1
 5 - > 60
 6 - no pre
 var activity_pool = require('../activities.json');
 */
var activities = require('../activites.json');

// const tryAgainBtn = document.querySelector('.tryAgain');

// tryAgainBtn.addEventListener('click', randomize);

function filterByTime(time) {
	const results = activities.activites.filter(function(element) {
		return element.minTime <= time;
	});
	return results;
}

function randomize(ele) {
	const seed = Math.floor(Math.random() * 10 * Object.keys(ele).length);
	//console.log(seed);
	//localStorage.save(seed);
	//const
	//localStorage.setItem("currentSelect", currentSelect);
	const randomElement = ele.activites[parseInt(seed)];
	return randomElement;
}

exports.view = function(request, response) {
	if (request.query['time']) {
		results = { activites: filterByTime(request.query['time']) };
	} else {
		results = activities;
	}

	const e = randomize(results);
	// console.log("haha");
	response.render('filtered', e);
};
