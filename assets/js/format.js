$(document).ready(function() {
    // Determine day of the week
    
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
    console.log(today)

    // Change active Dropdown Menu Item to current day of the week
    
    if (today == "Tuesday") {
        $("#tuesday").addClass("active");
        $("#wednesday, #thursday, #friday, #saturday, #sunday").removeClass("active");
        var activeDay = 2;
        $("#dropdownMenuButton").text("Tuesday")
    }
    if (today == "Wednesday") {
        $("#wednesday").addClass("active");
        $("#tuesday, #thursday, #friday, #saturday, #sunday").removeClass("active");
        var activeDay = 3;
        $("#dropdownMenuButton").text("Wednesday")
    }
    if (today == "Thursday") {
        $("#thursday").addClass("active");
        $("#tuesday, #wednesday, #friday, #saturday, #sunday").removeClass("active");
        var activeDay = 4;
        $("#dropdownMenuButton").text("Thursday")
    }
    if (today == "Friday") {
        $("#friday").addClass("active");
        $("#tuesday, #wednesday, #thursday, #saturday, #sunday").removeClass("active");
        var activeDay = 5;
        $("#dropdownMenuButton").text("Friday")
    }
    if (today == "Saturday") {
        $("#saturday").addClass("active");
        $("#tuesday, #wednesday, #thursday, #friday, #sunday").removeClass("active");
        var activeDay = 6;
        $("#dropdownMenuButton").text("Saturday")
    }
    if (today == "Sunday") {
        $("#sunday").addClass("active");
        $("#tuesday, #wednesday, #thursday, #friday, #saturday").removeClass("active");
        var activeDay = 0;
        $("#dropdownMenuButton").text("Sunday")
    }
    if (today == "Monday") {
        $("#tuesday, #wednesday, #thursday, #friday, #saturday, #sunday").removeClass("active");
        var activeDay = 1;
        $("#dropdownMenuButton").text("Select a day")
    }
    
    // Change active Dropdown Menu Item to selected day
    $("#tuesday").on("click", function() {
        $("#tuesday").addClass("active");
        $("#wednesday, #thursday, #friday, #saturday, #sunday").removeClass("active");
        var activeDay = 2;
        $("#dropdownMenuButton").text("Tuesday")
    })
    $("#wednesday").on("click", function() {
        $("#wednesday").addClass("active");
        $("#tuesday, #thursday, #friday, #saturday, #sunday").removeClass("active");
        var activeDay = 3;
        $("#dropdownMenuButton").text("Wednesday")
    })
    $("#thursday").on("click", function() {
       $("#thursday").addClass("active");
        $("#tuesday, #wednesday, #friday, #saturday, #sunday").removeClass("active");
        var activeDay = 4;
        $("#dropdownMenuButton").text("Thursday")
    })
    $("#friday").on("click", function() {
       $("#friday").addClass("active");
        $("#tuesday, #wednesday, #thursday, #saturday, #sunday").removeClass("active");
        var activeDay = 5;
        $("#dropdownMenuButton").text("Friday")
    })
    $("#saturday").on("click", function() {
       $("#saturday").addClass("active");
        $("#tuesday, #wednesday, #thursday, #friday, #sunday").removeClass("active");
        var activeDay = 6;
        $("#dropdownMenuButton").text("Saturday")
    })
    $("#sunday").on("click", function() {
       $("#sunday").addClass("active");
        $("#tuesday, #wednesday, #thursday, #friday, #saturday").removeClass("active");
        var activeDay = 0;
        $("#dropdownMenuButton").text("Sunday")
    })
})
