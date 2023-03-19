const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8")
const inputData = fileContent.toString().trim().split('\n')[1].split(" ").map(Number)

function heapSorting(inputData) {
  const heap = []
  
  for(let num of inputData) {
    heap.push(num)
    let indexInsert = heap.length - 1
    let indexParent = Math.floor((indexInsert - 1) / 2)
    
  
    while(indexInsert !== 0 && heap[indexInsert] > heap[indexParent]) {
      [heap[indexInsert], heap[indexParent]] = [heap[indexParent], heap[indexInsert]]
      indexInsert = indexParent
      indexParent = Math.floor((indexInsert - 1) / 2)
    }
  }
  
  let heapLength = heap.length
  
  while(heapLength > 0) {
    let firstElem = heap[0]
    let newRoot = heap[heapLength - 1]
    
      
    heap[0] = newRoot
    let currentIndex = 0
  
    while(true) {
      let maxIndex = currentIndex
      let leftIndex = 2 * currentIndex + 1
      let rightIndex = 2 * currentIndex + 2
  
      if(leftIndex < heapLength && heap[maxIndex] < heap[leftIndex]) {
        maxIndex = leftIndex
      }
  
      if(rightIndex < heapLength && heap[maxIndex] < heap[rightIndex]) {
        maxIndex = rightIndex
      }
  
      if(maxIndex === currentIndex) {
        break 
      }
  
      [heap[maxIndex], heap[currentIndex]] = [heap[currentIndex], heap[maxIndex]]
      currentIndex = maxIndex
    }
  
    let index = heapLength - 1
    heap[index] = firstElem
    heapLength--
  }

  return heap.join(" ")
}

const result = heapSorting(inputData)
fs.writeFileSync("output.txt", result.toString())
