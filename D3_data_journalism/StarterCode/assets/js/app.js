// @TODO: YOUR CODE HERE!


function makeResponsive() {

    var svgArea = d3.select("body").select("svg");
    if (!svgArea.empty()) {
        svgArea.remove();
    }

    

    // Margin and SVG initialization

    svgWidth = 960;
    svgHeight = 500;
    
    margin = {
        top: 20,
        right: 40,
        bottom: 80,
        left:100
    };
    
    width = svgWidth - margin.left - margin.right;
    height = svgHeight - margin.top - margin.bottom;

    // SVG wrapper creation and attribute preparation for svg group
    svg = d3.select("#scatter")
        .append("svg")
        .attr("width", svgWidth)
        .attr("height", svgHeight);

    chartGroup = svg.append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Use D3.csv and .then to extract data from data.csv

    d3.csv("assets/data/data.csv")
        .then(function(varData){

            // Format strings and numbers
            varData.forEach(function(data) {
                data.age = +data.age;
                data.smokes = +data.smokes;
                data.healthcare = +data.healthcare;
                data.poverty = +data.poverty;
                data.abbr = data.abbr;
                data.income = +data.income;
            });

            // Create scale for X and Y values
            xLinearScale = d3.scaleLinear()
                .domain([8.5, d3.max(varData, d => d.poverty)])
                .range([0, width]);

            yLinearScale = d3.scaleLinear()
                .domain([3.5, d3.max(varData, d => d.healthcare)])
                .range([height, 0]);



            // Create axes
            xAxis = d3.axisBottom(xLinearScale);
            yAxis = d3.axisLeft(yLinearScale);

            // Append axis to ChartGroup
            chartGroup.append("g")
                .attr("transform", `translate(0, ${height})`)
                .call(xAxis);

            chartGroup.append("g")
                .call(yAxis);

            // declare and fill out attribute for CircleGroup
            circlesGroup = chartGroup.selectAll("circle")
                .data(varData)
                .enter()
                .append("circle")
                .attr("cx", d => xLinearScale(d.poverty))
                .attr("cy", d => yLinearScale(d.healthcare))
                .attr("r", 10)
                .attr("fill", "lightblue")
                .attr("opacity", ".6")
                .attr("stroke-width", "1")
                .attr("stroke", "black");

            chartGroup.select("g")
                .selectAll("circle")
                .data(varData)
                .enter()
                .append("text")
                .text(d => d.abbr)
                .attr("x", d => xLinearScale(d.poverty))
                .attr("y", d => yLinearScale(d.healthcare))
                .attr("dy",-395)
                .attr("text-anchor", "middle")
                .attr("font-size", "12px")
                .attr("fill", "black");
     
        
        console.log(varData);



        // Labels for chart
        chartGroup.append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 0 - 50)
            .attr("x", 0 -250)
            .attr("dy", "1em")
            .attr("class", "axisText")
            .text("Healthcare Lack Percent");

        chartGroup.append("text")
            .attr("transform", `translate(${width / 2.5}, ${height + margin.top + 25})`)
            .attr("class", "axisText")
            .text("Poverty Percent");

        //attempt at tooltip material
        var toolTip = d3.select("body")
            .append("div")
            .classed("tooltip", true);

        circlesGroup
            .on("mouseover", function(d) {
                toolTip.html(d.abbr)	
                .style("left", (d3.event.pageX) + "px")		
                .style("top", (d3.event.pageY - 28) + "px");
                console.log(d.abbr)
            })
                    
            .on("mouseout", function() {
                toolTip.transition()		
                .duration(500)		
                .style("opacity", 0);
            });








        
    


        });

}
// When the browser loads, makeResponsive() is called.
makeResponsive();


// When the browser window is resized, 
// makeResponsive() is called.
d3.select(window).on("resize", makeResponsive);