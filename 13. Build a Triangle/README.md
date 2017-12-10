## Build a Triangle

**Directions:**

For this quiz, you're going to create a function called `buildTriangle()` that will accept an input (the triangle at its widest width) and will return the string representation of a triangle. See the example output below.

`buildTriangle(10);`

**Returns:**

```
  *
  * *`
  * * *
  * * * *
  * * * * *
  * * * * * *
  * * * * * * *
  * * * * * * * *
  * * * * * * * * *
  * * * * * * * * * *
 ```

We've given you one function `makeLine()` to start with. The function takes in a line length, and builds a line of asterisks and returns the line with a newline character.

```
 function makeLine(length) {
    var line = "";
   for (var j = 1; j <= length; j++) {
     line += "* "
   }
 }
 return line + "\n";
```

You will need to call this `makeLine()` function in `buildTriangle()`.
