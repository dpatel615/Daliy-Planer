// Display today's day and date 
var todayDate = moment().format("dddd, MMM DDo YYYY");
$("#currentDay").append(todayDate);

// area of planer background
 var timeOfday = ["8","9","10","11","12","13","14","15","16","17"]


function pastPresentFuture () {
    var currentTime = moment().format("hour");
    for(var i=0;i< timeOfday.length; i++){
    
        if(parseInt(timeOfday[i]) > currentTime){
            $("#" + timeOfday[i]).classList.add('future');
        }
        else if (parseInt(timeOfday[i] < currentTime)) {
            $("#" + timeOfday[i]).classList.add("past");
        }
        else if (parseInt(timeOfday[i]) === currentTime) {
            $("#" + timeOfday[i]).classList.add("present")
        }
        
    }
}
pastPresentFuture();
setInterval(pastPresentFuture,10000);

// onclick event to save input to local storage
$(".saveBtn").on("click", function(){
    var timeOfday = $(this).parent().attr("id");
    var textContent = $("input").val().trim();

    localStorage.setItem(timeOfday,textContent);
    console.log(timeOfday, textContent);
});

// 

$("#8am").children("input").val(localStorage.getItem("8am"));

$("#9am").children("input").val(localStorage.getItem("9am"));

$("#10am").children("input").val(localStorage.getItem("10am"));

$("#11am").children("input").val(localStorage.getItem("11am"));

$("#12pm").children("input").val(localStorage.getItem("12pmm"));

$("#1pm").children("input").val(localStorage.getItem("1pm"));

$("#2pm").children("input").val(localStorage.getItem("2pm"));

$("#3pm").children("input").val(localStorage.getItem("3pm"));

$("#4pm").children("input").val(localStorage.getItem("4pm"));

$("#5pm").children("input").val(localStorage.getItem("5pm"));