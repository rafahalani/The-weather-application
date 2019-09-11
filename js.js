document.getElementById("sub").addEventListener("click", function () {

    let city = document.getElementById("location").value;
    //console.log("city", city);


    var key = '97a6bb5cd72ffb86281b609a15567950';
    let temp;
    let weather;
    let days;
    let castTime;
    let day;
    let today = new Date().getDate();
    // console.log(today);


    //const milliseconds = 86400000; //let date = (threehourforecast.dt)*1000;

    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&appid=' + key)


        .then(function (resp) {
            return resp.json()
        }) // Convert data to json


        .then(function (data) {
            //console.log(data);
            data.list.forEach(function (threehourforecast) {
                //console.log(threehourforecast.main.temp);


            });

            for (let i = 0; i < data.list.length; i += 8) {


                castTime = data.list[i].dt_txt;// = the total sting from the day and time

                day = castTime.substring(8, 10); // to get the part you need from the string


                days = castTime.substring(0, 10)


                if ((day >= '01') || (day <= '31')) {


                    temp = data.list[i].main.temp;
                    weather = data.list[i].weather[0].description;

                    console.log(temp, days, weather);




                }

                document.getElementById("weather").innerHTML = weather;
                document.getElementById("temp").innerHTML = temp;
                document.getElementById("days").innerHTML = days;


            }

        });


});


