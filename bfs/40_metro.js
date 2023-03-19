const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8")
const [countOfStation, countOfLines,  ...inputData] = fileContent.toString().trim().split('\n')
const lines = []
const [from, to] = inputData.at(-1).split(" ").map(Number)

for(let i = 0; i < inputData.length - 1; i++) {
  lines.push(inputData[i].trim().split(" ").splice(1).map(Number))
}


function waveAlgorithm(lines, from, to) {
  const visited = new Set()
  const queue = [[from, 0]]

  visited.add(from)

  while(queue.length > 0) {
    let [current, transfer] = queue.shift()
    
    for(let i = 0; i < lines.length; i++) {
      
      if(lines[i].includes(current)) {
        for(let j = 0; j < lines[i].length; j++) {
          if(lines[i][j] === to) {
            return transfer
          }
          if(!visited.has(lines[i][j])) {
            visited.add(lines[i][j])
            queue.push([lines[i][j], transfer + 1 ])
          }
        }
        
      }
    }
  }

  return -1
}

const result = waveAlgorithm(lines, from, to)
fs.writeFileSync("output.txt", result.toString())
