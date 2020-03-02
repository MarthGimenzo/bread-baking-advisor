$(document).ready(function () {

    // Amount of bread that is added to the new advice when a breadtype is sold out

    const constantAdder = 1;

    // Define BaseUrl to API

    const baseURL = "https://api.myjson.com/bins/15jrkm";

    // Define global variables

    let activeDay = 0;
    determineDay();

    let areadySubmitted;

    let viewDateTuesday;
    let viewDateWednesday;
    let viewDateThursday;
    let viewDateFriday;
    let viewDateSaturday;
    let viewDateSunday;

    let newToday;
    let newDay;
    let newMonth;
    let newYear;

    let newData;

    let adviceTuesdayDonkermeergranen;
    let adviceTuesdayZonnevolkoren;
    let adviceTuesdayWit;
    let adviceTuesdayTarwe;
    let adviceTuesdayVolkoren;
    let adviceTuesdayMais;
    let adviceTuesdayWitmeerzaden;
    let adviceTuesdaySpelt;
    let adviceTuesdayRoggevijgen;
    let adviceTuesdayRoggerozijn;
    let adviceTuesdayHaverpompoen;

    let adviceWednesdayDonkermeergranen;
    let adviceWednesdayZonnevolkoren;
    let adviceWednesdayWit;
    let adviceWednesdayTarwe;
    let adviceWednesdayVolkoren;
    let adviceWednesdayMais;
    let adviceWednesdayWitmeerzaden;
    let adviceWednesdaySpelt;
    let adviceWednesdayRoggevijgen;
    let adviceWednesdayRoggerozijn;
    let adviceWednesdayHaverpompoen;

    let adviceThursdayDonkermeergranen;
    let adviceThursdayZonnevolkoren;
    let adviceThursdayWit;
    let adviceThursdayTarwe;
    let adviceThursdayVolkoren;
    let adviceThursdayMais;
    let adviceThursdayWitmeerzaden;
    let adviceThursdaySpelt;
    let adviceThursdayRoggevijgen;
    let adviceThursdayRoggerozijn;
    let adviceThursdayHaverpompoen;

    let adviceFridayDonkermeergranen;
    let adviceFridayZonnevolkoren;
    let adviceFridayWit;
    let adviceFridayTarwe;
    let adviceFridayVolkoren;
    let adviceFridayMais;
    let adviceFridayWitmeerzaden;
    let adviceFridaySpelt;
    let adviceFridayRoggevijgen;
    let adviceFridayRoggerozijn;
    let adviceFridayHaverpompoen;

    let adviceSaturdayDonkermeergranen;
    let adviceSaturdayZonnevolkoren;
    let adviceSaturdayWit;
    let adviceSaturdayTarwe;
    let adviceSaturdayVolkoren;
    let adviceSaturdayMais;
    let adviceSaturdayWitmeerzaden;
    let adviceSaturdaySpelt;
    let adviceSaturdayRoggevijgen;
    let adviceSaturdayRoggerozijn;
    let adviceSaturdayHaverpompoen;

    let adviceSundayDonkermeergranen;
    let adviceSundayZonnevolkoren;
    let adviceSundayWit;
    let adviceSundayTarwe;
    let adviceSundayVolkoren;
    let adviceSundayMais;
    let adviceSundayWitmeerzaden;
    let adviceSundaySpelt;
    let adviceSundayRoggevijgen;
    let adviceSundayRoggerozijn;
    let adviceSundayHaverpompoen;

    // Load data from API

    function getData(cb) {

        var xhr = new XMLHttpRequest();
        xhr.open("GET", baseURL);
        xhr.send();

        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {

                cb(JSON.parse(this.responseText));
                newData = JSON.parse(this.responseText);

                // Data is loaded and newData is defined

                countAverage();
                defineDate();

            };
        };
    };

    // Define Date

    function defineDate() {

        viewDateTuesday = newData.breadtypes[0].saveDateTuesday;
        viewDateWednesday = newData.breadtypes[0].saveDateWednesday;
        viewDateThursday = newData.breadtypes[0].saveDateThursday;
        viewDateFriday = newData.breadtypes[0].saveDateFriday;
        viewDateSaturday = newData.breadtypes[0].saveDateSaturday;
        viewDateSunday = newData.breadtypes[0].saveDateSunday;

        newToday = new Date();
        newYear = newToday.getFullYear();
        newMonth = newToday.getMonth() + 1;
        newDay = newToday.getDate();
        newToday = newDay.toString() + " / " + newMonth.toString() + " / " + newYear.toString();

        changeActiveDay();
    };

    // Count averages

    function countAverage() {

        adviceTuesdayDonkermeergranen = Math.round((newData.breadtypes[0].adviceWeek1Tuesday + newData.breadtypes[0].adviceWeek2Tuesday + newData.breadtypes[0].adviceWeek3Tuesday + newData.breadtypes[0].adviceWeek4Tuesday) / 4);
        adviceTuesdayZonnevolkoren = Math.round((newData.breadtypes[1].adviceWeek1Tuesday + newData.breadtypes[1].adviceWeek2Tuesday + newData.breadtypes[1].adviceWeek3Tuesday + newData.breadtypes[1].adviceWeek4Tuesday) / 4);
        adviceTuesdayWit = Math.round((newData.breadtypes[2].adviceWeek1Tuesday + newData.breadtypes[2].adviceWeek2Tuesday + newData.breadtypes[2].adviceWeek3Tuesday + newData.breadtypes[2].adviceWeek4Tuesday) / 4);
        adviceTuesdayTarwe = Math.round((newData.breadtypes[3].adviceWeek1Tuesday + newData.breadtypes[3].adviceWeek2Tuesday + newData.breadtypes[3].adviceWeek3Tuesday + newData.breadtypes[3].adviceWeek4Tuesday) / 4);
        adviceTuesdayVolkoren = Math.round((newData.breadtypes[4].adviceWeek1Tuesday + newData.breadtypes[4].adviceWeek2Tuesday + newData.breadtypes[4].adviceWeek3Tuesday + newData.breadtypes[4].adviceWeek4Tuesday) / 4);
        adviceTuesdayMais = Math.round((newData.breadtypes[5].adviceWeek1Tuesday + newData.breadtypes[5].adviceWeek2Tuesday + newData.breadtypes[5].adviceWeek3Tuesday + newData.breadtypes[5].adviceWeek4Tuesday) / 4);
        adviceTuesdayWitmeerzaden = Math.round((newData.breadtypes[6].adviceWeek1Tuesday + newData.breadtypes[6].adviceWeek2Tuesday + newData.breadtypes[6].adviceWeek3Tuesday + newData.breadtypes[6].adviceWeek4Tuesday) / 4);
        adviceTuesdaySpelt = Math.round((newData.breadtypes[7].adviceWeek1Tuesday + newData.breadtypes[7].adviceWeek2Tuesday + newData.breadtypes[7].adviceWeek3Tuesday + newData.breadtypes[7].adviceWeek4Tuesday) / 4);
        adviceTuesdayRoggevijgen = Math.round((newData.breadtypes[8].adviceWeek1Tuesday + newData.breadtypes[8].adviceWeek2Tuesday + newData.breadtypes[8].adviceWeek3Tuesday + newData.breadtypes[8].adviceWeek4Tuesday) / 4);
        adviceTuesdayRoggerozijn = Math.round((newData.breadtypes[9].adviceWeek1Tuesday + newData.breadtypes[9].adviceWeek2Tuesday + newData.breadtypes[9].adviceWeek3Tuesday + newData.breadtypes[9].adviceWeek4Tuesday) / 4);
        adviceTuesdayHaverpompoen = Math.round((newData.breadtypes[10].adviceWeek1Tuesday + newData.breadtypes[10].adviceWeek2Tuesday + newData.breadtypes[10].adviceWeek3Tuesday + newData.breadtypes[10].adviceWeek4Tuesday) / 4);

        adviceWednesdayDonkermeergranen = Math.round((newData.breadtypes[0].adviceWeek1Wednesday + newData.breadtypes[0].adviceWeek2Wednesday + newData.breadtypes[0].adviceWeek3Wednesday + newData.breadtypes[0].adviceWeek4Wednesday) / 4);
        adviceWednesdayZonnevolkoren = Math.round((newData.breadtypes[1].adviceWeek1Wednesday + newData.breadtypes[1].adviceWeek2Wednesday + newData.breadtypes[1].adviceWeek3Wednesday + newData.breadtypes[1].adviceWeek4Wednesday) / 4);
        adviceWednesdayWit = Math.round((newData.breadtypes[2].adviceWeek1Wednesday + newData.breadtypes[2].adviceWeek2Wednesday + newData.breadtypes[2].adviceWeek3Wednesday + newData.breadtypes[2].adviceWeek4Wednesday) / 4);
        adviceWednesdayTarwe = Math.round((newData.breadtypes[3].adviceWeek1Wednesday + newData.breadtypes[3].adviceWeek2Wednesday + newData.breadtypes[3].adviceWeek3Wednesday + newData.breadtypes[3].adviceWeek4Wednesday) / 4);
        adviceWednesdayVolkoren = Math.round((newData.breadtypes[4].adviceWeek1Wednesday + newData.breadtypes[4].adviceWeek2Wednesday + newData.breadtypes[4].adviceWeek3Wednesday + newData.breadtypes[4].adviceWeek4Wednesday) / 4);
        adviceWednesdayMais = Math.round((newData.breadtypes[5].adviceWeek1Wednesday + newData.breadtypes[5].adviceWeek2Wednesday + newData.breadtypes[5].adviceWeek3Wednesday + newData.breadtypes[5].adviceWeek4Wednesday) / 4);
        adviceWednesdayWitmeerzaden = Math.round((newData.breadtypes[6].adviceWeek1Wednesday + newData.breadtypes[6].adviceWeek2Wednesday + newData.breadtypes[6].adviceWeek3Wednesday + newData.breadtypes[6].adviceWeek4Wednesday) / 4);
        adviceWednesdaySpelt = Math.round((newData.breadtypes[7].adviceWeek1Wednesday + newData.breadtypes[7].adviceWeek2Wednesday + newData.breadtypes[7].adviceWeek3Wednesday + newData.breadtypes[7].adviceWeek4Wednesday) / 4);
        adviceWednesdayRoggevijgen = Math.round((newData.breadtypes[8].adviceWeek1Wednesday + newData.breadtypes[8].adviceWeek2Wednesday + newData.breadtypes[8].adviceWeek3Wednesday + newData.breadtypes[8].adviceWeek4Wednesday) / 4);
        adviceWednesdayRoggerozijn = Math.round((newData.breadtypes[9].adviceWeek1Wednesday + newData.breadtypes[9].adviceWeek2Wednesday + newData.breadtypes[9].adviceWeek3Wednesday + newData.breadtypes[9].adviceWeek4Wednesday) / 4);
        adviceWednesdayHaverpompoen = Math.round((newData.breadtypes[10].adviceWeek1Wednesday + newData.breadtypes[10].adviceWeek2Wednesday + newData.breadtypes[10].adviceWeek3Wednesday + newData.breadtypes[10].adviceWeek4Wednesday) / 4);

        adviceThursdayDonkermeergranen = Math.round((newData.breadtypes[0].adviceWeek1Thursday + newData.breadtypes[0].adviceWeek2Thursday + newData.breadtypes[0].adviceWeek3Thursday + newData.breadtypes[0].adviceWeek4Thursday) / 4);
        adviceThursdayZonnevolkoren = Math.round((newData.breadtypes[1].adviceWeek1Thursday + newData.breadtypes[1].adviceWeek2Thursday + newData.breadtypes[1].adviceWeek3Thursday + newData.breadtypes[1].adviceWeek4Thursday) / 4);
        adviceThursdayWit = Math.round((newData.breadtypes[2].adviceWeek1Thursday + newData.breadtypes[2].adviceWeek2Thursday + newData.breadtypes[2].adviceWeek3Thursday + newData.breadtypes[2].adviceWeek4Thursday) / 4);
        adviceThursdayTarwe = Math.round((newData.breadtypes[3].adviceWeek1Thursday + newData.breadtypes[3].adviceWeek2Thursday + newData.breadtypes[3].adviceWeek3Thursday + newData.breadtypes[3].adviceWeek4Thursday) / 4);
        adviceThursdayVolkoren = Math.round((newData.breadtypes[4].adviceWeek1Thursday + newData.breadtypes[4].adviceWeek2Thursday + newData.breadtypes[4].adviceWeek3Thursday + newData.breadtypes[4].adviceWeek4Thursday) / 4);
        adviceThursdayMais = Math.round((newData.breadtypes[5].adviceWeek1Thursday + newData.breadtypes[5].adviceWeek2Thursday + newData.breadtypes[5].adviceWeek3Thursday + newData.breadtypes[5].adviceWeek4Thursday) / 4);
        adviceThursdayWitmeerzaden = Math.round((newData.breadtypes[6].adviceWeek1Thursday + newData.breadtypes[6].adviceWeek2Thursday + newData.breadtypes[6].adviceWeek3Thursday + newData.breadtypes[6].adviceWeek4Thursday) / 4);
        adviceThursdaySpelt = Math.round((newData.breadtypes[7].adviceWeek1Thursday + newData.breadtypes[7].adviceWeek2Thursday + newData.breadtypes[7].adviceWeek3Thursday + newData.breadtypes[7].adviceWeek4Thursday) / 4);
        adviceThursdayRoggevijgen = Math.round((newData.breadtypes[8].adviceWeek1Thursday + newData.breadtypes[8].adviceWeek2Thursday + newData.breadtypes[8].adviceWeek3Thursday + newData.breadtypes[8].adviceWeek4Thursday) / 4);
        adviceThursdayRoggerozijn = Math.round((newData.breadtypes[9].adviceWeek1Thursday + newData.breadtypes[9].adviceWeek2Thursday + newData.breadtypes[9].adviceWeek3Thursday + newData.breadtypes[9].adviceWeek4Thursday) / 4);
        adviceThursdayHaverpompoen = Math.round((newData.breadtypes[10].adviceWeek1Thursday + newData.breadtypes[10].adviceWeek2Thursday + newData.breadtypes[10].adviceWeek3Thursday + newData.breadtypes[10].adviceWeek4Thursday) / 4);

        adviceFridayDonkermeergranen = Math.round((newData.breadtypes[0].adviceWeek1Friday + newData.breadtypes[0].adviceWeek2Friday + newData.breadtypes[0].adviceWeek3Friday + newData.breadtypes[0].adviceWeek4Friday) / 4);
        adviceFridayZonnevolkoren = Math.round((newData.breadtypes[1].adviceWeek1Friday + newData.breadtypes[1].adviceWeek2Friday + newData.breadtypes[1].adviceWeek3Friday + newData.breadtypes[1].adviceWeek4Friday) / 4);
        adviceFridayWit = Math.round((newData.breadtypes[2].adviceWeek1Friday + newData.breadtypes[2].adviceWeek2Friday + newData.breadtypes[2].adviceWeek3Friday + newData.breadtypes[2].adviceWeek4Friday) / 4);
        adviceFridayTarwe = Math.round((newData.breadtypes[3].adviceWeek1Friday + newData.breadtypes[3].adviceWeek2Friday + newData.breadtypes[3].adviceWeek3Friday + newData.breadtypes[3].adviceWeek4Friday) / 4);
        adviceFridayVolkoren = Math.round((newData.breadtypes[4].adviceWeek1Friday + newData.breadtypes[4].adviceWeek2Friday + newData.breadtypes[4].adviceWeek3Friday + newData.breadtypes[4].adviceWeek4Friday) / 4);
        adviceFridayMais = Math.round((newData.breadtypes[5].adviceWeek1Friday + newData.breadtypes[5].adviceWeek2Friday + newData.breadtypes[5].adviceWeek3Friday + newData.breadtypes[5].adviceWeek4Friday) / 4);
        adviceFridayWitmeerzaden = Math.round((newData.breadtypes[6].adviceWeek1Friday + newData.breadtypes[6].adviceWeek2Friday + newData.breadtypes[6].adviceWeek3Friday + newData.breadtypes[6].adviceWeek4Friday) / 4);
        adviceFridaySpelt = Math.round((newData.breadtypes[7].adviceWeek1Friday + newData.breadtypes[7].adviceWeek2Friday + newData.breadtypes[7].adviceWeek3Friday + newData.breadtypes[7].adviceWeek4Friday) / 4);
        adviceFridayRoggevijgen = Math.round((newData.breadtypes[8].adviceWeek1Friday + newData.breadtypes[8].adviceWeek2Friday + newData.breadtypes[8].adviceWeek3Friday + newData.breadtypes[8].adviceWeek4Friday) / 4);
        adviceFridayRoggerozijn = Math.round((newData.breadtypes[9].adviceWeek1Friday + newData.breadtypes[9].adviceWeek2Friday + newData.breadtypes[9].adviceWeek3Friday + newData.breadtypes[9].adviceWeek4Friday) / 4);
        adviceFridayHaverpompoen = Math.round((newData.breadtypes[10].adviceWeek1Friday + newData.breadtypes[10].adviceWeek2Friday + newData.breadtypes[10].adviceWeek3Friday + newData.breadtypes[10].adviceWeek4Friday) / 4);

        adviceSaturdayDonkermeergranen = Math.round((newData.breadtypes[0].adviceWeek1Saturday + newData.breadtypes[0].adviceWeek2Saturday + newData.breadtypes[0].adviceWeek3Saturday + newData.breadtypes[0].adviceWeek4Saturday) / 4);
        adviceSaturdayZonnevolkoren = Math.round((newData.breadtypes[1].adviceWeek1Saturday + newData.breadtypes[1].adviceWeek2Saturday + newData.breadtypes[1].adviceWeek3Saturday + newData.breadtypes[1].adviceWeek4Saturday) / 4);
        adviceSaturdayWit = Math.round((newData.breadtypes[2].adviceWeek1Saturday + newData.breadtypes[2].adviceWeek2Saturday + newData.breadtypes[2].adviceWeek3Saturday + newData.breadtypes[2].adviceWeek4Saturday) / 4);
        adviceSaturdayTarwe = Math.round((newData.breadtypes[3].adviceWeek1Saturday + newData.breadtypes[3].adviceWeek2Saturday + newData.breadtypes[3].adviceWeek3Saturday + newData.breadtypes[3].adviceWeek4Saturday) / 4);
        adviceSaturdayVolkoren = Math.round((newData.breadtypes[4].adviceWeek1Saturday + newData.breadtypes[4].adviceWeek2Saturday + newData.breadtypes[4].adviceWeek3Saturday + newData.breadtypes[4].adviceWeek4Saturday) / 4);
        adviceSaturdayMais = Math.round((newData.breadtypes[5].adviceWeek1Saturday + newData.breadtypes[5].adviceWeek2Saturday + newData.breadtypes[5].adviceWeek3Saturday + newData.breadtypes[5].adviceWeek4Saturday) / 4);
        adviceSaturdayWitmeerzaden = Math.round((newData.breadtypes[6].adviceWeek1Saturday + newData.breadtypes[6].adviceWeek2Saturday + newData.breadtypes[6].adviceWeek3Saturday + newData.breadtypes[6].adviceWeek4Saturday) / 4);
        adviceSaturdaySpelt = Math.round((newData.breadtypes[7].adviceWeek1Saturday + newData.breadtypes[7].adviceWeek2Saturday + newData.breadtypes[7].adviceWeek3Saturday + newData.breadtypes[7].adviceWeek4Saturday) / 4);
        adviceSaturdayRoggevijgen = Math.round((newData.breadtypes[8].adviceWeek1Saturday + newData.breadtypes[8].adviceWeek2Saturday + newData.breadtypes[8].adviceWeek3Saturday + newData.breadtypes[8].adviceWeek4Saturday) / 4);
        adviceSaturdayRoggerozijn = Math.round((newData.breadtypes[9].adviceWeek1Saturday + newData.breadtypes[9].adviceWeek2Saturday + newData.breadtypes[9].adviceWeek3Saturday + newData.breadtypes[9].adviceWeek4Saturday) / 4);
        adviceSaturdayHaverpompoen = Math.round((newData.breadtypes[10].adviceWeek1Saturday + newData.breadtypes[10].adviceWeek2Saturday + newData.breadtypes[10].adviceWeek3Saturday + newData.breadtypes[10].adviceWeek4Saturday) / 4);

        adviceSundayDonkermeergranen = Math.round((newData.breadtypes[0].adviceWeek1Sunday + newData.breadtypes[0].adviceWeek2Sunday + newData.breadtypes[0].adviceWeek3Sunday + newData.breadtypes[0].adviceWeek4Sunday) / 4);
        adviceSundayZonnevolkoren = Math.round((newData.breadtypes[1].adviceWeek1Sunday + newData.breadtypes[1].adviceWeek2Sunday + newData.breadtypes[1].adviceWeek3Sunday + newData.breadtypes[1].adviceWeek4Sunday) / 4);
        adviceSundayWit = Math.round((newData.breadtypes[2].adviceWeek1Sunday + newData.breadtypes[2].adviceWeek2Sunday + newData.breadtypes[2].adviceWeek3Sunday + newData.breadtypes[2].adviceWeek4Sunday) / 4);
        adviceSundayTarwe = Math.round((newData.breadtypes[3].adviceWeek1Sunday + newData.breadtypes[3].adviceWeek2Sunday + newData.breadtypes[3].adviceWeek3Sunday + newData.breadtypes[3].adviceWeek4Sunday) / 4);
        adviceSundayVolkoren = Math.round((newData.breadtypes[4].adviceWeek1Sunday + newData.breadtypes[4].adviceWeek2Sunday + newData.breadtypes[4].adviceWeek3Sunday + newData.breadtypes[4].adviceWeek4Sunday) / 4);
        adviceSundayMais = Math.round((newData.breadtypes[5].adviceWeek1Sunday + newData.breadtypes[5].adviceWeek2Sunday + newData.breadtypes[5].adviceWeek3Sunday + newData.breadtypes[5].adviceWeek4Sunday) / 4);
        adviceSundayWitmeerzaden = Math.round((newData.breadtypes[6].adviceWeek1Sunday + newData.breadtypes[6].adviceWeek2Sunday + newData.breadtypes[6].adviceWeek3Sunday + newData.breadtypes[6].adviceWeek4Sunday) / 4);
        adviceSundaySpelt = Math.round((newData.breadtypes[7].adviceWeek1Sunday + newData.breadtypes[7].adviceWeek2Sunday + newData.breadtypes[7].adviceWeek3Sunday + newData.breadtypes[7].adviceWeek4Sunday) / 4);
        adviceSundayRoggevijgen = Math.round((newData.breadtypes[8].adviceWeek1Sunday + newData.breadtypes[8].adviceWeek2Sunday + newData.breadtypes[8].adviceWeek3Sunday + newData.breadtypes[8].adviceWeek4Sunday) / 4);
        adviceSundayRoggerozijn = Math.round((newData.breadtypes[9].adviceWeek1Sunday + newData.breadtypes[9].adviceWeek2Sunday + newData.breadtypes[9].adviceWeek3Sunday + newData.breadtypes[9].adviceWeek4Sunday) / 4);
        adviceSundayHaverpompoen = Math.round((newData.breadtypes[10].adviceWeek1Sunday + newData.breadtypes[10].adviceWeek2Sunday + newData.breadtypes[10].adviceWeek3Sunday + newData.breadtypes[10].adviceWeek4Sunday) / 4);
        
        // Check here if bread advice of certain type is 2 or less. Then change it to 3.
        // The Bakery Cafe wants a minimum amount of bread baked of every type every day.

        if (adviceTuesdayDonkermeergranen < 3) { adviceTuesdayDonkermeergranen = 3 };
        if (adviceTuesdayZonnevolkoren < 3) { adviceTuesdayZonnevolkoren = 3 };
        if (adviceTuesdayWit < 3) { adviceTuesdayWit = 3 };
        if (adviceTuesdayTarwe < 3) { adviceTuesdayTarwe = 3 };
        if (adviceTuesdayVolkoren < 3) { adviceTuesdayVolkoren = 3 };
        if (adviceTuesdayMais < 3) { adviceTuesdayMais = 3 };
        if (adviceTuesdayWitmeerzaden < 3) { adviceTuesdayWitmeerzaden = 3 };
        if (adviceTuesdaySpelt < 3) { adviceTuesdaySpelt = 3 };
        if (adviceTuesdayRoggevijgen < 3) { adviceTuesdayRoggevijgen = 3 };
        if (adviceTuesdayRoggerozijn < 3) { adviceTuesdayRoggerozijn = 3 };
        if (adviceTuesdayHaverpompoen < 3) { adviceTuesdayHaverpompoen = 3 };

        if (adviceWednesdayDonkermeergranen < 3) { adviceWednesdayDonkermeergranen = 3 };
        if (adviceWednesdayZonnevolkoren < 3) { adviceWednesdayZonnevolkoren = 3 };
        if (adviceWednesdayWit < 3) { adviceWednesdayWit = 3 };
        if (adviceWednesdayTarwe < 3) { adviceWednesdayTarwe = 3 };
        if (adviceWednesdayVolkoren < 3) { adviceWednesdayVolkoren = 3 };
        if (adviceWednesdayMais < 3) { adviceWednesdayMais = 3 };
        if (adviceWednesdayWitmeerzaden < 3) { adviceWednesdayWitmeerzaden = 3 };
        if (adviceWednesdaySpelt < 3) { adviceWednesdaySpelt = 3 };
        if (adviceWednesdayRoggevijgen < 3) { adviceWednesdayRoggevijgen = 3 };
        if (adviceWednesdayRoggerozijn < 3) { adviceWednesdayRoggerozijn = 3 };
        if (adviceWednesdayHaverpompoen < 3) { adviceWednesdayHaverpompoen = 3 };

        if (adviceThursdayDonkermeergranen < 3) { adviceThursdayDonkermeergranen = 3 };
        if (adviceThursdayZonnevolkoren < 3) { adviceThursdayZonnevolkoren = 3 };
        if (adviceThursdayWit < 3) { adviceThursdayWit = 3 };
        if (adviceThursdayTarwe < 3) { adviceThursdayTarwe = 3 };
        if (adviceThursdayVolkoren < 3) { adviceThursdayVolkoren = 3 };
        if (adviceThursdayMais < 3) { adviceThursdayMais = 3 };
        if (adviceThursdayWitmeerzaden < 3) { adviceThursdayWitmeerzaden = 3 };
        if (adviceThursdaySpelt < 3) { adviceThursdaySpelt = 3 };
        if (adviceThursdayRoggevijgen < 3) { adviceThursdayRoggevijgen = 3 };
        if (adviceThursdayRoggerozijn < 3) { adviceThursdayRoggerozijn = 3 };
        if (adviceThursdayHaverpompoen < 3) { adviceThursdayHaverpompoen = 3 };

        if (adviceFridayDonkermeergranen < 3) { adviceFridayDonkermeergranen = 3 };
        if (adviceFridayZonnevolkoren < 3) { adviceFridayZonnevolkoren = 3 };
        if (adviceFridayWit < 3) { adviceFridayWit = 3 };
        if (adviceFridayTarwe < 3) { adviceFridayTarwe = 3 };
        if (adviceFridayVolkoren < 3) { adviceFridayVolkoren = 3 };
        if (adviceFridayMais < 3) { adviceFridayMais = 3 };
        if (adviceFridayWitmeerzaden < 3) { adviceFridayWitmeerzaden = 3 };
        if (adviceFridaySpelt < 3) { adviceFridaySpelt = 3 };
        if (adviceFridayRoggevijgen < 3) { adviceFridayRoggevijgen = 3 };
        if (adviceFridayRoggerozijn < 3) { adviceFridayRoggerozijn = 3 };
        if (adviceFridayHaverpompoen < 3) { adviceFridayHaverpompoen = 3 };

        if (adviceSaturdayDonkermeergranen < 3) { adviceSaturdayDonkermeergranen = 3 };
        if (adviceSaturdayZonnevolkoren < 3) { adviceSaturdayZonnevolkoren = 3 };
        if (adviceSaturdayWit < 3) { adviceSaturdayWit = 3 };
        if (adviceSaturdayTarwe < 3) { adviceSaturdayTarwe = 3 };
        if (adviceSaturdayVolkoren < 3) { adviceSaturdayVolkoren = 3 };
        if (adviceSaturdayMais < 3) { adviceSaturdayMais = 3 };
        if (adviceSaturdayWitmeerzaden < 3) { adviceSaturdayWitmeerzaden = 3 };
        if (adviceSaturdaySpelt < 3) { adviceSaturdaySpelt = 3 };
        if (adviceSaturdayRoggevijgen < 3) { adviceSaturdayRoggevijgen = 3 };
        if (adviceSaturdayRoggerozijn < 3) { adviceSaturdayRoggerozijn = 3 };
        if (adviceSaturdayHaverpompoen < 3) { adviceSaturdayHaverpompoen = 3 };

        if (adviceSundayDonkermeergranen < 3) { adviceSundayDonkermeergranen = 3 };
        if (adviceSundayZonnevolkoren < 3) { adviceSundayZonnevolkoren = 3 };
        if (adviceSundayWit < 3) { adviceSundayWit = 3 };
        if (adviceSundayTarwe < 3) { adviceSundayTarwe = 3 };
        if (adviceSundayVolkoren < 3) { adviceSundayVolkoren = 3 };
        if (adviceSundayMais < 3) { adviceSundayMais = 3 };
        if (adviceSundayWitmeerzaden < 3) { adviceSundayWitmeerzaden = 3 };
        if (adviceSundaySpelt < 3) { adviceSundaySpelt = 3 };
        if (adviceSundayRoggevijgen < 3) { adviceSundayRoggevijgen = 3 };
        if (adviceSundayRoggerozijn < 3) { adviceSundayRoggerozijn = 3 };
        if (adviceSundayHaverpompoen < 3) { adviceSundayHaverpompoen = 3 };

    }

    getData(function (data) {
        
        changeActiveDay();
    });

    // Determine day of the week

    function determineDay() {

        var d = new Date();
        var weekday = new Array(7);
        weekday[0] = "Zondag";
        weekday[1] = "Maandag";
        weekday[2] = "Dinsdag";
        weekday[3] = "Woensdag";
        weekday[4] = "Donderdag";
        weekday[5] = "Vrijdag";
        weekday[6] = "Zaterdag";

        var today = weekday[d.getDay()];

        // Change active Dropdown Menu Item to current day of the week

        if (today == "Maandag") {
            $("#tuesday").addClass("active");
            $("#wednesday, #thursday, #friday, #saturday, #sunday").removeClass("active");
            activeDay = 2;
            $("#dropdownMenuButton").text("Dinsdag");
        }
        if (today == "Dinsdag") {
            $("#tuesday").addClass("active");
            $("#wednesday, #thursday, #friday, #saturday, #sunday").removeClass("active");
            activeDay = 2;
            $("#dropdownMenuButton").text("Dinsdag");
        }
        if (today == "Woensdag") {
            $("#wednesday").addClass("active");
            $("#tuesday, #thursday, #friday, #saturday, #sunday").removeClass("active");
            activeDay = 3;
            $("#dropdownMenuButton").text("Woensdag");
        }
        if (today == "Donderdag") {
            $("#thursday").addClass("active");
            $("#tuesday, #wednesday, #friday, #saturday, #sunday").removeClass("active");
            activeDay = 4;
            $("#dropdownMenuButton").text("Donderdag");
        }
        if (today == "Vrijdag") {
            $("#friday").addClass("active");
            $("#tuesday, #wednesday, #thursday, #saturday, #sunday").removeClass("active");
            activeDay = 5;
            $("#dropdownMenuButton").text("Vrijdag");
        }
        if (today == "Zaterdag") {
            $("#saturday").addClass("active");
            $("#tuesday, #wednesday, #thursday, #friday, #sunday").removeClass("active");
            activeDay = 6;
            $("#dropdownMenuButton").text("Zaterdag");
        }
        if (today == "Zondag") {
            $("#sunday").addClass("active");
            $("#tuesday, #wednesday, #thursday, #friday, #saturday").removeClass("active");
            activeDay = 0;
            $("#dropdownMenuButton").text("Zondag");
        }
        if (today == "Maandag") {
            $("#tuesday, #wednesday, #thursday, #friday, #saturday, #sunday").removeClass("active");
            activeDay = 1;
            $("#dropdownMenuButton").text("Kies een dag!");
        }

        // Change active Dropdown Menu Item to selected day

        $("#tuesday").on("click", function () {
            $("#tuesday").addClass("active");
            $("#wednesday, #thursday, #friday, #saturday, #sunday").removeClass("active");
            activeDay = 2;
            $("#dropdownMenuButton").text("Dinsdag");
            changeActiveDay();

        })
        $("#wednesday").on("click", function () {
            $("#wednesday").addClass("active");
            $("#tuesday, #thursday, #friday, #saturday, #sunday").removeClass("active");
            activeDay = 3;
            $("#dropdownMenuButton").text("Woensdag");
            changeActiveDay();

        })
        $("#thursday").on("click", function () {
            $("#thursday").addClass("active");
            $("#tuesday, #wednesday, #friday, #saturday, #sunday").removeClass("active");
            activeDay = 4;
            $("#dropdownMenuButton").text("Donderdag");
            changeActiveDay();
        })
        $("#friday").on("click", function () {
            $("#friday").addClass("active");
            $("#tuesday, #wednesday, #thursday, #saturday, #sunday").removeClass("active");
            activeDay = 5;
            $("#dropdownMenuButton").text("Vrijdag");
            changeActiveDay();
        })
        $("#saturday").on("click", function () {
            $("#saturday").addClass("active");
            $("#tuesday, #wednesday, #thursday, #friday, #sunday").removeClass("active");
            activeDay = 6;
            $("#dropdownMenuButton").text("Zaterdag");
            changeActiveDay();
        })
        $("#sunday").on("click", function () {
            $("#sunday").addClass("active");
            $("#tuesday, #wednesday, #thursday, #friday, #saturday").removeClass("active");
            activeDay = 0;
            $("#dropdownMenuButton").text("Zondag");
            changeActiveDay();
        })
    }

    // Show current bread advice

    function changeActiveDay() {
        
        areadySubmitted = false;
        $("#submit").css("background-color", "#e68a2b").css("border-color", "#e68a2b").text("Gegevens versturen!");

        if (activeDay == 2) {
            $("#thisdate").text(viewDateTuesday);
            if (newToday == viewDateTuesday) {
                areadySubmitted = true;
                $("#submit").css("background-color", "#6c757d").css("border-color", "#6c757d").text("Vandaag al doorgegeven!");
            }

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
            $("#thisdate").text(viewDateWednesday);
            if (newToday == viewDateWednesday) {
                areadySubmitted = true;
                $("#submit").css("background-color", "#6c757d").css("border-color", "#6c757d").text("Vandaag al doorgegeven!");
            }

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
            $("#thisdate").text(viewDateThursday);
            if (newToday == viewDateThursday) {
                areadySubmitted = true;
                $("#submit").css("background-color", "#6c757d").css("border-color", "#6c757d").text("Vandaag al doorgegeven!");
            }

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
            $("#thisdate").text(viewDateFriday);
            if (newToday == viewDateFriday) {
                areadySubmitted = true;
                $("#submit").css("background-color", "#6c757d").css("border-color", "#6c757d").text("Vandaag al doorgegeven!");
            }

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
            $("#thisdate").text(viewDateSaturday);
            if (newToday == viewDateSaturday) {
                areadySubmitted = true;
                $("#submit").css("background-color", "#6c757d").css("border-color", "#6c757d").text("Vandaag al doorgegeven!");
            }

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
            $("#thisdate").text(viewDateSunday);
            if (newToday == viewDateSunday) {
                areadySubmitted = true;
                $("#submit").css("background-color", "#6c757d").css("border-color", "#6c757d").text("Vandaag al doorgegeven!");
            }

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

    // User clicks on Submit

    $("#submit").on("click", function () {

        checkIfDataIsValid();

    })


    // Check if inputted data is valid

    function checkIfDataIsValid() {

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

        // Check if leftover bread is not empty

        if ((document.getElementById("donkermeergranen_input").value) === "" ||
            (document.getElementById("zonnevolkoren_input").value) === "" ||
            (document.getElementById("wit_input").value) === "" ||
            (document.getElementById("tarwe_input").value) === "" ||
            (document.getElementById("volkoren_input").value) === "" ||
            (document.getElementById("mais_input").value) === "" ||
            (document.getElementById("witmeerzaden_input").value) === "" ||
            (document.getElementById("spelt_input").value) === "" ||
            (document.getElementById("roggevijgen_input").value) === "" ||
            (document.getElementById("roggerozijn_input").value) === "" ||
            (document.getElementById("haverpompoen_input").value) === "") {

            $("#leftoverbreadcantbeminuszero").slideUp(100);
            $("#leftoverbreadcantbehigher").slideUp(100);
            $("#leftoverbreadinteger").slideUp(100);
            $("#leftoverbreadforty").slideUp(100);

            $("#leftoverbreadshouldbevalue").slideDown(100);

        }

        // Check if leftover bread is an integer

        else if (Number.isInteger(checkcorrectvalues1) === false ||
            (Number.isInteger(checkcorrectvalues2) === false) ||
            (Number.isInteger(checkcorrectvalues3) === false) ||
            (Number.isInteger(checkcorrectvalues4) === false) ||
            (Number.isInteger(checkcorrectvalues5) === false) ||
            (Number.isInteger(checkcorrectvalues6) === false) ||
            (Number.isInteger(checkcorrectvalues7) === false) ||
            (Number.isInteger(checkcorrectvalues8) === false) ||
            (Number.isInteger(checkcorrectvalues9) === false) ||
            (Number.isInteger(checkcorrectvalues10) === false) ||
            (Number.isInteger(checkcorrectvalues11) === false)) {

            $("#leftoverbreadcantbeminuszero").slideUp(100);
            $("#leftoverbreadcantbehigher").slideUp(100);
            $("#leftoverbreadshouldbevalue").slideUp(100);
            $("#leftoverbreadforty").slideUp(100);

            $("#leftoverbreadinteger").slideDown(100);

        }

        // Check if leftover bread is not -0

        else if ((document.getElementById("donkermeergranen_input").value) < 0 ||
            (document.getElementById("zonnevolkoren_input").value) < 0 ||
            (document.getElementById("wit_input").value) < 0 ||
            (document.getElementById("tarwe_input").value) < 0 ||
            (document.getElementById("volkoren_input").value) < 0 ||
            (document.getElementById("mais_input").value) < 0 ||
            (document.getElementById("witmeerzaden_input").value) < 0 ||
            (document.getElementById("spelt_input").value) < 0 ||
            (document.getElementById("roggevijgen_input").value) < 0 ||
            (document.getElementById("roggerozijn_input").value) < 0 ||
            (document.getElementById("haverpompoen_input").value) < 0) {

            $("#leftoverbreadshouldbevalue").slideUp(100);
            $("#leftoverbreadcantbehigher").slideUp(100);
            $("#leftoverbreadinteger").slideUp(100);
            $("#leftoverbreadforty").slideUp(100);

            $("#leftoverbreadcantbeminuszero").slideDown(100);

        }

        // Check if inputted values are between 0 and 40

        else if ((document.getElementById("donkermeergranen_input").value) < 0 || (document.getElementById("donkermeergranen_input").value) > 40 ||
            (document.getElementById("zonnevolkoren_input").value) < 0 || (document.getElementById("zonnevolkoren_input").value) > 40 ||
            (document.getElementById("wit_input").value) < 0 || (document.getElementById("wit_input").value) > 40 ||
            (document.getElementById("tarwe_input").value) < 0 || (document.getElementById("tarwe_input").value) > 40 ||
            (document.getElementById("volkoren_input").value) < 0 || (document.getElementById("volkoren_input").value) > 40 ||
            (document.getElementById("mais_input").value) < 0 || (document.getElementById("mais_input").value) > 40 ||
            (document.getElementById("witmeerzaden_input").value) < 0 || (document.getElementById("witmeerzaden_input").value) > 40 ||
            (document.getElementById("spelt_input").value) < 0 || (document.getElementById("spelt_input").value) > 40 ||
            (document.getElementById("roggevijgen_input").value) < 0 || (document.getElementById("roggevijgen_input").value) > 40 ||
            (document.getElementById("roggerozijn_input").value) < 0 || (document.getElementById("roggerozijn_input").value) > 40 ||
            (document.getElementById("haverpompoen_input").value) < 0 || (document.getElementById("haverpompoen_input").value) > 40) {

            $("#leftoverbreadcantbeminuszero").slideUp(100);
            $("#leftoverbreadcantbehigher").slideUp(100);
            $("#leftoverbreadshouldbevalue").slideUp(100);
            $("#leftoverbreadinteger").slideUp(100);

            $("#leftoverbreadforty").slideDown(100);

        }

        // Check if leftover bread is not more than baked bread

        else if (checkcorrectvalues1 < 0 ||
            checkcorrectvalues2 < 0 ||
            checkcorrectvalues3 < 0 ||
            checkcorrectvalues4 < 0 ||
            checkcorrectvalues5 < 0 ||
            checkcorrectvalues6 < 0 ||
            checkcorrectvalues7 < 0 ||
            checkcorrectvalues8 < 0 ||
            checkcorrectvalues9 < 0 ||
            checkcorrectvalues10 < 0 ||
            checkcorrectvalues11 < 0) {

            $("#leftoverbreadshouldbevalue").slideUp(100);
            $("#leftoverbreadcantbeminuszero").slideUp(100);
            $("#leftoverbreadinteger").slideUp(100);
            $("#leftoverbreadforty").slideUp(100);

            $("#leftoverbreadcantbehigher").slideDown(100);

        }


        // Check if the user has already submitted data for this day today

        else {
            if (areadySubmitted == true) {
                $('#alreadySaved').modal();
            }
            else {
                $('#confirmModal').modal();
            }

        };
    }

    $("#savedata").on("click", function () {
        $("#spinner").show();
        $("#modalbodytext").hide();
        $("#closebutton").hide();
        $("#savedata").hide();
        $("#exampleModalLabel").hide();
        $("#savingheader").show();

        sendValidData();

    });

    // Define Valid Data to be sent

    function sendValidData() {
        
        if (activeDay == 2) {
            newData.breadtypes[0].saveDateTuesday = newToday;

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

                this.adviceWeek1Tuesday = this.adviceWeek2Tuesday;
                this.adviceWeek2Tuesday = this.adviceWeek3Tuesday;
                this.adviceWeek3Tuesday = this.adviceWeek4Tuesday;

            });

            if (parseInt(document.getElementById("donkermeergranen_input").value) == 0) {
                newData.breadtypes[0].adviceWeek4Tuesday = parseInt(document.getElementById("donkermeergranen_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[0].adviceWeek4Tuesday = newData.breadtypes[0].newInputTuesday };

            if (parseInt(document.getElementById("zonnevolkoren_input").value) == 0) {
                newData.breadtypes[1].adviceWeek4Tuesday = parseInt(document.getElementById("zonnevolkoren_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[1].adviceWeek4Tuesday = newData.breadtypes[1].newInputTuesday };

            if (parseInt(document.getElementById("wit_input").value) == 0) {
                newData.breadtypes[2].adviceWeek4Tuesday = parseInt(document.getElementById("wit_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[2].adviceWeek4Tuesday = newData.breadtypes[2].newInputTuesday };

            if (parseInt(document.getElementById("tarwe_input").value) == 0) {
                newData.breadtypes[3].adviceWeek4Tuesday = parseInt(document.getElementById("tarwe_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[3].adviceWeek4Tuesday = newData.breadtypes[3].newInputTuesday };

            if (parseInt(document.getElementById("volkoren_input").value) == 0) {
                newData.breadtypes[4].adviceWeek4Tuesday = parseInt(document.getElementById("volkoren_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[4].adviceWeek4Tuesday = newData.breadtypes[4].newInputTuesday };

            if (parseInt(document.getElementById("mais_input").value) == 0) {
                newData.breadtypes[5].adviceWeek4Tuesday = parseInt(document.getElementById("mais_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[5].adviceWeek4Tuesday = newData.breadtypes[5].newInputTuesday };

            if (parseInt(document.getElementById("witmeerzaden_input").value) == 0) {
                newData.breadtypes[6].adviceWeek4Tuesday = parseInt(document.getElementById("witmeerzaden_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[6].adviceWeek4Tuesday = newData.breadtypes[6].newInputTuesday };

            if (parseInt(document.getElementById("spelt_input").value) == 0) {
                newData.breadtypes[7].adviceWeek4Tuesday = parseInt(document.getElementById("spelt_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[7].adviceWeek4Tuesday = newData.breadtypes[7].newInputTuesday };

            if (parseInt(document.getElementById("roggevijgen_input").value) == 0) {
                newData.breadtypes[8].adviceWeek4Tuesday = parseInt(document.getElementById("roggevijgen_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[8].adviceWeek4Tuesday = newData.breadtypes[8].newInputTuesday };

            if (parseInt(document.getElementById("roggerozijn_input").value) == 0) {
                newData.breadtypes[9].adviceWeek4Tuesday = parseInt(document.getElementById("roggerozijn_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[9].adviceWeek4Tuesday = newData.breadtypes[9].newInputTuesday };

            if (parseInt(document.getElementById("haverpompoen_input").value) == 0) {
                newData.breadtypes[10].adviceWeek4Tuesday = parseInt(document.getElementById("haverpompoen_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[10].adviceWeek4Tuesday = newData.breadtypes[10].newInputTuesday };

        };

        if (activeDay == 3) {
            newData.breadtypes[0].saveDateWednesday = newToday;

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

                this.adviceWeek1Wednesday = this.adviceWeek2Wednesday;
                this.adviceWeek2Wednesday = this.adviceWeek3Wednesday;
                this.adviceWeek3Wednesday = this.adviceWeek4Wednesday;

            });

            if (parseInt(document.getElementById("donkermeergranen_input").value) == 0) {
                newData.breadtypes[0].adviceWeek4Wednesday = parseInt(document.getElementById("donkermeergranen_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[0].adviceWeek4Wednesday = newData.breadtypes[0].newInputWednesday };

            if (parseInt(document.getElementById("zonnevolkoren_input").value) == 0) {
                newData.breadtypes[1].adviceWeek4Wednesday = parseInt(document.getElementById("zonnevolkoren_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[1].adviceWeek4Wednesday = newData.breadtypes[1].newInputWednesday };

            if (parseInt(document.getElementById("wit_input").value) == 0) {
                newData.breadtypes[2].adviceWeek4Wednesday = parseInt(document.getElementById("wit_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[2].adviceWeek4Wednesday = newData.breadtypes[2].newInputWednesday };

            if (parseInt(document.getElementById("tarwe_input").value) == 0) {
                newData.breadtypes[3].adviceWeek4Wednesday = parseInt(document.getElementById("tarwe_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[3].adviceWeek4Wednesday = newData.breadtypes[3].newInputWednesday };

            if (parseInt(document.getElementById("volkoren_input").value) == 0) {
                newData.breadtypes[4].adviceWeek4Wednesday = parseInt(document.getElementById("volkoren_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[4].adviceWeek4Wednesday = newData.breadtypes[4].newInputWednesday };

            if (parseInt(document.getElementById("mais_input").value) == 0) {
                newData.breadtypes[5].adviceWeek4Wednesday = parseInt(document.getElementById("mais_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[5].adviceWeek4Wednesday = newData.breadtypes[5].newInputWednesday };

            if (parseInt(document.getElementById("witmeerzaden_input").value) == 0) {
                newData.breadtypes[6].adviceWeek4Wednesday = parseInt(document.getElementById("witmeerzaden_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[6].adviceWeek4Wednesday = newData.breadtypes[6].newInputWednesday };

            if (parseInt(document.getElementById("spelt_input").value) == 0) {
                newData.breadtypes[7].adviceWeek4Wednesday = parseInt(document.getElementById("spelt_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[7].adviceWeek4Wednesday = newData.breadtypes[7].newInputWednesday };

            if (parseInt(document.getElementById("roggevijgen_input").value) == 0) {
                newData.breadtypes[8].adviceWeek4Wednesday = parseInt(document.getElementById("roggevijgen_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[8].adviceWeek4Wednesday = newData.breadtypes[8].newInputWednesday };

            if (parseInt(document.getElementById("roggerozijn_input").value) == 0) {
                newData.breadtypes[9].adviceWeek4Wednesday = parseInt(document.getElementById("roggerozijn_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[9].adviceWeek4Wednesday = newData.breadtypes[9].newInputWednesday };

            if (parseInt(document.getElementById("haverpompoen_input").value) == 0) {
                newData.breadtypes[10].adviceWeek4Wednesday = parseInt(document.getElementById("haverpompoen_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[10].adviceWeek4Wednesday = newData.breadtypes[10].newInputWednesday };

        };

        if (activeDay == 4) {
            newData.breadtypes[0].saveDateThursday = newToday;

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

                this.adviceWeek1Thursday = this.adviceWeek2Thursday;
                this.adviceWeek2Thursday = this.adviceWeek3Thursday;
                this.adviceWeek3Thursday = this.adviceWeek4Thursday;

            });

            if (parseInt(document.getElementById("donkermeergranen_input").value) == 0) {
                newData.breadtypes[0].adviceWeek4Thursday = parseInt(document.getElementById("donkermeergranen_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[0].adviceWeek4Thursday = newData.breadtypes[0].newInputThursday };

            if (parseInt(document.getElementById("zonnevolkoren_input").value) == 0) {
                newData.breadtypes[1].adviceWeek4Thursday = parseInt(document.getElementById("zonnevolkoren_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[1].adviceWeek4Thursday = newData.breadtypes[1].newInputThursday };

            if (parseInt(document.getElementById("wit_input").value) == 0) {
                newData.breadtypes[2].adviceWeek4Thursday = parseInt(document.getElementById("wit_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[2].adviceWeek4Thursday = newData.breadtypes[2].newInputThursday };

            if (parseInt(document.getElementById("tarwe_input").value) == 0) {
                newData.breadtypes[3].adviceWeek4Thursday = parseInt(document.getElementById("tarwe_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[3].adviceWeek4Thursday = newData.breadtypes[3].newInputThursday };

            if (parseInt(document.getElementById("volkoren_input").value) == 0) {
                newData.breadtypes[4].adviceWeek4Thursday = parseInt(document.getElementById("volkoren_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[4].adviceWeek4Thursday = newData.breadtypes[4].newInputThursday };

            if (parseInt(document.getElementById("mais_input").value) == 0) {
                newData.breadtypes[5].adviceWeek4Thursday = parseInt(document.getElementById("mais_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[5].adviceWeek4Thursday = newData.breadtypes[5].newInputThursday };

            if (parseInt(document.getElementById("witmeerzaden_input").value) == 0) {
                newData.breadtypes[6].adviceWeek4Thursday = parseInt(document.getElementById("witmeerzaden_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[6].adviceWeek4Thursday = newData.breadtypes[6].newInputThursday };

            if (parseInt(document.getElementById("spelt_input").value) == 0) {
                newData.breadtypes[7].adviceWeek4Thursday = parseInt(document.getElementById("spelt_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[7].adviceWeek4Thursday = newData.breadtypes[7].newInputThursday };

            if (parseInt(document.getElementById("roggevijgen_input").value) == 0) {
                newData.breadtypes[8].adviceWeek4Thursday = parseInt(document.getElementById("roggevijgen_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[8].adviceWeek4Thursday = newData.breadtypes[8].newInputThursday };

            if (parseInt(document.getElementById("roggerozijn_input").value) == 0) {
                newData.breadtypes[9].adviceWeek4Thursday = parseInt(document.getElementById("roggerozijn_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[9].adviceWeek4Thursday = newData.breadtypes[9].newInputThursday };

            if (parseInt(document.getElementById("haverpompoen_input").value) == 0) {
                newData.breadtypes[10].adviceWeek4Thursday = parseInt(document.getElementById("haverpompoen_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[10].adviceWeek4Thursday = newData.breadtypes[10].newInputThursday };

        };

        if (activeDay == 5) {
            newData.breadtypes[0].saveDateFriday = newToday;

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

                this.adviceWeek1Friday = this.adviceWeek2Friday;
                this.adviceWeek2Friday = this.adviceWeek3Friday;
                this.adviceWeek3Friday = this.adviceWeek4Friday;

            });

            if (parseInt(document.getElementById("donkermeergranen_input").value) == 0) {
                newData.breadtypes[0].adviceWeek4Friday = parseInt(document.getElementById("donkermeergranen_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[0].adviceWeek4Friday = newData.breadtypes[0].newInputFriday };

            if (parseInt(document.getElementById("zonnevolkoren_input").value) == 0) {
                newData.breadtypes[1].adviceWeek4Friday = parseInt(document.getElementById("zonnevolkoren_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[1].adviceWeek4Friday = newData.breadtypes[1].newInputFriday };

            if (parseInt(document.getElementById("wit_input").value) == 0) {
                newData.breadtypes[2].adviceWeek4Friday = parseInt(document.getElementById("wit_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[2].adviceWeek4Friday = newData.breadtypes[2].newInputFriday };

            if (parseInt(document.getElementById("tarwe_input").value) == 0) {
                newData.breadtypes[3].adviceWeek4Friday = parseInt(document.getElementById("tarwe_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[3].adviceWeek4Friday = newData.breadtypes[3].newInputFriday };

            if (parseInt(document.getElementById("volkoren_input").value) == 0) {
                newData.breadtypes[4].adviceWeek4Friday = parseInt(document.getElementById("volkoren_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[4].adviceWeek4Friday = newData.breadtypes[4].newInputFriday };

            if (parseInt(document.getElementById("mais_input").value) == 0) {
                newData.breadtypes[5].adviceWeek4Friday = parseInt(document.getElementById("mais_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[5].adviceWeek4Friday = newData.breadtypes[5].newInputFriday };

            if (parseInt(document.getElementById("witmeerzaden_input").value) == 0) {
                newData.breadtypes[6].adviceWeek4Friday = parseInt(document.getElementById("witmeerzaden_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[6].adviceWeek4Friday = newData.breadtypes[6].newInputFriday };

            if (parseInt(document.getElementById("spelt_input").value) == 0) {
                newData.breadtypes[7].adviceWeek4Friday = parseInt(document.getElementById("spelt_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[7].adviceWeek4Friday = newData.breadtypes[7].newInputFriday };

            if (parseInt(document.getElementById("roggevijgen_input").value) == 0) {
                newData.breadtypes[8].adviceWeek4Friday = parseInt(document.getElementById("roggevijgen_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[8].adviceWeek4Friday = newData.breadtypes[8].newInputFriday };

            if (parseInt(document.getElementById("roggerozijn_input").value) == 0) {
                newData.breadtypes[9].adviceWeek4Friday = parseInt(document.getElementById("roggerozijn_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[9].adviceWeek4Friday = newData.breadtypes[9].newInputFriday };

            if (parseInt(document.getElementById("haverpompoen_input").value) == 0) {
                newData.breadtypes[10].adviceWeek4Friday = parseInt(document.getElementById("haverpompoen_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[10].adviceWeek4Friday = newData.breadtypes[10].newInputFriday };

        };

        if (activeDay == 6) {
            newData.breadtypes[0].saveDateSaturday = newToday;

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

                this.adviceWeek1Saturday = this.adviceWeek2Saturday;
                this.adviceWeek2Saturday = this.adviceWeek3Saturday;
                this.adviceWeek3Saturday = this.adviceWeek4Saturday;

            });

            if (parseInt(document.getElementById("donkermeergranen_input").value) == 0) {
                newData.breadtypes[0].adviceWeek4Saturday = parseInt(document.getElementById("donkermeergranen_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[0].adviceWeek4Saturday = newData.breadtypes[0].newInputSaturday };

            if (parseInt(document.getElementById("zonnevolkoren_input").value) == 0) {
                newData.breadtypes[1].adviceWeek4Saturday = parseInt(document.getElementById("zonnevolkoren_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[1].adviceWeek4Saturday = newData.breadtypes[1].newInputSaturday };

            if (parseInt(document.getElementById("wit_input").value) == 0) {
                newData.breadtypes[2].adviceWeek4Saturday = parseInt(document.getElementById("wit_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[2].adviceWeek4Saturday = newData.breadtypes[2].newInputSaturday };

            if (parseInt(document.getElementById("tarwe_input").value) == 0) {
                newData.breadtypes[3].adviceWeek4Saturday = parseInt(document.getElementById("tarwe_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[3].adviceWeek4Saturday = newData.breadtypes[3].newInputSaturday };

            if (parseInt(document.getElementById("volkoren_input").value) == 0) {
                newData.breadtypes[4].adviceWeek4Saturday = parseInt(document.getElementById("volkoren_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[4].adviceWeek4Saturday = newData.breadtypes[4].newInputSaturday };

            if (parseInt(document.getElementById("mais_input").value) == 0) {
                newData.breadtypes[5].adviceWeek4Saturday = parseInt(document.getElementById("mais_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[5].adviceWeek4Saturday = newData.breadtypes[5].newInputSaturday };

            if (parseInt(document.getElementById("witmeerzaden_input").value) == 0) {
                newData.breadtypes[6].adviceWeek4Saturday = parseInt(document.getElementById("witmeerzaden_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[6].adviceWeek4Saturday = newData.breadtypes[6].newInputSaturday };

            if (parseInt(document.getElementById("spelt_input").value) == 0) {
                newData.breadtypes[7].adviceWeek4Saturday = parseInt(document.getElementById("spelt_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[7].adviceWeek4Saturday = newData.breadtypes[7].newInputSaturday };

            if (parseInt(document.getElementById("roggevijgen_input").value) == 0) {
                newData.breadtypes[8].adviceWeek4Saturday = parseInt(document.getElementById("roggevijgen_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[8].adviceWeek4Saturday = newData.breadtypes[8].newInputSaturday };

            if (parseInt(document.getElementById("roggerozijn_input").value) == 0) {
                newData.breadtypes[9].adviceWeek4Saturday = parseInt(document.getElementById("roggerozijn_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[9].adviceWeek4Saturday = newData.breadtypes[9].newInputSaturday };

            if (parseInt(document.getElementById("haverpompoen_input").value) == 0) {
                newData.breadtypes[10].adviceWeek4Saturday = parseInt(document.getElementById("haverpompoen_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[10].adviceWeek4Saturday = newData.breadtypes[10].newInputSaturday };

        };

        if (activeDay == 0) {
            
            newData.breadtypes[0].saveDateSunday = newToday;

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

                this.adviceWeek1Sunday = this.adviceWeek2Sunday;
                this.adviceWeek2Sunday = this.adviceWeek3Sunday;
                this.adviceWeek3Sunday = this.adviceWeek4Sunday;
                
            });

            if (parseInt(document.getElementById("donkermeergranen_input").value) == 0) {
                newData.breadtypes[0].adviceWeek4Sunday = parseInt(document.getElementById("donkermeergranen_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[0].adviceWeek4Sunday = newData.breadtypes[0].newInputSunday };

            if (parseInt(document.getElementById("zonnevolkoren_input").value) == 0) {
                newData.breadtypes[1].adviceWeek4Sunday = parseInt(document.getElementById("zonnevolkoren_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[1].adviceWeek4Sunday = newData.breadtypes[1].newInputSunday };

            if (parseInt(document.getElementById("wit_input").value) == 0) {
                newData.breadtypes[2].adviceWeek4Sunday = parseInt(document.getElementById("wit_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[2].adviceWeek4Sunday = newData.breadtypes[2].newInputSunday };

            if (parseInt(document.getElementById("tarwe_input").value) == 0) {
                newData.breadtypes[3].adviceWeek4Sunday = parseInt(document.getElementById("tarwe_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[3].adviceWeek4Sunday = newData.breadtypes[3].newInputSunday };

            if (parseInt(document.getElementById("volkoren_input").value) == 0) {
                newData.breadtypes[4].adviceWeek4Sunday = parseInt(document.getElementById("volkoren_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[4].adviceWeek4Sunday = newData.breadtypes[4].newInputSunday };

            if (parseInt(document.getElementById("mais_input").value) == 0) {
                newData.breadtypes[5].adviceWeek4Sunday = parseInt(document.getElementById("mais_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[5].adviceWeek4Sunday = newData.breadtypes[5].newInputSunday };

            if (parseInt(document.getElementById("witmeerzaden_input").value) == 0) {
                newData.breadtypes[6].adviceWeek4Sunday = parseInt(document.getElementById("witmeerzaden_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[6].adviceWeek4Sunday = newData.breadtypes[6].newInputSunday };

            if (parseInt(document.getElementById("spelt_input").value) == 0) {
                newData.breadtypes[7].adviceWeek4Sunday = parseInt(document.getElementById("spelt_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[7].adviceWeek4Sunday = newData.breadtypes[7].newInputSunday };

            if (parseInt(document.getElementById("roggevijgen_input").value) == 0) {
                newData.breadtypes[8].adviceWeek4Sunday = parseInt(document.getElementById("roggevijgen_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[8].adviceWeek4Sunday = newData.breadtypes[8].newInputSunday };

            if (parseInt(document.getElementById("roggerozijn_input").value) == 0) {
                newData.breadtypes[9].adviceWeek4Sunday = parseInt(document.getElementById("roggerozijn_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[9].adviceWeek4Sunday = newData.breadtypes[9].newInputSunday };

            if (parseInt(document.getElementById("haverpompoen_input").value) == 0) {
                newData.breadtypes[10].adviceWeek4Sunday = parseInt(document.getElementById("haverpompoen_tobe_baked").value) + constantAdder
            } else { newData.breadtypes[10].adviceWeek4Sunday = newData.breadtypes[10].newInputSunday };

        };

        sendData();

    }

    // Send new Data

    function sendData() {

        newData = JSON.stringify(newData);
        var xhr = new XMLHttpRequest();
        xhr.open("PUT", baseURL, true);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.onload = function () {
            if (this.readyState == 4 && this.status == 200) {
                newData = JSON.parse(newData);
                $("#spinner").hide();
                $("#modalbodytext").hide();
                $("#closebutton").show();
                $("#savedata").hide();
                $("#exampleModalLabel").hide();
                $("#datastored").show();

                setTimeout(function(){ window.location.href = 'index.html'; }, 2000);
                
            }

        }
        xhr.send(newData);
    }

})
