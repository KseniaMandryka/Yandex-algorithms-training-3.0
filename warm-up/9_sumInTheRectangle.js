const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8")
const inputData = fileContent.toString().trim().split("\n")

function sumXY(matrix, arrayOfSum, row1, col1, row2, col2) {
	let height = matrix.length
  let width = matrix[0].length

	if (row1 < 0 || row1 >= height || row2 < 0 || row2 >= height 
	|| col1 < 0 || col1 >= width || col2 < 0 || col2 >= width) {
    return 0
  }
    
  let biggerR = arrayOfSum[row2][col2]
  let upperR = row1 > 0 ? arrayOfSum[row1-1][col2] : 0
  let leftR = col1 > 0 ? arrayOfSum[row2][col1-1] : 0
  let overlapR = row1 > 0 && col1 > 0 ? arrayOfSum[row1-1][col1-1] : 0
  return biggerR - upperR - leftR + overlapR
}

function sumOfRectangle(inputData) {
	const parameters = inputData[0].split(" ").map(Number)
	const [widthOfMatrix, heightOfMatrix, countOfRequest] = parameters
	
	let matrix = []
	for(let i = 1; i <= widthOfMatrix; i++) {
		matrix.push(inputData[i])
	}
	matrix = matrix.map(arr => [...arr.split(" ").map(Number)])


	let xy = []
	for(let i = widthOfMatrix + 1; i < inputData.length; i++) {
		xy.push(inputData[i])
	}
	xy = xy.map(str => [...str.split(" ").map(a => +a)])

	if (matrix.length == 0 || matrix[0].length == 0) return
	let arrayOfSum = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length));
	
	for (let row = 0; row < matrix.length; row++) {
		for (let col = 0; col < matrix[0].length; col++) {
			let left = col > 0 ? arrayOfSum[row][col-1] : 0
			let up = row > 0 ? arrayOfSum[row-1][col] : 0
			let overlap = row > 0 && col > 0 ? arrayOfSum[row-1][col-1] : 0
			arrayOfSum[row][col] = matrix[row][col] + left + up - overlap
		}
	}

	let sum = []
	for(let i = 0; i < countOfRequest; i++) {
		let [row1, col1, row2, col2] = xy[i]
		sum.push(sumXY(matrix, arrayOfSum, row1-1, col1-1, row2-1, col2-1))
	}

	return sum.join("\n")
}

const result = sumOfRectangle(inputData)
fs.writeFileSync("output.txt", result.toString())
