// Variables
let button;

let inputDay;
let inputMonth;
let inputYear;

let isDayValid;
let isMonthValid;
let isYearValid;

let today = new Date();

//Check valid numbers
inputDay = $("#day").change(function(){
    let day = $("#day").val();
    let month = $("#month").val();

    if (day > 28 && month == 2) {
        $(".day").css("color", "hsl(0, 100%, 67%)");
        $(".day > h3").html("Must be a valid day");
        isDayValid = false;
    } else if (day > 30 && (month == 4 || month == 6 || month == 9 || month == 11)){
        $(".day").css("color", "hsl(0, 100%, 67%)");
        $(".day > h3").html("Must be a valid day");
        isDayValid = false;
    } else if (day < 1 || day > 31) {
        $(".day").css("color", "hsl(0, 100%, 67%)");
        $(".day > h3").html("Must be a valid day");
        isDayValid = false;
    }  else {
        $(".day").css("color", "hsl(0, 1%, 44%)");
        $(".day > h3").html("");
        isDayValid = true;
    }

})

inputMonth = $("#month").change(function(){
    let month = $("#month").val();
    let day = $("#day").val();

    if (day > 28 && month == 2) {
        $(".day").css("color", "hsl(0, 100%, 67%)");
        $(".day > h3").html("Must be a valid day");
        isDayValid = false;
    } else if (day > 30 && (month == 4 || month == 6 || month == 9 || month == 11)){
        $(".day").css("color", "hsl(0, 100%, 67%)");
        $(".day > h3").html("Must be a valid day");
        isDayValid = false;
    } else if (month < 1 || month > 12) {
        $(".month").css("color", "hsl(0, 100%, 67%)");
        $(".month > h3").html("Must be a valid month");
        isMonthValid = false; 
        
    } else {
        $(".month").css("color", "hsl(0, 1%, 44%)");
        $(".month > h3").html("");
        isMonthValid = true;
    }

})

inputYear = $("#year").change(function(){
    let year = $("#year").val();

    if (year > today.getFullYear()) {
        $(".year").css("color", "hsl(0, 100%, 67%)");
        $(".year > h3").html("Must be a valid year");
        isYearValid = false; 
        
    } else {
        $(".year").css("color", "hsl(0, 1%, 44%)");
        $(".year > h3").html("");
        isYearValid = true;
    }

})

//Check empty imputs
button = $(".circle").click(function (){
    if($("#year").val() == ""){
        $(".year").css("color", "hsl(0, 100%, 67%)");
        $(".year > h3").html("This file is required");
    } else {
        $(".year").css("color", "hsl(0, 1%, 44%)");
        $(".year > h3").html("");
    }

    if($("#month").val() == ""){
        $(".month").css("color", "hsl(0, 100%, 67%)");
        $(".month > h3").html("This file is required");
    } else {
        $(".month").css("color", "hsl(0, 1%, 44%)");
        $(".month > h3").html("");
    }

    if($("#day").val() == ""){
        $(".day").css("color", "hsl(0, 100%, 67%)");
        $(".day > h3").html("This file is required");
    } else {
        $(".day").css("color", "hsl(0, 1%, 44%)");
        $(".day > h3").html("");
    }
})


//Click function
button = $(".circle").click(function (){
    let inputYear = $("#year").val();
    let inputMonth = $("#month").val();
    let inputDay = $("#day").val();


    if (isDayValid === true && isMonthValid === true && isYearValid === true){

       if ((inputMonth == today.getMonth()) && (inputDay == today.getDate())) {
        totalYears = today.getFullYear() - inputYear;
       } else {
        totalYears = today.getFullYear() - inputYear - 1;
       }
       
       if(inputDay < today.getDate()){
            totalMonths = 12 - Math.abs(today.getMonth() - inputMonth) + 1;
            totalDays = Math.abs(today.getDate() - inputDay);
       } else {
            totalMonths = 12 - Math.abs(today.getMonth() - inputMonth);
            if(inputMonth == 4 || inputMonth == 6 || inputMonth == 9 || inputMonth == 11){
                totalDays = 30 - Math.abs(today.getDate() - inputDay);
            } else if(inputMonth == 2){
                totalDays = 28 - Math.abs(today.getDate() - inputDay);
            } else {
                totalDays = 31 - Math.abs(today.getDate() - inputDay);
            }
       }
        
        

        $(".year-output").html(totalYears);
        $(".month-output").html(totalMonths);
        $(".day-output").html(totalDays);

    } 
})














    

    

    

    


