const minimumEditDistance = require('../src/med.js')
const leven = require('leven')
const assert = require('./assert.js').assert
const colors = require('colors')

console.log('ascii tests'.yellow)
const randomAscii = (asciiLow, asciiHi, numOfChars) => String.fromCharCode.apply(undefined,Array(numOfChars).fill(0).map(i => asciiLow + ~~(Math.random() * (asciiHi - asciiLow))))

for(let i=0, testCases=1000; i<testCases; i++){
	let str1 = randomAscii(0, 256, ~~(Math.random() * 100))
	let str2 = randomAscii(0, 256, ~~(Math.random() * 100))

	let difference = minimumEditDistance.diff(str1, str2), benchmark = leven(str1, str2)

	// assert.equals(difference.distance, benchmark, `test ${i}a \t`.cyan)
  let rec = minimumEditDistance.reconstruct(str2, difference.backtrace)
	let a = (str1 === rec)
  if(!a || difference.distance !== benchmark){
    console.log(str1.red,str2.blue,rec.cyan,difference.backtrace)
  }
}
console.log('tests over'.yellow, '(no red is good)')
