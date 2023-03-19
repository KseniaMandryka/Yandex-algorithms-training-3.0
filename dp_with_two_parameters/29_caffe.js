const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8")
const costOnDay = fileContent.toString().trim().split('\n').map(Number).splice(1)

function minCostOfLanches(costOnDay) {
  const dp = [[0]]

  for(let i = 1; i < costOnDay.length + 1; i++) {
    dp[0].push(Infinity)
  }


  for(let i = 0; i < costOnDay.length; i++) {
    dp.push(Array(costOnDay.length + 1).fill(Infinity))
    for(let j = 0; j < costOnDay.length + 1; j++) {
      if(costOnDay[i] > 100) {
        dp[i+1][j] = Math.min((dp[i][j-1] ?? Infinity) + costOnDay[i], dp[i][j+1] ?? Infinity)
      } else {
        dp[i+1][j] = Math.min(dp[i][j] + costOnDay[i], dp[i][j+1] ?? Infinity)
      }
    }
  }

  const totalSum = Math.min(...dp.at(-1))
  const leftover = dp.at(-1).lastIndexOf(totalSum)
  const couponDays = []

  let day = costOnDay.length
  let coupIndex = leftover

  while(day > 0) {
    if(dp[day][coupIndex] === dp[day-1][coupIndex+1]) {
      couponDays.unshift(day)
      coupIndex++
    } else {
      if(costOnDay[day-1] > 100) {
        coupIndex--
      }
    }
    day--
  }


  return [totalSum, [leftover, couponDays.length].join(" "), ...couponDays].join("\n")
}

const result = minCostOfLanches(costOnDay)
fs.writeFileSync("output.txt", result.toString())