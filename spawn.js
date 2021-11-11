const cp = require("child_process");


const questionApp = cp.spawn("node", ["questions.js"]);

questionApp.stdin.write("Zainab \n")
questionApp.stdin.write("Reading \n")
questionApp.stdin.write("JavaScript \n")

questionApp.stdout.on("data", data => {
    console.log(`from the question app: ${data}`)
});

questionApp.on("close", () => {
    console.log(`questionApp process exited`)
})