util = require('util');
var EventEmitter = require('events').EventEmitter;
// Here is the MyClass constructor:
var MyClass = function() {
}
util.inherits(MyClass, EventEmitter);
