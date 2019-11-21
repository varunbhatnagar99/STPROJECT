 
$(document).ready(function(){
   // $("#clickbut").click(ab);
   var a;
    function ab()
       {
        var city = $("#citytext").val();        //getting city name
            $.ajax({
                url:"https://api.openweathermap.org/data/2.5/weather?q="+city+"&units="+a+
                "&APPID=1ff8100a7dee03185f7415de00026792",              // url and key
                type:"GET",
                datatype:"jsonp",           //data type
                success:function(data)
                {
                 console.log(data);
                    document.getElementById("feedback").innerHTML="";                     //printing feedback
                    document.getElementById("valuelabel").innerHTML=data.main.temp;         // temperature
                   document.getElementById("cloud").innerHTML=data.weather[0].main;         // cloud
                    document.getElementById("citylabel").innerHTML=data.name+" , "+data.sys.country;        //country and place
                var icon="http://openweathermap.org/img/w/"+data.weather[0].icon+".png";                //getting cloud image link
                document.getElementById("icon").src=icon;                                               //setting src
                //console.log(icon);

                    time();                                 //calling time function
                },
                error:function(val)                             // feedback when error
                {
                    document.getElementById("feedback").innerHTML="City not Found";                     //printing feedback
                }
                
            });
        }
        $("#cel").click(c);                 //calling function to show temperature
       function c()
       {
        $("#far").css("background-color", "yellow");                //setting button color
        $("#cel").css("background-color", "red");
        a="metric";
        ab();                                                               //calling main method

       }
       $("#far").click(f);
       function f()
       {
        $("#far").css("background-color", "red");
        $("#cel").css("background-color", "yellow");
        a="imperial";
        ab();
       }
        
   
});
function time() {                //time function
    var today = new Date();     //time object
    var weekday = new Array(7);                     // to get day
    weekday[0] = "Sunday";
    weekday[1] = "Monday";                          
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
  
    var n = weekday[today.getDay()];
    var h = today.getHours();        //hour
    var m = today.getMinutes();      //minutes
    var s = today.getSeconds();      //sec
    var z=today.getDay();
    var x=today.getMonth();
    var y=today.getFullYear();
    m = checkTime(m);        //to add zero when value is below 10
    s = checkTime(s);        //          ""
    document.getElementById("dayandtime").innerHTML =n+" , "+h + ":" + m + ":" + s;   //time and day
    var t = setTimeout(time, 500);
        }  // 
function checkTime(i) {      //to add zero when value is below 10 
    if (i < 10) {i = "0" + i}; 
    return i;
    }
