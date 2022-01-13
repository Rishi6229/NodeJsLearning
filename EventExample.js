const { EventEmitter } = require("stream");

const myEmitter = new MyEmitter();
class MyEmitter extends EventEmitter{}


myEmitter.on('event' , (a , b) =>{
    console.log(a , b , this);
});
myEmitter.emit('event' , 'a' , 'b');