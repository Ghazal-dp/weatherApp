const ApiKey = "effc65d402767dd0c5278bed3dd5928c";
const UrlKey = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const btn = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon");

async function chekWeather(city) {
    // let weatherData = null;
    const response = await fetch(UrlKey + city + `&appid=${ApiKey}`);
    var data = response.json().then((data) => {
        // weatherData=data;
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km / h";

        // if(data.weather[0].main == "Clouds"){
        //     weatherIcon.src="images/clouds.png"
        // }else if(data.weather[0].main == "Clear"){
        //     weatherIcon.src="images/clear.png"
        // }

        switch (data.weather[0].main) {
            case "Clouds":
                weatherIcon.src = "images/clouds.png"
                break;
            case "Clear":
                weatherIcon.src = "images/clear.png"
                break;
            case "Rain":
                weatherIcon.src = "images/rain.png"
                break;
            case "snow":
                weatherIcon.src = "images/snow.png"
                break;
            case "drizzle":
                weatherIcon.src = "images/drizzle.png"
            case "mist":
                weatherIcon.src = "images/mist.png"
        }

        //   console.log(data)
    })
    // console.log(weatherData);

}
btn.addEventListener("click", () => {
    chekWeather(searchbox.value)
})

