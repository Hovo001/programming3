var express = require("express");
var app = express();

// app.get("/", function(req, res){
//    res.send("<h1>Hello world</h1>");
// });
// app.get("/name/:name", function(req, res){
//    var name = req.params.name;
//    res.send("<h1>Hello " +name +"</h1>");
// });
app.get("/name/:name",function(req,res){
    var search=req.params.name;
    //res.send("<h1>"+search+"</h1>")
    res.redirect("..")
     res.redirect("https://www.google.am/");
});
app.listen(404, function(){
 console.log("Example is running on port 404");
});

