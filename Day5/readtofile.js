const fs = require("fs");
let readToFile = () => {
  fs.readFile("./log.txt", "utf8", (err, data) => {
    console.log(data);
  });
};

readToFile();
