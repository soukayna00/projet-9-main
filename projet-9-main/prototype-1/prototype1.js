var outputHTML = ""

fetch ("./prototype1.json")

.then(function(reponse) {

return reponse.json()

})
.then(function(data){


    
    outputHTML += "<th>Produit</th>"
    outputHTML += "<th>Prix</th>"
for (var i = 0; i < data.length; i++) {
   
    outputHTML += "<tr>";
   
    outputHTML += "<td>" + "  "+data[i].produit +"</td>" ;

    outputHTML += "<td>" + data[i].prix +"</td>" ;
    outputHTML += "<tr>";

   

    
}
outputHTML += "</table>"

//output
document.getElementById("div").innerHTML = outputHTML


})
























 // document.write(data[i].prix  )


    //  document.write(data[i].produit )