// import the data from data.js
const tableData = data;

//Reference the HTML table using d3
var tbody = d3.select("tbody");


//begin definition of buildTable function
function buildTable(data) {

    //Clear any existing data
    tbody.html("");

    //Next loop through each object in the data
    //and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        //Append a row to the table body
        let row = tbody.append("tr");

        //loop through each field of the dataRow and add
        //each value as atable cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );

    });
};
//end defintion of buildTable function

//begin definition of handleClick function
function handleClick() {

    //Grab the datetime value from the filter
    let date = d3.select("datetime").property("value");
    let filteredData = tableData;

    //Check to see if a date was entered and filter the
    //date using that date
    if(date) {
        //apply filter to the table data to only keep the rows
        //where the 'datetime' value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    //Rebuild the table using filtered data
    // NOTE: if no date was entered, then filteredData will
    //just be the original tableData
    buildTable(filteredData);
};
//end definition of handleClick function

//Listen for a click, execute the handleCllick function when the button in the 
//tag filter-btn is clicked
d3.selectAll("#filter-btn").on("click",handleClick);


//Build the table when the page loads
buildTable(tableData);
