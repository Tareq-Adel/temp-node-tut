const {readFileSync, writeFileSync} = require("fs");

const first = readFileSync('./content/first.txt', "utf-8")
const second = readFileSync('./content/second.txt', "utf-8")
console.log(first, second)

writeFileSync('./content/concat.txt',`our finally file is: ${first}, ${second} and thank you all. \n`, {flag: "a"})


