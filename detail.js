var http=require("http")

var employee=[
{name:"priya",age:"22",salary:"5000",dept:"HR",businessEntity:"employee"},
{name:"priya",age:"22",salary:"5000",dept:"HR",businessEntity:"employee"},
{name:"priya",age:"22",salary:"5000",dept:"HR",businessEntity:"employee"}
];

http.createServer(function(req,resp)

{
resp.writeHead(200,{"content-type":"text/plain"});
resp.end(JSON.stringify(employee));
}).listen(8000);