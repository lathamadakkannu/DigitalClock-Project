
var ampm=document.getElementById("am")
var ampm=document.getElementById("pm")

function displayTime(){
    let dateTime=new Date();
    let hr=dateTime.getHours();
    let min=padZero(dateTime.getMinutes());
    let sec=padZero(dateTime.getSeconds());
    
    if(hr>=12){
        hr=hr-12;
        ampm.innerHTML="PM"
        ampm.style.color = "white";
    }
    else{
        ampm.innerHTML="AM"
        ampm.style.color = "white";
    }

    var a=document.getElementById("hours").innerHTML=padZero(hr);
    var b=document.getElementById("mins").innerHTML=min;
    var c=document.getElementById("second").innerHTML=sec;

}
function padZero(num){
    return num<10?"0"+num:num
}


//date section

var newdate = new Date();

var daydate = document.getElementById("dayname");
var daymonth = document.getElementById("month");
var dayyear = document.getElementById("year");

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(days);

function displaymonth() {
    var daydate = document.getElementById("dayname");

    var newdate = new Date();
    var datedisplay = newdate.getDate();
    //console.log(datedisplay);

    var monthdisplay = newdate.getMonth() + 1;
    //console.log(monthdisplay);

    var yeardisplay = newdate.getFullYear();
    //console.log(yeardisplay);

    daydate.innerHTML = datedisplay;
    daymonth.innerHTML = monthdisplay;
    dayyear.innerHTML = yeardisplay;

}
displaymonth();


var sundayy = document.getElementById("Sun");
var mondayy = document.getElementById("Mon");
var tuesdayy = document.getElementById("Tue");
var wednesdayy = document.getElementById("Wed");
var thursdayy = document.getElementById("Thu");
var fridayy = document.getElementById("Fri");
var saturdayy = document.getElementById("Sat");


function displayday() {
    
    var dayss = new Date();
    var dayday = dayss.getDay();
    console.log(dayday);
    

    
    if (days[dayday] == "Sunday") {
        sundayy.style.backgroundColor = "red";
        
    }
    else{
        sundayy.style.color = "black";
    }
    if (days[dayday] == "Monday") {
        mondayy.style.backgroundColor = "red";
    }
    else{
        mondayy.style.backgroundColor = "black";
    }
    if (days[dayday] == "Tuesday") {
        tuesdayy.style.backgroundColor= "red";
    }
    else{
        tuesdayy.style.backgroundColor = "black";
    }
    if (days[dayday] == "Wednesday") {
        wednesdayy.style.backgroundColor = "red";
    }
    else{
        wednesdayy.style.backgroundColor = "black";
    }
    if (days[dayday] == "Thursday") {
        thursdayy.style.backgroundColor = "red";
    }
    else{
        thursdayy.style.backgroundColor = "black";
    }
    if (days[dayday] == "Friday") {
        fridayy.style.backgroundColor = "red";
    }
    else{
        fridayy.style.backgroundColor = "black";
    }
    if (days[dayday] == "Saturday") {
     saturdayy.style.backgroundColor= "red";
    }
    else{
        saturdayy.style.backgroundColor = "black";
    }


}
    displayday();


    setInterval(displayTime,500)






