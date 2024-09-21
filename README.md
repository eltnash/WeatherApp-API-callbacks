# WeatherApp-API-callbacks
 Writing a piece of code for a weather  callbacks for Async API Operations

 Exercise: Simulated Weather App with Callbacks
 
Scenario: You’re building a simplified weather app. The app needs to:

Fetch the current weather data from a remote server (simulated using a setTimeout).
Fetch the forecast data after the current weather has been retrieved (also simulated).
Once both requests are completed, you should display the current weather and the forecast in the console.
To make this exercise challenging, each "API call" (simulated with setTimeout) will take a different amount of time to complete. You'll need to ensure the forecast only displays after the current weather has been fetched. For this, you’ll have to manage the order of execution using callbacks.

Steps:
Fetch Current Weather: Simulate an API call to get current weather data using setTimeout. After fetching the weather data, call a callback function that handles the forecast request.

Fetch Forecast: Simulate another API call to fetch the forecast. This should happen only after the current weather data is retrieved, and you'll use another callback to handle this.

Display Results: After both pieces of data (current weather and forecast) have been retrieved, display them.

Requirements:
Two separate API calls simulated using setTimeout functions. Each one represents a call to a remote server to get data.
Use callbacks to manage the order of execution.
Ensure the forecast is fetched after the current weather has been fetched.
Print both the current weather and the forecast to the console.
