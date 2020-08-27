const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){
  const query = req.body.cityName;
  const apiKey = " ";
  url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey+"&units=metric";

  https.get(url, function(response){
    console.log(response.statusCode);

    response.on("data", function(data){
      const weatherData = JSON.parse(data);
      console.log(weatherData);
      const temp = weatherData.main.temp;
      console.log(temp);
      const desc = weatherData.weather[0].description;
      console.log(desc);
      const icon = weatherData.weather[0].icon;

      res.write('<img src="https://openweathermap.org/img/wn/' + icon + '@2x.png"></img>');
      res.write("<h1>The temperature in "+ query+" is " + temp + " degrees Celcius.</h1>");
      res.write("<p>Weather Description: " + desc +  "</p>");
      res.send();
    })
  });
})

app.listen(3000, function() {
  console.log("Server is running on port 3000.");
})
