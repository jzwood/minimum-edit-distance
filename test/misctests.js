const minimumEditDistance = require('../src/med.js')

let array1 = ['cat', 'fees', 'hound']
let array2 = ['cat', 'kite', 'undo', 'hound']

let arrDiff = minimumEditDistance.diff(array1, array2)

console.log(arrDiff.distance) //2

console.log(arrDiff.backtrace) // [ '1_', 'sfees', 'd', '1_' ]

console.log(minimumEditDistance.reconstruct(array2, arrDiff.backtrace)) // [ 'cat', 'fees', 'hound' ]
