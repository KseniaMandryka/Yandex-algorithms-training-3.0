const fs = require('fs')
let input = fs.readFileSync("input.txt", "utf8")
const [firstLine, ...lines] = input.trim().split("\n")
const [vertexCount] = firstLine.split(" ").map(Number)
const edges = lines.map(str => str.split(" ").map(x => Number(x) - 1))

const graph = []
for(let i = 0; i < vertexCount; i++) {
  graph.push([])
}

for(const [a, b] of edges) {
  graph[a].push(b)
  graph[b].push(a)
}

const result = []
const visited = new Set()

for(let v = 0; v < vertexCount; v++) {
  if (visited.has(v)) {
    continue
  }
  const component = []
  result.push(component)

  const stack = [v]
  while(stack.length > 0) {
    const v = stack.pop()
    if (visited.has(v)) {
      continue
    }
    visited.add(v)
    component.push(v + 1)
    for(const x of graph[v]) {
      stack.push(x)
    }
  }
}

const output = [
  result.length,
  ...result.map(edges => edges.length + "\n" + edges.join(" "))
].join("\n")

fs.writeFileSync("output.txt", output)