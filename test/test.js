const minimumEditDistance = require('../src/med.js')
const leven = require('leven')
const assert = require('./assert.js').assert
const colors = require('colors')

const randomAscii = (asciiLow, asciiHi, numOfChars) => String.fromCharCode.apply(undefined,Array(numOfChars).fill(0).map(i => asciiLow + ~~(Math.random() * (asciiHi - asciiLow))))
const success = 1, failure = !(success)

/*
 *  TEST CASES
 */

function nTests(numOfTests, str1Lim, str2Lim=str1Lim){
  for(let i=0, testCases=numOfTests; i<testCases; i++){
    const str1 = randomAscii(0, 256, ~~(Math.random() * str1Lim))
    const str2 = randomAscii(0, 256, ~~(Math.random() * str2Lim))

    const difference = minimumEditDistance.diff(str1, str2), benchmark = leven(str1, str2)

    // assert.equals(difference.distance, benchmark, `test ${i}a \t`.cyan)
    const rec = minimumEditDistance.reconstruct(str2, difference.backtrace)
    const passes = (str1 === rec)
    if(!passes || difference.distance !== benchmark){
      console.log(str1.red,str2.blue,rec.cyan,difference.backtrace)
      return false
    }
  }
  return true
}

if(nTests(25,0,20) && nTests(25,20,0) && nTests(1500,100)){
  console.log('tests passing'.green)
  process.exit(success)
}else{
  console.log('test fails'.red)
  process.exit(failure)
}
