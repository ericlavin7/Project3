var maxTemp;
var minTemp;
var chanceOfRain;
var chanceOfSnow;
var maxWind;

var makeApiRequest = function(){
    document.getElementById("suggestionButton").style.visibility = "visible";

    var request = new XMLHttpRequest();

            var userInput = document.getElementById("textbox").value;
            console.log("zip code: " + userInput);

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
                console.log("Max Temp: " + maxTemp);
                console.log("Min Temp: " + minTemp);
                console.log("Chance of Rain: " + chanceOfRain);
                console.log("Chance of Snow: " + chanceOfSnow);
                console.log("Max Wind: " + maxWind);

                document.getElementById("temp").innerHTML = maxTemp + " F / " + minTemp + " F";
                document.getElementById("chanceOfRain").innerHTML = "Rain " + chanceOfRain +"%";
                document.getElementById("chanceOfSnow").innerHTML = "Snow " + chanceOfSnow +"%";
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
