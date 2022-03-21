const http = require('http');
const url = require('url');
const fs = require('fs');


http.createServer((req, res) =>{

    let path = url.parse(req.url).pathname;

    if (path == "" || path =="/"){
        path = "./index.html";
    }
    let fileName = "." + path;

    fs.readFile(fileName, (error, data) =>{
        if (error){
            res.writeHead(404, { "content-type": "text/html;charset=utf-8"});
            res.end("<h1>Página não encontrada</h1>");
        }else{
            res.writeHead(200, {"content-type": "text/html"});
            res.write(data);
            res.end();
        }
    })


}).listen(3000, (error)=>{
    if(error){
        console.log(error)
    }else{
        console.log("servidor rodando na porta 3000")
    }
})