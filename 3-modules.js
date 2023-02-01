// CommonJS, every file is module (By Default)
// Mosules Encapsulated Code (only share minimum)
const names = require('./4-firstModule.js')
// console.log(names)

const sayHi = require('./5-utils')
// sayHi("Nada")
// sayHi(names.john)
// sayHi(names.peter)


const visitors = require("./6-alternative-flavor")
// console.log(visitors)

require('./7-mind-generade')


