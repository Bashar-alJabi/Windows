const cityWeather = document.querySelector('.weather .info .content .city');
const tempWeather = document.querySelector('.weather .info .content .temp');
const iconWeather = document.querySelector('.weather .info .icon');

const city = document.querySelector('.weather .full-info .content .name span.city');
const country = document.querySelector('.weather .full-info .content .name span.country');
const icon = document.querySelector('.weather .full-info .content .icon');
const temp = document.querySelector('.weather .full-info .content .temp span');
const stat = document.querySelector('.weather .full-info .content .status span');
const clouds = document.querySelector('.weather .full-info .content .clouds span');
const wind = document.querySelector('.weather .full-info .content .wind span');
const hum = document.querySelector('.weather .full-info .content .hum span');

function getWeatherByLocation(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const apiKey = 'cdef0297ae6bf67056e7f2f397ecfc46';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            cityWeather.textContent = data.name;
            tempWeather.textContent = `${Math.round(data.main.temp - 273.15)}°C`;
            iconWeather.innerHTML = `<img src='https://openweathermap.org/img/wn/${data.weather[0].icon}.png'>`;

            city.textContent = data.name;
            country.textContent = ` - ${data.sys.country}`;
            icon.innerHTML = `<img src='https://openweathermap.org/img/wn/${data.weather[0].icon}.png'>`;
            temp.textContent = ` ${Math.round(data.main.temp - 273.15)}°C`;
            stat.textContent = ` ${data.weather[0].description}`;
            clouds.textContent = ` ${data.clouds.all}`;
            wind.textContent = ` ${data.wind.speed}`;
            hum.textContent = ` ${data.main.humidity}`;
        })
        .catch(error => {
            console.log('An error occurred while fetching weather data:', error);
        });
}

function showError(error) {
    console.log('An error occurred while retrieving geolocation:', error);

    const defaultWeather = {
        name: 'New York',
        temp:  20,
        weather: [{ icon: '02d', description: 'few clouds' }],
        sys: { country: 'US' },
        clouds: { all: 8 },
        wind: { speed: 3.24 },
        main: { humidity: 56 }
    };

    cityWeather.textContent = defaultWeather.name;
    tempWeather.textContent = `${defaultWeather.temp}°C`;
    iconWeather.innerHTML = `<img src='https://openweathermap.org/img/wn/${defaultWeather.weather[0].icon}.png'>`;

    city.textContent = defaultWeather.name;
    country.textContent = ` - ${defaultWeather.sys.country}`;
    icon.innerHTML = `<img src='https://openweathermap.org/img/wn/${defaultWeather.weather[0].icon}.png'>`;
    temp.textContent = ` ${defaultWeather.temp}°C`;
    stat.textContent = ` ${defaultWeather.weather[0].description}`;
    clouds.textContent = ` ${defaultWeather.clouds.all}`;
    wind.textContent = ` ${defaultWeather.wind.speed}`;
    hum.textContent = ` ${defaultWeather.main.humidity}`;
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getWeatherByLocation, showError);
    } else {
        console.log('Geolocation is not supported by this browser.');
    }
}
getLocation();
setInterval(getLocation, 3600000/2);

document.onkeydown = function (e) {
    if (e.key === "Tab") {
        return false;
    }
};

// Open Full Weather Menu
const weather = document.querySelector('.weather .info');
const fullWeatherMenu = document.querySelector('.weather .full-info');
openItem(weather, fullWeatherMenu, 'open', showOnlyWeather);