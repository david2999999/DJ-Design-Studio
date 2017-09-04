var express = require("express"),
    request = require("request"),
    app = express();
    
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.render("index");    
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("DJ Design Studio has started");
});