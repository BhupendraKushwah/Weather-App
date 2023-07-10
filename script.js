const Getcity = async (city) => {
    const url = `http://api.weatherapi.com/v1/current.json?key=555abef2173e419fb6461651230107&q=${city}&aqi=no`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '526ec20ab0msh06a93d9493a21dep1a8c2fjsn99261026b0d2',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        let card= document.querySelector(".card-body")
        let WeatherIcon=document.getElementById('WeatherIcon')
        if (!result.error) {
            let wind_speed = result.current.wind_kph
            let temp = result.current.temp_c
            let humidity = result.current.humidity
            let feels_like = result.current.feelslike_c
            let wind_dir = result.current.wind_dir
            let cloud_condition = result.current.condition.text
            let visibility = result.current.vis_km
            weatherData = { wind_speed: wind_speed, temp: temp, humidity: humidity, wind_dir: wind_dir, feels_like: feels_like, cloud_condition: cloud_condition,visibility: visibility}
            for (i in weatherData) {
                console.log(weatherData[i],"=",i)
                AddWeather(weatherData[i], i)
            }
            card.removeChild(card.firstChild)
            console.log(result)
            city=city.toUpperCase()
            cityName.innerHTML = city
            countryName.innerHTML = result.location.country
            WeatherIcon.style.backgroundImage=`url(${result.current.condition.icon})`
        } else {
            card.removeChild(card.firstChild)
            alert(result.error.message)
        }
    } catch (error) {
        console.error(error);
    }
};
let btn = document.getElementById('btn');
let card= document.querySelector(".card-body")
btn.addEventListener('click', (e) => {
    e.preventDefault()
    Getcity(city.value)
    let preloader = document.createElement('div')
    let loader = document.createElement('div')
    loader.className ='loader'
    preloader.className='preloader'
    preloader.appendChild(loader)
    card.prepend(preloader)
     })

Getcity('Gwalior')

const AddWeather = (data, id) => {
    id1 = document.getElementById(id);
    id1.innerHTML = data
}

// Preloader

// let loader = document.getElementById("preloader");
//  window.addEventListener("load", () => {
//     loader.style.display = "none"
//  })