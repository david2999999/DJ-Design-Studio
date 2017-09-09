var express = require("express"),
    request = require("request"),
    app = express();
    
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.render("index");    
});

//////////////////////////////
//THE WEB DEVELOPER BOOTCAMP//
//////////////////////////////
app.get("/TWDB/color-game",function(req, res){
    res.render("TWDB/color-game")
});

app.get("/TWDB/to-do-list",function(req, res){
    res.render("TWDB/to-do-list.ejs");
});

//////////////////
//FREE CODE CAMP//
//////////////////
app.get("/FCC/random-quote",function(req, res) {
    res.render("FCC/random-quote");
});

app.get("/FCC/weather",function(req, res) {
    res.render("FCC/weather-api");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("DJ Design Studio has started");
});