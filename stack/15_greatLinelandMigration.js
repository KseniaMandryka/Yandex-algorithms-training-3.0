const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8")
const inputData = fileContent.toString().trim().split('\n')
const cities = inputData[1].split(" ").map(Number)


function determineRelocationCity(arr) {
  const stack = []
  const res = Array(arr.length).fill(-1)

  for(let i = 0; i < arr.length; i++) {
    if(stack.length === 0) {
      stack.push([arr[i], i])
    } else {
      let last = stack.at(-1)

      if(last[0] <= arr[i]) {
        stack.push([arr[i], i])
      } else {
        let lastIndex = last[1]
        let lastValue = last[0]
        
        while(stack.length > 0 && lastValue > arr[i]) {
          
          res[lastIndex] = i
          stack.pop()

          if(stack.length === 0) {
            break
          }

          let lastNum = stack.at(-1)
          lastIndex = lastNum[1]
          lastValue = lastNum[0]
        }
        stack.push([arr[i], i])
      }
    }
  }

 
  return res.join(" ")
}


const result = determineRelocationCity(cities)
fs.writeFileSync("output.txt", result.toString())

