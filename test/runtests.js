const assert = require('./assert.js').assert
const diff = require('../src/med.js')
const colors = require('colors')
const fs = require('fs')

const leven = require('leven')

/*
 * TEST DIFF
 */
console.log('diff tests:'.yellow)

 const testFiles = ['a','b','c']
 for(let i in testFiles){
   let f1 = fs.readFileSync(`test/randomTextFiles/${testFiles[i]}1.txt`, 'utf8')
   let f2 = fs.readFileSync(`test/randomTextFiles/${testFiles[i]}2.txt`, 'utf8')

   const strDiff = diff.diff(f1, f2)
   const benchmarkDistance = leven(f1, f2)

   // is distance correct
   assert.equals(strDiff.distance, benchmarkDistance, 'dist1 === dist2\t\t'.cyan)
   // is backtrace correct
   assert.equals(f1, diff.reconstruct(f2, strDiff.backtrace), 'str1 === backtrace(str2)'.magenta)

   let f1_Array = f1.split('\n')
   let f2_Array = f2.split('\n')

   let arrDiff = diff.diff(f1_Array, f2_Array)
   assert.equals(f1_Array, diff.reconstruct(f2_Array, arrDiff.backtrace), 'arr1 === backtrace(arr2)'.white)
 }
