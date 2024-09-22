const getDailyWeather = document.querySelector(".dailyWeather");
const getDailyForecast = document.querySelector(".dailyForecast");


function fetchCurrentWeather(callback){
    setTimeout(() => { //setTimeout is simulating an API CALL  to fetch curernt weather data
        weatherData = "Weather data obtained";
        callback(weatherData)
    }, 5000);
    //helps us to control the order of execution, How?
};

// we have declared this function, how are we going to execute it ?



function fetchWeatherForecast(callback){
    setTimeout(() => {
        forecastData = "forecast data obtained";
        callback(forecastData);
    }, 2000);


};

function DisplayWeatherData(){
    fetchCurrentWeather((weatherData)=>{
        fetchWeatherForecast((forecastData)=>{
            getDailyWeather.textContent = weatherData;
            getDailyForecast.textContent = forecastData;
        })
    })
}

DisplayWeatherData();
