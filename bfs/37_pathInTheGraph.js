const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8")
const inputData = fileContent.toString().trim().split('\n')
const vertex = inputData.at(-1).split(" ").map(Number)
const matrix = inputData.splice(1, +inputData[0]).map(str => str.split(" ").map(Number))
const vertex1 = vertex[0] - 1
const vertex2 = vertex[1] - 1


function sp(matrix) {
  const way = []
  const visited = new Set()
  const distance = []

  way[vertex1] = -1

  const queue = [vertex1]
  distance[vertex1] = 0
  visited.add(vertex1)

  while(queue.length > 0) {
    let cur = queue.shift()

    for(let i = 0; i < matrix.length; i++) {
      if(matrix[cur][i] === 1 && !visited.has(i)) {
        distance[i] = distance[cur] + 1
        way[i] = cur
        queue.push(i)
        visited.add(i)
      }
    }
  }

  if(visited.has(vertex2)) {
    if(distance[vertex2] === 0) {
      return distance[vertex2]
    }
    const path = []
    let i = vertex2
    
    while(i !== -1) {
      path.push(i + 1)
      i = way[i]
    }
    return [distance[vertex2], path.reverse().join(" ")].join("\n").trim()
  } else {
    return -1
  }
}

const result = sp(matrix, vertex1, vertex2)
fs.writeFileSync("output.txt", result.toString())