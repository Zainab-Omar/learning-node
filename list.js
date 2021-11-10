const fs = require("fs")

// readdirSync is synchronous
// const files = fs.readdirSync("./lib")
// console.log(files)

// readdir is asynchronous takes file to read and callback function 

fs.readdir("./lib", (err, files) => {
    if (err){
        throw err;
    }
    console.log("complete")
    console.log(files)
})