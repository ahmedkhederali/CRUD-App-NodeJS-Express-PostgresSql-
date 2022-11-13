require("dotenv").config();
var express = require('express'),
    path=require('path') ,
    bodyParser=require('body-parser') ,
    pg = require('pg'),
    app = express();



// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));
app.get("/",(req,res)=>{
     res.status(200).json({data:"Hello"})
})

app.use("/api/v1/student", require("./routes/stuRoutes"));
app.listen(3000, function(){
console.log("Server Run on 3000....." ) ;
})