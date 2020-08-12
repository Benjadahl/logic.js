const lexer = require("./lexer.js");

let interpreter = (input) => {
  let output = lexer(input); 
  return output;
}

module.exports = interpreter;