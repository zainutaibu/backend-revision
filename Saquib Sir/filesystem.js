const fs = require('fs')

// Asynchronous Way
// fs.writeFile("hello.txt", "Welcome to the New File", () => {
//     console.log("File created")
// })

fs.writeFileSync("hello.txt", "Now writing using sync function")

let data = fs.readFileSync("hello.txt", "utf-8")
console.log(data)

fs.appendFileSync("hello.txt", "\nNow I am writing some more content in my file")
fs.renameSync("hello.txt", "hexcore.txt")
fs.mkdirSync("testDir")
fs.rmdirSync("testDir")
