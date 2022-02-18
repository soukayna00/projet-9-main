var outputHTML = ""
var city = prompt()
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0bd0cd1e7d8ab7a578a5a4d28a57d45b`

fetch (url)
    .then(function(reponse) {

return reponse.json()

})

.then(function(data){

console.log(data)
    outputHTML += "<table class = 'table table-dark table-striped' >"
    outputHTML += "<th>Id</th>"
    outputHTML += "<th>City</th>"
  outputHTML += "<th>Weather</th>"
  outputHTML += "<th>Wind-Speed </th>"  
  
    
// for (var i = 0; i < data.length; i++) {
   
    outputHTML += "<tr>";

     outputHTML += "<td>" + data.id +"</td>" ;

    outputHTML += "<td>" + "  "+data.name +"</td>" ;
  
    outputHTML += "<td>" + data.weather[0].description  +"</td>" ;

    outputHTML += "<td>" + data.wind.speed +"</td>" ;
    
  


    outputHTML += "<tr>";

   

    
// }
outputHTML += "</table>"

document.getElementById("divT").innerHTML = outputHTML
})

