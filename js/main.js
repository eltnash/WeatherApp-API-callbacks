function fetchCurrentWeather(callback){
    setTimeout(() => { //setTimeout is simulating an API CALL  to fetch curernt weather data
        WeatherData = "Weather data obtained";
        console.log(weatherData);
    }, 1000);
    callback() //helps us to control the order of execution, How?
};

// we have declared this function, how are we going to execute it ?



function fetchWeatherForecast(callback){
    setTimeout(() => {
        forecastData = "Weather data obtained";
        console.log(forecastData);
    }, 2000);
    callback()

};

function DisplayWeatherData(){
  console.log(fetchCurrentWeather(fetchWeatherForecast()))
    // console.log("current Weather data is", weatherData )
    // console.log("current foreccast is", forecastData)
 
}

DisplayWeatherData();
