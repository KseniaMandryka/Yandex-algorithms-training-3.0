const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8")
const inputData = fileContent.toString().trim().split(' ')

function postfixNotation(tokens) {
  const operations = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      "*": (a, b) => a * b,
  }

  const stack = []

  for(let i = 0; i < tokens.length; i++) {
      if(tokens[i] in operations) {
          let b = stack.pop()
          let a = stack.pop()
          stack.push(operations[tokens[i]](a, b)) 
      } else {
          stack.push(+tokens[i])
      }
  }
  
  return stack[0]
}

const result = postfixNotation(inputData)
fs.writeFileSync("output.txt", result.toString())