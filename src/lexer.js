let isBool = (c) => {
  if (c == "0" || c == "1") {
    return true;
  } else {
    return false;
  }
};

let isWhitespace = (c) => {
  if (c == " ") {
    return true;
  } else {
    return false;
  }
};

let isChar = (c) => {
  const supportedChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  for (const supportedChar of supportedChars) {
    if (c === supportedChar) {
      return true;
    }
  }

  return false;
};

let isOperator = (c) => {
  const supportedOpeators = ["(", ")", ",", "=", "{", "}", ";"];

  for (const supportedOperator of supportedOpeators) {
    if (c === supportedOperator) {
      return true;
    }
  }

  return false;
};

let lexer = (input) => {
  let tokens = [];

  for (i = 0; i < input.length; i++) {
    let c = input[i];

    if (isBool(c)) {
      tokens.push({type: "bool", token: c});
    } else if (isOperator(c)) {
      tokens.push({type: "operator", token: c});
    } else if (isChar(c)) {
      const lastToken = tokens[tokens.length - 1];
      let shouldPush = false;

      if (typeof lastToken !== "undefined") {
        if (lastToken.type === "string") {
          lastToken.token += c;
        } else {
          shouldPush = true;
        }
      } else {
        shouldPush = true;
      }

      if (shouldPush) {
        tokens.push({type: "string", token: c});
      }

      
    } else if (!isWhitespace(c)) {
      throw "Character not recognised";
    }
  }

  return tokens;
};

module.exports = lexer;