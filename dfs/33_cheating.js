const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8")
const inputData = fileContent.toString().trim().split('\n')
const vertex = inputData[0].split(" ").map(Number)
const edges = inputData.length > 1 ? inputData.splice(1).map(arr => arr.split(" ").map(Number)) : []

function buildGraph(edges) {
  const graph = []

  for(let i = 0; i < vertexCount; i++) {
    graph.push([])
  }

  for(const [a, b] of edges) {
    graph[a].push(b)
    graph[b].push(a)
  }
  
  return graph
}

function isDivideIntoPairs(vertex, listOfVertex) {
  if(vertex[1] === 0) {
    return "YES"
  }

  const graph = buildGraph(listOfVertex)

  const color = []
  let res 

  function dfs(now, c) {
    color[now] = c
    
    if(graph[now] === undefined) {
      return
    }
    
    for(let neib of graph[now]) {
      if(color[neib] === undefined) {
        dfs(neib, c === 1 ? 2 : 1)
      } else if(color[neib] === c){
        res = "NO"
        return
      }
    }
  }

  for(let i = 0; i < vertex[0] + 1; i++) {
    if(color[i] === undefined) {
      dfs(i, 1)
    }
  }

  return res === "NO" ? "NO" : "YES"
}

const result = isDivideIntoPairs(vertex, edges)
fs.writeFileSync("output.txt", result.toString())