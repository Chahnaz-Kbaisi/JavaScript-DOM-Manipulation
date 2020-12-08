// Level 1: Automatic Table and Date Search (Required)

// Using the UFO dataset provided in the form of an array of JavaScript objects, 
// write code that appends a table to your web page and 
// then adds new rows of data for each UFO sighting.

// Make sure you have a column for `date/time`, `city`, 
// `state`, `country`, `shape`, and `comment` at the very least.

// from data.js
var tableData = data;
// YOUR CODE HERE!

var columns = ["datetime", "city", "state", "shape", "durationMinutes", "comments"]

console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");

// Looping through each UFO object in the data array
// Creating the empty rows for tableData
tableData.forEach((ufoSightings) => {
    console.log(ufoSightings);
    var row = tbody.append("tr");
    // Using the Object.entries to console.log to populate each UFO Sighting object:
    Object.entries(ufoSightings).forEach(([key, value]) => {
        console.log(key, value);
        // Appending a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});

// Use a date form in your HTML document and write JavaScript code 
// that will listen for events and search through the `date/time` 
// column to find rows that match user input.

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select(".form-control");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    // Use the form input to filter the data by datetime
    var filteredData = tableData.filter((sighting) => sighting.datetime === inputValue);
    console.log(filteredData);

    // Clear out current contents in the table
    tbody.html("");

    // If results have no match
    if (filteredData.length === 0) {
        tbody.text(`no matching for ${inputValue}.`);
    }
    // For Matching results
    else {
        filteredData.forEach((ufoSightings) => {
            var row = tbody.append("tr");
            Object.entries(ufoSightings).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
            });
        });

    };
};




