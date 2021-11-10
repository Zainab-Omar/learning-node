const fs = require("fs")

// readStream take file path we want to read 
const readStream = fs.createReadStream("./lib/myNotes.md", "UTF-8")

let fileText = "";

console.log("type something...")
readStream.on("data", data => {
    console.log(`I read ${data.length - 1} characters of text`)
    fileText +=data
})

readStream.once("data", data => {
    console.log(data)
})

readStream.on("end", () => {
    console.log("finished reading")
    console.log(`I read total of ${fileText.length - 1} characters`)
} )