const hostname = "127.0.0.1";
const port = 80;
var express = require('express');
var app = express();

const data = require('./data.json');
const fs = require("fs");
const { STATUS_CODES } = require('http');
const filename = './data.json'
const file = require(filename);

let date = new Date();
curMonth = date.getMonth();
curDay = date.getDate();
curYear = date.getFullYear();

data.Timestamp = `${curMonth}${curDay}${curYear}`;

fs.writeFile(filename, JSON.stringify(file),function writeJSON(err) {
    if (err){
        return console.log(err);
    }

})

app.get('/', function(req,res){
    console.log(res.statusCode);
    res.writeHead(200, {"content-type": "application/json"});
    res.end();
    console.log(data);
    return(data);
    
})

var server = app.listen(port, function(){
    console.log(`server running at: ${hostname}:${port}`)
});
