function weatherPopup() {
  $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat=45.667931&lon=-111.059632&APPID=640c9355cb2d77770ebfa88769f26a92', function(data){
    console.log(data);
    var valNum = data.main.temp;
    var f = ((valNum-273.15)*1.8)+32;
    document.getElementById("temp").innerHTML = Math.floor(f) + "°";
    var weatherString = data.weather[0].description;
    var srcString = "images/" + weatherString + ".png";
    $(".indicator").attr("src",srcString);
  });
}

window.onload = weatherPopup;
