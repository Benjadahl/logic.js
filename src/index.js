const lexer = require("./lexer.js");
const parser = require("./parser.js");

let interpreter = (input) => {
  let lexList = lexer(input);
  let output = parser(lexList);
  return output;
}

module.exports = interpreter;