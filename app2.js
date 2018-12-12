var express = require('express');
var app = express();

app.get('/',function(req,res)
{
    res.send('Hello World!');
});

var server=app.listen(3000,function() {});

app.route('/acklio1',get(function(req,res)
{
    res.send("Acklio training 1");
});
post(function(req,res)
{
    res.send("Acklio training 2");
});
put(function(req,res)
{
    res.send('Welcome to Acklio training session');
}));

var express=require('express');
var app=express();
