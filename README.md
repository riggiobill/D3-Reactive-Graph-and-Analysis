# D3-Reactive-Graph-and-Analysis

![alt text](https://github.com/riggiobill/D3-Reactive-Graph-and-Analysis/blob/main/D3_data_journalism/Images/Screenshots/D3_Screenshot_1.jpg?raw=true)

![alt text](https://github.com/riggiobill/D3-Reactive-Graph-and-Analysis/blob/main/D3_data_journalism/Images/Screenshots/D3_Screenshot_2.jpg?raw=true)

## Background

The D3 Reactive Graph and Analysis was a task aimed at analyzing the current trends shaping people's lives - as well as creating charts, graphs, and interactive elements to help readers understand your findings.

 To resolve this, this project utilized D3, HTML, Javascript, and an SVG-ChartGroup schema to identify and represent correlations about the health risks facing particular demographics. Sifting through information from the U.S. Census Bureau and the Behavioral Risk Factor Surveillance System allowed for the program to acquire real data and process it for valuable information - in particular the graph above focuses on Poverty versus level of Healthcare.

The data set included with the assignment is based on 2014 ACS 1-year estimates: [https://factfinder.census.gov/faces/nav/jsf/pages/searchresults.xhtml](https://factfinder.census.gov/faces/nav/jsf/pages/searchresults.xhtml), but you are free to investigate a different data set. The current data set includes data on rates of income, obesity, poverty, etc. by state. MOE stands for "margin of error."

D3 allows the graph to resize itself dynamically and it provides event-handling for mouse-over events. Given more time for further developments this provides an easy framework for on-click events, on-drag events, and mouse-off events. Additionally, an analysis is provided at the bottom of the page.


### Before You Begin

1. Create a new repository for this project called `D3-challenge`. **Do not add this homework to an existing repository**.

2. Clone the new repository to your computer.

3. Inside your local git repository, create a directory for the D3 challenge. Use the folder name to correspond to the challenge: **D3_data_journalism**.

4. This homeworks utilizes both **html** and **Javascript** so be sure to add all the necessary files. These will be the main files to run for analysis.

5. Push the above changes to GitHub or GitLab.



### Core Assignment


You need to create a scatter plot between two of the data variables such as `Healthcare vs. Poverty` or `Smokers vs. Age`.

Using the D3 techniques we taught you in class, create a scatter plot that represents each state with circle elements. You'll code this graphic in the `app.js` file of your homework directory—make sure you pull in the data from `data.csv` by using the `d3.csv` function. Your scatter plot should ultimately appear like the image at the top of this section.

* Include state abbreviations in the circles.

* Create and situate your axes and labels to the left and bottom of the chart.

* Note: You'll need to use `python -m http.server` to run the visualization. This will host the page at `localhost:8000` in your web browser.


- - -

### Copyright

Trilogy Education Services © 2019. All Rights Reserved.
