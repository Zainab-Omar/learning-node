const fs = require("fs");

// check if dir already exit

if(fs.existsSync("storage-files")){
    console.log("already exit")
}
else {
    // mkdir takes args: name of dir, cb 
fs.mkdir("storage-files", err => {
    if (err){
        throw err
    }
    console.log("directory created")
})

}
