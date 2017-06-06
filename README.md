# minimum-edit-distance

The **minimum edit distance** is the number of insertions, deletions, and substitutions required to transform one string into another.

## info
The minimum edit distance between two strings isn't terribly helpful most of the time. What is interesting and useful is the _minimum edit backtrace_. This backtrace contains all the information necessary to transform one string to another (see **usage** section).

### install

```
    $ npm install minimum-edit-distance
```
### require
```javascript
    const minimumEditDistance = require('minimum-edit-distance');
```    

## Usage

```javascript
    const minimumEditDistance = require('../src/med.js')

    let str1 = 'dhyfldnsgagfhc';
    let str2 = 'dososjhbabadhfhshdsjds';

    let difference = minimumEditDistance.diff(str1, str2)

    console.log(difference.distance); // 18

    console.log(difference.backtrace);
    // [ 'sc', 'sh', 'sf', 'sg', 'sa', 'sg', '1', 'sn', 'd2', '1', 'sl', 'sf', 'sy', 'd', '1', 'd5', '1' ]

    /*
     *  prefix key:
     *    s = substitute
     *    i = insertion
     *    d = deletion #
     *    # = skip num
     */

    let stringOne = minimumEditDistance.reconstruct(str2, difference.backtrace)

    console.log(str1 === stringOne); // true
```

## Usage for Arrays

```javascript
    let array1 = ['cat', 'fees', 'hound']
    let array2 = ['cat', 'kite', 'undo', 'hound']

    let arrayDifference = minimumEditDistance.diff(array1, array2)

    console.log(arrayDifference.distance) //2

    console.log(arrayDifference.backtrace) // [ '1', 'sfees', 'd', '1' ]

    console.log(minimumEditDistance.reconstruct(array2, arrayDifference.backtrace)) // [ 'cat', 'fees', 'hound' ]
```

## API
```java
      /**
       * p1 - first string or array
       * p2 - second string or array
       * distance - integer minimum edit distance
       * backtrace - array of strings specifying edit operations
       */
      diff(p1, p2, substitutionCost=1, insertionCost=1, deletionCost=1){
        ...
        return {"distance": distance, "backtrace": backtrace}
      }

      /**
       * p2 - p2 used in diff
       * trace - backtrace from diff
       * p1 - equal to p1 used in diff
       */
      reconstruct(p2, trace){
        ...
        return p1
      }
```
## License

MIT
