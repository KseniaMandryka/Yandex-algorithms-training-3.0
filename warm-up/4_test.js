const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8")
const inputData = fileContent.toString().trim().split('\n').map(Number)
const [countOfStudents, variants, row, place] = inputData

function solution(countOfStudents,variants, row, place) {

  row -= 1
  place -= 1

  const index = row * 2 + place
  let prev = index - variants
  let next = index + variants

  if(prev < 0 && next >= countOfStudents) {
    return -1
  }

  if(prev < 0) {
    return [(next >> 1) + 1, next % 2 + 1].join(" ")
  }

  if(next >= countOfStudents) {
    return [(prev >> 1) + 1, prev % 2 + 1].join(" ")
  }

  let prevR = prev >> 1
  let nextR = next >> 1

  if(row - prevR < nextR - row) {
    return [(prev >> 1) + 1, prev % 2 + 1].join(" ")
  } else {
    return [(next >> 1) + 1, next % 2 + 1].join(" ")
  }
}

const result = solution(countOfStudents,variants, row, place)
fs.writeFileSync("output.txt", result.toString())