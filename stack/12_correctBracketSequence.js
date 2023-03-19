const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8")
const str = fileContent.toString().trim()

function validParentheses(str) {
	const couples = {
        ")": "(",
        "}": "{",
        "]": "["
    }
    const res = []
    
    for(let i = 0; i < str.length; i++) {
        let item = str[i]
        
        if(!couples[item]) {
            res.push(item)
        } else {
            if(couples[item] === res.at(-1)) {
                res.pop()
            } else {
                return "no"
            }
        }
    }
    
    if(res.length === 0) {
      return "yes"
    } else {
      return "no"
    }
}

const result = validParentheses(str)
fs.writeFileSync("output.txt", result.toString())