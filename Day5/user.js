const fs = require("fs");
let logUser = (username) => {
  username = username.trim();
  fs.readFile("./names.txt", "utf8", (err, data) => {
    if (err) {
      throw err;
    }
    let words = data.split(",");
    let index = words.findIndex(
      (word) => word.toLocaleLowerCase() == username.toLocaleLowerCase()
    );
    if (index >= 0) {
      console.log("Username: " + username + " already exists");
      return;
    }
    fs.appendFile("./names.txt", `,${username}`, (err) => {
      if (err) {
        throw err;
      }
      console.log("Username written successfully");
    });
  });
};

logUser("Meshack");
