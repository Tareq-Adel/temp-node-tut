const _ = require("lodash")

const values = [1,[2,[3,[4,[5]]]]]

const  newValues = _.flattenDeep(values)
console.log(newValues)