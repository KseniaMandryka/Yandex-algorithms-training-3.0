const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8")
const inputData = fileContent.toString().trim().split('\n')

class Stack {
  constructor() {
    this.stack = []
  }

  push(n) {
    this.stack.push(n)
    return "ok"
  }

  pop() {
    if(this.stack.length === 0) {
      return "error"
    } else {
      return this.stack.pop()
    }
  }

  back() {
    if(this.stack.length === 0) {
      return "error"
    } else {
      return this.stack.at(-1)
    }
  }

  size() {
    return this.stack.length
  }

  clear() {
    this.stack = []
    return "ok"
  }

  exit() {
    return "bye"
  }

}


function test(inputData) {
  let stack = new Stack()
  const res = []

  for(let command of inputData) {
    if(command === "exit") {
      res.push(stack[command]())
      return res
    } else if(command.includes("push")) {
      let commandP1 = command.split(" ")
      let num = +commandP1[1]
        res.push(stack[commandP1[0]](num))
    } else if(stack.hasOwnProperty([command])) {
      res.push("error")
    } else {
      res.push(stack[command]())
    }
  }

}

const result = test(inputData).join("\n")
fs.writeFileSync("output.txt", result.toString())