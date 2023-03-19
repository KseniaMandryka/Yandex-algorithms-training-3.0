const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8")
const inputData = +fileContent.toString().trim()

function determineMinCountOfOperation(num) {
  const dp = [0, 0]
  const arr = [] 
  
  for(let i = 2; i < num + 1; i++) {
    let prev = i - 1
    if(i % 2 === 0 && dp[i / 2] < dp[prev]) {
      prev = i / 2
    }
    if(i % 3 === 0 && dp[i / 3] < dp[prev]) {
      prev = i / 3
    }

    dp[i] = dp[prev] + 1
    arr[i] = prev
  }

  const res = [num]
  let j = num
  while(j !== 1) {
    res.push(arr[j])
    j = arr[j]
  }


  return [dp[num], res.reverse().join(" ")].join("\n")
}

const result = determineMinCountOfOperation(inputData)
fs.writeFileSync("output.txt", result.toString())