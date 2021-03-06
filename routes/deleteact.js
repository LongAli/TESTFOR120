/*
 * delete an activity on the home page.
 */

var data = require('../actLog.json');
var activities = require('../activites.json');

exports.deleteActivity = function(request, response) {

	if (request.query['targetID']) {
      var targetJson = activities.activites.filter(function(a) {
			return a.ID == request.query['targetID'];
      })[0];
      
      const index = data.toLog.indexOf(targetJson);
      console.log(request.query['targetID'],index,data.toLog);
		if (index > -1) {
         data.toLog.splice(index, 1);
    }
	}
   response.render('index', data);
}

