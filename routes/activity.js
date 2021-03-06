/*
 * GET new activity.
 */

var data = require('../activites.json');

// exports.view = function(request, response) {
// 	console.log(data);
// 	response.render('activity', data);
// };

exports.activityInfo = function(request, response) {
	// var objectStuff = Object.keys(data);

	// var objectStuff = Object.keys(data);
	// for (let stuff in objectStuff) {
	// 	response.render('activity', data.toLog[1]);
	// }
	var projectID = request.params.id;
	//console.log(request.params.id);
	response.render('activity', data.activites[projectID - 1]);
	// response.render('activity', data.toLog[projectID - 1]);
	// if (projectID == 'random') {
	// 	projectID = Math.floor(Math.random() * projects.length) + 1;
	// } else {
	// 	projectID = parseInt(projectID);
	// }

	// var project = projects[projectID - 1]; // of by one, our first project has index 0
	// response.json(project);
};
