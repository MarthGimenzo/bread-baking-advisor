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

    const baseURL = "https://api.myjson.com/bins/uobcm";

    function getData(cb) {

        var xhr = new XMLHttpRequest();


        xhr.open("GET", baseURL)
        xhr.send();

        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {

                cb(JSON.parse(this.responseText))
                newData = JSON.parse(this.responseText)

            }
        };
    }

    getData(function (data) {

        adviceTuesdayDonkermeergranen = Math.round((data.breadtypes[0].adviceWeek1Tuesday + data.breadtypes[0].adviceWeek2Tuesday + data.breadtypes[0].adviceWeek3Tuesday + data.breadtypes[0].adviceWeek4Tuesday) / 4);
        adviceTuesdayZonnevolkoren = Math.round((data.breadtypes[1].adviceWeek1Tuesday + data.breadtypes[1].adviceWeek2Tuesday + data.breadtypes[1].adviceWeek3Tuesday + data.breadtypes[1].adviceWeek4Tuesday) / 4);
        adviceTuesdayWit = Math.round((data.breadtypes[2].adviceWeek1Tuesday + data.breadtypes[2].adviceWeek2Tuesday + data.breadtypes[2].adviceWeek3Tuesday + data.breadtypes[2].adviceWeek4Tuesday) / 4);
        adviceTuesdayTarwe = Math.round((data.breadtypes[3].adviceWeek1Tuesday + data.breadtypes[3].adviceWeek2Tuesday + data.breadtypes[3].adviceWeek3Tuesday + data.breadtypes[3].adviceWeek4Tuesday) / 4);
        adviceTuesdayVolkoren = Math.round((data.breadtypes[4].adviceWeek1Tuesday + data.breadtypes[4].adviceWeek2Tuesday + data.breadtypes[4].adviceWeek3Tuesday + data.breadtypes[4].adviceWeek4Tuesday) / 4);
        adviceTuesdayMais = Math.round((data.breadtypes[5].adviceWeek1Tuesday + data.breadtypes[5].adviceWeek2Tuesday + data.breadtypes[5].adviceWeek3Tuesday + data.breadtypes[5].adviceWeek4Tuesday) / 4);
        adviceTuesdayWitmeerzaden = Math.round((data.breadtypes[6].adviceWeek1Tuesday + data.breadtypes[6].adviceWeek2Tuesday + data.breadtypes[6].adviceWeek3Tuesday + data.breadtypes[6].adviceWeek4Tuesday) / 4);
        adviceTuesdaySpelt = Math.round((data.breadtypes[7].adviceWeek1Tuesday + data.breadtypes[7].adviceWeek2Tuesday + data.breadtypes[7].adviceWeek3Tuesday + data.breadtypes[7].adviceWeek4Tuesday) / 4);
        adviceTuesdayRoggevijgen = Math.round((data.breadtypes[8].adviceWeek1Tuesday + data.breadtypes[8].adviceWeek2Tuesday + data.breadtypes[8].adviceWeek3Tuesday + data.breadtypes[8].adviceWeek4Tuesday) / 4);
        adviceTuesdayRoggerozijn = Math.round((data.breadtypes[9].adviceWeek1Tuesday + data.breadtypes[9].adviceWeek2Tuesday + data.breadtypes[9].adviceWeek3Tuesday + data.breadtypes[9].adviceWeek4Tuesday) / 4);
        adviceTuesdayHaverpompoen = Math.round((data.breadtypes[10].adviceWeek1Tuesday + data.breadtypes[10].adviceWeek2Tuesday + data.breadtypes[10].adviceWeek3Tuesday + data.breadtypes[10].adviceWeek4Tuesday) / 4);

        adviceWednesdayDonkermeergranen = Math.round((data.breadtypes[0].adviceWeek1Wednesday + data.breadtypes[0].adviceWeek2Wednesday + data.breadtypes[0].adviceWeek3Wednesday + data.breadtypes[0].adviceWeek4Wednesday) / 4);
        adviceWednesdayZonnevolkoren = Math.round((data.breadtypes[1].adviceWeek1Wednesday + data.breadtypes[1].adviceWeek2Wednesday + data.breadtypes[1].adviceWeek3Wednesday + data.breadtypes[1].adviceWeek4Wednesday) / 4);
        adviceWednesdayWit = Math.round((data.breadtypes[2].adviceWeek1Wednesday + data.breadtypes[2].adviceWeek2Wednesday + data.breadtypes[2].adviceWeek3Wednesday + data.breadtypes[2].adviceWeek4Wednesday) / 4);
        adviceWednesdayTarwe = Math.round((data.breadtypes[3].adviceWeek1Wednesday + data.breadtypes[3].adviceWeek2Wednesday + data.breadtypes[3].adviceWeek3Wednesday + data.breadtypes[3].adviceWeek4Wednesday) / 4);
        adviceWednesdayVolkoren = Math.round((data.breadtypes[4].adviceWeek1Wednesday + data.breadtypes[4].adviceWeek2Wednesday + data.breadtypes[4].adviceWeek3Wednesday + data.breadtypes[4].adviceWeek4Wednesday) / 4);
        adviceWednesdayMais = Math.round((data.breadtypes[5].adviceWeek1Wednesday + data.breadtypes[5].adviceWeek2Wednesday + data.breadtypes[5].adviceWeek3Wednesday + data.breadtypes[5].adviceWeek4Wednesday) / 4);
        adviceWednesdayWitmeerzaden = Math.round((data.breadtypes[6].adviceWeek1Wednesday + data.breadtypes[6].adviceWeek2Wednesday + data.breadtypes[6].adviceWeek3Wednesday + data.breadtypes[6].adviceWeek4Wednesday) / 4);
        adviceWednesdaySpelt = Math.round((data.breadtypes[7].adviceWeek1Wednesday + data.breadtypes[7].adviceWeek2Wednesday + data.breadtypes[7].adviceWeek3Wednesday + data.breadtypes[7].adviceWeek4Wednesday) / 4);
        adviceWednesdayRoggevijgen = Math.round((data.breadtypes[8].adviceWeek1Wednesday + data.breadtypes[8].adviceWeek2Wednesday + data.breadtypes[8].adviceWeek3Wednesday + data.breadtypes[8].adviceWeek4Wednesday) / 4);
        adviceWednesdayRoggerozijn = Math.round((data.breadtypes[9].adviceWeek1Wednesday + data.breadtypes[9].adviceWeek2Wednesday + data.breadtypes[9].adviceWeek3Wednesday + data.breadtypes[9].adviceWeek4Wednesday) / 4);
        adviceWednesdayHaverpompoen = Math.round((data.breadtypes[10].adviceWeek1Wednesday + data.breadtypes[10].adviceWeek2Wednesday + data.breadtypes[10].adviceWeek3Wednesday + data.breadtypes[10].adviceWeek4Wednesday) / 4);

        adviceThursdayDonkermeergranen = Math.round((data.breadtypes[0].adviceWeek1Thursday + data.breadtypes[0].adviceWeek2Thursday + data.breadtypes[0].adviceWeek3Thursday + data.breadtypes[0].adviceWeek4Thursday) / 4);
        adviceThursdayZonnevolkoren = Math.round((data.breadtypes[1].adviceWeek1Thursday + data.breadtypes[1].adviceWeek2Thursday + data.breadtypes[1].adviceWeek3Thursday + data.breadtypes[1].adviceWeek4Thursday) / 4);
        adviceThursdayWit = Math.round((data.breadtypes[2].adviceWeek1Thursday + data.breadtypes[2].adviceWeek2Thursday + data.breadtypes[2].adviceWeek3Thursday + data.breadtypes[2].adviceWeek4Thursday) / 4);
        adviceThursdayTarwe = Math.round((data.breadtypes[3].adviceWeek1Thursday + data.breadtypes[3].adviceWeek2Thursday + data.breadtypes[3].adviceWeek3Thursday + data.breadtypes[3].adviceWeek4Thursday) / 4);
        adviceThursdayVolkoren = Math.round((data.breadtypes[4].adviceWeek1Thursday + data.breadtypes[4].adviceWeek2Thursday + data.breadtypes[4].adviceWeek3Thursday + data.breadtypes[4].adviceWeek4Thursday) / 4);
        adviceThursdayMais = Math.round((data.breadtypes[5].adviceWeek1Thursday + data.breadtypes[5].adviceWeek2Thursday + data.breadtypes[5].adviceWeek3Thursday + data.breadtypes[5].adviceWeek4Thursday) / 4);
        adviceThursdayWitmeerzaden = Math.round((data.breadtypes[6].adviceWeek1Thursday + data.breadtypes[6].adviceWeek2Thursday + data.breadtypes[6].adviceWeek3Thursday + data.breadtypes[6].adviceWeek4Thursday) / 4);
        adviceThursdaySpelt = Math.round((data.breadtypes[7].adviceWeek1Thursday + data.breadtypes[7].adviceWeek2Thursday + data.breadtypes[7].adviceWeek3Thursday + data.breadtypes[7].adviceWeek4Thursday) / 4);
        adviceThursdayRoggevijgen = Math.round((data.breadtypes[8].adviceWeek1Thursday + data.breadtypes[8].adviceWeek2Thursday + data.breadtypes[8].adviceWeek3Thursday + data.breadtypes[8].adviceWeek4Thursday) / 4);
        adviceThursdayRoggerozijn = Math.round((data.breadtypes[9].adviceWeek1Thursday + data.breadtypes[9].adviceWeek2Thursday + data.breadtypes[9].adviceWeek3Thursday + data.breadtypes[9].adviceWeek4Thursday) / 4);
        adviceThursdayHaverpompoen = Math.round((data.breadtypes[10].adviceWeek1Thursday + data.breadtypes[10].adviceWeek2Thursday + data.breadtypes[10].adviceWeek3Thursday + data.breadtypes[10].adviceWeek4Thursday) / 4);

        adviceFridayDonkermeergranen = Math.round((data.breadtypes[0].adviceWeek1Friday + data.breadtypes[0].adviceWeek2Friday + data.breadtypes[0].adviceWeek3Friday + data.breadtypes[0].adviceWeek4Friday) / 4);
        adviceFridayZonnevolkoren = Math.round((data.breadtypes[1].adviceWeek1Friday + data.breadtypes[1].adviceWeek2Friday + data.breadtypes[1].adviceWeek3Friday + data.breadtypes[1].adviceWeek4Friday) / 4);
        adviceFridayWit = Math.round((data.breadtypes[2].adviceWeek1Friday + data.breadtypes[2].adviceWeek2Friday + data.breadtypes[2].adviceWeek3Friday + data.breadtypes[2].adviceWeek4Friday) / 4);
        adviceFridayTarwe = Math.round((data.breadtypes[3].adviceWeek1Friday + data.breadtypes[3].adviceWeek2Friday + data.breadtypes[3].adviceWeek3Friday + data.breadtypes[3].adviceWeek4Friday) / 4);
        adviceFridayVolkoren = Math.round((data.breadtypes[4].adviceWeek1Friday + data.breadtypes[4].adviceWeek2Friday + data.breadtypes[4].adviceWeek3Friday + data.breadtypes[4].adviceWeek4Friday) / 4);
        adviceFridayMais = Math.round((data.breadtypes[5].adviceWeek1Friday + data.breadtypes[5].adviceWeek2Friday + data.breadtypes[5].adviceWeek3Friday + data.breadtypes[5].adviceWeek4Friday) / 4);
        adviceFridayWitmeerzaden = Math.round((data.breadtypes[6].adviceWeek1Friday + data.breadtypes[6].adviceWeek2Friday + data.breadtypes[6].adviceWeek3Friday + data.breadtypes[6].adviceWeek4Friday) / 4);
        adviceFridaySpelt = Math.round((data.breadtypes[7].adviceWeek1Friday + data.breadtypes[7].adviceWeek2Friday + data.breadtypes[7].adviceWeek3Friday + data.breadtypes[7].adviceWeek4Friday) / 4);
        adviceFridayRoggevijgen = Math.round((data.breadtypes[8].adviceWeek1Friday + data.breadtypes[8].adviceWeek2Friday + data.breadtypes[8].adviceWeek3Friday + data.breadtypes[8].adviceWeek4Friday) / 4);
        adviceFridayRoggerozijn = Math.round((data.breadtypes[9].adviceWeek1Friday + data.breadtypes[9].adviceWeek2Friday + data.breadtypes[9].adviceWeek3Friday + data.breadtypes[9].adviceWeek4Friday) / 4);
        adviceFridayHaverpompoen = Math.round((data.breadtypes[10].adviceWeek1Friday + data.breadtypes[10].adviceWeek2Friday + data.breadtypes[10].adviceWeek3Friday + data.breadtypes[10].adviceWeek4Friday) / 4);

        adviceSaturdayDonkermeergranen = Math.round((data.breadtypes[0].adviceWeek1Saturday + data.breadtypes[0].adviceWeek2Saturday + data.breadtypes[0].adviceWeek3Saturday + data.breadtypes[0].adviceWeek4Saturday) / 4);
        adviceSaturdayZonnevolkoren = Math.round((data.breadtypes[1].adviceWeek1Saturday + data.breadtypes[1].adviceWeek2Saturday + data.breadtypes[1].adviceWeek3Saturday + data.breadtypes[1].adviceWeek4Saturday) / 4);
        adviceSaturdayWit = Math.round((data.breadtypes[2].adviceWeek1Saturday + data.breadtypes[2].adviceWeek2Saturday + data.breadtypes[2].adviceWeek3Saturday + data.breadtypes[2].adviceWeek4Saturday) / 4);
        adviceSaturdayTarwe = Math.round((data.breadtypes[3].adviceWeek1Saturday + data.breadtypes[3].adviceWeek2Saturday + data.breadtypes[3].adviceWeek3Saturday + data.breadtypes[3].adviceWeek4Saturday) / 4);
        adviceSaturdayVolkoren = Math.round((data.breadtypes[4].adviceWeek1Saturday + data.breadtypes[4].adviceWeek2Saturday + data.breadtypes[4].adviceWeek3Saturday + data.breadtypes[4].adviceWeek4Saturday) / 4);
        adviceSaturdayMais = Math.round((data.breadtypes[5].adviceWeek1Saturday + data.breadtypes[5].adviceWeek2Saturday + data.breadtypes[5].adviceWeek3Saturday + data.breadtypes[5].adviceWeek4Saturday) / 4);
        adviceSaturdayWitmeerzaden = Math.round((data.breadtypes[6].adviceWeek1Saturday + data.breadtypes[6].adviceWeek2Saturday + data.breadtypes[6].adviceWeek3Saturday + data.breadtypes[6].adviceWeek4Saturday) / 4);
        adviceSaturdaySpelt = Math.round((data.breadtypes[7].adviceWeek1Saturday + data.breadtypes[7].adviceWeek2Saturday + data.breadtypes[7].adviceWeek3Saturday + data.breadtypes[7].adviceWeek4Saturday) / 4);
        adviceSaturdayRoggevijgen = Math.round((data.breadtypes[8].adviceWeek1Saturday + data.breadtypes[8].adviceWeek2Saturday + data.breadtypes[8].adviceWeek3Saturday + data.breadtypes[8].adviceWeek4Saturday) / 4);
        adviceSaturdayRoggerozijn = Math.round((data.breadtypes[9].adviceWeek1Saturday + data.breadtypes[9].adviceWeek2Saturday + data.breadtypes[9].adviceWeek3Saturday + data.breadtypes[9].adviceWeek4Saturday) / 4);
        adviceSaturdayHaverpompoen = Math.round((data.breadtypes[10].adviceWeek1Saturday + data.breadtypes[10].adviceWeek2Saturday + data.breadtypes[10].adviceWeek3Saturday + data.breadtypes[10].adviceWeek4Saturday) / 4);

        adviceSundayDonkermeergranen = Math.round((data.breadtypes[0].adviceWeek1Sunday + data.breadtypes[0].adviceWeek2Sunday + data.breadtypes[0].adviceWeek3Sunday + data.breadtypes[0].adviceWeek4Sunday) / 4);
        adviceSundayZonnevolkoren = Math.round((data.breadtypes[1].adviceWeek1Sunday + data.breadtypes[1].adviceWeek2Sunday + data.breadtypes[1].adviceWeek3Sunday + data.breadtypes[1].adviceWeek4Sunday) / 4);
        adviceSundayWit = Math.round((data.breadtypes[2].adviceWeek1Sunday + data.breadtypes[2].adviceWeek2Sunday + data.breadtypes[2].adviceWeek3Sunday + data.breadtypes[2].adviceWeek4Sunday) / 4);
        adviceSundayTarwe = Math.round((data.breadtypes[3].adviceWeek1Sunday + data.breadtypes[3].adviceWeek2Sunday + data.breadtypes[3].adviceWeek3Sunday + data.breadtypes[3].adviceWeek4Sunday) / 4);
        adviceSundayVolkoren = Math.round((data.breadtypes[4].adviceWeek1Sunday + data.breadtypes[4].adviceWeek2Sunday + data.breadtypes[4].adviceWeek3Sunday + data.breadtypes[4].adviceWeek4Sunday) / 4);
        adviceSundayMais = Math.round((data.breadtypes[5].adviceWeek1Sunday + data.breadtypes[5].adviceWeek2Sunday + data.breadtypes[5].adviceWeek3Sunday + data.breadtypes[5].adviceWeek4Sunday) / 4);
        adviceSundayWitmeerzaden = Math.round((data.breadtypes[6].adviceWeek1Sunday + data.breadtypes[6].adviceWeek2Sunday + data.breadtypes[6].adviceWeek3Sunday + data.breadtypes[6].adviceWeek4Sunday) / 4);
        adviceSundaySpelt = Math.round((data.breadtypes[7].adviceWeek1Sunday + data.breadtypes[7].adviceWeek2Sunday + data.breadtypes[7].adviceWeek3Sunday + data.breadtypes[7].adviceWeek4Sunday) / 4);
        adviceSundayRoggevijgen = Math.round((data.breadtypes[8].adviceWeek1Sunday + data.breadtypes[8].adviceWeek2Sunday + data.breadtypes[8].adviceWeek3Sunday + data.breadtypes[8].adviceWeek4Sunday) / 4);
        adviceSundayRoggerozijn = Math.round((data.breadtypes[9].adviceWeek1Sunday + data.breadtypes[9].adviceWeek2Sunday + data.breadtypes[9].adviceWeek3Sunday + data.breadtypes[9].adviceWeek4Sunday) / 4);
        adviceSundayHaverpompoen = Math.round((data.breadtypes[10].adviceWeek1Sunday + data.breadtypes[10].adviceWeek2Sunday + data.breadtypes[10].adviceWeek3Sunday + data.breadtypes[10].adviceWeek4Sunday) / 4);

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

            adviceTotalPlacedLong = adviceThursdayDonkermeergranen + adviceThursdayZonnevolkoren + adviceThursdayWit + adviceThursdayTarwe + adviceThursdayVolkoren + adviceThursdayMais + adviceThursdayWitmeerzaden;
            $("#totallong_placed").val(adviceTotalPlacedLong);

            $("#spelt_tobe_placed").val(adviceThursdaySpelt);
            $("#roggevijgen_tobe_placed").val(adviceThursdayRoggevijgen);
            $("#roggerozijn_tobe_placed").val(adviceThursdayRoggerozijn);
            $("#haverpompoen_tobe_placed").val(adviceThursdayHaverpompoen);

            adviceTotalPlacedBol = adviceThursdaySpelt + adviceThursdayRoggevijgen + adviceThursdayRoggerozijn + adviceThursdayHaverpompoen;
            $("#totalbol_placed").val(adviceTotalPlacedBol);

            $("#donkermeergranen_tobe_baked").val(adviceTuesdayDonkermeergranen);
            $("#zonnevolkoren_tobe_baked").val(adviceTuesdayZonnevolkoren);
            $("#wit_tobe_baked").val(adviceTuesdayWit);
            $("#tarwe_tobe_baked").val(adviceTuesdayTarwe);
            $("#volkoren_tobe_baked").val(adviceTuesdayVolkoren);
            $("#mais_tobe_baked").val(adviceTuesdayMais);
            $("#witmeerzaden_tobe_baked").val(adviceTuesdayWitmeerzaden);

            adviceTotalBakedLong = adviceTuesdayDonkermeergranen + adviceTuesdayZonnevolkoren + adviceTuesdayWit + adviceTuesdayTarwe + adviceTuesdayVolkoren + adviceTuesdayMais + adviceTuesdayWitmeerzaden;
            $("#totallong_tobe_baked").val(adviceTotalBakedLong);

            $("#spelt_tobe_baked").val(adviceTuesdaySpelt);
            $("#roggevijgen_tobe_baked").val(adviceTuesdayRoggevijgen);
            $("#roggerozijn_tobe_baked").val(adviceTuesdayRoggerozijn);
            $("#haverpompoen_tobe_baked").val(adviceTuesdayHaverpompoen);

            adviceTotalBakedBol = adviceTuesdaySpelt + adviceTuesdayRoggevijgen + adviceTuesdayRoggerozijn + adviceTuesdayHaverpompoen;
            $("#totalbol_tobe_baked").val(adviceTotalBakedBol);

        }
        if (activeDay == 3) {

            $("#donkermeergranen_tobe_placed").val(adviceFridayDonkermeergranen);
            $("#zonnevolkoren_tobe_placed").val(adviceFridayZonnevolkoren);
            $("#wit_tobe_placed").val(adviceFridayWit);
            $("#tarwe_tobe_placed").val(adviceFridayTarwe);
            $("#volkoren_tobe_placed").val(adviceFridayVolkoren);
            $("#mais_tobe_placed").val(adviceFridayMais);
            $("#witmeerzaden_tobe_placed").val(adviceFridayWitmeerzaden);

            adviceTotalPlacedLong = adviceFridayDonkermeergranen + adviceFridayZonnevolkoren + adviceFridayWit + adviceFridayTarwe + adviceFridayVolkoren + adviceFridayMais + adviceFridayWitmeerzaden;
            $("#totallong_placed").val(adviceTotalPlacedLong);

            $("#spelt_tobe_placed").val(adviceFridaySpelt);
            $("#roggevijgen_tobe_placed").val(adviceFridayRoggevijgen);
            $("#roggerozijn_tobe_placed").val(adviceFridayRoggerozijn);
            $("#haverpompoen_tobe_placed").val(adviceFridayHaverpompoen);

            adviceTotalPlacedBol = adviceFridaySpelt + adviceFridayRoggevijgen + adviceFridayRoggerozijn + adviceFridayHaverpompoen;
            $("#totalbol_placed").val(adviceTotalPlacedBol);

            $("#donkermeergranen_tobe_baked").val(adviceWednesdayDonkermeergranen);
            $("#zonnevolkoren_tobe_baked").val(adviceWednesdayZonnevolkoren);
            $("#wit_tobe_baked").val(adviceWednesdayWit);
            $("#tarwe_tobe_baked").val(adviceWednesdayTarwe);
            $("#volkoren_tobe_baked").val(adviceWednesdayVolkoren);
            $("#mais_tobe_baked").val(adviceWednesdayMais);
            $("#witmeerzaden_tobe_baked").val(adviceWednesdayWitmeerzaden);

            adviceTotalBakedLong = adviceWednesdayDonkermeergranen + adviceWednesdayZonnevolkoren + adviceWednesdayWit + adviceWednesdayTarwe + adviceWednesdayVolkoren + adviceWednesdayMais + adviceWednesdayWitmeerzaden;
            $("#totallong_tobe_baked").val(adviceTotalBakedLong);

            $("#spelt_tobe_baked").val(adviceWednesdaySpelt);
            $("#roggevijgen_tobe_baked").val(adviceWednesdayRoggevijgen);
            $("#roggerozijn_tobe_baked").val(adviceWednesdayRoggerozijn);
            $("#haverpompoen_tobe_baked").val(adviceWednesdayHaverpompoen);

            adviceTotalBakedBol = adviceWednesdaySpelt + adviceWednesdayRoggevijgen + adviceWednesdayRoggerozijn + adviceWednesdayHaverpompoen;
            $("#totalbol_tobe_baked").val(adviceTotalBakedBol);

        }
        if (activeDay == 4) {

            $("#donkermeergranen_tobe_placed").val(adviceSaturdayDonkermeergranen);
            $("#zonnevolkoren_tobe_placed").val(adviceSaturdayZonnevolkoren);
            $("#wit_tobe_placed").val(adviceSaturdayWit);
            $("#tarwe_tobe_placed").val(adviceSaturdayTarwe);
            $("#volkoren_tobe_placed").val(adviceSaturdayVolkoren);
            $("#mais_tobe_placed").val(adviceSaturdayMais);
            $("#witmeerzaden_tobe_placed").val(adviceSaturdayWitmeerzaden);

            adviceTotalPlacedLong = adviceSaturdayDonkermeergranen + adviceSaturdayZonnevolkoren + adviceSaturdayWit + adviceSaturdayTarwe + adviceSaturdayVolkoren + adviceSaturdayMais + adviceSaturdayWitmeerzaden;
            $("#totallong_placed").val(adviceTotalPlacedLong);

            $("#spelt_tobe_placed").val(adviceSaturdaySpelt);
            $("#roggevijgen_tobe_placed").val(adviceSaturdayRoggevijgen);
            $("#roggerozijn_tobe_placed").val(adviceSaturdayRoggerozijn);
            $("#haverpompoen_tobe_placed").val(adviceSaturdayHaverpompoen);

            adviceTotalPlacedBol = adviceSaturdaySpelt + adviceSaturdayRoggevijgen + adviceSaturdayRoggerozijn + adviceSaturdayHaverpompoen;
            $("#totalbol_placed").val(adviceTotalPlacedBol);

            $("#donkermeergranen_tobe_baked").val(adviceThursdayDonkermeergranen);
            $("#zonnevolkoren_tobe_baked").val(adviceThursdayZonnevolkoren);
            $("#wit_tobe_baked").val(adviceThursdayWit);
            $("#tarwe_tobe_baked").val(adviceThursdayTarwe);
            $("#volkoren_tobe_baked").val(adviceThursdayVolkoren);
            $("#mais_tobe_baked").val(adviceThursdayMais);
            $("#witmeerzaden_tobe_baked").val(adviceThursdayWitmeerzaden);

            adviceTotalBakedLong = adviceThursdayDonkermeergranen + adviceThursdayZonnevolkoren + adviceThursdayWit + adviceThursdayTarwe + adviceThursdayVolkoren + adviceThursdayMais + adviceThursdayWitmeerzaden;
            $("#totallong_tobe_baked").val(adviceTotalBakedLong);

            $("#spelt_tobe_baked").val(adviceThursdaySpelt);
            $("#roggevijgen_tobe_baked").val(adviceThursdayRoggevijgen);
            $("#roggerozijn_tobe_baked").val(adviceThursdayRoggerozijn);
            $("#haverpompoen_tobe_baked").val(adviceThursdayHaverpompoen);

            adviceTotalBakedBol = adviceThursdaySpelt + adviceThursdayRoggevijgen + adviceThursdayRoggerozijn + adviceThursdayHaverpompoen;
            $("#totalbol_tobe_baked").val(adviceTotalBakedBol);

        }
        if (activeDay == 5) {

            $("#donkermeergranen_tobe_placed").val(adviceSundayDonkermeergranen);
            $("#zonnevolkoren_tobe_placed").val(adviceSundayZonnevolkoren);
            $("#wit_tobe_placed").val(adviceSundayWit);
            $("#tarwe_tobe_placed").val(adviceSundayTarwe);
            $("#volkoren_tobe_placed").val(adviceSundayVolkoren);
            $("#mais_tobe_placed").val(adviceSundayMais);
            $("#witmeerzaden_tobe_placed").val(adviceSundayWitmeerzaden);

            adviceTotalPlacedLong = adviceSundayDonkermeergranen + adviceSundayZonnevolkoren + adviceSundayWit + adviceSundayTarwe + adviceSundayVolkoren + adviceSundayMais + adviceSundayWitmeerzaden;
            $("#totallong_placed").val(adviceTotalPlacedLong);

            $("#spelt_tobe_placed").val(adviceSundaySpelt);
            $("#roggevijgen_tobe_placed").val(adviceSundayRoggevijgen);
            $("#roggerozijn_tobe_placed").val(adviceSundayRoggerozijn);
            $("#haverpompoen_tobe_placed").val(adviceSundayHaverpompoen);

            adviceTotalPlacedBol = adviceSundaySpelt + adviceSundayRoggevijgen + adviceSundayRoggerozijn + adviceSundayHaverpompoen;
            $("#totalbol_placed").val(adviceTotalPlacedBol);

            $("#donkermeergranen_tobe_baked").val(adviceFridayDonkermeergranen);
            $("#zonnevolkoren_tobe_baked").val(adviceFridayZonnevolkoren);
            $("#wit_tobe_baked").val(adviceFridayWit);
            $("#tarwe_tobe_baked").val(adviceFridayTarwe);
            $("#volkoren_tobe_baked").val(adviceFridayVolkoren);
            $("#mais_tobe_baked").val(adviceFridayMais);
            $("#witmeerzaden_tobe_baked").val(adviceFridayWitmeerzaden);

            adviceTotalBakedLong = adviceFridayDonkermeergranen + adviceFridayZonnevolkoren + adviceFridayWit + adviceFridayTarwe + adviceFridayVolkoren + adviceFridayMais + adviceFridayWitmeerzaden;
            $("#totallong_tobe_baked").val(adviceTotalBakedLong);

            $("#spelt_tobe_baked").val(adviceFridaySpelt);
            $("#roggevijgen_tobe_baked").val(adviceFridayRoggevijgen);
            $("#roggerozijn_tobe_baked").val(adviceFridayRoggerozijn);
            $("#haverpompoen_tobe_baked").val(adviceFridayHaverpompoen);

            adviceTotalBakedBol = adviceFridaySpelt + adviceFridayRoggevijgen + adviceFridayRoggerozijn + adviceFridayHaverpompoen;
            $("#totalbol_tobe_baked").val(adviceTotalBakedBol);

        }
        if (activeDay == 6) {

            $("#donkermeergranen_tobe_placed").val(adviceTuesdayDonkermeergranen);
            $("#zonnevolkoren_tobe_placed").val(adviceTuesdayZonnevolkoren);
            $("#wit_tobe_placed").val(adviceTuesdayWit);
            $("#tarwe_tobe_placed").val(adviceTuesdayTarwe);
            $("#volkoren_tobe_placed").val(adviceTuesdayVolkoren);
            $("#mais_tobe_placed").val(adviceTuesdayMais);
            $("#witmeerzaden_tobe_placed").val(adviceTuesdayWitmeerzaden);

            adviceTotalPlacedLong = adviceTuesdayDonkermeergranen + adviceTuesdayZonnevolkoren + adviceTuesdayWit + adviceTuesdayTarwe + adviceTuesdayVolkoren + adviceTuesdayMais + adviceTuesdayWitmeerzaden;
            $("#totallong_placed").val(adviceTotalPlacedLong);

            $("#spelt_tobe_placed").val(adviceTuesdaySpelt);
            $("#roggevijgen_tobe_placed").val(adviceTuesdayRoggevijgen);
            $("#roggerozijn_tobe_placed").val(adviceTuesdayRoggerozijn);
            $("#haverpompoen_tobe_placed").val(adviceTuesdayHaverpompoen);

            adviceTotalPlacedBol = adviceTuesdaySpelt + adviceTuesdayRoggevijgen + adviceTuesdayRoggerozijn + adviceTuesdayHaverpompoen;
            $("#totalbol_placed").val(adviceTotalPlacedBol);

            $("#donkermeergranen_tobe_baked").val(adviceSaturdayDonkermeergranen);
            $("#zonnevolkoren_tobe_baked").val(adviceSaturdayZonnevolkoren);
            $("#wit_tobe_baked").val(adviceSaturdayWit);
            $("#tarwe_tobe_baked").val(adviceSaturdayTarwe);
            $("#volkoren_tobe_baked").val(adviceSaturdayVolkoren);
            $("#mais_tobe_baked").val(adviceSaturdayMais);
            $("#witmeerzaden_tobe_baked").val(adviceSaturdayWitmeerzaden);

            adviceTotalBakedLong = adviceSaturdayDonkermeergranen + adviceSaturdayZonnevolkoren + adviceSaturdayWit + adviceSaturdayTarwe + adviceSaturdayVolkoren + adviceSaturdayMais + adviceSaturdayWitmeerzaden;
            $("#totallong_tobe_baked").val(adviceTotalBakedLong);

            $("#spelt_tobe_baked").val(adviceSaturdaySpelt);
            $("#roggevijgen_tobe_baked").val(adviceSaturdayRoggevijgen);
            $("#roggerozijn_tobe_baked").val(adviceSaturdayRoggerozijn);
            $("#haverpompoen_tobe_baked").val(adviceSaturdayHaverpompoen);

            adviceTotalBakedBol = adviceSaturdaySpelt + adviceSaturdayRoggevijgen + adviceSaturdayRoggerozijn + adviceSaturdayHaverpompoen;
            $("#totalbol_tobe_baked").val(adviceTotalBakedBol);

        }
        if (activeDay == 0) {

            $("#donkermeergranen_tobe_placed").val(adviceWednesdayDonkermeergranen);
            $("#zonnevolkoren_tobe_placed").val(adviceWednesdayZonnevolkoren);
            $("#wit_tobe_placed").val(adviceWednesdayWit);
            $("#tarwe_tobe_placed").val(adviceWednesdayTarwe);
            $("#volkoren_tobe_placed").val(adviceWednesdayVolkoren);
            $("#mais_tobe_placed").val(adviceWednesdayMais);
            $("#witmeerzaden_tobe_placed").val(adviceWednesdayWitmeerzaden);

            adviceTotalPlacedLong = adviceWednesdayDonkermeergranen + adviceWednesdayZonnevolkoren + adviceWednesdayWit + adviceWednesdayTarwe + adviceWednesdayVolkoren + adviceWednesdayMais + adviceWednesdayWitmeerzaden;
            $("#totallong_placed").val(adviceTotalPlacedLong);

            $("#spelt_tobe_placed").val(adviceWednesdaySpelt);
            $("#roggevijgen_tobe_placed").val(adviceWednesdayRoggevijgen);
            $("#roggerozijn_tobe_placed").val(adviceWednesdayRoggerozijn);
            $("#haverpompoen_tobe_placed").val(adviceWednesdayHaverpompoen);

            adviceTotalPlacedBol = adviceWednesdaySpelt + adviceTuesdayRoggevijgen + adviceTuesdayRoggerozijn + adviceTuesdayHaverpompoen;
            $("#totalbol_placed").val(adviceTotalPlacedBol);

            $("#donkermeergranen_tobe_baked").val(adviceSundayDonkermeergranen);
            $("#zonnevolkoren_tobe_baked").val(adviceSundayZonnevolkoren);
            $("#wit_tobe_baked").val(adviceSundayWit);
            $("#tarwe_tobe_baked").val(adviceSundayTarwe);
            $("#volkoren_tobe_baked").val(adviceSundayVolkoren);
            $("#mais_tobe_baked").val(adviceSundayMais);
            $("#witmeerzaden_tobe_baked").val(adviceSundayWitmeerzaden);

            adviceTotalBakedLong = adviceSundayDonkermeergranen + adviceSundayZonnevolkoren + adviceSundayWit + adviceSundayTarwe + adviceSundayVolkoren + adviceSundayMais + adviceSundayWitmeerzaden;
            $("#totallong_tobe_baked").val(adviceTotalBakedLong);

            $("#spelt_tobe_baked").val(adviceSundaySpelt);
            $("#roggevijgen_tobe_baked").val(adviceSundayRoggevijgen);
            $("#roggerozijn_tobe_baked").val(adviceSundayRoggerozijn);
            $("#haverpompoen_tobe_baked").val(adviceSundayHaverpompoen);

            adviceTotalBakedBol = adviceSundaySpelt + adviceSundayRoggevijgen + adviceSundayRoggerozijn + adviceSundayHaverpompoen;
            $("#totalbol_tobe_baked").val(adviceTotalBakedBol);

        }

    }

    $("#submit").on("click", function () {
        
        checkcorrectvalues1 = (document.getElementById("donkermeergranen_tobe_baked").value) - (document.getElementById("donkermeergranen_input").value);
        checkcorrectvalues2 = (document.getElementById("zonnevolkoren_tobe_baked").value) - (document.getElementById("zonnevolkoren_input").value);
        checkcorrectvalues3 = (document.getElementById("wit_tobe_baked").value) - (document.getElementById("wit_input").value);
        checkcorrectvalues4 = (document.getElementById("tarwe_tobe_baked").value) - (document.getElementById("tarwe_input").value);
        checkcorrectvalues5 = (document.getElementById("volkoren_tobe_baked").value) - (document.getElementById("volkoren_input").value);
        checkcorrectvalues6 = (document.getElementById("mais_tobe_baked").value) - (document.getElementById("mais_input").value);
        checkcorrectvalues7 = (document.getElementById("witmeerzaden_tobe_baked").value) - (document.getElementById("witmeerzaden_input").value);
        checkcorrectvalues8 = (document.getElementById("spelt_tobe_baked").value) - (document.getElementById("spelt_input").value);
        checkcorrectvalues9 = (document.getElementById("roggevijgen_tobe_baked").value) - (document.getElementById("roggevijgen_input").value);
        checkcorrectvalues10 = (document.getElementById("roggerozijn_tobe_baked").value) - (document.getElementById("roggerozijn_input").value);
        checkcorrectvalues11 = (document.getElementById("haverpompoen_tobe_baked").value) - (document.getElementById("haverpompoen_input").value);

        
        if (checkcorrectvalues1 < 0 || checkcorrectvalues2 < 0 || checkcorrectvalues3 < 0 || checkcorrectvalues4 < 0 || checkcorrectvalues5 < 0 || checkcorrectvalues6 < 0 || checkcorrectvalues7 < 0 || checkcorrectvalues8 < 0 || checkcorrectvalues9 < 0 || checkcorrectvalues10 < 0 || checkcorrectvalues11 < 0){
            alert("The value of leftover bread can't be higher than the amount of baked bread")}
        else if( (document.getElementById("donkermeergranen_input").value) < 0 || (document.getElementById("zonnevolkoren_input").value) < 0 || (document.getElementById("wit_input").value) < 0 ||
        (document.getElementById("tarwe_input").value) < 0 || (document.getElementById("volkoren_input").value) < 0 || (document.getElementById("mais_input").value) < 0 || (document.getElementById("witmeerzaden_input").value) < 0 ||
        (document.getElementById("spelt_input").value) < 0 || (document.getElementById("roggevijgen_input").value) < 0 || (document.getElementById("roggerozijn_input").value) < 0 || (document.getElementById("haverpompoen_input").value) < 0){
            alert("The value of leftover bread should be at least 0")}
        else if( (document.getElementById("donkermeergranen_input").value) === "" || (document.getElementById("zonnevolkoren_input").value) === "" || (document.getElementById("wit_input").value) === "" ||
        (document.getElementById("tarwe_input").value) === "" || (document.getElementById("volkoren_input").value) === "" || (document.getElementById("mais_input").value) === "" || (document.getElementById("witmeerzaden_input").value) === "" ||
        (document.getElementById("spelt_input").value) === "" || (document.getElementById("roggevijgen_input").value) === "" || (document.getElementById("roggerozijn_input").value) === "" || (document.getElementById("haverpompoen_input").value) === ""){
            alert("The value of leftover bread should contain a value")}
        else {
            var answer = window.confirm("Are you sure this data is correct? This can't be changed later!")
            if (answer) {
                console.log("Juiste data ingevoerd")
            sendValidData()
}
            else {
               
}
            
        
        };
            
        

                   
        
        






        function sendValidData() {

        if (activeDay == 2) {
            
            
            newData.breadtypes[0].newInputTuesday = parseInt(document.getElementById("donkermeergranen_tobe_baked").value) - parseInt(document.getElementById("donkermeergranen_input").value);
            newData.breadtypes[1].newInputTuesday = parseInt(document.getElementById("zonnevolkoren_tobe_baked").value) - parseInt(document.getElementById("zonnevolkoren_input").value);
            newData.breadtypes[2].newInputTuesday = parseInt(document.getElementById("wit_tobe_baked").value) - parseInt(document.getElementById("wit_input").value);
            newData.breadtypes[3].newInputTuesday = parseInt(document.getElementById("tarwe_tobe_baked").value) - parseInt(document.getElementById("tarwe_input").value);
            newData.breadtypes[4].newInputTuesday = parseInt(document.getElementById("volkoren_tobe_baked").value) - parseInt(document.getElementById("volkoren_input").value);
            newData.breadtypes[5].newInputTuesday = parseInt(document.getElementById("mais_tobe_baked").value) - parseInt(document.getElementById("mais_input").value);
            newData.breadtypes[6].newInputTuesday = parseInt(document.getElementById("witmeerzaden_tobe_baked").value) - parseInt(document.getElementById("witmeerzaden_input").value);
            newData.breadtypes[7].newInputTuesday = parseInt(document.getElementById("spelt_tobe_baked").value) - parseInt(document.getElementById("spelt_input").value);
            newData.breadtypes[8].newInputTuesday = parseInt(document.getElementById("roggevijgen_tobe_baked").value) - parseInt(document.getElementById("roggevijgen_input").value);
            newData.breadtypes[9].newInputTuesday = parseInt(document.getElementById("roggerozijn_tobe_baked").value) - parseInt(document.getElementById("roggerozijn_input").value);
            newData.breadtypes[10].newInputTuesday = parseInt(document.getElementById("haverpompoen_tobe_baked").value) - parseInt(document.getElementById("haverpompoen_input").value);

            $.each(newData.breadtypes, function (index, breadtype) {
                
                this.inputWeek1Tuesday = this.inputWeek2Tuesday;
                this.inputWeek2Tuesday = this.inputWeek3Tuesday;
                this.inputWeek3Tuesday = this.inputWeek4Tuesday;
                this.inputWeek4Tuesday = this.newInputTuesday;

            });

        }

        if (activeDay == 3) {
            
            
            newData.breadtypes[0].newInputWednesday = parseInt(document.getElementById("donkermeergranen_tobe_baked").value) - parseInt(document.getElementById("donkermeergranen_input").value);
            newData.breadtypes[1].newInputWednesday = parseInt(document.getElementById("zonnevolkoren_tobe_baked").value) - parseInt(document.getElementById("zonnevolkoren_input").value);
            newData.breadtypes[2].newInputWednesday = parseInt(document.getElementById("wit_tobe_baked").value) - parseInt(document.getElementById("wit_input").value);
            newData.breadtypes[3].newInputWednesday = parseInt(document.getElementById("tarwe_tobe_baked").value) - parseInt(document.getElementById("tarwe_input").value);
            newData.breadtypes[4].newInputWednesday = parseInt(document.getElementById("volkoren_tobe_baked").value) - parseInt(document.getElementById("volkoren_input").value);
            newData.breadtypes[5].newInputWednesday = parseInt(document.getElementById("mais_tobe_baked").value) - parseInt(document.getElementById("mais_input").value);
            newData.breadtypes[6].newInputWednesday = parseInt(document.getElementById("witmeerzaden_tobe_baked").value) - parseInt(document.getElementById("witmeerzaden_input").value);
            newData.breadtypes[7].newInputWednesday = parseInt(document.getElementById("spelt_tobe_baked").value) - parseInt(document.getElementById("spelt_input").value);
            newData.breadtypes[8].newInputWednesday = parseInt(document.getElementById("roggevijgen_tobe_baked").value) - parseInt(document.getElementById("roggevijgen_input").value);
            newData.breadtypes[9].newInputWednesday = parseInt(document.getElementById("roggerozijn_tobe_baked").value) - parseInt(document.getElementById("roggerozijn_input").value);
            newData.breadtypes[10].newInputWednesday = parseInt(document.getElementById("haverpompoen_tobe_baked").value) - parseInt(document.getElementById("haverpompoen_input").value);

            $.each(newData.breadtypes, function (index, breadtype) {
                
                this.inputWeek1Wednesday = this.inputWeek2Wednesday;
                this.inputWeek2Wednesday = this.inputWeek3Wednesday;
                this.inputWeek3Wednesday = this.inputWeek4Wednesday;
                this.inputWeek4Wednesday = this.newInputWednesday;

            });
        }

        if (activeDay == 4) {
            
            
            newData.breadtypes[0].newInputThursday = parseInt(document.getElementById("donkermeergranen_tobe_baked").value) - parseInt(document.getElementById("donkermeergranen_input").value);
            newData.breadtypes[1].newInputThursday = parseInt(document.getElementById("zonnevolkoren_tobe_baked").value) - parseInt(document.getElementById("zonnevolkoren_input").value);
            newData.breadtypes[2].newInputThursday = parseInt(document.getElementById("wit_tobe_baked").value) - parseInt(document.getElementById("wit_input").value);
            newData.breadtypes[3].newInputThursday = parseInt(document.getElementById("tarwe_tobe_baked").value) - parseInt(document.getElementById("tarwe_input").value);
            newData.breadtypes[4].newInputThursday = parseInt(document.getElementById("volkoren_tobe_baked").value) - parseInt(document.getElementById("volkoren_input").value);
            newData.breadtypes[5].newInputThursday = parseInt(document.getElementById("mais_tobe_baked").value) - parseInt(document.getElementById("mais_input").value);
            newData.breadtypes[6].newInputThursday = parseInt(document.getElementById("witmeerzaden_tobe_baked").value) - parseInt(document.getElementById("witmeerzaden_input").value);
            newData.breadtypes[7].newInputThursday = parseInt(document.getElementById("spelt_tobe_baked").value) - parseInt(document.getElementById("spelt_input").value);
            newData.breadtypes[8].newInputThursday = parseInt(document.getElementById("roggevijgen_tobe_baked").value) - parseInt(document.getElementById("roggevijgen_input").value);
            newData.breadtypes[9].newInputThursday = parseInt(document.getElementById("roggerozijn_tobe_baked").value) - parseInt(document.getElementById("roggerozijn_input").value);
            newData.breadtypes[10].newInputThursday = parseInt(document.getElementById("haverpompoen_tobe_baked").value) - parseInt(document.getElementById("haverpompoen_input").value);

            $.each(newData.breadtypes, function (index, breadtype) {
                
                this.inputWeek1Thursday = this.inputWeek2Thursday;
                this.inputWeek2Thursday = this.inputWeek3Thursday;
                this.inputWeek3Thursday = this.inputWeek4Thursday;
                this.inputWeek4Thursday = this.newInputThursday;

            });

        }

        if (activeDay == 5) {
            
            
            newData.breadtypes[0].newInputFriday = parseInt(document.getElementById("donkermeergranen_tobe_baked").value) - parseInt(document.getElementById("donkermeergranen_input").value);
            newData.breadtypes[1].newInputFriday = parseInt(document.getElementById("zonnevolkoren_tobe_baked").value) - parseInt(document.getElementById("zonnevolkoren_input").value);
            newData.breadtypes[2].newInputFriday = parseInt(document.getElementById("wit_tobe_baked").value) - parseInt(document.getElementById("wit_input").value);
            newData.breadtypes[3].newInputFriday = parseInt(document.getElementById("tarwe_tobe_baked").value) - parseInt(document.getElementById("tarwe_input").value);
            newData.breadtypes[4].newInputFriday = parseInt(document.getElementById("volkoren_tobe_baked").value) - parseInt(document.getElementById("volkoren_input").value);
            newData.breadtypes[5].newInputFriday = parseInt(document.getElementById("mais_tobe_baked").value) - parseInt(document.getElementById("mais_input").value);
            newData.breadtypes[6].newInputFriday = parseInt(document.getElementById("witmeerzaden_tobe_baked").value) - parseInt(document.getElementById("witmeerzaden_input").value);
            newData.breadtypes[7].newInputFriday = parseInt(document.getElementById("spelt_tobe_baked").value) - parseInt(document.getElementById("spelt_input").value);
            newData.breadtypes[8].newInputFriday = parseInt(document.getElementById("roggevijgen_tobe_baked").value) - parseInt(document.getElementById("roggevijgen_input").value);
            newData.breadtypes[9].newInputFriday = parseInt(document.getElementById("roggerozijn_tobe_baked").value) - parseInt(document.getElementById("roggerozijn_input").value);
            newData.breadtypes[10].newInputFriday = parseInt(document.getElementById("haverpompoen_tobe_baked").value) - parseInt(document.getElementById("haverpompoen_input").value);

            $.each(newData.breadtypes, function (index, breadtype) {
                
                this.inputWeek1Friday = this.inputWeek2Friday;
                this.inputWeek2Friday = this.inputWeek3Friday;
                this.inputWeek3Friday = this.inputWeek4Friday;
                this.inputWeek4Friday = this.newInputFriday;

            });

        }

        if (activeDay == 6) {
            
            
            newData.breadtypes[0].newInputSaturday = parseInt(document.getElementById("donkermeergranen_tobe_baked").value) - parseInt(document.getElementById("donkermeergranen_input").value);
            newData.breadtypes[1].newInputSaturday = parseInt(document.getElementById("zonnevolkoren_tobe_baked").value) - parseInt(document.getElementById("zonnevolkoren_input").value);
            newData.breadtypes[2].newInputSaturday = parseInt(document.getElementById("wit_tobe_baked").value) - parseInt(document.getElementById("wit_input").value);
            newData.breadtypes[3].newInputSaturday = parseInt(document.getElementById("tarwe_tobe_baked").value) - parseInt(document.getElementById("tarwe_input").value);
            newData.breadtypes[4].newInputSaturday = parseInt(document.getElementById("volkoren_tobe_baked").value) - parseInt(document.getElementById("volkoren_input").value);
            newData.breadtypes[5].newInputSaturday = parseInt(document.getElementById("mais_tobe_baked").value) - parseInt(document.getElementById("mais_input").value);
            newData.breadtypes[6].newInputSaturday = parseInt(document.getElementById("witmeerzaden_tobe_baked").value) - parseInt(document.getElementById("witmeerzaden_input").value);
            newData.breadtypes[7].newInputSaturday = parseInt(document.getElementById("spelt_tobe_baked").value) - parseInt(document.getElementById("spelt_input").value);
            newData.breadtypes[8].newInputSaturday = parseInt(document.getElementById("roggevijgen_tobe_baked").value) - parseInt(document.getElementById("roggevijgen_input").value);
            newData.breadtypes[9].newInputSaturday = parseInt(document.getElementById("roggerozijn_tobe_baked").value) - parseInt(document.getElementById("roggerozijn_input").value);
            newData.breadtypes[10].newInputSaturday = parseInt(document.getElementById("haverpompoen_tobe_baked").value) - parseInt(document.getElementById("haverpompoen_input").value);
            

            

            $.each(newData.breadtypes, function (index, breadtype) {
                
           

                this.inputWeek1Saturday = this.inputWeek2Saturday;
                this.inputWeek2Saturday = this.inputWeek3Saturday;
                this.inputWeek3Saturday = this.inputWeek4Saturday;
                this.inputWeek4Saturday = this.newInputSaturday;

            });




        }

        if (activeDay == 7) {
            
            
            newData.breadtypes[0].newInputSunday = parseInt(document.getElementById("donkermeergranen_tobe_baked").value) - parseInt(document.getElementById("donkermeergranen_input").value);
            newData.breadtypes[1].newInputSunday = parseInt(document.getElementById("zonnevolkoren_tobe_baked").value) - parseInt(document.getElementById("zonnevolkoren_input").value);
            newData.breadtypes[2].newInputSunday = parseInt(document.getElementById("wit_tobe_baked").value) - parseInt(document.getElementById("wit_input").value);
            newData.breadtypes[3].newInputSunday = parseInt(document.getElementById("tarwe_tobe_baked").value) - parseInt(document.getElementById("tarwe_input").value);
            newData.breadtypes[4].newInputSunday = parseInt(document.getElementById("volkoren_tobe_baked").value) - parseInt(document.getElementById("volkoren_input").value);
            newData.breadtypes[5].newInputSunday = parseInt(document.getElementById("mais_tobe_baked").value) - parseInt(document.getElementById("mais_input").value);
            newData.breadtypes[6].newInputSunday = parseInt(document.getElementById("witmeerzaden_tobe_baked").value) - parseInt(document.getElementById("witmeerzaden_input").value);
            newData.breadtypes[7].newInputSunday = parseInt(document.getElementById("spelt_tobe_baked").value) - parseInt(document.getElementById("spelt_input").value);
            newData.breadtypes[8].newInputSunday = parseInt(document.getElementById("roggevijgen_tobe_baked").value) - parseInt(document.getElementById("roggevijgen_input").value);
            newData.breadtypes[9].newInputSunday = parseInt(document.getElementById("roggerozijn_tobe_baked").value) - parseInt(document.getElementById("roggerozijn_input").value);
            newData.breadtypes[10].newInputSunday = parseInt(document.getElementById("haverpompoen_tobe_baked").value) - parseInt(document.getElementById("haverpompoen_input").value);

            $.each(newData.breadtypes, function (index, breadtype) {
                
                this.inputWeek1Sunday = this.inputWeek2Sunday;
                this.inputWeek2Sunday = this.inputWeek3Sunday;
                this.inputWeek3Sunday = this.inputWeek4Sunday;
                this.inputWeek4Sunday = this.newInputSunday;

            });
        }

        // Send new Data
        newData = JSON.stringify(newData);
        var xhr = new XMLHttpRequest();
        xhr.open("PUT", baseURL, true);
        xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
        xhr.onload = function () {
            if (this.readyState == 4 && this.status == 200) {

                newData = JSON.parse(newData)
                console.log(newData)

            }
            
        }
        xhr.send(newData);
        
       }
        
    })
    

})
