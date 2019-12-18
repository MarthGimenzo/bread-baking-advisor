$(document).ready(function () {

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
        const svg = d3.select('svg');
        svg.style('background-color', 'red');
        const width = +svg.attr('width');
        const height = +svg.attr('height');











    });





})
