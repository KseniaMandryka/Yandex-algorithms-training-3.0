const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8")
const inputData = fileContent.toString().trim().split('\n')
const vertex = inputData[0].split(" ").map(Number)
let edges = inputData.length > 1 ? inputData.splice(1).map(arr => arr.split(" ").map(Number)) : []

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


function component(vertex, listOfV) {
  if(vertex[1] === 0) {
    return [1, 1].join("\n")
  }


  const graph = buildGraph(listOfV)

  
  const res = []
  const visited = []
  
  function dfs(graph, now) {
    visited[now] = true
    
    if(graph[now] === undefined) {
      return
    } 

    for(let neib of graph[now]) {
      if(visited[neib] === undefined) {
        dfs(graph, neib)
      }
    }
  }

  dfs(graph, 1)
  
  for(let i = 1; i < visited.length; i++) {
    if(visited[i]) {
      res.push(i)
    }
  }

  return [res.length, res.join(" ")].join("\n").trim()
}

const result = component(vertex, edges)
fs.writeFileSync("output.txt", result.toString())