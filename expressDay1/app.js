var express = require("express");
var bodyParser = require('body-parser');
var app = express();


//add your content here
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


app.use("/api/calculator/:operation/:n1/:n2", function(req,res,next){
    var calculatorRequest = {
        operation: req.params.operation,
        n1: Number(req.params.n1),
        n2: Number(req.params.n2)
    }
    req.body = calculatorRequest;
    
    next();
});

app.get("/api/calculator/*",function(req,res,next){
  console.log(req.body.operation);
    let result;
    switch(req.body.operation) {
    case "add" :
        result = req.body.n1 + req.body.n2;
        res.send('Result: ' + result);
        break;
    
    case "subtraction":
        result = req.body.n1 - req.body.n2;
        res.send('Result: ' + result);
        break;

    case "multiplication":
        result = req.body.n1 * req.body.n2;
        res.send('Result: ' + result);
        break;

    case "division":
        result = req.body.n1 / req.body.n2;
        res.send('Result: ' + result);
        break;
    }
    next();

})


app.listen(3000,function(){
  console.log("Server started, listening on: "+3000);
})