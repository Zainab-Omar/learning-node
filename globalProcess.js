// console.log(process.pid)
// console.log(process.versions.node)
const [,,firstName, lastName] = process.argv
console.log(`My name is ${firstName} ${lastName}`)

// console.log(process.argv)