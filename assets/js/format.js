$(document).ready(function() {
    
    let activeDay = 0;
    determineDay();
    changeActiveDay();

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

        $("#tuesday").on("click", function() {
            $("#tuesday").addClass("active");
            $("#wednesday, #thursday, #friday, #saturday, #sunday").removeClass("active");
            activeDay = 2;
            $("#dropdownMenuButton").text("Tuesday")
            changeActiveDay()
            

        })
        $("#wednesday").on("click", function() {
            $("#wednesday").addClass("active");
            $("#tuesday, #thursday, #friday, #saturday, #sunday").removeClass("active");
            activeDay = 3;
            $("#dropdownMenuButton").text("Wednesday")
            changeActiveDay()

        })
        $("#thursday").on("click", function() {
            $("#thursday").addClass("active");
            $("#tuesday, #wednesday, #friday, #saturday, #sunday").removeClass("active");
            activeDay = 4;
            $("#dropdownMenuButton").text("Thursday")
            changeActiveDay()
        })
        $("#friday").on("click", function() {
            $("#friday").addClass("active");
            $("#tuesday, #wednesday, #thursday, #saturday, #sunday").removeClass("active");
            activeDay = 5;
            $("#dropdownMenuButton").text("Friday")
            changeActiveDay()
        })
        $("#saturday").on("click", function() {
            $("#saturday").addClass("active");
            $("#tuesday, #wednesday, #thursday, #friday, #sunday").removeClass("active");
            activeDay = 6;
            $("#dropdownMenuButton").text("Saturday")
            changeActiveDay()
        })
        $("#sunday").on("click", function() {
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
            
            $("#donkermeergranen_placed").val(AdviceThursday.donkermeergranen);
            $("#zonnevolkoren_placed").val(AdviceThursday.zonnevolkoren);
            $("#wit_placed").val(AdviceThursday.wit);
            $("#tarwe_placed").val(AdviceThursday.tarwe);
            $("#volkoren_placed").val(AdviceThursday.volkoren);
            $("#mais_placed").val(AdviceThursday.mais);
            $("#witmeerzaden_placed").val(AdviceThursday.witmeerzaden);
            $("#spelt_placed").val(AdviceThursday.spelt);
            $("#roggevijgen_placed").val(AdviceThursday.roggevijgen);
            $("#roggerozijn_placed").val(AdviceThursday.roggerozijn);
            $("#haverpompoen_placed").val(AdviceThursday.haverpompoen);
            
            $("#donkermeergranen_baked").val(AdviceTuesday.donkermeergranen);
            $("#zonnevolkoren_baked").val(AdviceTuesday.zonnevolkoren);
            $("#wit_baked").val(AdviceTuesday.wit);
            $("#tarwe_baked").val(AdviceTuesday.tarwe);
            $("#volkoren_baked").val(AdviceTuesday.volkoren);
            $("#mais_baked").val(AdviceTuesday.mais);
            $("#witmeerzaden_baked").val(AdviceTuesday.witmeerzaden);
            $("#spelt_baked").val(AdviceTuesday.spelt);
            $("#roggevijgen_baked").val(AdviceTuesday.roggevijgen);
            $("#roggerozijn_baked").val(AdviceTuesday.roggerozijn);
            $("#haverpompoen_baked").val(AdviceTuesday.haverpompoen);
            
        }
        if (activeDay == 3) {
            
            $("#donkermeergranen_placed").val(AdviceFriday.donkermeergranen);
            $("#zonnevolkoren_placed").val(AdviceFriday.zonnevolkoren);
            $("#wit_placed").val(AdviceFriday.wit);
            $("#tarwe_placed").val(AdviceFriday.tarwe);
            $("#volkoren_placed").val(AdviceFriday.volkoren);
            $("#mais_placed").val(AdviceFriday.mais);
            $("#witmeerzaden_placed").val(AdviceFriday.witmeerzaden);
            $("#spelt_placed").val(AdviceFriday.spelt);
            $("#roggevijgen_placed").val(AdviceFriday.roggevijgen);
            $("#roggerozijn_placed").val(AdviceFriday.roggerozijn);
            $("#haverpompoen_placed").val(AdviceFriday.haverpompoen);
            
            $("#donkermeergranen_baked").val(AdviceWednesday.donkermeergranen);
            $("#zonnevolkoren_baked").val(AdviceWednesday.zonnevolkoren);
            $("#wit_baked").val(AdviceWednesday.wit);
            $("#tarwe_baked").val(AdviceWednesday.tarwe);
            $("#volkoren_baked").val(AdviceWednesday.volkoren);
            $("#mais_baked").val(AdviceWednesday.mais);
            $("#witmeerzaden_baked").val(AdviceWednesday.witmeerzaden);
            $("#spelt_baked").val(AdviceWednesday.spelt);
            $("#roggevijgen_baked").val(AdviceWednesday.roggevijgen);
            $("#roggerozijn_baked").val(AdviceWednesday.roggerozijn);
            $("#haverpompoen_baked").val(AdviceWednesday.haverpompoen);
            
        }
        if (activeDay == 4) {
            
            $("#donkermeergranen_placed").val(AdviceSaturday.donkermeergranen);
            $("#zonnevolkoren_placed").val(AdviceSaturday.zonnevolkoren);
            $("#wit_placed").val(AdviceSaturday.wit);
            $("#tarwe_placed").val(AdviceSaturday.tarwe);
            $("#volkoren_placed").val(AdviceSaturday.volkoren);
            $("#mais_placed").val(AdviceSaturday.mais);
            $("#witmeerzaden_placed").val(AdviceSaturday.witmeerzaden);
            $("#spelt_placed").val(AdviceSaturday.spelt);
            $("#roggevijgen_placed").val(AdviceSaturday.roggevijgen);
            $("#roggerozijn_placed").val(AdviceSaturday.roggerozijn);
            $("#haverpompoen_placed").val(AdviceSaturday.haverpompoen);
            
            $("#donkermeergranen_baked").val(AdviceThursday.donkermeergranen);
            $("#zonnevolkoren_baked").val(AdviceThursday.zonnevolkoren);
            $("#wit_baked").val(AdviceThursday.wit);
            $("#tarwe_baked").val(AdviceThursday.tarwe);
            $("#volkoren_baked").val(AdviceThursday.volkoren);
            $("#mais_baked").val(AdviceThursday.mais);
            $("#witmeerzaden_baked").val(AdviceThursday.witmeerzaden);
            $("#spelt_baked").val(AdviceThursday.spelt);
            $("#roggevijgen_baked").val(AdviceThursday.roggevijgen);
            $("#roggerozijn_baked").val(AdviceThursday.roggerozijn);
            $("#haverpompoen_baked").val(AdviceThursday.haverpompoen);
            
        }
        if (activeDay == 5) {
            
            $("#donkermeergranen_placed").val(AdviceSunday.donkermeergranen);
            $("#zonnevolkoren_placed").val(AdviceSunday.zonnevolkoren);
            $("#wit_placed").val(AdviceSunday.wit);
            $("#tarwe_placed").val(AdviceSunday.tarwe);
            $("#volkoren_placed").val(AdviceSunday.volkoren);
            $("#mais_placed").val(AdviceSunday.mais);
            $("#witmeerzaden_placed").val(AdviceSunday.witmeerzaden);
            $("#spelt_placed").val(AdviceSunday.spelt);
            $("#roggevijgen_placed").val(AdviceSunday.roggevijgen);
            $("#roggerozijn_placed").val(AdviceSunday.roggerozijn);
            $("#haverpompoen_placed").val(AdviceSunday.haverpompoen);
            
            $("#donkermeergranen_baked").val(AdviceFriday.donkermeergranen);
            $("#zonnevolkoren_baked").val(AdviceFriday.zonnevolkoren);
            $("#wit_baked").val(AdviceFriday.wit);
            $("#tarwe_baked").val(AdviceFriday.tarwe);
            $("#volkoren_baked").val(AdviceFriday.volkoren);
            $("#mais_baked").val(AdviceFriday.mais);
            $("#witmeerzaden_baked").val(AdviceFriday.witmeerzaden);
            $("#spelt_baked").val(AdviceFriday.spelt);
            $("#roggevijgen_baked").val(AdviceFriday.roggevijgen);
            $("#roggerozijn_baked").val(AdviceFriday.roggerozijn);
            $("#haverpompoen_baked").val(AdviceFriday.haverpompoen);
            
        }
        if (activeDay == 6) {
            
            $("#donkermeergranen_placed").val(AdviceTuesday.donkermeergranen);
            $("#zonnevolkoren_placed").val(AdviceTuesday.zonnevolkoren);
            $("#wit_placed").val(AdviceTuesday.wit);
            $("#tarwe_placed").val(AdviceTuesday.tarwe);
            $("#volkoren_placed").val(AdviceTuesday.volkoren);
            $("#mais_placed").val(AdviceTuesday.mais);
            $("#witmeerzaden_placed").val(AdviceTuesday.witmeerzaden);
            $("#spelt_placed").val(AdviceTuesday.spelt);
            $("#roggevijgen_placed").val(AdviceTuesday.roggevijgen);
            $("#roggerozijn_placed").val(AdviceTuesday.roggerozijn);
            $("#haverpompoen_placed").val(AdviceTuesday.haverpompoen);
            
            $("#donkermeergranen_baked").val(AdviceSaturday.donkermeergranen);
            $("#zonnevolkoren_baked").val(AdviceSaturday.zonnevolkoren);
            $("#wit_baked").val(AdviceSaturday.wit);
            $("#tarwe_baked").val(AdviceSaturday.tarwe);
            $("#volkoren_baked").val(AdviceSaturday.volkoren);
            $("#mais_baked").val(AdviceSaturday.mais);
            $("#witmeerzaden_baked").val(AdviceSaturday.witmeerzaden);
            $("#spelt_baked").val(AdviceSaturday.spelt);
            $("#roggevijgen_baked").val(AdviceSaturday.roggevijgen);
            $("#roggerozijn_baked").val(AdviceSaturday.roggerozijn);
            $("#haverpompoen_baked").val(AdviceSaturday.haverpompoen);
            
        }
        if (activeDay == 0) {
            
            $("#donkermeergranen_placed").val(AdviceWednesday.donkermeergranen);
            $("#zonnevolkoren_placed").val(AdviceWednesday.zonnevolkoren);
            $("#wit_placed").val(AdviceWednesday.wit);
            $("#tarwe_placed").val(AdviceWednesday.tarwe);
            $("#volkoren_placed").val(AdviceWednesday.volkoren);
            $("#mais_placed").val(AdviceWednesday.mais);
            $("#witmeerzaden_placed").val(AdviceWednesday.witmeerzaden);
            $("#spelt_placed").val(AdviceWednesday.spelt);
            $("#roggevijgen_placed").val(AdviceWednesday.roggevijgen);
            $("#roggerozijn_placed").val(AdviceWednesday.roggerozijn);
            $("#haverpompoen_placed").val(AdviceWednesday.haverpompoen);
            
            $("#donkermeergranen_baked").val(AdviceSunday.donkermeergranen);
            $("#zonnevolkoren_baked").val(AdviceSunday.zonnevolkoren);
            $("#wit_baked").val(AdviceSunday.wit);
            $("#tarwe_baked").val(AdviceSunday.tarwe);
            $("#volkoren_baked").val(AdviceSunday.volkoren);
            $("#mais_baked").val(AdviceSunday.mais);
            $("#witmeerzaden_baked").val(AdviceSunday.witmeerzaden);
            $("#spelt_baked").val(AdviceSunday.spelt);
            $("#roggevijgen_baked").val(AdviceSunday.roggevijgen);
            $("#roggerozijn_baked").val(AdviceSunday.roggerozijn);
            $("#haverpompoen_baked").val(AdviceSunday.haverpompoen);
            
        }

    }
    
    console.log(activeDay);
})
