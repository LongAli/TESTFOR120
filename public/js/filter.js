var activities = require('../activites.json');

var selectTime = window.localStorage.getItem('currentId');
var selectCategory = window.localStorage.getItem('selectedCategory');
var selectTag = window.localStorage.getItem('currentSelect');
//console.log(selectTime);

function filterByTime(time) {

	const results = activities.activites.filter(function(element) {
		return element.minTime <= time;
	});
	//console.log(results);
	return results;
}
