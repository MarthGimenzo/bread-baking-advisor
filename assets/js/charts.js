$(document).ready(function () {

    // Define global variables

    let breadData;
    let weekData;
    let fourweeksData;

    let totDonkermeergranen;
    let totZonnevolkoren;
    let totWit;
    let totTarwe;
    let totVolkoren;
    let totMais;
    let totWitmeerzaden;
    let totSpelt;
    let totRoggevijgen;
    let totRoggerozijn;
    let totHaverpompoen;

    let donkermeergranenBoxes;
    let zonnevolkorenBoxes;
    let witBoxes;
    let tarweBoxes;
    let volkorenBoxes;
    let maisBoxes;
    let witmeerzadenBoxes;
    let speltBoxes;
    let roggevijgenBoxes;
    let roggerozijnBoxes;
    let haverpompoenBoxes;

    let tot4weekDonkermeergranen;
    let tot4weekZonnevolkoren;
    let tot4weekWit;
    let tot4weekTarwe;
    let tot4weekVolkoren;
    let tot4weekMais;
    let tot4weekWitmeerzaden;
    let tot4weekSpelt;
    let tot4weekRoggevijgen;
    let tot4weekRoggerozijn;
    let tot4weekHaverpompoen;

    // Load data from API

    const baseURL = "https://api.myjson.com/bins/qer70";

    function getData(cb) {

        var xhr = new XMLHttpRequest();

        xhr.open("GET", baseURL);
        xhr.send();

        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {

                breadData = JSON.parse(this.responseText);
                defineData();

                cb()

            };
        };
    };

    function defineData() {

        // Define amount of total bread last week

        totDonkermeergranen = breadData.breadtypes[0].inputWeek4Tuesday + breadData.breadtypes[0].inputWeek4Wednesday + breadData.breadtypes[0].inputWeek4Thursday + breadData.breadtypes[0].inputWeek4Friday + breadData.breadtypes[0].inputWeek4Saturday + breadData.breadtypes[0].inputWeek4Sunday;
        totZonnevolkoren = breadData.breadtypes[1].inputWeek4Tuesday + breadData.breadtypes[1].inputWeek4Wednesday + breadData.breadtypes[1].inputWeek4Thursday + breadData.breadtypes[1].inputWeek4Friday + breadData.breadtypes[1].inputWeek4Saturday + breadData.breadtypes[1].inputWeek4Sunday;
        totWit = breadData.breadtypes[2].inputWeek4Tuesday + breadData.breadtypes[2].inputWeek4Wednesday + breadData.breadtypes[2].inputWeek4Thursday + breadData.breadtypes[2].inputWeek4Friday + breadData.breadtypes[2].inputWeek4Saturday + breadData.breadtypes[2].inputWeek4Sunday;
        totTarwe = breadData.breadtypes[3].inputWeek4Tuesday + breadData.breadtypes[3].inputWeek4Wednesday + breadData.breadtypes[3].inputWeek4Thursday + breadData.breadtypes[3].inputWeek4Friday + breadData.breadtypes[3].inputWeek4Saturday + breadData.breadtypes[3].inputWeek4Sunday;
        totVolkoren = breadData.breadtypes[4].inputWeek4Tuesday + breadData.breadtypes[4].inputWeek4Wednesday + breadData.breadtypes[4].inputWeek4Thursday + breadData.breadtypes[4].inputWeek4Friday + breadData.breadtypes[4].inputWeek4Saturday + breadData.breadtypes[4].inputWeek4Sunday;
        totMais = breadData.breadtypes[5].inputWeek4Tuesday + breadData.breadtypes[5].inputWeek4Wednesday + breadData.breadtypes[5].inputWeek4Thursday + breadData.breadtypes[5].inputWeek4Friday + breadData.breadtypes[5].inputWeek4Saturday + breadData.breadtypes[5].inputWeek4Sunday;
        totWitmeerzaden = breadData.breadtypes[6].inputWeek4Tuesday + breadData.breadtypes[6].inputWeek4Wednesday + breadData.breadtypes[6].inputWeek4Thursday + breadData.breadtypes[6].inputWeek4Friday + breadData.breadtypes[6].inputWeek4Saturday + breadData.breadtypes[6].inputWeek4Sunday;
        totSpelt = breadData.breadtypes[7].inputWeek4Tuesday + breadData.breadtypes[7].inputWeek4Wednesday + breadData.breadtypes[7].inputWeek4Thursday + breadData.breadtypes[7].inputWeek4Friday + breadData.breadtypes[7].inputWeek4Saturday + breadData.breadtypes[7].inputWeek4Sunday;
        totRoggevijgen = breadData.breadtypes[8].inputWeek4Tuesday + breadData.breadtypes[8].inputWeek4Wednesday + breadData.breadtypes[8].inputWeek4Thursday + breadData.breadtypes[8].inputWeek4Friday + breadData.breadtypes[8].inputWeek4Saturday + breadData.breadtypes[8].inputWeek4Sunday;
        totRoggerozijn = breadData.breadtypes[9].inputWeek4Tuesday + breadData.breadtypes[9].inputWeek4Wednesday + breadData.breadtypes[9].inputWeek4Thursday + breadData.breadtypes[9].inputWeek4Friday + breadData.breadtypes[9].inputWeek4Saturday + breadData.breadtypes[9].inputWeek4Sunday;
        totHaverpompoen = breadData.breadtypes[10].inputWeek4Tuesday + breadData.breadtypes[10].inputWeek4Wednesday + breadData.breadtypes[10].inputWeek4Thursday + breadData.breadtypes[10].inputWeek4Friday + breadData.breadtypes[10].inputWeek4Saturday + breadData.breadtypes[10].inputWeek4Sunday;

        // Create valid data file for last week chart rendering

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
        { "bread": "Donker Meergranen", "amount": totDonkermeergranen }];

        // Define amount of total bread last 4 weeks

        tot4weekDonkermeergranen = breadData.breadtypes[0].inputWeek4Tuesday + breadData.breadtypes[0].inputWeek4Wednesday + breadData.breadtypes[0].inputWeek4Thursday + breadData.breadtypes[0].inputWeek4Friday + breadData.breadtypes[0].inputWeek4Saturday + breadData.breadtypes[0].inputWeek4Sunday +
            breadData.breadtypes[0].inputWeek3Tuesday + breadData.breadtypes[0].inputWeek3Wednesday + breadData.breadtypes[0].inputWeek3Thursday + breadData.breadtypes[0].inputWeek3Friday + breadData.breadtypes[0].inputWeek3Saturday + breadData.breadtypes[0].inputWeek3Sunday +
            breadData.breadtypes[0].inputWeek2Tuesday + breadData.breadtypes[0].inputWeek2Wednesday + breadData.breadtypes[0].inputWeek2Thursday + breadData.breadtypes[0].inputWeek2Friday + breadData.breadtypes[0].inputWeek2Saturday + breadData.breadtypes[0].inputWeek2Sunday +
            breadData.breadtypes[0].inputWeek1Tuesday + breadData.breadtypes[0].inputWeek1Wednesday + breadData.breadtypes[0].inputWeek1Thursday + breadData.breadtypes[0].inputWeek1Friday + breadData.breadtypes[0].inputWeek1Saturday + breadData.breadtypes[0].inputWeek1Sunday;

        tot4weekZonnevolkoren = breadData.breadtypes[1].inputWeek4Tuesday + breadData.breadtypes[1].inputWeek4Wednesday + breadData.breadtypes[1].inputWeek4Thursday + breadData.breadtypes[1].inputWeek4Friday + breadData.breadtypes[1].inputWeek4Saturday + breadData.breadtypes[1].inputWeek4Sunday +
            breadData.breadtypes[1].inputWeek3Tuesday + breadData.breadtypes[1].inputWeek3Wednesday + breadData.breadtypes[1].inputWeek3Thursday + breadData.breadtypes[1].inputWeek3Friday + breadData.breadtypes[1].inputWeek3Saturday + breadData.breadtypes[1].inputWeek3Sunday +
            breadData.breadtypes[1].inputWeek2Tuesday + breadData.breadtypes[1].inputWeek2Wednesday + breadData.breadtypes[1].inputWeek2Thursday + breadData.breadtypes[1].inputWeek2Friday + breadData.breadtypes[1].inputWeek2Saturday + breadData.breadtypes[1].inputWeek2Sunday +
            breadData.breadtypes[1].inputWeek1Tuesday + breadData.breadtypes[1].inputWeek1Wednesday + breadData.breadtypes[1].inputWeek1Thursday + breadData.breadtypes[1].inputWeek1Friday + breadData.breadtypes[1].inputWeek1Saturday + breadData.breadtypes[1].inputWeek1Sunday;

        tot4weekWit = breadData.breadtypes[2].inputWeek4Tuesday + breadData.breadtypes[2].inputWeek4Wednesday + breadData.breadtypes[2].inputWeek4Thursday + breadData.breadtypes[2].inputWeek4Friday + breadData.breadtypes[2].inputWeek4Saturday + breadData.breadtypes[2].inputWeek4Sunday +
            breadData.breadtypes[2].inputWeek3Tuesday + breadData.breadtypes[2].inputWeek3Wednesday + breadData.breadtypes[2].inputWeek3Thursday + breadData.breadtypes[2].inputWeek3Friday + breadData.breadtypes[2].inputWeek3Saturday + breadData.breadtypes[2].inputWeek3Sunday +
            breadData.breadtypes[2].inputWeek2Tuesday + breadData.breadtypes[2].inputWeek2Wednesday + breadData.breadtypes[2].inputWeek2Thursday + breadData.breadtypes[2].inputWeek2Friday + breadData.breadtypes[2].inputWeek2Saturday + breadData.breadtypes[2].inputWeek2Sunday +
            breadData.breadtypes[2].inputWeek1Tuesday + breadData.breadtypes[2].inputWeek1Wednesday + breadData.breadtypes[2].inputWeek1Thursday + breadData.breadtypes[2].inputWeek1Friday + breadData.breadtypes[2].inputWeek1Saturday + breadData.breadtypes[2].inputWeek1Sunday;

        tot4weekTarwe = breadData.breadtypes[3].inputWeek4Tuesday + breadData.breadtypes[3].inputWeek4Wednesday + breadData.breadtypes[3].inputWeek4Thursday + breadData.breadtypes[3].inputWeek4Friday + breadData.breadtypes[3].inputWeek4Saturday + breadData.breadtypes[3].inputWeek4Sunday +
            breadData.breadtypes[0].inputWeek3Tuesday + breadData.breadtypes[3].inputWeek3Wednesday + breadData.breadtypes[3].inputWeek3Thursday + breadData.breadtypes[3].inputWeek3Friday + breadData.breadtypes[3].inputWeek3Saturday + breadData.breadtypes[3].inputWeek3Sunday +
            breadData.breadtypes[0].inputWeek2Tuesday + breadData.breadtypes[3].inputWeek2Wednesday + breadData.breadtypes[3].inputWeek2Thursday + breadData.breadtypes[3].inputWeek2Friday + breadData.breadtypes[3].inputWeek2Saturday + breadData.breadtypes[3].inputWeek2Sunday +
            breadData.breadtypes[0].inputWeek1Tuesday + breadData.breadtypes[3].inputWeek1Wednesday + breadData.breadtypes[3].inputWeek1Thursday + breadData.breadtypes[3].inputWeek1Friday + breadData.breadtypes[3].inputWeek1Saturday + breadData.breadtypes[3].inputWeek1Sunday;

        tot4weekVolkoren = breadData.breadtypes[4].inputWeek4Tuesday + breadData.breadtypes[4].inputWeek4Wednesday + breadData.breadtypes[4].inputWeek4Thursday + breadData.breadtypes[4].inputWeek4Friday + breadData.breadtypes[4].inputWeek4Saturday + breadData.breadtypes[4].inputWeek4Sunday +
            breadData.breadtypes[4].inputWeek3Tuesday + breadData.breadtypes[4].inputWeek3Wednesday + breadData.breadtypes[4].inputWeek3Thursday + breadData.breadtypes[4].inputWeek3Friday + breadData.breadtypes[4].inputWeek3Saturday + breadData.breadtypes[4].inputWeek3Sunday +
            breadData.breadtypes[4].inputWeek2Tuesday + breadData.breadtypes[4].inputWeek2Wednesday + breadData.breadtypes[4].inputWeek2Thursday + breadData.breadtypes[4].inputWeek2Friday + breadData.breadtypes[4].inputWeek2Saturday + breadData.breadtypes[4].inputWeek2Sunday +
            breadData.breadtypes[4].inputWeek1Tuesday + breadData.breadtypes[4].inputWeek1Wednesday + breadData.breadtypes[4].inputWeek1Thursday + breadData.breadtypes[4].inputWeek1Friday + breadData.breadtypes[4].inputWeek1Saturday + breadData.breadtypes[4].inputWeek1Sunday;

        tot4weekMais = breadData.breadtypes[5].inputWeek4Tuesday + breadData.breadtypes[5].inputWeek4Wednesday + breadData.breadtypes[5].inputWeek4Thursday + breadData.breadtypes[5].inputWeek4Friday + breadData.breadtypes[5].inputWeek4Saturday + breadData.breadtypes[5].inputWeek4Sunday +
            breadData.breadtypes[5].inputWeek3Tuesday + breadData.breadtypes[5].inputWeek3Wednesday + breadData.breadtypes[5].inputWeek3Thursday + breadData.breadtypes[5].inputWeek3Friday + breadData.breadtypes[5].inputWeek3Saturday + breadData.breadtypes[5].inputWeek3Sunday +
            breadData.breadtypes[5].inputWeek2Tuesday + breadData.breadtypes[5].inputWeek2Wednesday + breadData.breadtypes[5].inputWeek2Thursday + breadData.breadtypes[5].inputWeek2Friday + breadData.breadtypes[5].inputWeek2Saturday + breadData.breadtypes[5].inputWeek2Sunday +
            breadData.breadtypes[5].inputWeek1Tuesday + breadData.breadtypes[5].inputWeek1Wednesday + breadData.breadtypes[5].inputWeek1Thursday + breadData.breadtypes[5].inputWeek1Friday + breadData.breadtypes[5].inputWeek1Saturday + breadData.breadtypes[5].inputWeek1Sunday;

        tot4weekWitmeerzaden = breadData.breadtypes[6].inputWeek4Tuesday + breadData.breadtypes[6].inputWeek4Wednesday + breadData.breadtypes[6].inputWeek4Thursday + breadData.breadtypes[6].inputWeek4Friday + breadData.breadtypes[6].inputWeek4Saturday + breadData.breadtypes[6].inputWeek4Sunday +
            breadData.breadtypes[6].inputWeek3Tuesday + breadData.breadtypes[6].inputWeek3Wednesday + breadData.breadtypes[6].inputWeek3Thursday + breadData.breadtypes[6].inputWeek3Friday + breadData.breadtypes[6].inputWeek3Saturday + breadData.breadtypes[6].inputWeek3Sunday +
            breadData.breadtypes[6].inputWeek2Tuesday + breadData.breadtypes[6].inputWeek2Wednesday + breadData.breadtypes[6].inputWeek2Thursday + breadData.breadtypes[6].inputWeek2Friday + breadData.breadtypes[6].inputWeek2Saturday + breadData.breadtypes[6].inputWeek2Sunday +
            breadData.breadtypes[6].inputWeek1Tuesday + breadData.breadtypes[6].inputWeek1Wednesday + breadData.breadtypes[6].inputWeek1Thursday + breadData.breadtypes[6].inputWeek1Friday + breadData.breadtypes[6].inputWeek1Saturday + breadData.breadtypes[6].inputWeek1Sunday;

        tot4weekSpelt = breadData.breadtypes[7].inputWeek4Tuesday + breadData.breadtypes[7].inputWeek4Wednesday + breadData.breadtypes[7].inputWeek4Thursday + breadData.breadtypes[7].inputWeek4Friday + breadData.breadtypes[7].inputWeek4Saturday + breadData.breadtypes[7].inputWeek4Sunday +
            breadData.breadtypes[7].inputWeek3Tuesday + breadData.breadtypes[7].inputWeek3Wednesday + breadData.breadtypes[7].inputWeek3Thursday + breadData.breadtypes[7].inputWeek3Friday + breadData.breadtypes[7].inputWeek3Saturday + breadData.breadtypes[7].inputWeek3Sunday +
            breadData.breadtypes[7].inputWeek2Tuesday + breadData.breadtypes[7].inputWeek2Wednesday + breadData.breadtypes[7].inputWeek2Thursday + breadData.breadtypes[7].inputWeek2Friday + breadData.breadtypes[7].inputWeek2Saturday + breadData.breadtypes[7].inputWeek2Sunday +
            breadData.breadtypes[7].inputWeek1Tuesday + breadData.breadtypes[7].inputWeek1Wednesday + breadData.breadtypes[7].inputWeek1Thursday + breadData.breadtypes[7].inputWeek1Friday + breadData.breadtypes[7].inputWeek1Saturday + breadData.breadtypes[7].inputWeek1Sunday;

        tot4weekRoggevijgen = breadData.breadtypes[8].inputWeek4Tuesday + breadData.breadtypes[8].inputWeek4Wednesday + breadData.breadtypes[8].inputWeek4Thursday + breadData.breadtypes[8].inputWeek4Friday + breadData.breadtypes[8].inputWeek4Saturday + breadData.breadtypes[8].inputWeek4Sunday +
            breadData.breadtypes[8].inputWeek3Tuesday + breadData.breadtypes[8].inputWeek3Wednesday + breadData.breadtypes[8].inputWeek3Thursday + breadData.breadtypes[8].inputWeek3Friday + breadData.breadtypes[8].inputWeek3Saturday + breadData.breadtypes[8].inputWeek3Sunday +
            breadData.breadtypes[8].inputWeek2Tuesday + breadData.breadtypes[8].inputWeek2Wednesday + breadData.breadtypes[8].inputWeek2Thursday + breadData.breadtypes[8].inputWeek2Friday + breadData.breadtypes[8].inputWeek2Saturday + breadData.breadtypes[8].inputWeek2Sunday +
            breadData.breadtypes[8].inputWeek1Tuesday + breadData.breadtypes[8].inputWeek1Wednesday + breadData.breadtypes[8].inputWeek1Thursday + breadData.breadtypes[8].inputWeek1Friday + breadData.breadtypes[8].inputWeek1Saturday + breadData.breadtypes[8].inputWeek1Sunday;

        tot4weekRoggerozijn = breadData.breadtypes[9].inputWeek4Tuesday + breadData.breadtypes[9].inputWeek4Wednesday + breadData.breadtypes[9].inputWeek4Thursday + breadData.breadtypes[9].inputWeek4Friday + breadData.breadtypes[9].inputWeek4Saturday + breadData.breadtypes[9].inputWeek4Sunday +
            breadData.breadtypes[9].inputWeek3Tuesday + breadData.breadtypes[9].inputWeek3Wednesday + breadData.breadtypes[9].inputWeek3Thursday + breadData.breadtypes[9].inputWeek3Friday + breadData.breadtypes[9].inputWeek3Saturday + breadData.breadtypes[9].inputWeek3Sunday +
            breadData.breadtypes[9].inputWeek2Tuesday + breadData.breadtypes[9].inputWeek2Wednesday + breadData.breadtypes[9].inputWeek2Thursday + breadData.breadtypes[9].inputWeek2Friday + breadData.breadtypes[9].inputWeek2Saturday + breadData.breadtypes[9].inputWeek2Sunday +
            breadData.breadtypes[9].inputWeek1Tuesday + breadData.breadtypes[9].inputWeek1Wednesday + breadData.breadtypes[9].inputWeek1Thursday + breadData.breadtypes[9].inputWeek1Friday + breadData.breadtypes[9].inputWeek1Saturday + breadData.breadtypes[9].inputWeek1Sunday;

        tot4weekHaverpompoen = breadData.breadtypes[10].inputWeek4Tuesday + breadData.breadtypes[10].inputWeek4Wednesday + breadData.breadtypes[10].inputWeek4Thursday + breadData.breadtypes[10].inputWeek4Friday + breadData.breadtypes[10].inputWeek4Saturday + breadData.breadtypes[10].inputWeek4Sunday +
            breadData.breadtypes[10].inputWeek3Tuesday + breadData.breadtypes[10].inputWeek3Wednesday + breadData.breadtypes[10].inputWeek3Thursday + breadData.breadtypes[10].inputWeek3Friday + breadData.breadtypes[10].inputWeek3Saturday + breadData.breadtypes[10].inputWeek3Sunday +
            breadData.breadtypes[10].inputWeek2Tuesday + breadData.breadtypes[10].inputWeek2Wednesday + breadData.breadtypes[10].inputWeek2Thursday + breadData.breadtypes[10].inputWeek2Friday + breadData.breadtypes[10].inputWeek2Saturday + breadData.breadtypes[10].inputWeek2Sunday +
            breadData.breadtypes[10].inputWeek1Tuesday + breadData.breadtypes[10].inputWeek1Wednesday + breadData.breadtypes[10].inputWeek1Thursday + breadData.breadtypes[10].inputWeek1Friday + breadData.breadtypes[10].inputWeek1Saturday + breadData.breadtypes[10].inputWeek1Sunday;

        // Create valid data file for last 4 weeks chart rendering

        fourweeksData = [{ "bread": "Haver Pompoen", "amount": tot4weekHaverpompoen },
        { "bread": "Rogge Rozijn", "amount": tot4weekRoggerozijn },
        { "bread": "Rogge Vijgen", "amount": tot4weekRoggevijgen },
        { "bread": "Spelt", "amount": tot4weekSpelt },
        { "bread": "Wit Meerzaden", "amount": tot4weekWitmeerzaden },
        { "bread": "Mais", "amount": tot4weekMais },
        { "bread": "Volkoren", "amount": tot4weekVolkoren },
        { "bread": "Tarwe", "amount": tot4weekTarwe },
        { "bread": "Wit", "amount": tot4weekWit },
        { "bread": "Zonne Volkoren", "amount": tot4weekZonnevolkoren },
        { "bread": "Donker Meergranen", "amount": tot4weekDonkermeergranen }];

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

        weekData = JSON.stringify(weekData);
        fourweeksData = JSON.stringify(fourweeksData);

        renderChartWeek();
        renderChart4Weeks();

    };

    getData(function (data) {

    });

    function renderChartWeek() {

        // Based on code of Masatomo Uchida 2018-03-30
        // https://qiita.com/ekzemplaro/items/868b4b240b472b9113fc
        // Thank you very much!

        weekData = JSON.parse(weekData);
        horizontal_bar_chart_proc(weekData);

        function horizontal_bar_chart_proc(weekData) {

            // set the dimensions and margins of the graph
            const margin = { top: 0, right: 5, bottom: 30, left: 110 };
            const width = 340 - margin.left - margin.right;
            const height = 250 - margin.top - margin.bottom;

            // set the ranges
            const y = d3.scaleBand()
                .range([height, 0])
                .padding(0.1);

            const x = d3.scaleLinear()
                .range([0, width]);

            // append the svg object to the body of the page
            // append a 'group' element to 'svg'
            // moves the 'group' element to the top left margin
            var svg = d3.select("#lastweek").append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform",
                    "translate(" + margin.left + "," + margin.top + ")");

            // format the data
            weekData.forEach(function (d) {
                d.amount = +d.amount;
            });

            // Scale the range of the data in the domains
            x.domain([0, d3.max(weekData, function (d) { return d.amount; })]);
            y.domain(weekData.map(function (d) { return d.bread; }));

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
                .attr("height", y.bandwidth());

            // add the x Axis
            svg.append("g")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x));

            // add the y Axis
            svg.append("g")
                .call(d3.axisLeft(y));
        };
    };

    function renderChart4Weeks() {

        // Based on code of Masatomo Uchida 2018-03-30
        // https://qiita.com/ekzemplaro/items/868b4b240b472b9113fc
        // Thank you very much!

        weekData = JSON.parse(fourweeksData);
        horizontal_bar_chart_proc(fourweeksData);

        function horizontal_bar_chart_proc(fourweeksData) {

            // set the dimensions and margins of the graph
            const margin = { top: 0, right: 5, bottom: 30, left: 110 }
            const width = 340 - margin.left - margin.right;
            const height = 250 - margin.top - margin.bottom;

            // set the ranges
            const y = d3.scaleBand()
                .range([height, 0])
                .padding(0.1);

            const x = d3.scaleLinear()
                .range([0, width]);

            // append the svg object to the body of the page
            // append a 'group' element to 'svg'
            // moves the 'group' element to the top left margin
            var svg = d3.select("#last4weeks").append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform",
                    "translate(" + margin.left + "," + margin.top + ")");


            // format the data

            fourweeksData = JSON.parse(fourweeksData);

            fourweeksData.forEach(function (d) {
                d.amount = +d.amount;
            });

            // Scale the range of the data in the domains
            x.domain([0, d3.max(fourweeksData, function (d) { return d.amount; })]);
            y.domain(fourweeksData.map(function (d) { return d.bread; }));

            // append the rectangles for the bar chart
            svg.selectAll(".bar")
                .data(fourweeksData)
                .enter().append("rect")
                .attr("class", "bar")

                .attr("width", 0)//this is the initial value
                .transition()
                .duration(300)
                .delay(function (d, i) { return i * 50 })
                .attr("width", function (d) { return x(d.amount); })

                .attr("y", function (d) { return y(d.bread); })
                .attr("height", y.bandwidth());

            // add the x Axis
            svg.append("g")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x));

            // add the y Axis
            svg.append("g")
                .call(d3.axisLeft(y));
        };
    };
});