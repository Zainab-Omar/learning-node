const fs = require("fs");

const writeStream = fs.createWriteStream("./lib/myNotes.md", "UTF-8")

process.stdin.on("data", data => {
    writeStream.write(data)
});
// I can do the folowing and still get same result of lines 5-7
process.stdin.pipe(writeStream);