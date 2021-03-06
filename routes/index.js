/*
 * GET home page.
 */

var data = require('../actLog.json');

exports.view = function(request, response) {
	//console.log(data);
	response.render('index', data);
	//$('#delete').click(deleteClick(e));
};

// function deleteClick(e) {
// 	e.preventDefault();
// 	console.log('The Delete Functionality has not been implemented yet :)');
// 	var toDel = data.toLog.unshift(this);
// 	data.toLog.splice(toDel,1);
// 	//data.toLog.unshift("HI");
// }
