const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8")
let [inputData, ...fleas] = fileContent.toString().trim().split('\n')
inputData = inputData.split(" ").map(Number)
const matrix = []
let feeder
fleas = fleas.map(str => str.split(" ").map(x => Number(x) - 1))

for(let i = 0; i < inputData[0]; i++) {
  matrix[i] = []
  for(let j = 0; j < inputData[1]; j++) {
    if(i === inputData[2] - 1 && j === inputData[3] - 1) {
      matrix[i].push(0)
      feeder = [i, j]
    } else {
      matrix[i].push(-1)
    }
  }
}

function isCorrect(i, j, matrix) {
  if(i < 0 || j < 0) {
    return false
  }

  if(i >= matrix.length || j >= matrix[0].length) {
    return false
  }

  return true
}

function bfs(matrix, feeder) {

  const queue = [feeder]
  const x = [-2, -2, -1, -1, 1, 1, 2, 2]
  const y = [-1, 1, -2, 2, -2, 2, -1, 1]

  while(queue.length > 0) {
    let [i, j] = queue.shift()

    for(let i = 0; i < x.length; i++) {
      let curI = i + x[i]
      let curJ = j + y[i]

      if(isCorrect(curI, curJ, matrix) && matrix[curI][curJ] === -1) {
        matrix[curI][curJ] = matrix[i][j] + 1
        queue.push([curI, curJ])
      }
    }

  }

  let sum = 0

  for(let i = 0; i < fleas.length; i++) {
    let [j, z] = fleas[i]
    if(matrix[j][z] === -1) {
      return -1
    }
    sum += matrix[j][z]
  }

  return sum
}

const result = bfs(matrix, feeder)
fs.writeFileSync("output.txt", result.toString())