const interpreter = require("./src/index.js");

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getInput() {
  rl.question("> ", function (input) {
    if (input == "exit") {
      process.exit(0);
    } else {
      console.log(" %j", interpreter(input));
      getInput();
    }
  });
}

getInput();