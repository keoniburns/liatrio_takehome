const http = require("http");
const hostname = "127.0.0.1";
const port = 8000;

const data = require('./data.json');
const fs = require("fs")
const filename = './data.json'
const file = require(filename);

let date = new Date();
curMonth = date.getMonth();
curDay = date.getDate();
curYear = date.getFullYear();

data.timestamp = `${curMonth}.${curDay}.${curYear}`;

fs.writeFile(filename, JSON.stringify(file),function writeJSON(err) {
    if (err){
        return console.log(err);
    }
    console.log(JSON.stringify(file));

})

const server = http.createServer(function (req, res){
    res.writeHead(200, {"content-type": "text/plain"});
    //res.end("hello world\n");
    res.end(`${data.message}\n ${data.timestamp}\n ${curMonth}${curDay}${curYear}`);
});

server.listen(port, hostname, function (){
    console.log(`server running at http://${hostname}:${port}/`);
});