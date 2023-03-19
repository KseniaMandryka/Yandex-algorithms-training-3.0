const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8")
const inputData = fileContent.toString().trim().split('\n')
const ticketSalesTime = inputData.splice(1).map(a => a.split(" ").map(Number))

function buyTicket(ticketSalesTime) {

  for(let i = 0; i < 3; i++) {
    ticketSalesTime.unshift([Infinity, Infinity, Infinity])
  }
  const dp = [0, 0, 0] 

  for(let i = 3; i < ticketSalesTime.length; i++) {
    dp[i] = Math.min(dp[i - 1] + ticketSalesTime[i][0], dp[i - 2] + ticketSalesTime[i - 1][1], dp[i - 3] + ticketSalesTime[i - 2][2])

  }

  return dp.at(-1)
}

const result = buyTicket(ticketSalesTime)
fs.writeFileSync("output.txt", result.toString())