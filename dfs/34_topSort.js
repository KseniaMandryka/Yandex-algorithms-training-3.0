const fs = require('fs')
let input = fs.readFileSync("input.txt", "utf8")
const [firstLine, ...lines] = input.trim().split("\n")
const [vertexCount] = firstLine.split(" ").map(Number)
const edges = lines.map(str => str.split(" ").map(x => Number(x)))
const graph = []
const inDegree = Array(vertexCount + 1).fill(0)

for(let i = 0; i < vertexCount + 1; i++) {
  graph.push([])
}

for(let [a, b] of edges) {
  graph[a].push(b)
  inDegree[b]++
}


function topSort(vertexCount, graph, inDegree) {
  const stack = []
  const res = []
  
  for(let i = 1; i < inDegree.length + 1; i++) {
    if(inDegree[i] === 0) {
      stack.push(i)
    }
  }
  
  while(stack.length > 0) {
    let v = stack.pop()
    res.push(v)
  
    for(let i = 0; i < graph[v].length; i++) {
      let cur = graph[v][i]
      inDegree[cur]--
      if(inDegree[cur] === 0) {
        stack.push(cur)
      }
    }
  }
  
  if(res.length < vertexCount) {
    return -1
  } else {
    return res.join(" ")
  }
}

const result = topSort(vertexCount, graph, inDegree)
fs.writeFileSync("output.txt", result.toString())