const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8")
const inputData = fileContent.toString().trim().split(' ').map(Number)
const [row, col] = inputData

function pathOfKnight(row, col) {
  const dp = []

  for(let i = 0; i < row; i++) {
    dp[i] = [i === 0 ? 1 : 0]
    for(let j = 1; j < col; j++) {
      dp[i][j] = 0
      if(i - 1 >= 0 && j - 2 >= 0) {
        dp[i][j] += dp[i - 1][j - 2]
      }
      if(i - 2 >= 0 && j - 1 >= 0) {
        dp[i][j] += dp[i - 2][j - 1]
      }
    }
  }
  
  return dp.at(-1).at(-1)
}

const result = pathOfKnight(row, col)
fs.writeFileSync("output.txt", result.toString())