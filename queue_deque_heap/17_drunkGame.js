const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8")
const inputData = fileContent.toString().trim().split('\n')

function playDrunkard(inputData) {
  const palyer1 = inputData[0].split(" ").filter(letter => letter !== "").map(Number)
  const palyer2 = inputData[1].split(" ").filter(letter => letter !== "").map(Number)
  const res = []
  let count = 0


  while(palyer1.length !== 0 && palyer2.length !== 0){
    let moveCard1 = palyer1.shift()
    let moveCard2 = palyer2.shift()

    if(moveCard1 === 0 && moveCard2 === 9) {
      palyer1.push(moveCard1, moveCard2)
    } else if(moveCard2 === 0 && moveCard1 === 9) {
      palyer2.push(moveCard1, moveCard2)
    } else if(moveCard1 > moveCard2) {
      palyer1.push(moveCard1, moveCard2)
    } else if (moveCard2 > moveCard1) {
      palyer2.push(moveCard1, moveCard2)
    }

    count++
    if(count >= 1000000) {
      return "botva"
    }
    
  }
  

  if(palyer1.length === 0) {
    res.push("second")
  } else {
    res.push("first")
  }

  res.push(count)

  return res.join(" ")
}

const result = playDrunkard(inputData)
fs.writeFileSync("output.txt", result.toString())
