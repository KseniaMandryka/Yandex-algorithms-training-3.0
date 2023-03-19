const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8")
const inputData = fileContent.toString().trim().split('\n')
const [sectors, countOfSections, ...sections] = inputData
sections.map(str => str.split(" ").map(Number))

function determineNumberOfOS(sections) {

  for(let i = 1; i < sections.length; i++) {
    for(let j = i - 1; j >= 0; j--) {
      if(sections[j] !== undefined) {
        if(sections[i][0] <= sections[j][1] && sections[i][1] >= sections[j][0]) {
          delete sections[j]
        }
      }
    }
  }

	return sections.filter(a => a).length
}

const result = determineNumberOfOS(sections)
fs.writeFileSync("output.txt", result.toString())
