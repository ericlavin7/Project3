var maxTemp;
var minTemp;
var chanceOfRain;
var chanceOfSnow;
var maxWind;
var makeApiRequest = function(){
    var request = new XMLHttpRequest();

            var userInput = document.getElementById("textbox").value;
            console.log(userInput);

            request.open("GET", 
            "http://api.weatherapi.com/v1/forecast.json?key=dce780e048df4327bcf60314201011&q=" + userInput + "&days=1", true);
            request.send();

            request.onload = function(){
                data = JSON.parse(this.response);
                maxTemp = data.forecast.forecastday[0].day.maxtemp_f;
                minTemp = data.forecast.forecastday[0].day.mintemp_f;
                chanceOfRain = data.forecast.forecastday[0].day.daily_chance_of_rain;
                chanceOfSnow = data.forecast.forecastday[0].day.daily_chance_of_snow;
                maxWind = data.forecast.forecastday[0].day.maxwind_mph;
                console.log(maxTemp);
                console.log(minTemp);
                console.log(chanceOfRain);
                console.log(chanceOfSnow);
                console.log(maxWind);

                document.getElementById("temp").innerHTML = "Maximum temp: " + maxTemp +" degrees Fahrenheit.\n" + "Minimum temp: " + minTemp +" degrees Fahrenheit.";
                document.getElementById("chanceOfRain").innerHTML = "The chance of rain is " + chanceOfRain +"%.";
                document.getElementById("chanceOfSnow").innerHTML = "The chance of snow is " + chanceOfSnow +"%.";
            }
            
}


var makeSuggestions = function () {
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

var maxTemp;
var minTemp;
var chanceOfRain;
var chanceOfSnow;
var maxWind;
var makeApiRequest = function(){
    var request = new XMLHttpRequest();

            var userInput = document.getElementById("textbox").value;
            console.log(userInput);

            request.open("GET", 
            "http://api.weatherapi.com/v1/forecast.json?key=dce780e048df4327bcf60314201011&q=" + userInput + "&days=1", true);
            request.send();

            request.onload = function(){
                data = JSON.parse(this.response);
                maxTemp = data.forecast.forecastday[0].day.maxtemp_f;
                minTemp = data.forecast.forecastday[0].day.mintemp_f;
                chanceOfRain = data.forecast.forecastday[0].day.daily_chance_of_rain;
                chanceOfSnow = data.forecast.forecastday[0].day.daily_chance_of_snow;
                maxWind = data.forecast.forecastday[0].day.maxwind_mph;
                console.log(maxTemp);
                console.log(minTemp);
                console.log(chanceOfRain);
                console.log(chanceOfSnow);
                console.log(maxWind);;
            }
            
}
