document.getElementById("sub").addEventListener("click", function () {

    let city = document.getElementById("location").value;
    //console.log("city", city);


    var key = '97a6bb5cd72ffb86281b609a15567950';
    let midnight, midday;
    let temp;

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

            for (let i = 0; i < data.list.length; i++) {
                let castTime = data.list[i].dt_txt;// = the total sting from the day and time
                let hours = castTime.substring(11, 13); // to get the part you need from the string
                // console.log(hours);
                let days = castTime.substring(8,9)


                if (hours === '00') {
                    midnight = data.list[i].main.temp;
                    // console.log(midnight);
                }
                if (hours === '2') {

                    midday = data.list[i].main.temp;
                    //console.log(midday);
                }


                temp = parseInt((midnight + midday) / 2);
                console.log(midnight, midday, temp);

            }

        });


});


