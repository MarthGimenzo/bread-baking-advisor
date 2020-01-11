$(document).ready(function () {

    // Define global variables

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

    let donkermeergranenBoxes
    let zonnevolkorenBoxes
    let witBoxes
    let tarweBoxes
    let volkorenBoxes
    let maisBoxes
    let witmeerzadenBoxes
    let speltBoxes
    let roggevijgenBoxes
    let roggerozijnBoxes
    let haverpompoenBoxes

    // Load data from API


    const baseURL = "https://api.myjson.com/bins/qer70";

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

    function boxAmount() {


        $("#donkermeergranen_tobe_ordered").val(DonkermeergranenBoxes);

        
    }

    function defineData() {

        // Define amount of total bread last week and create jSON file.
        totDonkermeergranen = breadData.breadtypes[0].inputWeek4Tuesday + breadData.breadtypes[0].inputWeek4Wednesday + breadData.breadtypes[0].inputWeek4Thursday + breadData.breadtypes[0].inputWeek4Friday + breadData.breadtypes[0].inputWeek4Saturday + breadData.breadtypes[0].inputWeek4Sunday
        totZonnevolkoren = breadData.breadtypes[1].inputWeek4Tuesday + breadData.breadtypes[1].inputWeek4Wednesday + breadData.breadtypes[1].inputWeek4Thursday + breadData.breadtypes[1].inputWeek4Friday + breadData.breadtypes[1].inputWeek4Saturday + breadData.breadtypes[1].inputWeek4Sunday
        totWit = breadData.breadtypes[2].inputWeek4Tuesday + breadData.breadtypes[2].inputWeek4Wednesday + breadData.breadtypes[2].inputWeek4Thursday + breadData.breadtypes[2].inputWeek4Friday + breadData.breadtypes[2].inputWeek4Saturday + breadData.breadtypes[2].inputWeek4Sunday
        totTarwe = breadData.breadtypes[3].inputWeek4Tuesday + breadData.breadtypes[3].inputWeek4Wednesday + breadData.breadtypes[3].inputWeek4Thursday + breadData.breadtypes[3].inputWeek4Friday + breadData.breadtypes[3].inputWeek4Saturday + breadData.breadtypes[3].inputWeek4Sunday
        totVolkoren = breadData.breadtypes[4].inputWeek4Tuesday + breadData.breadtypes[4].inputWeek4Wednesday + breadData.breadtypes[4].inputWeek4Thursday + breadData.breadtypes[4].inputWeek4Friday + breadData.breadtypes[4].inputWeek4Saturday + breadData.breadtypes[4].inputWeek4Sunday
        totMais = breadData.breadtypes[5].inputWeek4Tuesday + breadData.breadtypes[5].inputWeek4Wednesday + breadData.breadtypes[5].inputWeek4Thursday + breadData.breadtypes[5].inputWeek4Friday + breadData.breadtypes[5].inputWeek4Saturday + breadData.breadtypes[5].inputWeek4Sunday
        totWitmeerzaden = breadData.breadtypes[6].inputWeek4Tuesday + breadData.breadtypes[6].inputWeek4Wednesday + breadData.breadtypes[6].inputWeek4Thursday + breadData.breadtypes[6].inputWeek4Friday + breadData.breadtypes[6].inputWeek4Saturday + breadData.breadtypes[6].inputWeek4Sunday
        totSpelt = breadData.breadtypes[7].inputWeek4Tuesday + breadData.breadtypes[7].inputWeek4Wednesday + breadData.breadtypes[7].inputWeek4Thursday + breadData.breadtypes[7].inputWeek4Friday + breadData.breadtypes[7].inputWeek4Saturday + breadData.breadtypes[7].inputWeek4Sunday
        totRoggevijgen = breadData.breadtypes[8].inputWeek4Tuesday + breadData.breadtypes[8].inputWeek4Wednesday + breadData.breadtypes[8].inputWeek4Thursday + breadData.breadtypes[8].inputWeek4Friday + breadData.breadtypes[8].inputWeek4Saturday + breadData.breadtypes[8].inputWeek4Sunday
        totRoggerozijn = breadData.breadtypes[9].inputWeek4Tuesday + breadData.breadtypes[9].inputWeek4Wednesday + breadData.breadtypes[9].inputWeek4Thursday + breadData.breadtypes[9].inputWeek4Friday + breadData.breadtypes[9].inputWeek4Saturday + breadData.breadtypes[9].inputWeek4Sunday
        totHaverpompoen = breadData.breadtypes[10].inputWeek4Tuesday + breadData.breadtypes[10].inputWeek4Wednesday + breadData.breadtypes[10].inputWeek4Thursday + breadData.breadtypes[10].inputWeek4Friday + breadData.breadtypes[10].inputWeek4Saturday + breadData.breadtypes[10].inputWeek4Sunday

        weekData = [{ "bread": "Haver Pompoen", "amount": totHaverpompoen },
        { "bread": "Rogge Rozijn", "amount": totRoggerozijn },
        { "bread": "Rogge Vijgen", "amount": totRoggevijgen },
        { "bread": "Spelt", "amount": totSpelt },
        { "bread": "Wit Meerzaden", "amount": totWitmeerzaden },
        { "bread": "Mais", "amount": totMais },
        { "bread": "Volkoren", "amount": totVolkoren },
        { "bread": "Tarwe", "amount": totTarwe },
        { "bread": "Wit", "amount": totWit },
        { "bread": "Zonne Volkoren", "amount": totZonnevolkoren },
        { "bread": "Donker Meergranen", "amount": totDonkermeergranen }]

        // Count amount of boxes and view them

        donkermeergranenBoxes = (Math.ceil(totDonkermeergranen / 12));
        zonnevolkorenBoxes = (Math.ceil(totZonnevolkoren / 12));
        witBoxes = (Math.ceil(totWit / 12));
        tarweBoxes = (Math.ceil(totTarwe / 12));
        volkorenBoxes = (Math.ceil(totVolkoren / 12));
        maisBoxes = (Math.ceil(totMais / 12));
        witmeerzadenBoxes = (Math.ceil(totWitmeerzaden / 12));
        speltBoxes = (Math.ceil(totSpelt / 12));
        roggevijgenBoxes = (Math.ceil(totRoggevijgen / 13));
        roggerozijnBoxes = (Math.ceil(totRoggerozijn / 13));
        haverpompoenBoxes = (Math.ceil(totHaverpompoen / 13));


        $("#donkermeergranen_tobe_ordered").val(donkermeergranenBoxes);
        $("#zonnevolkoren_tobe_ordered").val(zonnevolkorenBoxes);
        $("#wit_tobe_ordered").val(witBoxes);
        $("#tarwe_tobe_ordered").val(tarweBoxes);
        $("#volkoren_tobe_ordered").val(volkorenBoxes);
        $("#mais_tobe_ordered").val(maisBoxes);
        $("#witmeerzaden_tobe_ordered").val(witmeerzadenBoxes);
        $("#spelt_tobe_ordered").val(speltBoxes);
        $("#roggevijgen_tobe_ordered").val(roggevijgenBoxes);
        $("#roggerozijn_tobe_ordered").val(roggerozijnBoxes);
        $("#haverpompoen_tobe_ordered").val(haverpompoenBoxes);


        console.log(weekData)
        weekData = JSON.stringify(weekData)
        console.log(weekData)
        renderChart()



    }

    getData(function (data) {

        console.log(breadData);
        console.log(d3);

    });

    function renderChart() {

        // ------------------------------------------------------------------
        //  horizontal_bar_chart.js
        //
        //                      Jun/02/2017
        //
        // ------------------------------------------------------------------
        weekData = JSON.parse(weekData)
        console.log(weekData)

        const file_json = "data2.json"

        console.log(file_json)


        horizontal_bar_chart_proc(weekData)


        // ------------------------------------------------------------------
        function horizontal_bar_chart_proc(weekData) {
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
            weekData.forEach(function (d) {
                d.amount = +d.amount;
            });

            // Scale the range of the data in the domains
            x.domain([0, d3.max(weekData, function (d) { return d.amount; })])
            y.domain(weekData.map(function (d) { return d.bread; }));
            //y.domain([0, d3.max(data, function(d) { return d.amount; })]);

            // append the rectangles for the bar chart
            svg.selectAll(".bar")
                .data(weekData)
                .enter().append("rect")
                .attr("class", "bar")
                

                .attr("width", 0)//this is the initial value
                .transition()
                .duration(300)
                .delay(function (d, i) { return i * 50 })
                .attr("width", function (d) { return x(d.amount); })

                .attr("y", function (d) { return y(d.bread); })
                .attr("height", y.bandwidth())

            // add the x Axis
            svg.append("g")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x))


            // add the y Axis
            svg.append("g")
                .call(d3.axisLeft(y))

           

        }

        // ------------------------------------------------------------------
    }
















})
