const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8")
const inputData = fileContent.toString().trim().split('\n')


class Queue {
  constructor() {
    this.queue = []
    this.head = 0
    this.length = 0
  }

  push(n) {
    this.queue.push(n)
    this.length++
    return "ok"
  }

  pop() {
    if(this.head === this.length) {
      return "error"
    }
    let prevHead = this.queue[this.head++]
    return prevHead
  }

  front() {
    if(this.head === this.length) {
      return "error"
    } else {
      return this.queue[this.head]
    }
  }

  size() {
    return this.length - this.head
  }

  clear() {
    this.queue = []
    this.head = 0
    this.length = 0
    return "ok"
  }

  exit() {
    return "bye"
  }
}

function test(inputData) {
  let queue = new Queue()
  const res = []

  for(let command of inputData) {
    if(command === "exit") {
      res.push(queue[command]())
      return res
    } else if(command.includes("push")) {
      let commandP1 = command.split(" ")
      let num = +commandP1[1]
        res.push(queue[commandP1[0]](num))
    } else if(queue.hasOwnProperty(command)) {
      res.push("error")
    } else {
      res.push(queue[command]())
    }
  }
}

const result = test(inputData).join("\n")
fs.writeFileSync("output.txt", result.toString())