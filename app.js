const express = require("express");
const http = require("http");

const app = express();

const server = http.createServer(app);

app.get('/', function(req,res){
        res.send("Hello technoforte");
});

server.listen(3000, function(){
        console.log("Server is listening on port: 3000");
});
