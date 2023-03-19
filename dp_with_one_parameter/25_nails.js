const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8")
const inputData = fileContent.toString().trim().split('\n')
const coordinates = inputData[1].split(" ").map(Number)

function minThreadLength(cordinates) {
  cordinates.sort((a, b) => a - b)
  const dp = [0, 0, cordinates[1] - cordinates[0], cordinates[2] - cordinates[0]]

  for(let i = 4; i <= cordinates.length; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cordinates[i - 1] - cordinates[i - 2]
  }

  return dp[cordinates.length]
}

const result = minThreadLength(coordinates)
fs.writeFileSync("output.txt", result.toString())