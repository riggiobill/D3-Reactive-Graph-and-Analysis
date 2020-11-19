// @TODO: YOUR CODE HERE!


function makeResponsive() {


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

    




}

makeResponsive();