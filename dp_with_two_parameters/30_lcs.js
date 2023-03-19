const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8")
const inputData = fileContent.toString().trim().split('\n').map(str => str.trim().split(" ").map(Number))
const [n, arr1, m, arr2] = inputData


function mcs(arr1, arr2) {
  const dp = [[arr1[0] === arr2[0] ? 1 : 0]]

  for(let i = 1; i < arr1.length; i++) {
    if(arr2[0] === arr1[i] || dp[0][i-1] === 1) {
      dp[0][i] = 1
    } else {
      dp[0][i] = 0
    }
  }

  for(let i = 1; i < arr2.length; i++) {
    dp[i] = []
    if(arr1[0] === arr2[i] || dp[i-1][0] === 1) {
      dp[i][0] = 1
    } else {
      dp[i][0] = 0
    }
  }

  for(let i = 1; i < arr2.length; i++) {

    for(let j = 1; j < arr1.length; j++) {
      if(arr2[i] === arr1[j]) {
        dp[i][j] = dp[i-1][j-1] + 1
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j])
      }
    }
  }

  const subSeq = []
  let i = arr2.length - 1
  let j = arr1.length - 1

  while(i > -1 && j > -1) {
    if(arr2[i] === arr1[j]) {
      subSeq.push(arr2[i])
      i--
      j--
    } else {
      if(i > 0 && dp[i][j] === dp[i-1][j]) {
        i--
      } else {
        j--
      }
    }
  }


  return subSeq.reverse()
}

const result = mcs(arr1, arr2).join(" ")
fs.writeFileSync("output.txt", result.toString())