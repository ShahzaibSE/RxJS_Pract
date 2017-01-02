///<referance path='./../typings/tsd.d.ts>
"use strict";
var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');
//Express Instance.
var app = express();
//Setting Port.
var port = process.env.PORT | 3000;
//Configuring Server.
var server = app.listen(port, function () {
    var listening_port = server.address().port;
    console.log("The Server is listening on port" + " " + listening_port);
});
app.set('views', './../../client');
app.use(express.static(path.join(__dirname, './../../client')));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
