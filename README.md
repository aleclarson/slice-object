# slice-object v1.1.1

Fastest way to slice an object into a new array.

Almost identical to `[].slice`, yet faster in all cases. The only difference: holes are filled in, which means sparse arrays are never returned. You can even use this function to convert a sparse array into a packed array!

```typescript
slice(obj: Object, start: number = 0, end: number = obj.length) : Array
```

### Usage

```js
const slice = require('slice-object');

// Works with any object that has a `length` property.
const obj = {
  0: 0,
  1: 1,
  2: 2,
  length: 3,
};
slice(obj);       // => [0, 1, 2]
slice(obj, 1);    // => [1, 2]
slice(obj, 1, 2); // => [1]

// Perfect for `Arguments` objects.
function args() { return arguments }
slice(args(1, 2, 3, 4), 2); // => [3, 4]

// Slicing arrays is faster, too!
slice([1, 2, 3], 1); // => [2, 3]

// When the start index is >= the length, an empty array is returned.
slice(args(1, 2), 2); // => []

// When the start index is >= the end index, an empty array is returned.
slice(args(1, 2), 1, 1); // => []

// Negative indexes are supported.
slice(args(1, 2, 3), -2, -1); // => [2]

// Create a packed array from a sparse array.
const arr = [];
arr[1] = 1;
arr.hasOwnProperty(0);        // => false
slice(arr).hasOwnProperty(0); // => true
```
