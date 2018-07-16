# slice-object v1.0.0

Fastest way to slice an object into a new array.

```typescript
slice(obj: Object, start: number = 0) : Array
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
slice(obj, 1); // => [1, 2]

// Perfect for `Arguments` objects.
function args() { return arguments }
slice(args(1, 2, 3, 4), 2); // => [3, 4]
```