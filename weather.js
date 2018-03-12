let updateWidget = function(data) {

  console.log("Got weather data: ", data)
  jQuery(".card-title").text(data.name)
  jQuery(".card-text").text("It is " + data.main.temp.toFixed(0) + " degrees outside.")
  let iconLine = data.weather[0]
  console.log(iconLine)
  let showIcon = iconLine.icon
  let iconURL = "http://openweathermap.org/img/w/" + showIcon + ".png"
  console.log(iconURL)
  jQuery("#changeImage").attr("src", iconURL)

}

let handlePosition = function(event) {
  console.log("Starting handlePosition...")
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getWeather);
  console.log("Ending handlePosition")
}


let getWeather = function(info) {
  console.log(info)
  window.myInfo = info
  let latitude = info.coords.latitude;
  let longitude = info.coords.longitude;
  let apiKey = '1b94c2462724022d97e2d9149bb91331'; // REPLACE THIS VALUE with your own key.

  let weatherServiceURL = 'https://api.openweathermap.org/data/2.5/weather?'
  weatherServiceURL += 'lat=' + latitude
  weatherServiceURL += '&lon=' + longitude
  weatherServiceURL +='&appid=' + apiKey + '&units=imperial'

  fetch(weatherServiceURL).then(convertToJSON).then(updateWidget).catch(displayError);

}


jQuery("#get_forecast").on("click", handlePosition)

////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANY CODE BEYOND THIS POINT
////////////////////////////////////////////////////////////

let convertToJSON = function(rawData) { return rawData.json(); }
let displayError = function(error) { console.debug(error); }
