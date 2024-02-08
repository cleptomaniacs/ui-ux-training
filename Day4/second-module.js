//import { todayDate } from "./first-module";
const { todayDate } = require("./first-module");
console.log("Today's Date: ", todayDate());

var sum = (...a) => {
  let sum = 0;
  for (let b of a) {
    sum += b;
  }
  console.log("Sum: ", sum);
};

sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
