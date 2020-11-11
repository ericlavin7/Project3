var makeApiRequest = function(){
    var request = new XMLHttpRequest();
            var number1 = '19085';
            var number2 = number1.toString();
            console.log(number2);
            request.open("GET", 
            "http://api.weatherapi.com/v1/forecast.json?key=dce780e048df4327bcf60314201011&q=" + number2 + "&days=1", true);
            request.send();
            request.onload = function(){
                var data = JSON.parse(this.response);
                var maxTemp = data.forecast.forecastday[0].day.maxtemp_f;
                var minTemp = data.forecast.forecastday[0].day.mintemp_f;
                var chanceOfRain = data.forecast.forecastday[0].day.daily_chance_of_rain;
                var chanceOfSnow = data.forecast.forecastday[0].day.daily_chance_of_snow;
                var maxWind = data.forecast.forecastday[0].day.maxwind_mph;
                console.log(maxTemp);
                console.log(minTemp);
                console.log(chanceOfRain);
                console.log(chanceOfSnow);
                console.log(maxWind);
                //document.getElementById("setup").innerHTML = setup;
                //document.getElementById("punchline").innerHTML = punchline;
                // document.write(setup + "<br>");
                // document.write(punchline + "<br>");
            }
            
}
