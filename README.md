# minimum-edit-distance

Calculated minimum edit distance so that one may perform char specific diffs to strings and arrays.

## Usage

First, install the package using npm:

    npm install minimum-edit-distance

Then, require the package and use it like so:

    const med = require('minimum-edit-distance');

   	let str1 = 'here we have one string';
	let str2 = 'here we have another string';


    let diff = med.diff(str1, str2);

    console.log(diff.distance); \\ 5

## License

MIT
