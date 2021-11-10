const fs = require("fs");

// these methods rename file or move it to different dir
fs.renameSync("./lib/notes.md", "./lib/myNotes.md");

fs.rename("./readme.md", "./storage-files/readme.md", err => {
    if (err){
        throw err
    }
})

// method to delete file
setTimeout(() => {
    fs.unlinkSync("./lib/goingToBeDeleted.md")
}, 4000)