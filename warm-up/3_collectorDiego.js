const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8")
const inputData = fileContent.toString().trim().split('\n').map(string => string.split(" ").map(Number))
const [n, diegoStickerNumbers, k, collectorsStikerNumbers] = inputData


function findDifferentStickers(diegoStickerNumbers, collectorsStikerNumbers) {
	const countOfStickersForCollectors = []
	const unique = [...new Set([...diegoStickerNumbers])].sort((a, b) => a - b)
	
	for(let i = 0; i < collectorsStikerNumbers.length; i++) {
	  let start = 0
	  let finish = unique.length
	  let find = false
  
	  while(!find && start <= finish) {
		let middle = Math.floor((start + finish)/2)
  
		if(collectorsStikerNumbers[i] > unique[middle] && collectorsStikerNumbers[i] <= unique[middle + 1] || 
        middle === unique.length - 1 && collectorsStikerNumbers[i] > unique[middle]) {
			countOfStickersForCollectors.push(middle + 1)
			find = true
		}
        
		if(collectorsStikerNumbers[i] > unique[middle]) {
		  start = middle + 1
		} else {
		  finish = middle - 1
		}
	  }
	  
	  if(countOfStickersForCollectors.length < i + 1) {
		countOfStickersForCollectors.push(0)
	  }
      
	}
    
	return countOfStickersForCollectors.join("\n")
}

const result = findDifferentStickers(diegoStickerNumbers, collectorsStikerNumbers)
fs.writeFileSync("output.txt", result.toString())