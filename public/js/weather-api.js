/*global $*/
$(document).ready(function(){
      var long , lat;


      var date = new Date();
      document.getElementById("date").innerHTML = date;

      var url2 = "https://api.openweathermap.org/data/2.5/weather?lat=40.7141667&lon=-73.968285&appid=ec4d52ef33a31116e64954bb3c808494";
      getJson(url2);

      if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(function(position){
                  long = position.coords.longitude;
                  lat = position.coords.latitude;
                  var url = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long  +"&appid=ec4d52ef33a31116e64954bb3c808494";
                  getJson(url);
            });
      }

});

function getJson(url){
      var  changeTemp = false;
      var fahr, celcius, units;
      $.getJSON(url, function(data){
            var weather = data.weather[0].description;
            var kelvin = data.main.temp;
            var pressure = data.main.pressure;
            var humidity = data.main.humidity;
            var wind = data.wind.speed;
            var location = data.name;

            celcius = kelvin - 273.15;
            fahr = kelvin * (9/5) - 459.67;

            $("#location").html(location);
            $("#weather").html(weather);
            $("#pressure").html(pressure);
            $("#humidity").html(humidity);
            $("#speed").html(wind);
            $("#fahr").html(fahr.toFixed(2) + '&#176;' + "F");

            $("#tempButton").click(function(){
                  if(changeTemp === false){
                        units = "C";
                        $("#fahr").html(celcius.toFixed(2) + "&#176;" + units);
                        $("#tempButton").html("Change to Fahrenheit");
                        changeTemp = true;
                  }else{
                        units = "F";
                        $("#fahr").html(fahr.toFixed(2) + "&#176;" + units);
                        $("#tempButton").html("Change to Celcius");
                        changeTemp = false;
                  }
            });
      });
}
