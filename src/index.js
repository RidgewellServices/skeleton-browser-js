import hello from './hello.js';

var sayHello = function () {
    return hello;
};

document.getElementById('msgBtn').addEventListener('click', function () {
    var message = sayHello();
    document.getElementById("message").innerHTML = message;
});