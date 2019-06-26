var express=require("express")
var app=express();

   var emp=[
   {name:"priya",age:"22",salary:"5000",dept:"HR",businessEntity:"employee"},
   {name:"priya",age:"22",salary:"5000",dept:"HR",businessEntity:"employee"},
   {name:"priya",age:"22",salary:"5000",dept:"HR",businessEntity:"employee"}
   ];
 var employee=function(req,res)
{
res.send(emp)

}
app.get('/emp',employee);
app.listen(4000);