const http= require('http');
//const data = require('./data');
http.createServer((req,resp)=>{
resp.writeHead(500,{'Content-Type':'application\json'});
resp.write(JSON.stringify({name:'abc',email:'abc@gmail.com'}));
resp.end();
}).listen(5000);