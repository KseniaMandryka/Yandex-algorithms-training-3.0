const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8");
const inputData = fileContent.toString().trim().split('\n')
const wagons = inputData[1].split(" ").map(Number)

function moveWagons(wagons) {
  const stack = []
  const res = []
  
  
  for(let i = 0; i < wagons.length; i++) {
    if(stack.length === 0) {
      stack.push(wagons[i])
    } else {
      let lastNum = stack.at(-1)
      if(lastNum > wagons[i]) {
        stack.push(wagons[i])
      } else {
        while(stack.length !== 0 && lastNum < wagons[i]) {
          let stackLast = stack.pop()
          if(res.length === 0) {
            res.push(stackLast)
          } else if(stackLast - res.at(-1) === 1) {
            res.push(stackLast)
          } else {
            break
          }
          lastNum = stack.at(-1)
        }

        stack.push(wagons[i])
      }
    }
  }


  while(true) {
    let curr = stack.pop()
    if(res.length === 0) {
      res.push(curr)
    } else {
      if(curr - res.at(-1) === 1) {
        res.push(curr)
      } else {
        break
      }
    }
  }
  
  return res.length === wagons.length ? "YES" : "NO"
}


const result = moveWagons(wagons)
fs.writeFileSync("output.txt", result.toString())