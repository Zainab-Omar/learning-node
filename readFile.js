const fs = require("fs");

// const text = fs.readFileSync("./readme.md", "UTF-8")

// console.log(text)

fs.readFile("./readme.md", "UTF-8", (err, text) => {
    if (err){
        console.log(`error has occured: ${err.message}`)
        process.exit()
    }
    console.log(text)
})