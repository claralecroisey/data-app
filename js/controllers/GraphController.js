/*
GraphController, corresponding to the /graph route
Its view is in the views/graph.html file
Makes audience.json data available to view through the mydata element
*/

app.controller('GraphController', ['$scope', 'audience', function($scope, audience) {

	audience.getAudience.then(function(data) {
		$scope.mydata = data;
	});

}]);