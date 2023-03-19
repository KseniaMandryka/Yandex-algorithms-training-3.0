const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8")
const inputData = fileContent.toString().trim().split('\n').map(Number)
const [n, ...letterNumber] = inputData
  
function isGoodLine(letterNumber) {
	let lengthOfSeq = 0

	for(let i = 1; i < letterNumber.length; i++) {
		lengthOfSeq += Math.min(letterNumber[i], letterNumber[i - 1])
	}

	return lengthOfSeq
}

const result = isGoodLine(letterNumber)
fs.writeFileSync("output.txt", result.toString())