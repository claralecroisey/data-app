/*
The app 'DataApp' provides three routes: /, /graph and /about
/ : home page, displayed by default to the user, summarizes the website's pages ; served by the HomeController 
/graph : graph page, shows a graph ; served by the GraphController
/about : about page, explains the purpose of the website and the tools used to create it ; served by the AboutController
*/

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