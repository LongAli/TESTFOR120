/*
 * save an activity to the home page.
 */

var data = require('../actLog.json');
var activities = require('../activites.json');

function search(ele) {
	var searchCompleted = activities.activites.filter((a) => a.ID == ele);
	return searchCompleted;
}

exports.saveActivity = function(request, response) {
	//console.log('starting to add friends');
    var newActivity;
    
	if (request.query['activity_index']) {
		newActivity = search(request.query['activity_index']);
		data.toLog.unshift(newActivity[0]);
	}
	response.render('index', data);
};

// STUFF FROM JSON FILE
//{
//   "ID": "1",
//   "Category": "exercise",
//   "Activity": "Yoga",
//   "minTime": 30,
//   "Tags": "indoor",
//   "Image": "https://source.unsplash.com/dkg-zps94uw/1600x900",
//   "Link": "https://www.youtube.com/embed/b1H3xO3x_Js",
//   "Description": "I'm new to yoga, so this was a bit harder than I thought. Still had a great time exercising and being more mindful!"
// },
// {
//   "ID": "2",
//   "Category": "kitchen fun",
//   "Activity": "Bake Cookies",
//   "minTime": 30,
//   "Tags": "indoor",
//   "Image": "https://source.unsplash.com/tDoHiqXl9b8/1600x900",
//   "Link": "https://www.youtube.com/embed/uJwekkbGPns",
//   "Description": "Made chocolate chip cookies today! Great recipe, and 10/10 recommend!"
// },
// {
//   "ID": "3",
//   "Category": "nature",
//   "Activity": "Plant A Seed",
//   "minTime": 10,
//   "Tags": "outdoor",
//   "Image": "https://source.unsplash.com/4PG6wLlVag4/1600x900",
//   "Link": "https://www.youtube.com/embed/w77zPAtVTuI",
//   "Description": "Started growing an apple tree in the backyard! I can't wait to see how much this seed grows."
// }
