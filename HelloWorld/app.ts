/**
 * Created by shahzaib on 1/1/17.
 */

import Rx = require('rxjs/Rx');
var express = require('express');

var app = express();

var port = process.env.PORT|3000;

var server = app.listen(port,function(){
    console.log("Listening on : "+" "+server.address().port);
})

const simpleStream = Rx.Observable.of("Hello World");

simpleStream.subscribe((value)=>{
    console.log(value);
})
