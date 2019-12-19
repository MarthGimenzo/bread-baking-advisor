$(document).ready(function () {

    // ------------------------------------------------------------------
    //  horizontal_bar_chart.js
    //
    //                      Jun/02/2017
    //
    // ------------------------------------------------------------------
    const file_json = "data2.json"

    jQuery.getJSON(file_json, function (data) {
        horizontal_bar_chart_proc(data)
    })

    // ------------------------------------------------------------------
    function horizontal_bar_chart_proc(data) {
        // set the dimensions and margins of the graph
        const margin = { top: 0, right: 5, bottom: 30, left: 110 }
        const width = 340 - margin.left - margin.right
        const height = 250 - margin.top - margin.bottom

        // set the ranges
        const y = d3.scaleBand()
            .range([height, 0])
            .padding(0.1);

        const x = d3.scaleLinear()
            .range([0, width]);

        // append the svg object to the body of the page
        // append a 'group' element to 'svg'
        // moves the 'group' element to the top left margin
        var svg = d3.select("#Dash").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")")


        // format the data
        data.forEach(function (d) {
            d.amount = +d.amount;
        });

        // Scale the range of the data in the domains
        x.domain([0, d3.max(data, function (d) { return d.amount; })])
        y.domain(data.map(function (d) { return d.bread; }));
        //y.domain([0, d3.max(data, function(d) { return d.amount; })]);

        // append the rectangles for the bar chart
        svg.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            //.attr("x", function(d) { return x(d.amount); })
            
            .attr("width", 0)//this is the initial value
            .transition()
            .duration(300)
            .delay(function(d,i){ return i*50})
            .attr("width", function (d) { return x(d.amount); })
            
            .attr("y", function (d) { return y(d.bread); })
            .attr("height", y.bandwidth())

        // add the x Axis
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));

        // add the y Axis
        svg.append("g")
            .call(d3.axisLeft(y));
    }

    // ------------------------------------------------------------------










    // Load data from API
    let breadData
    let weekData

    let totDonkermeergranen
    let totZonnevolkoren
    let totWit
    let totTarwe
    let totVolkoren
    let totMais
    let totWitmeerzaden
    let totSpelt
    let totRoggevijgen
    let totRoggerozijn
    let totHaverpompoen

    const baseURL = "https://api.myjson.com/bins/193agk";

    function getData(cb) {

        var xhr = new XMLHttpRequest();


        xhr.open("GET", baseURL)
        xhr.send();

        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {



                breadData = JSON.parse(this.responseText)
                defineData()

                cb()


            }
        };
    }


    function defineData() {

        totDonkermeergranen = breadData.breadtypes[0].inputWeek4Tuesday + breadData.breadtypes[0].inputWeek4Wednesday + breadData.breadtypes[0].inputWeek4Thursday + breadData.breadtypes[0].inputWeek4Friday + breadData.breadtypes[0].inputWeek4Saturday + breadData.breadtypes[0].inputWeek4Sunday
        totDonkermeergranen = breadData.breadtypes[0].inputWeek4Tuesday + breadData.breadtypes[0].inputWeek4Wednesday + breadData.breadtypes[0].inputWeek4Thursday + breadData.breadtypes[0].inputWeek4Friday + breadData.breadtypes[0].inputWeek4Saturday + breadData.breadtypes[0].inputWeek4Sunday
        console.log(totDonkermeergranen)
        weekData = [{ "name": "Donker Meergranen", "amount": totDonkermeergranen }]
        console.log(weekData)

    }

    getData(function (data) {



        console.log(breadData);
        console.log(d3);











    });





})
