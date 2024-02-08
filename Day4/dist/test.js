var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.setMessage = function (message) {
        this.message = message;
    };
    Greeting.prototype.display = function () {
        console.log(this.message);
    };
    return Greeting;
}());
var greet = new Greeting();
greet.setMessage("Hello, world!");
greet.display();
