// from data.js
var tableData = data;

// YOUR CODE HERE!
tableData.map(row => row.datetime);
tableData.map(row => row.city);
tableData.map(row => row.state);
tableData.map(row => row.country);
tableData.map(row => row.comment);

var filterDate = d3.select("#filter-btn");

filterDate.on("click", function () {

    d3.event.preventDefault();

    d3.select("tbody").selectAll("tr").remove();
    d3.select("tbody").selectAll("td").remove();
    

    var userInput = d3.select("#datetime");

    var userValue = userInput.property("value");

    console.log(userValue);

    var filteredData = tableData.filter(date => date.datetime == userValue);

    console.log(filteredData);

    filteredData.forEach(function(element){
        console.log(element.datetime);
        console.log(element.shape);
        console.log(element.city);
        
        d3.select("tbody")
        .append("tr")
        .style("height", 20 + "px");

        d3.select("tbody")
        .append("td").text(`${element.datetime}`);
        d3.select("tbody")
        .append("td").text(`${element.city}`);
        d3.select("tbody")
        .append("td").text(`${element.state}`);
        d3.select("tbody")
        .append("td").text(`${element.country}`);
        d3.select("tbody")
        .append("td").text(`${element.shape}`);
        d3.select("tbody")
        .append("td").text(`${element.durationMinutes}`);
        d3.select("tbody")
        .append("td").text(`${element.comments}`);

    });

    // dateT.forEach(function(element) {
    //     d3.select("tbody")
    //     .append("td").text(`${element}`)
    //     d3.select("tbody")
    //     .append("tr");
    // });

    // d3.select("tbody").selectAll("td").remove();

});