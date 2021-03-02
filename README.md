# D3-Reactive-Graph-and-Analysis

![alt text](https://github.com/riggiobill/D3-Reactive-Graph-and-Analysis/blob/main/D3_data_journalism/Images/Screenshots/D3_Screenshot_1.jpg?raw=true)

![alt text](https://github.com/riggiobill/D3-Reactive-Graph-and-Analysis/blob/main/D3_data_journalism/Images/Screenshots/D3_Screenshot_2.jpg?raw=true)

## Background

The D3 Reactive Graph and Analysis was a task aimed at analyzing the current trends shaping people's lives - as well as creating charts, graphs, and interactive elements to help readers understand your findings.

 To resolve this, this project utilized D3, HTML, Javascript, and an SVG-ChartGroup schema to identify and represent correlations about the health risks facing particular demographics. Sifting through information from the U.S. Census Bureau and the Behavioral Risk Factor Surveillance System allowed for the program to acquire real data and process it for valuable information - in particular the graph above focuses on Poverty versus level of Healthcare.

The data set included with the assignment is based on 2014 ACS 1-year estimates: [https://factfinder.census.gov/faces/nav/jsf/pages/searchresults.xhtml](https://factfinder.census.gov/faces/nav/jsf/pages/searchresults.xhtml). The current data set includes data on rates of income, obesity, poverty, etc. by state. MOE stands for "margin of error."

D3 allows the graph to resize itself dynamically and it provides event-handling for mouse-over events. Given more time for further developments this provides an easy framework for on-click events, on-drag events, and mouse-off events. Additionally, an analysis is provided at the bottom of the page.


### Core Components


Created a scatter plot between two of the data variables such as `Healthcare vs. Poverty` or `Smokers vs. Age`.

Used the D3 techniques acquired in class, created a scatter plot that represents each state with circle elements. Coded this graphic in the `app.js` file of the directory — made sure to pull in the data from `data.csv` by using the `d3.csv` function. Scatter plot ultimately appears on the dashboard with reactive tooltips.

* Included state abbreviations in the circles.

* Created and situated axes and labels to the left and bottom of the chart.

* Note: Used `python -m http.server` to run the visualization. This hosts the page at `localhost:8000` in your web browser.

