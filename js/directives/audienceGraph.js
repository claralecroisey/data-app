app.directive("audienceGraph", function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: "js/directives/audienceGraph.html"
  };
});