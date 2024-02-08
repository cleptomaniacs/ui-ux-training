function add(a: number, b: number, ...c: number[]): number {
  return a + b + c.reduce((p, c) => p + c, 0);
}
var sum = add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
console.log(sum);
