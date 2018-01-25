/*
js/services/audience.js
A service that fetches data from the audience.json file which is made available to the view in the GraphController.
Fetched data : array of [time, nb of users] arrays
*/

app.factory('audience', ['$http', function($http) { 
    var getAudienceData = $http.get('json/audience.json')
            .then(function(response) {
                return response.data;
            });
    return { 
    	getAudience: getAudienceData 
    };
}]);