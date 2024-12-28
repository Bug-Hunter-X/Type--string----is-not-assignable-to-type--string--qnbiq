# Type 'string[]' is not assignable to type 'string'
This bug demonstrates a common type error in TypeScript where an array of strings is passed to a function expecting a single string.

## Bug
The `greeter` function expects a string argument, but the `user` variable is an array of strings. This results in a type error.

## Solution
The solution iterates through the array and calls the greeter function for each string element.