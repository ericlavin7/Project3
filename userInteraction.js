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

var getSuggestion = function () {
    var clothing = {umbrella:false, rainCoat:false, rainBoots:false,snowBoots:false,
     jacket:false, gloves:false, hat:false, shorts:false, shades:false, hoodie:false};
    if (maxTemp <= 32) {
        jacket, gloves, hat = true;
        if (maxTemp < 10) {
            snowBoots = true;
        }
    }
    if (maxTemp >= 70) {
        shorts = true;
    }
    if (minTemp > 32 && maxTemp < 80) {
        hoodie = true;
    }
    if (chanceOfRain < 10) {
        shades = true;
    }
    if (chanceOfRain > 50) {
        umbrella, rainCoat, rainBoots = true;
    }
    if (chanceOfSnow > 50) {
        jacket, gloves, hat = true;
        snowBoots = true;
    }

    var suggestion = "Clothing suggestions for today's weather: ";
    clothing.forEach(element => {
        if (element = true) {
            suggestion += " "+element;
        }
        suggestion += ". Use your discretion.";
         alert(suggestion);
    });


}
