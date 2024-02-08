var multiply = function (a, b) { return a * b; };
function pow(value, exponent) {
    if (exponent === void 0) { exponent = 2; }
    return Math.pow(value, exponent);
}
function divide(_a) {
    var dividend = _a.dividend, divisor = _a.divisor;
    return dividend / divisor;
}
var add = function (a, b, c) { return a + b + (c || 0); };
console.log("Multiply: ", multiply(7, 8));
console.log("Power: ", pow(5));
console.log("Divide: ", divide({ dividend: 10, divisor: 2 }));
console.log("Add: ", add(10, 20));
