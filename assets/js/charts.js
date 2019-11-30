

// Load data from API
let breadData
const baseURL = "https://api.myjson.com/bins/gmmpy";

function getData(cb) {

    var xhr = new XMLHttpRequest();


    xhr.open("GET", baseURL)
    xhr.send();

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {



            breadData = JSON.parse(this.responseText)
            cb()


        }
    };
}



getData(function (data) {



    console.log(breadData);
    console.log(d3);
    const svg = d3.select('svg');
    svg.style('background-color', 'red');
    const width = +svg.attr('width');
    const height = +svg.attr('height');




    






});






