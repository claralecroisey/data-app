/*
js/controllers/GraphController.js
Makes audience.json data available to view through the mydata element
*/

app.controller('GraphController', ['$scope', 'audience', function($scope, audience) {

	audience.getAudience.then(function(data) {
		$scope.mydata = data;
	});

}]);