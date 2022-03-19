var cityList = $("#city-list");
var cities = [];
var key = "3115f5e117aae93eeca554d43b95ce34";

//Format for day
function FormatDay() {
    var date = new Date();
    console.log(date);
    var month = date.getMonth() + 1;
    var day = date.getDate();

    var dayOutput = date.getFullYear() + '/' +
        (month < 10 ? '0' : '') + month + '/' +
        (day < 10 ? '0' : '') + day;
    return dayOutput;
}

init();

function init() {
    localStorage.clear()
    const span = document.getElementById('Date');
    const temperature = document.getElementById('temperature')
    const humidity = document.getElementById('humidity')
    const windSpeed = document.getElementById('wind-speed')
    const uvIndex = document.getElementById('uv-index')
    var date = FormatDay();
    span.textContent = date
    var cityName = "Atlanta"
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + key;
    fetch(queryURL)
        .then(response => response.json())
        .then(function (data) {
            var temperatureNumber = parseInt((data.main.temp) * 9 / 5 - 459)
            temperature.textContent = temperatureNumber + " °F"
            humidity.textContent = data.main.humidity + " %"
            windSpeed.textContent = data.main.speed + " %"
            windSpeed.textContent = data.main.humidity + " %"
            var CoordLon = data.coord.lon;
            var CoordLat = data.coord.lat;
            var queryURL2 = "https://api.openweathermap.org/data/2.5/uvi?appid=" + key + "&lat=" + CoordLat + "&lon=" + CoordLon;
            fetch(queryURL2)
                .then(response => response.json())
                .then(function (data) {
                    uvIndex.textContent = data.value
                })
        })
    getFiveDayForecast(cityName);
}


$("#searchButton").on("click", function (event) {
    event.preventDefault();
    var city = $(".form-input").val().trim();
    if (city === "") {
        return;
    }
    cities.push(city);
    localStorage.setItem("cities", JSON.stringify(cities))
    renderCityButton(city)
    getFiveDayForecast(city)
});

$("#searchCityAustin").on("click", function (event) {
    event.preventDefault();
    console.log("hi")
    var city = document.getElementById("searchCityAustin").value
    if (city === "") {
        return;
    }y
    cities.push(city);
    localStorage.setItem("cities", JSON.stringify(cities))
    var cityInput = localStorage.getItem("cities");
    renderCityButton(city)
    getFiveDayForecast(city)
});

$("#searchCityAustin").on("click", function (event) {
    event.preventDefault();
    var city = document.getElementById("searchCityAustin").value
    if (city === "") {
        return;
    }
    cities.push(city);
    localStorage.setItem("cities", JSON.stringify(cities))
    var cityInput = localStorage.getItem("cities");
    renderCityButton(city)
    getFiveDayForecast(city)
});

$("#searchCityChicago").on("click", function (event) {
    event.preventDefault();
    var city = document.getElementById("searchCityChicago").value
    if (city === "") {
        return;
    }
    //Adding city-input to the city array
    cities.push(city);
    localStorage.setItem("cities", JSON.stringify(cities))
    console.log(localStorage)
    renderCityButton(city)
    getFiveDayForecast(city)
});

$("#searchCityNewYork").on("click", function (event) {
    event.preventDefault();
    var city = document.getElementById("searchCityNewYork").value
    if (city === "") {
        return;
    }
    cities.push(city);
    localStorage.setItem("cities", JSON.stringify(cities))
    var cityInput = localStorage.getItem("cities");
    renderCityButton(city)
    getFiveDayForecast(city)
});

$("#searchCityOrlando").on("click", function (event) {
    event.preventDefault();
    var city = document.getElementById("searchCityOrlando").value
    if (city === "") {
        return;
    }
    cities.push(city);
    localStorage.setItem("cities", JSON.stringify(cities))
    var cityInput = localStorage.getItem("cities");
    renderCityButton(city)
    getFiveDayForecast(city)
});

$("#searchCitySanFrancisco").on("click", function (event) {
    event.preventDefault();
    var city = document.getElementById("searchCitySanFrancisco").value
    if (city === "") {
        return;
    }
    //Adding city-input to the city array
    cities.push(city);
    localStorage.setItem("cities", JSON.stringify(cities))
    var cityInput = localStorage.getItem("cities");
    renderCityButton(city)
    getFiveDayForecast(city)
});

$("#searchCitySeattle").on("click", function (event) {
    event.preventDefault();
    var city = document.getElementById("searchCitySeattle").value
    if (city === "") {
        return;
    }
    cities.push(city);
    localStorage.setItem("cities", JSON.stringify(cities))
    var cityInput = localStorage.getItem("cities");
    renderCityButton(city)
    getFiveDayForecast(city)
});

$("#searchCityDenver").on("click", function (event) {
    event.preventDefault();
    var city = document.getElementById("searchCityDenver").value
    if (city === "") {
        return;
    }
    //Adding city-input to the city array
    cities.push(city);
    localStorage.setItem("cities", JSON.stringify(cities))
    var cityInput = localStorage.getItem("cities");
    renderCityButton(city)
    getFiveDayForecast(city)
});

$("#searchCityAtlanta").on("click", function (event) {
    event.preventDefault();
    var city = document.getElementById("searchCityAtlanta").value
    if (city === "") {
        return;
    }
    cities.push(city);
    localStorage.setItem("cities", JSON.stringify(cities))
    var cityInput = localStorage.getItem("cities");
    renderCityButton(city)
    getFiveDayForecast(city)
});

function renderCityButton(city) {
    const currentCity = document.getElementById("current-city")
    const span = document.getElementById('Date');
    const temperature = document.getElementById('temperature')
    const humidity = document.getElementById('humidity')
    const windSpeed = document.getElementById('wind-speed')
    const uvIndex = document.getElementById('uv-index')
    var date = FormatDay();
    span.textContent = date
    currentCity.textContent = city
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + key;
    fetch(queryURL)
        .then(response => response.json())
        .then(function (data) {
            var temperatureNumber = parseInt((data.main.temp) * 9 / 5 - 459)
            temperature.textContent = temperatureNumber + " °F"
            humidity.textContent = data.main.humidity + " %"
            windSpeed.textContent = data.main.speed + " %"
            windSpeed.textContent = data.main.humidity + " %"
            var CoordLon = data.coord.lon;
            var CoordLat = data.coord.lat;
            var queryURL2 = "https://api.openweathermap.org/data/2.5/uvi?appid=" + key + "&lat=" + CoordLat + "&lon=" + CoordLon;
            fetch(queryURL2)
                .then(response => response.json())
                .then(function (data) {
                    uvIndex.textContent = data.value
                })
        })
}

function getFiveDayForecast(city) {
    var queryURL3 = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + key;
    $.ajax({
        url: queryURL3,
        method: "GET"
    }).then(function (response5day) {
        $("#boxes").empty();
        console.log(response5day);
        for (var i = 0, j = 0; j <= 5; i = i + 6) {
            var read_date = response5day.list[i].dt;
            if (response5day.list[i].dt != response5day.list[i + 1].dt) {
                var FivedayDiv = $("<div>");
                FivedayDiv.attr("class", "")
                var d = new Date(0); 
                d.setUTCSeconds(read_date);
                var date = d;
                console.log(date);
                var month = date.getMonth() + 1;
                var day = date.getDate();
                var dayOutput = date.getFullYear() + '/' +
                    (month < 10 ? '0' : '') + month + '/' +
                    (day < 10 ? '0' : '') + day;
                var Fivedayh4 = $("<h6>").text(dayOutput);
                //Set src to the imags
                var imgtag = $("<img>");
                var skyconditions = response5day.list[i].weather[0].main;
                if (skyconditions === "Clouds") {
                    imgtag.attr("src", "https://img.icons8.com/color/48/000000/cloud.png")
                } else if (skyconditions === "Clear") {
                    imgtag.attr("src", "https://img.icons8.com/color/48/000000/summer.png")
                } else if (skyconditions === "Rain") {
                    imgtag.attr("src", "https://img.icons8.com/color/48/000000/rain.png")
                }

                var pTemperatureK = response5day.list[i].main.temp;
                console.log(skyconditions);
                var TempetureToNum = parseInt((pTemperatureK) * 9 / 5 - 459);
                var pTemperature = $("<p>").text("Tempeture: " + TempetureToNum + " °F");
                var pHumidity = $("<p>").text("Humidity: " + response5day.list[i].main.humidity + " %");
                FivedayDiv.append(Fivedayh4);
                FivedayDiv.append(imgtag);
                FivedayDiv.append(pTemperature);
                FivedayDiv.append(pHumidity);
                $("#boxes").append(FivedayDiv);
                console.log(response5day);
                j++;
            }

        }
    });
};