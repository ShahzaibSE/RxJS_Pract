//import rx = require('rx');
var Rx_1 = require('rxjs/Rx');
var allMoves = Rx_1.Observable.fromEvent(document, 'mousemove');
allMoves.subscribe(function (x) {
    console.log(x.clientX, x.clientY);
});
var mouse_on_right = allMoves.filter(function (x) {
    return x.clientX > window.innerWidth / 2;
});
var mouse_on_left = allMoves.filter(function (x) {
    return x.clientX < window.innerWidth / 2;
});
//Now Subscribing both positions right and left.
mouse_on_right.subscribe(function (val) {
    console.log("Right Position:" + " " + val);
});
mouse_on_left.subscribe(function (val) {
    console.log("Right Position:" + " " + val);
});
