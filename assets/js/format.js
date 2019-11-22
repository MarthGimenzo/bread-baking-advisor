$(document).ready(function () {

let adviceTuesdayDonkermeergranen
let adviceTuesdayZonnevolkoren
let adviceTuesdayWit
let adviceTuesdayTarwe
let adviceTuesdayVolkoren
let adviceTuesdayMais
let adviceTuesdayWitmeerzaden
let adviceTuesdaySpelt
let adviceTuesdayRoggevijgen
let adviceTuesdayRoggerozijn
let adviceTuesdayHaverpompoen         

let adviceWednesdayDonkermeergranen
let adviceWednesdayZonnevolkoren
let adviceWednesdayWit
let adviceWednesdayTarwe
let adviceWednesdayVolkoren
let adviceWednesdayMais
let adviceWednesdayWitmeerzaden
let adviceWednesdaySpelt
let adviceWednesdayRoggevijgen
let adviceWednesdayRoggerozijn
let adviceWednesdayHaverpompoen        

let adviceThursdayDonkermeergranen
let adviceThursdayZonnevolkoren
let adviceThursdayWit
let adviceThursdayTarwe
let adviceThursdayVolkoren
let adviceThursdayMais
let adviceThursdayWitmeerzaden
let adviceThursdaySpelt
let adviceThursdayRoggevijgen
let adviceThursdayRoggerozijn
let adviceThursdayHaverpompoen    

let adviceFridayDonkermeergranen
let adviceFridayZonnevolkoren
let adviceFridayWit
let adviceFridayTarwe
let adviceFridayVolkoren
let adviceFridayMais
let adviceFridayWitmeerzaden
let adviceFridaySpelt
let adviceFridayRoggevijgen
let adviceFridayRoggerozijn
let adviceFridayHaverpompoen

let adviceSaturdayDonkermeergranen
let adviceSaturdayZonnevolkoren
let adviceSaturdayyWit
let adviceSaturdayTarwe
let adviceSaturdayVolkoren
let adviceSaturdayMais
let adviceSaturdayWitmeerzaden
let adviceSaturdaySpelt
let adviceSaturdayRoggevijgen
let adviceSaturdayRoggerozijn
let adviceSaturdayHaverpompoen

let adviceSundayDonkermeergranen
let adviceSundayZonnevolkoren
let adviceSundayWit
let adviceSundayTarwe
let adviceSundayVolkoren
let adviceSundayMais
let adviceSundayWitmeerzaden
let adviceSundaySpelt
let adviceSundayRoggevijgen
let adviceSundayRoggerozijn
let adviceSundayHaverpompoen

    // Load data from API
    
const baseURL = "https://api.myjson.com/bins/18f7bm";

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
        
        adviceTuesdayDonkermeergranen = Math.round((data.breadtypes[0].inputWeek1Tuesday + data.breadtypes[0].inputWeek2Tuesday + data.breadtypes[0].inputWeek3Tuesday + data.breadtypes[0].inputWeek4Tuesday) / 4);
        adviceTuesdayZonnevolkoren = Math.round((data.breadtypes[1].inputWeek1Tuesday + data.breadtypes[1].inputWeek2Tuesday + data.breadtypes[1].inputWeek3Tuesday + data.breadtypes[1].inputWeek4Tuesday) / 4);
        adviceTuesdayWit = Math.round((data.breadtypes[2].inputWeek1Tuesday + data.breadtypes[2].inputWeek2Tuesday + data.breadtypes[2].inputWeek3Tuesday + data.breadtypes[2].inputWeek4Tuesday) / 4);
        adviceTuesdayTarwe = Math.round((data.breadtypes[3].inputWeek1Tuesday + data.breadtypes[3].inputWeek2Tuesday + data.breadtypes[3].inputWeek3Tuesday + data.breadtypes[3].inputWeek4Tuesday) / 4);
        adviceTuesdayVolkoren = Math.round((data.breadtypes[4].inputWeek1Tuesday + data.breadtypes[4].inputWeek2Tuesday + data.breadtypes[4].inputWeek3Tuesday + data.breadtypes[4].inputWeek4Tuesday) / 4);
        adviceTuesdayMais = Math.round((data.breadtypes[5].inputWeek1Tuesday + data.breadtypes[5].inputWeek2Tuesday + data.breadtypes[5].inputWeek3Tuesday + data.breadtypes[5].inputWeek4Tuesday) / 4);
        adviceTuesdayWitmeerzaden = Math.round((data.breadtypes[6].inputWeek1Tuesday + data.breadtypes[6].inputWeek2Tuesday + data.breadtypes[6].inputWeek3Tuesday + data.breadtypes[6].inputWeek4Tuesday) / 4);
        adviceTuesdaySpelt = Math.round((data.breadtypes[7].inputWeek1Tuesday + data.breadtypes[7].inputWeek2Tuesday + data.breadtypes[7].inputWeek3Tuesday + data.breadtypes[7].inputWeek4Tuesday) / 4);
        adviceTuesdayRoggevijgen = Math.round((data.breadtypes[8].inputWeek1Tuesday + data.breadtypes[8].inputWeek2Tuesday + data.breadtypes[8].inputWeek3Tuesday + data.breadtypes[8].inputWeek4Tuesday) / 4);
        adviceTuesdayRoggerozijn = Math.round((data.breadtypes[9].inputWeek1Tuesday + data.breadtypes[9].inputWeek2Tuesday + data.breadtypes[9].inputWeek3Tuesday + data.breadtypes[9].inputWeek4Tuesday) / 4);
        adviceTuesdayHaverpompoen = Math.round((data.breadtypes[10].inputWeek1Tuesday + data.breadtypes[10].inputWeek2Tuesday + data.breadtypes[10].inputWeek3Tuesday + data.breadtypes[10].inputWeek4Tuesday) / 4);

        adviceWednesdayDonkermeergranen = Math.round((data.breadtypes[0].inputWeek1Wednesday + data.breadtypes[0].inputWeek2Wednesday + data.breadtypes[0].inputWeek3Wednesday + data.breadtypes[0].inputWeek4Wednesday) / 4);
        adviceWednesdayZonnevolkoren = Math.round((data.breadtypes[1].inputWeek1Wednesday + data.breadtypes[1].inputWeek2Wednesday + data.breadtypes[1].inputWeek3Wednesday + data.breadtypes[1].inputWeek4Wednesday) / 4);
        adviceWednesdayWit = Math.round((data.breadtypes[2].inputWeek1Wednesday + data.breadtypes[2].inputWeek2Wednesday + data.breadtypes[2].inputWeek3Wednesday + data.breadtypes[2].inputWeek4Wednesday) / 4);
        adviceWednesdayTarwe = Math.round((data.breadtypes[3].inputWeek1Wednesday + data.breadtypes[3].inputWeek2Wednesday + data.breadtypes[3].inputWeek3Wednesday + data.breadtypes[3].inputWeek4Wednesday) / 4);
        adviceWednesdayVolkoren = Math.round((data.breadtypes[4].inputWeek1Wednesday + data.breadtypes[4].inputWeek2Wednesday + data.breadtypes[4].inputWeek3Wednesday + data.breadtypes[4].inputWeek4Wednesday) / 4);
        adviceWednesdayMais = Math.round((data.breadtypes[5].inputWeek1Wednesday + data.breadtypes[5].inputWeek2Wednesday + data.breadtypes[5].inputWeek3Wednesday + data.breadtypes[5].inputWeek4Wednesday) / 4);
        adviceWednesdayWitmeerzaden = Math.round((data.breadtypes[6].inputWeek1Wednesday + data.breadtypes[6].inputWeek2Wednesday + data.breadtypes[6].inputWeek3Wednesday + data.breadtypes[6].inputWeek4Wednesday) / 4);
        adviceWednesdaySpelt = Math.round((data.breadtypes[7].inputWeek1Wednesday + data.breadtypes[7].inputWeek2Wednesday + data.breadtypes[7].inputWeek3Wednesday + data.breadtypes[7].inputWeek4Wednesday) / 4);
        adviceWednesdayRoggevijgen = Math.round((data.breadtypes[8].inputWeek1Wednesday + data.breadtypes[8].inputWeek2Wednesday + data.breadtypes[8].inputWeek3Wednesday + data.breadtypes[8].inputWeek4Wednesday) / 4);
        adviceWednesdayRoggerozijn = Math.round((data.breadtypes[9].inputWeek1Wednesday + data.breadtypes[9].inputWeek2Wednesday + data.breadtypes[9].inputWeek3Wednesday + data.breadtypes[9].inputWeek4Wednesday) / 4);
        adviceWednesdayHaverpompoen = Math.round((data.breadtypes[10].inputWeek1Wednesday + data.breadtypes[10].inputWeek2Wednesday + data.breadtypes[10].inputWeek3Wednesday + data.breadtypes[10].inputWeek4Wednesday) / 4);

        adviceThursdayDonkermeergranen = Math.round((data.breadtypes[0].inputWeek1Thursday + data.breadtypes[0].inputWeek2Thursday + data.breadtypes[0].inputWeek3Thursday + data.breadtypes[0].inputWeek4Thursday) / 4);
        adviceThursdayZonnevolkoren = Math.round((data.breadtypes[1].inputWeek1Thursday + data.breadtypes[1].inputWeek2Thursday + data.breadtypes[1].inputWeek3Thursday + data.breadtypes[1].inputWeek4Thursday) / 4);
        adviceThursdayWit = Math.round((data.breadtypes[2].inputWeek1Thursday + data.breadtypes[2].inputWeek2Thursday + data.breadtypes[2].inputWeek3Thursday + data.breadtypes[2].inputWeek4Thursday) / 4);
        adviceThursdayTarwe = Math.round((data.breadtypes[3].inputWeek1Thursday + data.breadtypes[3].inputWeek2Thursday + data.breadtypes[3].inputWeek3Thursday + data.breadtypes[3].inputWeek4Thursday) / 4);
        adviceThursdayVolkoren = Math.round((data.breadtypes[4].inputWeek1Thursday + data.breadtypes[4].inputWeek2Thursday + data.breadtypes[4].inputWeek3Thursday + data.breadtypes[4].inputWeek4Thursday) / 4);
        adviceThursdayMais = Math.round((data.breadtypes[5].inputWeek1Thursday + data.breadtypes[5].inputWeek2Thursday + data.breadtypes[5].inputWeek3Thursday + data.breadtypes[5].inputWeek4Thursday) / 4);
        adviceThursdayWitmeerzaden = Math.round((data.breadtypes[6].inputWeek1Thursday + data.breadtypes[6].inputWeek2Thursday + data.breadtypes[6].inputWeek3Thursday + data.breadtypes[6].inputWeek4Thursday) / 4);
        adviceThursdaySpelt = Math.round((data.breadtypes[7].inputWeek1Thursday + data.breadtypes[7].inputWeek2Thursday + data.breadtypes[7].inputWeek3Thursday + data.breadtypes[7].inputWeek4Thursday) / 4);
        adviceThursdayRoggevijgen = Math.round((data.breadtypes[8].inputWeek1Thursday + data.breadtypes[8].inputWeek2Thursday + data.breadtypes[8].inputWeek3Thursday + data.breadtypes[8].inputWeek4Thursday) / 4);
        adviceThursdayRoggerozijn = Math.round((data.breadtypes[9].inputWeek1Thursday + data.breadtypes[9].inputWeek2Thursday + data.breadtypes[9].inputWeek3Thursday + data.breadtypes[9].inputWeek4Thursday) / 4);
        adviceThursdayHaverpompoen = Math.round((data.breadtypes[10].inputWeek1Thursday + data.breadtypes[10].inputWeek2Thursday + data.breadtypes[10].inputWeek3Thursday + data.breadtypes[10].inputWeek4Thursday) / 4);

        adviceFridayDonkermeergranen = Math.round((data.breadtypes[0].inputWeek1Friday + data.breadtypes[0].inputWeek2Friday + data.breadtypes[0].inputWeek3Friday + data.breadtypes[0].inputWeek4Friday) / 4);
        adviceFridayZonnevolkoren = Math.round((data.breadtypes[1].inputWeek1Friday + data.breadtypes[1].inputWeek2Friday + data.breadtypes[1].inputWeek3Friday + data.breadtypes[1].inputWeek4Friday) / 4);
        adviceFridayWit = Math.round((data.breadtypes[2].inputWeek1Friday + data.breadtypes[2].inputWeek2Friday + data.breadtypes[2].inputWeek3Friday + data.breadtypes[2].inputWeek4Friday) / 4);
        adviceFridayTarwe = Math.round((data.breadtypes[3].inputWeek1Friday + data.breadtypes[3].inputWeek2Friday + data.breadtypes[3].inputWeek3Friday + data.breadtypes[3].inputWeek4Friday) / 4);
        adviceFridayVolkoren = Math.round((data.breadtypes[4].inputWeek1Friday + data.breadtypes[4].inputWeek2Friday + data.breadtypes[4].inputWeek3Friday + data.breadtypes[4].inputWeek4Friday) / 4);
        adviceFridayMais = Math.round((data.breadtypes[5].inputWeek1Friday + data.breadtypes[5].inputWeek2Friday + data.breadtypes[5].inputWeek3Friday + data.breadtypes[5].inputWeek4Friday) / 4);
        adviceFridayWitmeerzaden = Math.round((data.breadtypes[6].inputWeek1Friday + data.breadtypes[6].inputWeek2Friday + data.breadtypes[6].inputWeek3Friday + data.breadtypes[6].inputWeek4Friday) / 4);
        adviceFridaySpelt = Math.round((data.breadtypes[7].inputWeek1Friday + data.breadtypes[7].inputWeek2Friday + data.breadtypes[7].inputWeek3Friday + data.breadtypes[7].inputWeek4Friday) / 4);
        adviceFridayRoggevijgen = Math.round((data.breadtypes[8].inputWeek1Friday + data.breadtypes[8].inputWeek2Friday + data.breadtypes[8].inputWeek3Friday + data.breadtypes[8].inputWeek4Friday) / 4);
        adviceFridayRoggerozijn = Math.round((data.breadtypes[9].inputWeek1Friday + data.breadtypes[9].inputWeek2Friday + data.breadtypes[9].inputWeek3Friday + data.breadtypes[9].inputWeek4Friday) / 4);
        adviceFridayHaverpompoen = Math.round((data.breadtypes[10].inputWeek1Friday + data.breadtypes[10].inputWeek2Friday + data.breadtypes[10].inputWeek3Friday + data.breadtypes[10].inputWeek4Friday) / 4);

        adviceSaturdayDonkermeergranen = Math.round((data.breadtypes[0].inputWeek1Saturday + data.breadtypes[0].inputWeek2Saturday + data.breadtypes[0].inputWeek3Saturday + data.breadtypes[0].inputWeek4Saturday) / 4);
        adviceSaturdayZonnevolkoren = Math.round((data.breadtypes[1].inputWeek1Saturday + data.breadtypes[1].inputWeek2Saturday + data.breadtypes[1].inputWeek3Saturday + data.breadtypes[1].inputWeek4Saturday) / 4);
        adviceSaturdayWit = Math.round((data.breadtypes[2].inputWeek1Saturday + data.breadtypes[2].inputWeek2Saturday + data.breadtypes[2].inputWeek3Saturday + data.breadtypes[2].inputWeek4Saturday) / 4);
        adviceSaturdayTarwe = Math.round((data.breadtypes[3].inputWeek1Saturday + data.breadtypes[3].inputWeek2Saturday + data.breadtypes[3].inputWeek3Saturday + data.breadtypes[3].inputWeek4Saturday) / 4);
        adviceSaturdayVolkoren = Math.round((data.breadtypes[4].inputWeek1Saturday + data.breadtypes[4].inputWeek2Saturday + data.breadtypes[4].inputWeek3Saturday + data.breadtypes[4].inputWeek4Saturday) / 4);
        adviceSaturdayMais = Math.round((data.breadtypes[5].inputWeek1Saturday + data.breadtypes[5].inputWeek2Saturday + data.breadtypes[5].inputWeek3Saturday + data.breadtypes[5].inputWeek4Saturday) / 4);
        adviceSaturdayWitmeerzaden = Math.round((data.breadtypes[6].inputWeek1Saturday + data.breadtypes[6].inputWeek2Saturday + data.breadtypes[6].inputWeek3Saturday + data.breadtypes[6].inputWeek4Saturday) / 4);
        adviceSaturdaySpelt = Math.round((data.breadtypes[7].inputWeek1Saturday + data.breadtypes[7].inputWeek2Saturday + data.breadtypes[7].inputWeek3Saturday + data.breadtypes[7].inputWeek4Saturday) / 4);
        adviceSaturdayRoggevijgen = Math.round((data.breadtypes[8].inputWeek1Saturday + data.breadtypes[8].inputWeek2Saturday + data.breadtypes[8].inputWeek3Saturday + data.breadtypes[8].inputWeek4Saturday) / 4);
        adviceSaturdayRoggerozijn = Math.round((data.breadtypes[9].inputWeek1Saturday + data.breadtypes[9].inputWeek2Saturday + data.breadtypes[9].inputWeek3Saturday + data.breadtypes[9].inputWeek4Saturday) / 4);
        adviceSaturdayHaverpompoen = Math.round((data.breadtypes[10].inputWeek1Saturday + data.breadtypes[10].inputWeek2Saturday + data.breadtypes[10].inputWeek3Saturday + data.breadtypes[10].inputWeek4Saturday) / 4);
        
        adviceSundayDonkermeergranen = Math.round((data.breadtypes[0].inputWeek1Sunday + data.breadtypes[0].inputWeek2Sunday + data.breadtypes[0].inputWeek3Sunday + data.breadtypes[0].inputWeek4Sunday) / 4);
        adviceSundayZonnevolkoren = Math.round((data.breadtypes[1].inputWeek1Sunday + data.breadtypes[1].inputWeek2Sunday + data.breadtypes[1].inputWeek3Sunday + data.breadtypes[1].inputWeek4Sunday) / 4);
        adviceSundayWit = Math.round((data.breadtypes[2].inputWeek1Sunday + data.breadtypes[2].inputWeek2Sunday + data.breadtypes[2].inputWeek3Sunday + data.breadtypes[2].inputWeek4Sunday) / 4);
        adviceSundayTarwe = Math.round((data.breadtypes[3].inputWeek1Sunday + data.breadtypes[3].inputWeek2Sunday + data.breadtypes[3].inputWeek3Sunday + data.breadtypes[3].inputWeek4Sunday) / 4);
        adviceSundayVolkoren = Math.round((data.breadtypes[4].inputWeek1Sunday + data.breadtypes[4].inputWeek2Sunday + data.breadtypes[4].inputWeek3Sunday + data.breadtypes[4].inputWeek4Sunday) / 4);
        adviceSundayMais = Math.round((data.breadtypes[5].inputWeek1Sunday + data.breadtypes[5].inputWeek2Sunday + data.breadtypes[5].inputWeek3Sunday + data.breadtypes[5].inputWeek4Sunday) / 4);
        adviceSundayWitmeerzaden = Math.round((data.breadtypes[6].inputWeek1Sunday + data.breadtypes[6].inputWeek2Sunday + data.breadtypes[6].inputWeek3Sunday + data.breadtypes[6].inputWeek4Sunday) / 4);
        adviceSundaySpelt = Math.round((data.breadtypes[7].inputWeek1Sunday + data.breadtypes[7].inputWeek2Sunday + data.breadtypes[7].inputWeek3Sunday + data.breadtypes[7].inputWeek4Sunday) / 4);
        adviceSundayRoggevijgen = Math.round((data.breadtypes[8].inputWeek1Sunday + data.breadtypes[8].inputWeek2Sunday + data.breadtypes[8].inputWeek3Sunday + data.breadtypes[8].inputWeek4Sunday) / 4);
        adviceSundayRoggerozijn = Math.round((data.breadtypes[9].inputWeek1Sunday + data.breadtypes[9].inputWeek2Sunday + data.breadtypes[9].inputWeek3Sunday + data.breadtypes[9].inputWeek4Sunday) / 4);
        adviceSundayHaverpompoen = Math.round((data.breadtypes[10].inputWeek1Sunday + data.breadtypes[10].inputWeek2Sunday + data.breadtypes[10].inputWeek3Sunday + data.breadtypes[10].inputWeek4Sunday) / 4);

        changeActiveDay();
    })







    let activeDay = 0;
    determineDay();
    

    // Determine day of the week

    function determineDay() {

        var d = new Date();
        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        var today = weekday[d.getDay()];


        // Change active Dropdown Menu Item to current day of the week

        if (today == "Tuesday") {
            $("#tuesday").addClass("active");
            $("#wednesday, #thursday, #friday, #saturday, #sunday").removeClass("active");
            activeDay = 2;
            $("#dropdownMenuButton").text("Tuesday")
        }
        if (today == "Wednesday") {
            $("#wednesday").addClass("active");
            $("#tuesday, #thursday, #friday, #saturday, #sunday").removeClass("active");
            activeDay = 3;
            $("#dropdownMenuButton").text("Wednesday")
        }
        if (today == "Thursday") {
            $("#thursday").addClass("active");
            $("#tuesday, #wednesday, #friday, #saturday, #sunday").removeClass("active");
            activeDay = 4;
            $("#dropdownMenuButton").text("Thursday")
        }
        if (today == "Friday") {
            $("#friday").addClass("active");
            $("#tuesday, #wednesday, #thursday, #saturday, #sunday").removeClass("active");
            activeDay = 5;
            $("#dropdownMenuButton").text("Friday")
        }
        if (today == "Saturday") {
            $("#saturday").addClass("active");
            $("#tuesday, #wednesday, #thursday, #friday, #sunday").removeClass("active");
            activeDay = 6;
            $("#dropdownMenuButton").text("Saturday")
        }
        if (today == "Sunday") {
            $("#sunday").addClass("active");
            $("#tuesday, #wednesday, #thursday, #friday, #saturday").removeClass("active");
            activeDay = 0;
            $("#dropdownMenuButton").text("Sunday")
        }
        if (today == "Monday") {
            $("#tuesday, #wednesday, #thursday, #friday, #saturday, #sunday").removeClass("active");
            activeDay = 1;
            $("#dropdownMenuButton").text("Select a day")
        }

        // Change active Dropdown Menu Item to selected day

        $("#tuesday").on("click", function () {
            $("#tuesday").addClass("active");
            $("#wednesday, #thursday, #friday, #saturday, #sunday").removeClass("active");
            activeDay = 2;
            $("#dropdownMenuButton").text("Tuesday")
            changeActiveDay()



        })
        $("#wednesday").on("click", function () {
            $("#wednesday").addClass("active");
            $("#tuesday, #thursday, #friday, #saturday, #sunday").removeClass("active");
            activeDay = 3;
            $("#dropdownMenuButton").text("Wednesday")
            changeActiveDay()

        })
        $("#thursday").on("click", function () {
            $("#thursday").addClass("active");
            $("#tuesday, #wednesday, #friday, #saturday, #sunday").removeClass("active");
            activeDay = 4;
            $("#dropdownMenuButton").text("Thursday")
            changeActiveDay()
        })
        $("#friday").on("click", function () {
            $("#friday").addClass("active");
            $("#tuesday, #wednesday, #thursday, #saturday, #sunday").removeClass("active");
            activeDay = 5;
            $("#dropdownMenuButton").text("Friday")
            changeActiveDay()
        })
        $("#saturday").on("click", function () {
            $("#saturday").addClass("active");
            $("#tuesday, #wednesday, #thursday, #friday, #sunday").removeClass("active");
            activeDay = 6;
            $("#dropdownMenuButton").text("Saturday")
            changeActiveDay()
        })
        $("#sunday").on("click", function () {
            $("#sunday").addClass("active");
            $("#tuesday, #wednesday, #thursday, #friday, #saturday").removeClass("active");
            activeDay = 0;
            $("#dropdownMenuButton").text("Sunday")
            changeActiveDay()
        })
    }



    // Show current bread advice
    function changeActiveDay() {


        if (activeDay == 2) {

            $("#donkermeergranen_tobe_placed").val(adviceThursdayDonkermeergranen);
            $("#zonnevolkoren_tobe_placed").val(adviceThursdayZonnevolkoren);
            $("#wit_tobe_placed").val(adviceThursdayWit);
            $("#tarwe_tobe_placed").val(adviceThursdayTarwe);
            $("#volkoren_tobe_placed").val(adviceThursdayVolkoren);
            $("#mais_tobe_placed").val(adviceThursdayMais);
            $("#witmeerzaden_tobe_placed").val(adviceThursdayWitmeerzaden);
            $("#spelt_tobe_placed").val(adviceThursdaySpelt);
            $("#roggevijgen_tobe_placed").val(adviceThursdayRoggevijgen);
            $("#roggerozijn_tobe_placed").val(adviceThursdayRoggerozijn);
            $("#haverpompoen_tobe_placed").val(adviceThursdayHaverpompoen);

            $("#donkermeergranen_tobe_baked").val(adviceTuesdayDonkermeergranen);
            $("#zonnevolkoren_tobe_baked").val(adviceTuesdayZonnevolkoren);
            $("#wit_tobe_baked").val(adviceTuesdayWit);
            $("#tarwe_tobe_baked").val(adviceTuesdayTarwe);
            $("#volkoren_tobe_baked").val(adviceTuesdayVolkoren);
            $("#mais_tobe_baked").val(adviceTuesdayMais);
            $("#witmeerzaden_tobe_baked").val(adviceTuesdayWitmeerzaden);
            $("#spelt_tobe_baked").val(adviceTuesdaySpelt);
            $("#roggevijgen_tobe_baked").val(adviceTuesdayRoggevijgen);
            $("#roggerozijn_tobe_baked").val(adviceTuesdayRoggerozijn);
            $("#haverpompoen_tobe_baked").val(adviceTuesdayHaverpompoen);

        }
        if (activeDay == 3) {

            $("#donkermeergranen_tobe_placed").val(adviceFridayDonkermeergranen);
            $("#zonnevolkoren_tobe_placed").val(adviceFridayZonnevolkoren);
            $("#wit_tobe_placed").val(adviceFridayWit);
            $("#tarwe_tobe_placed").val(adviceFridayTarwe);
            $("#volkoren_tobe_placed").val(adviceFridayVolkoren);
            $("#mais_tobe_placed").val(adviceFridayMais);
            $("#witmeerzaden_tobe_placed").val(adviceFridayWitmeerzaden);
            $("#spelt_tobe_placed").val(adviceFridaySpelt);
            $("#roggevijgen_tobe_placed").val(adviceFridayRoggevijgen);
            $("#roggerozijn_tobe_placed").val(adviceFridayRoggerozijn);
            $("#haverpompoen_tobe_placed").val(adviceFridayHaverpompoen);

            $("#donkermeergranen_tobe_baked").val(adviceWednesdayDonkermeergranen);
            $("#zonnevolkoren_tobe_baked").val(adviceWednesdayZonnevolkoren);
            $("#wit_tobe_baked").val(adviceWednesdayWit);
            $("#tarwe_tobe_baked").val(adviceWednesdayTarwe);
            $("#volkoren_tobe_baked").val(adviceWednesdayVolkoren);
            $("#mais_tobe_baked").val(adviceWednesdayMais);
            $("#witmeerzaden_tobe_baked").val(adviceWednesdayWitmeerzaden);
            $("#spelt_tobe_baked").val(adviceWednesdaySpelt);
            $("#roggevijgen_tobe_baked").val(adviceWednesdayRoggevijgen);
            $("#roggerozijn_tobe_baked").val(adviceWednesdayRoggerozijn);
            $("#haverpompoen_tobe_baked").val(adviceWednesdayHaverpompoen);

        }
        if (activeDay == 4) {

            $("#donkermeergranen_tobe_placed").val(adviceSaturdayDonkermeergranen);
            $("#zonnevolkoren_tobe_placed").val(adviceSaturdayZonnevolkoren);
            $("#wit_tobe_placed").val(adviceSaturdayWit);
            $("#tarwe_tobe_placed").val(adviceSaturdayTarwe);
            $("#volkoren_tobe_placed").val(adviceSaturdayVolkoren);
            $("#mais_tobe_placed").val(adviceSaturdayMais);
            $("#witmeerzaden_tobe_placed").val(adviceSaturdayWitmeerzaden);
            $("#spelt_tobe_placed").val(adviceSaturdaySpelt);
            $("#roggevijgen_tobe_placed").val(adviceSaturdayRoggevijgen);
            $("#roggerozijn_tobe_placed").val(adviceSaturdayRoggerozijn);
            $("#haverpompoen_tobe_placed").val(adviceSaturdayHaverpompoen);

            $("#donkermeergranen_tobe_baked").val(adviceThursdayDonkermeergranen);
            $("#zonnevolkoren_tobe_baked").val(adviceThursdayZonnevolkoren);
            $("#wit_tobe_baked").val(adviceThursdayWit);
            $("#tarwe_tobe_baked").val(adviceThursdayTarwe);
            $("#volkoren_tobe_baked").val(adviceThursdayVolkoren);
            $("#mais_tobe_baked").val(adviceThursdayMais);
            $("#witmeerzaden_tobe_baked").val(adviceThursdayWitmeerzaden);
            $("#spelt_tobe_baked").val(adviceThursdaySpelt);
            $("#roggevijgen_tobe_baked").val(adviceThursdayRoggevijgen);
            $("#roggerozijn_tobe_baked").val(adviceThursdayRoggerozijn);
            $("#haverpompoen_tobe_baked").val(adviceThursdayHaverpompoen);

        }
        if (activeDay == 5) {

            $("#donkermeergranen_tobe_placed").val(adviceSundayDonkermeergranen);
            $("#zonnevolkoren_tobe_placed").val(adviceSundayZonnevolkoren);
            $("#wit_tobe_placed").val(adviceSundayWit);
            $("#tarwe_tobe_placed").val(adviceSundayTarwe);
            $("#volkoren_tobe_placed").val(adviceSundayVolkoren);
            $("#mais_tobe_placed").val(adviceSundayMais);
            $("#witmeerzaden_tobe_placed").val(adviceSundayWitmeerzaden);
            $("#spelt_tobe_placed").val(adviceSundaySpelt);
            $("#roggevijgen_tobe_placed").val(adviceSundayRoggevijgen);
            $("#roggerozijn_tobe_placed").val(adviceSundayRoggerozijn);
            $("#haverpompoen_tobe_placed").val(adviceSundayHaverpompoen);

            $("#donkermeergranen_tobe_baked").val(adviceFridayDonkermeergranen);
            $("#zonnevolkoren_tobe_baked").val(adviceFridayZonnevolkoren);
            $("#wit_tobe_baked").val(adviceFridayWit);
            $("#tarwe_tobe_baked").val(adviceFridayTarwe);
            $("#volkoren_tobe_baked").val(adviceFridayVolkoren);
            $("#mais_tobe_baked").val(adviceFridayMais);
            $("#witmeerzaden_tobe_baked").val(adviceFridayWitmeerzaden);
            $("#spelt_tobe_baked").val(adviceFridaySpelt);
            $("#roggevijgen_tobe_baked").val(adviceFridayRoggevijgen);
            $("#roggerozijn_tobe_baked").val(adviceFridayRoggerozijn);
            $("#haverpompoen_tobe_baked").val(adviceFridayHaverpompoen);

        }
        if (activeDay == 6) {

            $("#donkermeergranen_tobe_placed").val(adviceTuesdayDonkermeergranen);
            $("#zonnevolkoren_tobe_placed").val(adviceTuesdayZonnevolkoren);
            $("#wit_tobe_placed").val(adviceTuesdayWit);
            $("#tarwe_tobe_placed").val(adviceTuesdayTarwe);
            $("#volkoren_tobe_placed").val(adviceTuesdayVolkoren);
            $("#mais_tobe_placed").val(adviceTuesdayMais);
            $("#witmeerzaden_tobe_placed").val(adviceTuesdayWitmeerzaden);
            $("#spelt_tobe_placed").val(adviceTuesdaySpelt);
            $("#roggevijgen_tobe_placed").val(adviceTuesdayRoggevijgen);
            $("#roggerozijn_tobe_placed").val(adviceTuesdayRoggerozijn);
            $("#haverpompoen_tobe_placed").val(adviceTuesdayHaverpompoen);

            $("#donkermeergranen_tobe_baked").val(adviceSaturdayDonkermeergranen);
            $("#zonnevolkoren_tobe_baked").val(adviceSaturdayZonnevolkoren);
            $("#wit_tobe_baked").val(adviceSaturdayWit);
            $("#tarwe_tobe_baked").val(adviceSaturdayTarwe);
            $("#volkoren_tobe_baked").val(adviceSaturdayVolkoren);
            $("#mais_tobe_baked").val(adviceSaturdayMais);
            $("#witmeerzaden_tobe_baked").val(adviceSaturdayWitmeerzaden);
            $("#spelt_tobe_baked").val(adviceSaturdaySpelt);
            $("#roggevijgen_tobe_baked").val(adviceSaturdayRoggevijgen);
            $("#roggerozijn_tobe_baked").val(adviceSaturdayRoggerozijn);
            $("#haverpompoen_tobe_baked").val(adviceSaturdayHaverpompoen);

        }
        if (activeDay == 0) {

            $("#donkermeergranen_tobe_placed").val(adviceWednesdayDonkermeergranen);
            $("#zonnevolkoren_tobe_placed").val(adviceWednesdayZonnevolkoren);
            $("#wit_tobe_placed").val(adviceWednesdayWit);
            $("#tarwe_tobe_placed").val(adviceWednesdayTarwe);
            $("#volkoren_tobe_placed").val(adviceWednesdayVolkoren);
            $("#mais_tobe_placed").val(adviceWednesdayMais);
            $("#witmeerzaden_tobe_placed").val(adviceWednesdayWitmeerzaden);
            $("#spelt_tobe_placed").val(adviceWednesdaySpelt);
            $("#roggevijgen_tobe_placed").val(adviceWednesdayRoggevijgen);
            $("#roggerozijn_tobe_placed").val(adviceWednesdayRoggerozijn);
            $("#haverpompoen_tobe_placed").val(adviceWednesdayHaverpompoen);

            $("#donkermeergranen_tobe_baked").val(adviceSundayDonkermeergranen);
            $("#zonnevolkoren_tobe_baked").val(adviceSundayZonnevolkoren);
            $("#wit_tobe_baked").val(adviceSundayWit);
            $("#tarwe_tobe_baked").val(adviceSundayTarwe);
            $("#volkoren_tobe_baked").val(adviceSundayVolkoren);
            $("#mais_tobe_baked").val(adviceSundayMais);
            $("#witmeerzaden_tobe_baked").val(adviceSundayWitmeerzaden);
            $("#spelt_tobe_baked").val(adviceSundaySpelt);
            $("#roggevijgen_tobe_baked").val(adviceSundayRoggevijgen);
            $("#roggerozijn_tobe_baked").val(adviceSundayRoggerozijn);
            $("#haverpompoen_tobe_baked").val(adviceSundayHaverpompoen);

        }

    }

    
})
