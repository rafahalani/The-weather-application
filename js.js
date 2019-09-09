function weatherBalloon(cityID) {
    var key = '97a6bb5cd72ffb86281b609a15567950';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + key)


        .then(function (resp) {
            return resp.json()
        }) // Convert data to json


        .then(function (data) {
            console.log(data);
            drawWeather(data);
        })


        .catch(function () {
            // catch any errors
        });

    function drawWeather(d) {
        var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
      //  var fahrenheit = Math.round(((parseFloat(d.main.temp) - 273.15) * 1.8) + 32);

        document.getElementById('description').innerHTML = d.weather[0].description;
        document.getElementById('temp').innerHTML = celcius + '&deg;';
        document.getElementById('location').innerHTML = d.name;
    }
}



window.onload = function () {
    weatherBalloon(6167865);//get by id from html
}

