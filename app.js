const http = require('http');


http.createServer((req, res) =>{

    // res.writeHead(200, {'content-Type': 'text/plain' })
    // res.writeHead(200, {'content-Type': 'text/html' })
    res.writeHead(200, {'content-Type': 'application/json' })

    // res.end('<h1>Hello World</h1>');
    // res.end({texto: '<h1> Hello World! </h1>'});
    res.end(JSON.stringify({texto: '<h1> Hello World! </h1>'}));


}).listen(3000, (error)=>{
    if(error){
        console.log(error)
    }else{
        console.log("servidor rodando na porta 3000")
    }
})