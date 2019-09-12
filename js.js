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
    let clone;
    const target = document.getElementById("target");
    let icons,iconURL;
    // console.log(today);


    //const milliseconds = 86400000; //let date = (threehourforecast.dt)*1000;

    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&appid=' + key)


        .then(function (resp) {
            return resp.json()
        }) // Convert data to json


        .then(function (data) {
            //console.log(data);
            //data.list.forEach(function (forecast) {});



            for (let i = 0; i < data.list.length; i+=8) {

                let template = document.getElementById("template");
                let tempIcon = template.content.getElementById("iconDay");
                let tempWeather = template.content.getElementById("weather");
                let tempTemp = template.content.getElementById("temp");
                let tempDays = template.content.getElementById("days");


                castTime = data.list[i].dt_txt;// = the total sting from the day and time


                days = castTime.substring(0, 10);// to get the part you need from the string

                temp = data.list[i].main.temp;
                weather = data.list[i].weather[0].description;


                icons = data.list[i].weather[0].icon;
                iconURL = "http://openweathermap.org/img/wn/" + icons + ".png";
                tempIcon.src = iconURL;

                console.log(temp, days, weather,icons);

                tempWeather.innerText = weather;
                tempTemp.innerText = 'Temperature : ' +temp + '°';
                tempDays.innerText =  'Date : ' +days ;

                console.log(temp);



                clone = template.content.cloneNode(true);
                target.appendChild(clone);
            }


        });


});


