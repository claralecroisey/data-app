app.controller('GraphController', ['$scope', 'audience', function($scope, audience) {

	audience.getAudience.then(function(data) {
		$scope.mydata = data;
	});

}]);