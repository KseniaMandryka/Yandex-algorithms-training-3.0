const fs = require('fs')
let input = fs.readFileSync("input.txt", "utf8")
const inputData = input.trim().split("\n")
const vertex = inputData[0]
const matrix = inputData.splice(1).map(str => str.split(" ").map(Number))

function dfs(matrix, prevVertex, vertex, visited) {
  if(visited.has(vertex + 1)) {
    return [vertex + 1, prevVertex + 1]
  }

  visited.set(vertex + 1, prevVertex + 1)
  for(let i = 0; i < matrix[vertex].length; i++) {
    let neib = matrix[vertex][i]
    if(neib === 1 && prevVertex !== i) {
      let res = dfs(matrix, vertex, i, visited)
      if(res !== null) {
        return res
      }
    }
  }

  return null
}

function getPath(visited, [finish, start]) {
  let res = []
  let current = start

  while(current !== finish) {
    res.push(current)

    current = visited.get(current)
  }

  res.push(finish)
  return res
}

function findCycle(matrix) {
  const visited = new Map()
  
  for(let i = 0; i < matrix.length; i++) {
    if(visited.has(i + 1)) {
      continue
    }
    let res = dfs(matrix, -1, i, visited)

    if(res !== null) {
      return getPath(visited, res)
    }
  }

  return []
}

const k = findCycle(matrix)
const result = k.length === 0 ? "NO" : ["YES", k.length, k.join(" ")].join("\n")
fs.writeFileSync("output.txt", result.toString())