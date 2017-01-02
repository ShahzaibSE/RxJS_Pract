/**
 * Created by shahzaib on 1/3/17.
 */
"use strict";
var Rx = require('rxjs/Rx');
var express = require('express');
var app = express();
var port = process.env.PORT | 3000;
var server = app.listen(port, function () {
    console.log("Listening on :" + " " + server.address().port);
});
// //Observer
// ​var ​observer = Rx.Observer.create(
// ​ ​ function ​onNext(x) { console.log(​ 'Next: '​+ x); },
// ​ ​ function​ onError(err) { console.log(​ 'Error: '​+ err); },
// ​ ​ function​ onCompleted() { console.log(​ 'Completed'​ ); }
// ​);
// Creating first Observable.
var observable = Rx.Observable.create(function (observer) {
    observer.next("Batman"); //onNext -> next , onError - > error , onComplete -> error
    observer.next("Superman");
    observer.next("Wonder Woman");
    observer.complete("Sequence has been completed successfully");
    // observer.onCompleted(function(){
    //     console.log("Sequence completed successfully");
    // });
});
// Creating first Observable.
// var observable = Rx.Observable.create((val)=>{
//
//     var someValue = val;
//     console.log("Value:"+" "+someValue);
//
// })
observable.subscribe(function (val) {
    console.log(val);
});
// const simpleStream = Rx.Observable.of("Hello World");
// simpleStream.subscribe((value)=>{
//     console.log(value);
// })
