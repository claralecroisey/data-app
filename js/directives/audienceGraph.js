app.directive("audienceGraph", function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: "js/directives/audienceGraph.html",

    //used the http://www.d3noob.org/2016/08/create-simple-line-graph-using-d3js-v4.html tutorial
    link: function(scope, element, attrs) {

	    // set the dimensions and margins of the graph
		var margin = {top: 20, right: 20, bottom: 30, left: 50},
		    width = 960 - margin.left - margin.right,
		    height = 500 - margin.top - margin.bottom;

		// set the ranges
		var x = d3.scaleTime().range([0, width]);
		var y = d3.scaleLinear().range([height, 0]);

    	var drawChart = function(data) {

			// define the line
			var valueline = d3.line()
			    .x(function(d) { return x(d[0]); })
			    .y(function(d) { return y(d[1]); });

			// append the svg obgect to the body of the page
			// appends a 'group' element to 'svg'
			// moves the 'group' element to the top left margin
			var svg = d3.select("#graph").append("svg")
			    .attr("width", width + margin.left + margin.right)
			    .attr("height", height + margin.top + margin.bottom)
			  .append("g")
			    .attr("transform",
			          "translate(" + margin.left + "," + margin.top + ")");

			// parse the date / time
			var parseDate = d3.timeParse("%s"); //parses the date to seconds (should be milliseconds)
			//var formatDate = d3.timeFormat("%b-%Y");

			// format the data
			data.forEach(function(d) {
			  	//var time = +d[0] * 1000;
			  	//var date = new Date(time);
			  	//d[0] = parseDate(date);
			  	d[0] = parseDate(d[0]); //parses the Date object into the right format
			  	//d[0] = formatDate(d[0]);
			  	d[1] = +d[1];
			});

			// Scale the range of the data
			x.domain(d3.extent(data, function(d) { return d[0]; }));
			y.domain([0, d3.max(data, function(d) { return d[1]; })]);

			// Add the valueline path.
			svg.append("path")
			  .data([data])
			  .attr("class", "line")
			  .attr("d", valueline);

			// Add the X Axis
			svg.append("g")
			  .attr("transform", "translate(0," + height + ")")
			  .call(d3.axisBottom(x));

			// Add the Y Axis
			svg.append("g")
			  .call(d3.axisLeft(y));

        };

        //the data is fetched from info.audience which is an array of arrays [ [datetime, users], [datetime, users],... ]
        drawChart(scope.info.audience);
	}
  };
});