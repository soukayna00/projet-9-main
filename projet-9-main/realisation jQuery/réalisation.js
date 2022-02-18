




$('#btn').click(function () { 

$('#fromN').fadeIn();


 var city = $("#input").val();

var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0bd0cd1e7d8ab7a578a5a4d28a57d45b&units=metric`
    
    

$.get(url, 
    function(data) {
        $("#name").text(data.name),
        $("#wind").text(data.wind.speed),
        $("#weather").text(data.weather[0].description)
        $('#IDcity').text("id:" +data.id)
        $('#Temp').text(data.main.temp +" °C")   
        // $('#iconM').src("http://openweathermap.org/img/w/"+data.weather[0].icon +".png");
        document.getElementById('iconM').src = "http://openweathermap.org/img/w/"+data.weather[0].icon+".png";

    },
    
       
);
});