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
    let str1 = 'dhyfldnsgagfhc';
    let str2 = 'dososjhbabadhfhshdsjds';

    let difference = minimumEditDistance.diff(str1, str2)

    console.log(difference.distance); // 18

    console.log(difference.backtrace);
    // [ 'sc',  'sh', 'sf', 'sg', 'sa', 'sg', '1_', 'sn', 'd', 'd', '1_', 'sl', 'sf', 'sy', 'd', '1_', 'd', 'd', 'd', 'd', 'd', '1_' ]

    // prefix 's' = substitute suffix char
    // 'i' = insert suffix char
    // 'd' = delete
    // [0-9]+_ = skip prefix num of chars

    let stringOne = minimumEditDistance.reconstruct(str2, difference.backtrace)

    console.log(str1 === stringOne); // true
```

## Usage for Arrays

```javascript
    let array1 = ['cat', 'fees', 'hound']
    let array2 = ['cat', 'kite', 'undo', 'hound']

    let arrDiff = minimumEditDistance.diff(array1, array2)

    console.log(arrDiff.distance) //2

    console.log(arrDiff.backtrace) // [ '1_', 'sfees', 'd', '1_' ]

    console.log(minimumEditDistance.reconstruct(array2, arrDiff.backtrace)) // [ 'cat', 'fees', 'hound' ]
```

## API
```java
      /**
       * p1 - first string or array
       * p2 - second string or array
       * distance - integer minimum edit distance
       * backtrace - array of strings specifying edit operations
       */
      diff(p1, p2){
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
