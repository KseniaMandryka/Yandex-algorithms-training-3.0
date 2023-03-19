const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8")
const inputData = fileContent.toString().trim().split('\n').map(array => array.split(" ").map(Number))
const [k, coordinates] = inputData
  

function defineCoordinates(coordinates) {
	let left = []
	let right = []

	for(let i = 0; i < coordinates.length; i++) {
		left.push(coordinates[i][0])
		right.push(coordinates[i][1])
	}

	return [Math.min(...left), Math.min(...right), Math.max(...left), Math.max(...right)].join(" ")
}

const result = defineCoordinates(coordinates)
fs.writeFileSync("output.txt", result.toString())
