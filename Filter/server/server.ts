///<referance path='./../typings/tsd.d.ts>

import express =  require('express');
import bodyparser = require('body-parser');
import session = require('express-session');
import path = require('path');
import url = require('url');
import mongoose = require('mongoose');


//Express Instance.
var app : express.Express = express();

//Setting Port.
var port = process.env.PORT|3000;

//Configuring Server.
var server = app.listen(port,function()
{
    var listening_port = server.address().port;
    console.log("The Server is listening on port"+" "+listening_port);
})

app.set('views','./../../client');

app.use(express.static(path.join(__dirname,'./../../client')));

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());