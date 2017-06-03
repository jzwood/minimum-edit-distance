# minimum-edit-distance

The **minimum edit distance** is the number of insertions, deletions, and substitutions required to transform one string into another.

## info
The minimum edit distance between two strings isn't terribly helpful most of the time. What is interesting and useful is the minimum edit backtrace. This backtrace contains all the information necessary to transform one string from another (see _Usage_ section).

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

## JSDoc
```java
      /**
       * @typedef {Object} differenceObject
       * @property {number} the minimum edit distance
       * @property {string[]} backtrace
       */

      /**
       * Returns object with 'distance' and 'backtrace' keys
       * @param {(string|string[])} p1 - first string or array
       * @param {(string|string[])} p2 - second string or array
       * @returns {differenceObject}
       */
      diff(p1, p2){
        ...
        return {"distance": distance, "backtrace": backtrace}
      }

      /**
       * Returns p1 from diff(p1, p2)
       * @param {(string|string[])} p2 - p2 from diff(p1, p2)
       * @param {string[]} trace - backtrace output from differenceObject
       * @returns {typeof p1}
       */
      reconstruct(p2, trace){
        ...
        return p1
      }
```
## License

MIT
