const http= require('http');
const data = require('./data'); //imported data.js 
// we make data.js file and put  [({name:'abc',email:'abc@gmail.com'})]
http.createServer((req,resp)=>{
resp.writeHead(500,{'Content-Type':'application\json'});
resp.write(JSON.stringify(data));
resp.end();
}).listen(5000);