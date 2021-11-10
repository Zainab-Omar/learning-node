const fs = require("fs");

// rename a directory
// fs.renameSync("./storage-files", "./storage")

// remove a dir; if dir has files inside it we have to delete files inside it 

fs.readdirSync("./storage").forEach(fileName => {
    fs.unlinkSync(`./storage/${fileName}`)
})

// remove dir
fs.rmdir("./storage", err => {
    if (err){
        throw err
    }
    console.log("directory removed")
})