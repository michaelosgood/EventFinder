function dayAndNight(){

  var current = new Date();
  var day_night = current.getHours();

    if (day_night < 12){
      //Day
      
      document.body.style.backgroundImage = "url('assets/images/sunrise.jpg')";
    }
    else{
      //Night
      
        document.body.style.backgroundImage = "url('assets/images/night.jpg')";
    }
}
dayAndNight();
var APIKey = "5e68d3fec5ccfb64ad77db9dcbc833c7";
var search = "";
var callBackResponse = "";
$("#submit-id").click(function(){
  event.preventDefault();
  getWeather();
})
  function getWeather(){
    search = $("#search-bar").val();
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q="+search+"&units=imperial&appid=" + APIKey;
    // Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
        url: queryURL,
        method: "GET"
      })
      // We store all of the retrieved data inside of an object called "response"
      .done(function(response) {
        //callBackResponse = response;
        // Log the queryURL
        console.log(queryURL);
        // Log the resulting object
        console.log(response);
        // Transfer content to HTML
        $(".city").html("City: " + response.name);
        $(".country").html("Country: "+response.sys.country);
        $(".humidity").html("Humidity: "+response.main.humidity+" %");
        $(".temp").html("Temperature: "+response.main.temp+" &#x2109");
        $(".skies").html("Skies: "+response.weather[0].description);
        $(".wind").html("Wind Speed: "+response.wind.speed+" MPH");
        //I would like to display forecast but I'm not sure how to get this from Open Weather API
        $(".forecast").html("Forecast: "+response.forecast); //need to get this part working

        // Console logging the the return
        console.log("City: " + response.name);
        console.log("Country: "+response.sys.country);
        console.log("Current Humidity:" + response.main.humidity+" %");
        console.log("Current Temperature: " + response.main.temp+" &#x2109");
        console.log("Skies: "+response.weather[0].description);
        cbHandler(response);
      });
  }
  function cbHandler(weatherDetails){
    callBackResponse = weatherDetails;
  }