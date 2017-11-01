var express = require("express"),
    request = require("request"),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    expressSanitizer = require("express-sanitizer"),
    mongoose = require("mongoose"),
    app = express();
    

// mongoose.connect(process.env.DATABASEURL);
mongoose.Promise = global.Promise;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(methodOverride("_method"));

// Mongoose / model configuration
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: 
        {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);


///////////////////////////////

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
    res.render("TWDB/to-do-list");
});

app.get("/TWDB/Mountain-Climb",function(req, res){
    res.render("TWDB/mountain-climb");
});

///////////////////////////
// RESTful ROUTING BLOG //
///////////////////////////

app.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs){
        if(err){
            console.log(err);
        }else{
            res.render("Blog/index", {blogs : blogs});
        }
    });
});

// New Route
app.get("/blogs/new", function(req, res){
    res.render("Blog/new");
});


//Create Route
app.post("/blogs", function(req, res){
    // create blog 
    console.log(req.body);
    req.body.blog.body = req.sanitize(req.body.blog.body);
    console.log("========");
    console.log(req.body);
    
    Blog.create(req.body.blog, function(err, newBlog){
        if(err){
            res.render("Blog/new");
        }else{
            //then redirect to the index
            res.redirect("/blogs");
        }
    });
});

//SHOW route
app.get("/blogs/:id", function(req, res) {
   
    Blog.findById(req.params.id, function(err, foundBlog){
       if(err){
           res.redirect("/blogs");
       } else{
           res.render("Blog/show", {blog: foundBlog});
       }
    });
});


app.get("/blogs/:id/edit",function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
       if(err){
           res.redirect("/blogs");
       } else{
           res.render("Blog/edit", {blog: foundBlog});
       }
    });
});

//update route
app.put("/blogs/:id",function(req, res){
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
       if(err){
           res.redirect("/blogs");
       }else{
           res.redirect("/blogs/" + req.params.id);
       }
   });
});

// delete route
app.delete("/blogs/:id", function(req, res){
    //destroy blog
    Blog.findByIdAndRemove(req.params.id, function(err){
       if(err){
           res.redirect("/blogs");
       } else{
           res.redirect("/blogs");
       }
    });
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
app.get("/FCC/wiki",function(req, res) {
    res.render("FCC/wiki-api");
});



    
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("DJ Design Studio has started");
});