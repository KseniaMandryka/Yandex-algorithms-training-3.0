const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8")
const ciphertext = fileContent.toString().trim().split('\n').join("").split(" ").join("")

function makeHistogram(string) {
  const map = {}
  let maxFrequent = 0
  let barChart = "" 
  
  for(let i = 0; i < string.length; i++) {
    let currentLetter = string[i]
    if(map[currentLetter] === undefined) {
      map[currentLetter] = 0
    }
    
    map[currentLetter] += 1
    maxFrequent = Math.max(maxFrequent, map[currentLetter])
  }
  
  const sortedLetters = Object.keys(map).sort()
  
  for(let i = maxFrequent; i > 0; i--) {
    for(const letter of sortedLetters) {
      barChart += map[letter] >= i ? "#" : " "
    }
    barChart += "\n"
  }
  
  return barChart + sortedLetters.join("")
}


const result = makeHistogram(ciphertext)
fs.writeFileSync("output.txt", result)