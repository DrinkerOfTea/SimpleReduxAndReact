/**
 * Created by James on 16/04/2016.
 */

var HelloWorld = (function () {

    var sayHello = function(name) {
        return "Hello " + name + "!";
    };

    return {
        sayHello: sayHello
    };
}());