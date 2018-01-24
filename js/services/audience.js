app.factory('audience', ['$http', function($http) { 
    var getAudienceData = $http.get('json/audience.json')
            .then(function(response) {
                console.log("coming from servicejs", response.data);
                return response.data;
            });
    return { 
    	getAudience: getAudienceData 
    };
}]);