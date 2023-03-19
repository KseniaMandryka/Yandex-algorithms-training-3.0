const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8")
const inputData = fileContent.toString().trim().split('\n')
const [k, str] = inputData

function determineMaxPossibleBeauty(k, str) {
  const map = {}
  let start = 0
  let windowSize = 0
  let mostFrequent = 0
  
  for(let i = 0; i < str.length; i++) {
    let curLetter = str[i]
    
    if(map[curLetter] === undefined) {
      map[curLetter] = 0
    }
    map[curLetter] += 1
    
    mostFrequent = Math.max(mostFrequent, map[curLetter])
    
    let currentSize = i - start + 1

    if(currentSize > mostFrequent + +k) {
      map[str[start]] -= 1
      start++
    }

    windowSize = Math.max(windowSize, i - start + 1)
  }

  return windowSize
}

const result = determineMaxPossibleBeauty(k, str)
fs.writeFileSync("output.txt", result.toString())