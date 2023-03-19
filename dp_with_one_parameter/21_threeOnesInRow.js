const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8")
const num = +fileContent.toString().trim()

function countNumberOfSequences(num) {
  const dp = [0, 2, 4, 7]
  
  for(let i = 4; i < num + 1; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3]
  }
  
  return dp[num]
}

const result = countNumberOfSequences(num)
fs.writeFileSync("output.txt", result.toString())
