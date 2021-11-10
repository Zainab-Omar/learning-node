//  you can use fs module to write a file
const fs = require("fs")

const md = `
# This is new file

we can write text to a file with fs.writeFile

*fs.readdir
*fs.readFile
*fs.writeFile


`;

// writeFile takes 3 arg first file directory, second file I want to create, third cb function
fs.writeFile("./lib/notes.md", md.trim(), err => {
    if (err){
        throw err
    }
    console.log("file saved")
})