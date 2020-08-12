

let parser = (lexList) => {
  let AST = {
    type: "prog",
    prog: [
  
    ]
  };

  let left = [];
  for (const [i, obj] of lexList.entries()) {
    let ASTobj = {type: obj.type, token: obj.token}
    if (obj.type === "operator") {
      if (obj.token === "(") {
        let depth = 1;

        let index = i + 1;

        while (index < lexList.length) {
          if (lexList[index].token === "(") {
            depth++;
          } else if (lexList[index].token === ")") {
            depth--;
          }

          if (depth === 0) {
            break;
          }

          index++;
        };

        console.log("match" + index);

        ASTobj.right = parser(lexList.splice(i + 1, index));

        ASTobj.left = left;
        AST.prog.push(ASTobj);
      }
    } else {
      left.push(ASTobj);
    }
  }

  return AST;
};

module.exports = parser;