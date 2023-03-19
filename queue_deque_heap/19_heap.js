const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8")
const inputData = fileContent.toString().trim().split('\n').splice(1)


class Heap {
  constructor () {
    this.heap = [] 
  }

  insert(k) {
    this.heap.push(k)
    let indexInsert = this.heap.length - 1
    let indexParent = Math.floor((indexInsert - 1) / 2)
    

    while(indexInsert !== 0 && this.heap[indexInsert] > this.heap[indexParent]) {
      [this.heap[indexInsert], this.heap[indexParent]] = [this.heap[indexParent], this.heap[indexInsert]]
      indexInsert = indexParent
      indexParent = Math.floor((indexInsert - 1) / 2)
    }
  }


  extract() {
    let firsElem = this.heap[0]
    let newRoot = this.heap.pop()
    
    if(this.heap.length === 0) {
      return firsElem
    }
    
    this.heap[0] = newRoot
    let currentIndex = 0

    while(true) {
      let maxIndex = currentIndex
      let leftIndex = 2 * currentIndex + 1
      let rightIndex = 2 * currentIndex + 2
  
      if(leftIndex < this.heap.length && this.heap[maxIndex] < this.heap[leftIndex]) {
        maxIndex = leftIndex
      }
  
      if(rightIndex < this.heap.length && this.heap[maxIndex] < this.heap[rightIndex]) {
        maxIndex = rightIndex
      }
  
      if(maxIndex === currentIndex) {
        break 
      }
  
      [this.heap[maxIndex], this.heap[currentIndex]] = [this.heap[currentIndex], this.heap[maxIndex]]
      currentIndex = maxIndex
    }
    
    return firsElem
  }
}


const heap = new Heap()
const res = []

for(let command of inputData) {
  if(command[0] === "0") {
    heap.insert(+command.split(" ")[1])
  }
  if(command === "1") {
    res.push(heap.extract())
  }
}


fs.writeFileSync("output.txt", res.join("\n").toString())