// Load data from API

const baseURL = "https://api.myjson.com/bins/omh2e";

function getData(cb) {

    var xhr = new XMLHttpRequest();


    xhr.open("GET", baseURL)
    xhr.send();

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            
            cb(JSON.parse(this.responseText))
            

        }
    };
}

getData(function(data) {
        
        
        $("#donkermeergranen_tobe_placed").val(data.breadtypes[0].adviceThursday);
    })

