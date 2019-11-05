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
    
    
    
    // Show current bread advice on index page
    function changeActiveDay() {


        if (activeDay == 2) {
            
            $("#donkermeergranen_tobe_placed").val(AdviceThursday.donkermeergranen);
            $("#zonnevolkoren_tobe_placed").val(AdviceThursday.zonnevolkoren);
            $("#wit_tobe_placed").val(AdviceThursday.wit);
            $("#tarwe_tobe_placed").val(AdviceThursday.tarwe);
            $("#volkoren_tobe_placed").val(AdviceThursday.volkoren);
            $("#mais_tobe_placed").val(AdviceThursday.mais);
            $("#witmeerzaden_tobe_placed").val(AdviceThursday.witmeerzaden);
            $("#spelt_tobe_placed").val(AdviceThursday.spelt);
            $("#roggevijgen_tobe_placed").val(AdviceThursday.roggevijgen);
            $("#roggerozijn_tobe_placed").val(AdviceThursday.roggerozijn);
            $("#haverpompoen_tobe_placed").val(AdviceThursday.haverpompoen);
            
            $("#donkermeergranen_tobe_baked").val(AdviceTuesday.donkermeergranen);
            $("#zonnevolkoren_tobe_baked").val(AdviceTuesday.zonnevolkoren);
            $("#wit_tobe_baked").val(AdviceTuesday.wit);
            $("#tarwe_tobe_baked").val(AdviceTuesday.tarwe);
            $("#volkoren_tobe_baked").val(AdviceTuesday.volkoren);
            $("#mais_tobe_baked").val(AdviceTuesday.mais);
            $("#witmeerzaden_tobe_baked").val(AdviceTuesday.witmeerzaden);
            $("#spelt_tobe_baked").val(AdviceTuesday.spelt);
            $("#roggevijgen_tobe_baked").val(AdviceTuesday.roggevijgen);
            $("#roggerozijn_tobe_baked").val(AdviceTuesday.roggerozijn);
            $("#haverpompoen_tobe_baked").val(AdviceTuesday.haverpompoen);
            
        }
        if (activeDay == 3) {
            
            $("#donkermeergranen_tobe_placed").val(AdviceFriday.donkermeergranen);
            $("#zonnevolkoren_tobe_placed").val(AdviceFriday.zonnevolkoren);
            $("#wit_tobe_placed").val(AdviceFriday.wit);
            $("#tarwe_tobe_placed").val(AdviceFriday.tarwe);
            $("#volkoren_tobe_placed").val(AdviceFriday.volkoren);
            $("#mais_tobe_placed").val(AdviceFriday.mais);
            $("#witmeerzaden_tobe_placed").val(AdviceFriday.witmeerzaden);
            $("#spelt_tobe_placed").val(AdviceFriday.spelt);
            $("#roggevijgen_tobe_placed").val(AdviceFriday.roggevijgen);
            $("#roggerozijn_tobe_placed").val(AdviceFriday.roggerozijn);
            $("#haverpompoen_tobe_placed").val(AdviceFriday.haverpompoen);
            
            $("#donkermeergranen_tobe_baked").val(AdviceWednesday.donkermeergranen);
            $("#zonnevolkoren_tobe_baked").val(AdviceWednesday.zonnevolkoren);
            $("#wit_tobe_baked").val(AdviceWednesday.wit);
            $("#tarwe_tobe_baked").val(AdviceWednesday.tarwe);
            $("#volkoren_tobe_baked").val(AdviceWednesday.volkoren);
            $("#mais_tobe_baked").val(AdviceWednesday.mais);
            $("#witmeerzaden_tobe_baked").val(AdviceWednesday.witmeerzaden);
            $("#spelt_tobe_baked").val(AdviceWednesday.spelt);
            $("#roggevijgen_tobe_baked").val(AdviceWednesday.roggevijgen);
            $("#roggerozijn_tobe_baked").val(AdviceWednesday.roggerozijn);
            $("#haverpompoen_tobe_baked").val(AdviceWednesday.haverpompoen);
            
        }
        if (activeDay == 4) {
            
            $("#donkermeergranen_tobe_placed").val(AdviceSaturday.donkermeergranen);
            $("#zonnevolkoren_tobe_placed").val(AdviceSaturday.zonnevolkoren);
            $("#wittobe__placed").val(AdviceSaturday.wit);
            $("#tarwe_tobe_placed").val(AdviceSaturday.tarwe);
            $("#volkoren_tobe_placed").val(AdviceSaturday.volkoren);
            $("#mais_tobe_placed").val(AdviceSaturday.mais);
            $("#witmeerzaden_tobe_placed").val(AdviceSaturday.witmeerzaden);
            $("#spelt_tobe_placed").val(AdviceSaturday.spelt);
            $("#roggevijgen_tobe_placed").val(AdviceSaturday.roggevijgen);
            $("#roggerozijn_tobe_placed").val(AdviceSaturday.roggerozijn);
            $("#haverpompoen_tobe_placed").val(AdviceSaturday.haverpompoen);
            
            $("#donkermeergranen_tobe_baked").val(AdviceThursday.donkermeergranen);
            $("#zonnevolkoren_tobe_baked").val(AdviceThursday.zonnevolkoren);
            $("#wit_tobe_baked").val(AdviceThursday.wit);
            $("#tarwe_tobe_baked").val(AdviceThursday.tarwe);
            $("#volkoren_tobe_baked").val(AdviceThursday.volkoren);
            $("#mais_tobe_baked").val(AdviceThursday.mais);
            $("#witmeerzaden_tobe_baked").val(AdviceThursday.witmeerzaden);
            $("#spelt_tobe_baked").val(AdviceThursday.spelt);
            $("#roggevijgen_tobe_baked").val(AdviceThursday.roggevijgen);
            $("#roggerozijn_tobe_baked").val(AdviceThursday.roggerozijn);
            $("#haverpompoen_tobe_baked").val(AdviceThursday.haverpompoen);
            
        }
        if (activeDay == 5) {
            
            $("#donkermeergranen_tobe_placed").val(AdviceSunday.donkermeergranen);
            $("#zonnevolkoren_tobe_placed").val(AdviceSunday.zonnevolkoren);
            $("#wit_tobe_placed").val(AdviceSunday.wit);
            $("#tarwe_tobe_placed").val(AdviceSunday.tarwe);
            $("#volkoren_tobe_placed").val(AdviceSunday.volkoren);
            $("#mais_tobe_placed").val(AdviceSunday.mais);
            $("#witmeerzaden_tobe_placed").val(AdviceSunday.witmeerzaden);
            $("#spelt_tobe_placed").val(AdviceSunday.spelt);
            $("#roggevijgen_tobe_placed").val(AdviceSunday.roggevijgen);
            $("#roggerozijn_tobe_placed").val(AdviceSunday.roggerozijn);
            $("#haverpompoen_tobe_placed").val(AdviceSunday.haverpompoen);
            
            $("#donkermeergranen_tobe_baked").val(AdviceFriday.donkermeergranen);
            $("#zonnevolkoren_tobe_baked").val(AdviceFriday.zonnevolkoren);
            $("#wit_tobe_baked").val(AdviceFriday.wit);
            $("#tarwe_tobe_baked").val(AdviceFriday.tarwe);
            $("#volkoren_tobe_baked").val(AdviceFriday.volkoren);
            $("#mais_tobe_baked").val(AdviceFriday.mais);
            $("#witmeerzaden_tobe_baked").val(AdviceFriday.witmeerzaden);
            $("#spelt_tobe_baked").val(AdviceFriday.spelt);
            $("#roggevijgen_tobe_baked").val(AdviceFriday.roggevijgen);
            $("#roggerozijn_tobe_baked").val(AdviceFriday.roggerozijn);
            $("#haverpompoen_tobe_baked").val(AdviceFriday.haverpompoen);
            
        }
        if (activeDay == 6) {
            
            $("#donkermeergranen_tobe_placed").val(AdviceTuesday.donkermeergranen);
            $("#zonnevolkoren_tobe_placed").val(AdviceTuesday.zonnevolkoren);
            $("#wit_tobe_placed").val(AdviceTuesday.wit);
            $("#tarwe_tobe_placed").val(AdviceTuesday.tarwe);
            $("#volkoren_tobe_placed").val(AdviceTuesday.volkoren);
            $("#mais_tobe_placed").val(AdviceTuesday.mais);
            $("#witmeerzaden_tobe_placed").val(AdviceTuesday.witmeerzaden);
            $("#spelt_tobe_placed").val(AdviceTuesday.spelt);
            $("#roggevijgen_tobe_placed").val(AdviceTuesday.roggevijgen);
            $("#roggerozijn_tobe_placed").val(AdviceTuesday.roggerozijn);
            $("#haverpompoen_tobe_placed").val(AdviceTuesday.haverpompoen);
            
            $("#donkermeergranen_tobe_baked").val(AdviceSaturday.donkermeergranen);
            $("#zonnevolkoren_tobe_baked").val(AdviceSaturday.zonnevolkoren);
            $("#wit_tobe_baked").val(AdviceSaturday.wit);
            $("#tarwe_tobe_baked").val(AdviceSaturday.tarwe);
            $("#volkoren_tobe_baked").val(AdviceSaturday.volkoren);
            $("#mais_tobe_baked").val(AdviceSaturday.mais);
            $("#witmeerzaden_tobe_baked").val(AdviceSaturday.witmeerzaden);
            $("#spelt_tobe_baked").val(AdviceSaturday.spelt);
            $("#roggevijgen_tobe_baked").val(AdviceSaturday.roggevijgen);
            $("#roggerozijn_tobe_baked").val(AdviceSaturday.roggerozijn);
            $("#haverpompoen_tobe_baked").val(AdviceSaturday.haverpompoen);
            
        }
        if (activeDay == 0) {
            
            $("#donkermeergranen_tobe_placed").val(AdviceWednesday.donkermeergranen);
            $("#zonnevolkoren_tobe_placed").val(AdviceWednesday.zonnevolkoren);
            $("#wit_tobe_placed").val(AdviceWednesday.wit);
            $("#tarwe_tobe_placed").val(AdviceWednesday.tarwe);
            $("#volkoren_tobe_placed").val(AdviceWednesday.volkoren);
            $("#mais_tobe_placed").val(AdviceWednesday.mais);
            $("#witmeerzaden_tobe_placed").val(AdviceWednesday.witmeerzaden);
            $("#spelt_tobe_placed").val(AdviceWednesday.spelt);
            $("#roggevijgen_tobe_placed").val(AdviceWednesday.roggevijgen);
            $("#roggerozijn_tobe_placed").val(AdviceWednesday.roggerozijn);
            $("#haverpompoen_tobe_placed").val(AdviceWednesday.haverpompoen);
            
            $("#donkermeergranen_tobe_baked").val(AdviceSunday.donkermeergranen);
            $("#zonnevolkoren_tobe_baked").val(AdviceSunday.zonnevolkoren);
            $("#wit_tobe_baked").val(AdviceSunday.wit);
            $("#tarwe_tobe_baked").val(AdviceSunday.tarwe);
            $("#volkoren_tobe_baked").val(AdviceSunday.volkoren);
            $("#mais_tobe_baked").val(AdviceSunday.mais);
            $("#witmeerzaden_tobe_baked").val(AdviceSunday.witmeerzaden);
            $("#spelt_tobe_baked").val(AdviceSunday.spelt);
            $("#roggevijgen_tobe_baked").val(AdviceSunday.roggevijgen);
            $("#roggerozijn_tobe_baked").val(AdviceSunday.roggerozijn);
            $("#haverpompoen_tobe_baked").val(AdviceSunday.haverpompoen);
            
        }

    }
    
    console.log(activeDay);
})
