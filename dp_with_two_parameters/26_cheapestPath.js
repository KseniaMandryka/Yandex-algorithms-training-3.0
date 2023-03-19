const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8")
const inputData = fileContent.toString().trim().split('\n').splice(1)
const grid = []

for(let i = 0; i < inputData.length; i++) {
  grid.push(inputData[i].split(" ").map(Number))
}

function minSum(grid) {
  const dp = [[grid[0][0]]]

  for(let i = 1; i < grid[0].length; i++) {
      dp[0][i] = dp[0][i - 1] + grid[0][i]
  }

  for(let i = 1; i < grid.length; i++) {
      dp[i] = []
      dp[i].push(dp[i - 1][0] + grid[i][0])
  }

  for(let i = 1; i < grid.length; i++) {
      for(let j = 1; j < grid[i].length; j++) {
          dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j]) + grid[i][j]
      }
  }

  return dp.at(-1).at(-1)
}

const result = minSum(grid)
fs.writeFileSync("output.txt", result.toString())