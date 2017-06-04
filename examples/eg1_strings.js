const med = require('../src/med.js');

let str1 = 'here we have one string';
let str2 = 'here we have another string';

let diff = med.diff(str1, str2);

console.log(diff.distance); // 5

arr1 = ['hamburger','cat','hound'];
arr2 = ['hamburger','hound', 'cat', 'fees', 'hound'];

diff = med.diff(arr1, arr2);

console.log(diff.distance, diff.backtrace); // 2
[ '1_', 'd', '1_', 'd', '1_' ]

console.log(med.reconstruct(arr2, diff.backtrace))
//[ 'hamburger', 'cat', 'hound' ]
