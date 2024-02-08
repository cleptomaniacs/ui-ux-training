var multiply = (a: number, b: number): number => a * b;
function pow(value: number, exponent: number = 2): number {
  return value ** exponent;
}
function divide({
  dividend,
  divisor,
}: {
  dividend: number;
  divisor: number;
}): number {
  return dividend / divisor;
}

var add = (a: number, b: number, c?: number): number => a + b + (c || 0);

console.log("Multiply: ", multiply(7, 8));

console.log("Power: ", pow(5));

console.log("Divide: ", divide({ dividend: 10, divisor: 2 }));

console.log("Add: ", add(10, 20));

var arr = [100, 200];
var [f1, f2] = arr;

console.log("First element: ", f1);
console.log("Second element: ", f2);
//console.log("F1 length: ",f1.length)

var colors = ["red", "green", "blue", "yellow", "indigo", "orange"];
var [a, b, ...args] = colors;

console.log("First color: ", a);
console.log("Second color: ", b);
console.log("Rest of the colors: ", args);
