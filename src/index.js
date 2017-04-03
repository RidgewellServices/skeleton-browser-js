"use strict"

var sayHello = function () {
    return "Hello";
};

document.getElementById('msgBtn').addEventListener('click', function () {
    var message = sayHello();
    document.getElementById("message").innerHTML = message;
});