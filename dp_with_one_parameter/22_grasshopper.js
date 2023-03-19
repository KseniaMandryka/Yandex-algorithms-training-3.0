const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8")
const inputData = fileContent.toString().trim().split(' ').map(Number)
const [lengthOfBoard, lengthOfJump] = inputData


function countTheNumberOfWays(lengthOfBoard, lengthOfJump) {
  const dp = [0, 1, 1]
  let i

  for(i = 3; i < lengthOfJump + 1; i++) {
    dp[i] = 2 * dp[i - 1]
  }

  for(; i < lengthOfBoard + 1; i++){
    dp[i] = 2 * dp[i - 1] - dp[i - lengthOfJump - 1]
  }

  return dp[lengthOfBoard]
}

const result = countTheNumberOfWays(lengthOfBoard, lengthOfJump)
fs.writeFileSync("output.txt", result.toString())
