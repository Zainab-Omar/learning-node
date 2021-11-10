const events = require("events");

const emitter = new events.EventEmitter();

// handle event message = second arg, user = third arg
emitter.on("customEvent", (message, user) => {
    console.log(`${user}: ${message}`)

})

// rise costum event first arg name of event, second arg data i want to pass to custom event, third arg computer said this
// emitter.emit("customEvent", "Hello World", "computer");
// emitter.emit("customEvent", "That cool!", "Zainab");

process.stdin.on("data", data => {
    const input = data.toString().trim();
    if (input === "exit"){
        emitter.emit("customEvent", "Goodbye", "process")
        process.exit()
    }
    emitter.emit("customEvent", input, "terminal")
})