const fs = require("fs");
let writeFile = () => {
  let str = "Hey, there.. file system module to write to a file";
  fs.writeFile("./log.txt", str + " At: " + new Date().getFullYear(), (err) => {
    if (err) {
      throw err;
      //return;
    }
    console.log("Data written to file");
  });
};

writeFile();
