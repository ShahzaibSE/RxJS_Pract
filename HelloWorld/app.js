/**
 * Created by shahzaib on 1/1/17.
 */
"use strict";
var Rx = require('rxjs/Rx');
var express = require('express');
var app = express();
var port = process.env.PORT | 3000;
var server = app.listen(port, function () {
    console.log("Listening on : " + " " + server.address().port);
});
var simpleStream = Rx.Observable.of("Hello World");
simpleStream.subscribe(function (value) {
    console.log(value);
});
