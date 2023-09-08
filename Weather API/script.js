const weatherEle = document.getElementById("weather");
const weatherBtn = document.getElementById("weatherBtn");

weatherBtn.addEventListener("click", getWeather);

getWeather();

async function getWeather() {
  const url =
    "https://tomorrow-io1.p.rapidapi.com/v4/weather/forecast?location=42.15%2C%2082%2C1&timesteps=1h&units=metric";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "af42d0281cmsh5902041f7de0d4cp1128b6jsnf60e267290e9",
      "X-RapidAPI-Host": "tomorrow-io1.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json(); // Parse JSON response
    const temperature = result.timelines.hourly[0].values.temperature;
    const uvIndex = result.timelines.hourly[0].values.uvIndex;
    const humidity = result.timelines.hourly[0].values.humidity;

    weatherEle.innerText = `Temperature- ${temperature}, UV Index- ${uvIndex} and Humidity- ${humidity}`;
  } catch (error) {
    console.error(error);
  }
}
