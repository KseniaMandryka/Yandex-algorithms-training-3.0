const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8")
const inputData = fileContent.toString().trim().split('\n').splice(1)
const grid = []

for(let i = 0; i < inputData.length; i++) {
  grid.push(inputData[i].split(" ").map(Number))
}

function maxSum(grid) {
  const dp = [[grid[0][0]]]
  const arr = [[""]]

  for(let i = 1; i < grid[0].length; i++) {
    dp[0][i] = dp[0][i - 1] + grid[0][i]
    arr[0][i] = arr[0][i - 1] + " " + "R"
  }

  for(let i = 1; i < grid.length; i++) {
    dp[i] = []
    arr[i] = []
    dp[i].push(dp[i - 1][0] + grid[i][0])
    arr[i].push(arr[i - 1][0] + " " + "D")
  }

  for(let i = 1; i < grid.length; i++) {
    for(let j = 1; j < grid[i].length; j++) {
      if(dp[i][j - 1] > dp[i - 1][j]) {
        dp[i][j] = dp[i][j - 1] + grid[i][j]
        arr[i][j] = arr[i][j - 1] + " " + "R"
      } else {
        dp[i][j] = dp[i - 1][j] + grid[i][j]
        arr[i][j] = arr[i - 1][j] + " " + "D"
      }
    }
  }

  return [dp.at(-1).at(-1), arr.at(-1).at(-1).trim()].join("\n")
}

const result = maxSum(grid)
fs.writeFileSync("output.txt", result.toString())
