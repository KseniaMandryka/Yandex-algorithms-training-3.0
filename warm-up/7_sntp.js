const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8")
const inputData = fileContent.toString().trim().split('\n')
const [timeAstr, timeBstr, timeCstr] = inputData
const timeA = timeAstr.split(":")
const timeB = timeBstr.split(":")
const timeC = timeCstr.split(":")

function calculateExactTime(timeA, timeB, timeC) {
  
  let different = 0
  let timeAInSeconds = +timeA[0] * 3600 + +timeA[1] * 60 + +timeA[2]
  let timeCInSeconds = +timeC[0] * 3600 + +timeC[1] * 60 + +timeC[2]
  
  if(timeAInSeconds - timeCInSeconds > 0) {
    different = Math.abs(timeAInSeconds - timeCInSeconds - 24 * 3600)
  } else {
    different = timeCInSeconds - timeAInSeconds
  }
  
  
  different = Math.round(different / 2)
  
  let exactTimeInSecond = +timeB[0] * 3600 + +timeB[1] * 60 + +timeB[2] + different
  let hour = parseInt(exactTimeInSecond / 3600)
  exactTimeInSecond %= 3600
  let minutes = parseInt(exactTimeInSecond / 60)
  exactTimeInSecond %= 60
  let seconds = parseInt(exactTimeInSecond)
  
  const exactTime = []
  if(hour === 24) {
    exactTime.push("00")
  } else if(hour > 24) {
    exactTime.push(hour - 24 <= 9 ? `0${hour - 24}` : `${hour - 24}`)
  } else {
    exactTime.push(hour <= 9 ? `0${hour}` : `${hour}`)
  }
  exactTime.push(minutes <= 9 ? `0${minutes}` : `${minutes}`)
  exactTime.push(seconds <= 9 ? `0${seconds}` : `${seconds}`)
  
  return exactTime.join(":")
}

const result = calculateExactTime(timeA, timeB, timeC)
fs.writeFileSync("output.txt", result.toString())