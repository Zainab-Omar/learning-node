const fs = require("fs")
const colorData = require("./lib/colors.json");

colorData.colorList.forEach(c => {
    //appendFile append new file if file not exit it will create it
    fs.appendFile("./storage-files/colors.md", `${c.color}: ${c.hex} \n `, err => {
        if(err){
            throw err
        }
    })
})