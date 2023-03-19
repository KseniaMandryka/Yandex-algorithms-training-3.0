const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8")
let [levels, ...inputData] = fileContent.toString().trim().split('\n')
const cave = []
let input = inputData.map(str => str.split("")).filter(x => x.length !== 0)
const input2 = []
let c = 0

levels = +levels

for(let i = 0; i < levels; i++) {
  input2[i] = []
  let w = 0

  while(w < levels) {
    if(input[c] === "") {
      continue
    }
    input2[i].push(input[c])
    w++
    c++
  }
}

let speleolog

for(let i = 0; i < levels; i++) {
  cave.push([])
  for(let j = 0; j < levels; j++) {
    cave[i].push([])
    for(let z = 0; z < levels; z++) {
      if(input2[i][j][z] === "#") {
        cave[i][j][z] = -2
      } else if(input2[i][j][z] === ".") {
        cave[i][j][z] = 0
      } else {
        cave[i][j][z] = 0
        speleolog = [i, j, z]
      }
    }
  }
}

function isCorrect(i, j, z) {
  if(i >= cave.length || j >= cave[i].length || z >= cave[i][j].length) {
    return false
  }

  if(i < 0 || j < 0 || z < 0) {
    return false
  }

  return true
}

function bfs(cave, speleolog) {
  
  const queue = [speleolog]
  const x = [1, -1, 0, 0, 0, 0]
  const y = [0, 0, 1, -1, 0, 0]
  const z = [0, 0, 0, 0, 1, -1]

  while(queue.length > 0) {
    let [i, j, z] = queue.shift()

    if(i === 0) {
      return cave[i][j][z]
    }

    for(let k = 0; k < x.length; k++) {
      let curI = i + x[k]
      let curJ = j + y[k]
      let curZ = z + z[k]

      if(isCorrect(curI, curJ, curZ) && cave[curI][curJ][curZ] === 0) {
        cave[curI][curJ][curZ] = cave[i][j][z] + 1
        queue.push([curI, curJ, curZ])
      }
    }
  }

}

const result = bfs(cave, speleolog)
fs.writeFileSync("output.txt", result.toString())