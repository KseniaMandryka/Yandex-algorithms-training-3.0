const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8")
const inputData = fileContent.toString().trim().split('\n')

class DoublyLinkedListNode {
  constructor(val, prev = null, next = null) {
    this.val = val
    this.next = next
    this.prev = prev
  }
}


class Deque {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push_back(n) {
    const node = new DoublyLinkedListNode(n)
    
    if(!this.head) {
      this.head = node
      this.tail = node

      this.length += 1
      return "ok"
    }

    this.tail.next = node

    node.prev = this.tail
    this.tail = node
    
    this.length += 1
    return "ok"
  }

  push_front(n) {
    let node = new DoublyLinkedListNode(n, null, this.head)

    if(this.head) {
      this.head.prev = node
    } 
    this.head = node

    if(!this.tail) {
      this.tail = node
    }


    this.length += 1
    return "ok"
  }

  pop_front() {
    if(!this.head) {
      return "error"
    } 

    const deleteHead = this.head
    if(this.head.next) {
      this.head = this.head.next
      this.head.prev = null
    } else {
      this.head = null
      this.tail = null
    }
    
    this.length -= 1

    return deleteHead.val
  }

  pop_back() {
    if(!this.tail) {
      return "error"
    } 

    if(this.head === this.tail) {
      const deleteTail = this.tail
      this.head = null
      this.tail = null

      this.length -= 1

      return deleteTail.val
    }

    const deleteTail = this.tail

    this.tail = this.tail.prev
    this.tail.next = null

    this.length -= 1
    return deleteTail.val
  }

  front() {
    if(!this.head) {
      return "error"
    }
    return this.head.val
  }

  back() {
    if(!this.tail) {
      return "error"
    }
    return this.tail.val
  }

  size() {
   
    return this.length
  }


  clear() {
    this.head = null
    this.tail = null
    this.length = 0
    return "ok"
  }

  exit() {
    return "bye"
  }
}

function test(inputData) {
  let deque = new Deque()
  const res = []

  for(let command of inputData) {
    if(command === "exit") {
      res.push(deque[command]())
      return res
    } else if(command.includes("push")) {
      let commandP1 = command.split(" ")
      let num = +commandP1[1]
      res.push(deque[commandP1[0]](num))
    } else if(deque.hasOwnProperty(command)) {
      res.push("error")
    } else {
      res.push(deque[command]())
    }
  }

}

const result = test(inputData).join("\n")
fs.writeFileSync("output.txt", result.toString())