//import rx = require('rx');

import {Observable} from 'rxjs/Rx'

var allMoves = Observable.fromEvent(document,'mousemove');
allMoves.subscribe(function(x:MouseEvent)
{
    console.log(x.clientX,x.clientY);
})

var mouse_on_right = allMoves.filter(function(x:MouseEvent)
{
    return x.clientX > window.innerWidth/2;
})

var mouse_on_left = allMoves.filter(function(x:MouseEvent)
{
    return x.clientX < window.innerWidth/2;
})

//Now Subscribing both positions right and left.

mouse_on_right.subscribe(function(val)
{
    console.log("Right Position:"+" "+val);
})

mouse_on_left.subscribe(function(val)
{
    console.log("Right Position:"+" "+val);
})