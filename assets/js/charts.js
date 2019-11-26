// Load data from API
let breadData
const baseURL = "https://api.myjson.com/bins/18f7bm";

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



    console.log(breadData)







json(breadData).then(data => {
    console.log(data);
})
    


    



});






