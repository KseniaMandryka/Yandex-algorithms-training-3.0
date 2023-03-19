const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8")
const str = fileContent.toString().trim()

function countNumOfLetters(str) {
	const map = {}
	const lengthOfStr = str.length
	let prev = 0

	for(let i = 0; i < lengthOfStr; i++) {
		let curr = (lengthOfStr + prev) - 2 * i
		
		if(map[str[i]] === undefined) {
			map[str[i]] = 0
		}

		map[str[i]] += curr
		prev = curr
	}

	return Object.entries(map).sort().map(arr => arr.join(": ")).join("\n")
}

const result = countNumOfLetters(str)
fs.writeFileSync("output.txt", result.toString())