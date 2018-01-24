var app = angular.module('DataApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  	.when('/', {
    	controller: 'HomeController',
    	templateUrl:  'views/home.html'
  	})
  	.when('/graph', {
    	controller: 'GraphController',
    	templateUrl: 'views/graph.html'
  	})
  	.when('/about', {
    	controller: 'AboutController',
    	templateUrl: 'views/about.html'
  	})
  	.otherwise({
    	redirectTo: '/'
  	});
});