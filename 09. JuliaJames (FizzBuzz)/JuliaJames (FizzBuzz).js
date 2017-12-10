/*
 * Programming Quiz: JuliaJames (4-1)
 */

var x = 1;
var y;

while (x <= 20) {
  y = (x % 3 === 0) ? ((x % 5 === 0) ? "JuliaJames" : "Julia") : (x % 5 === 0) ? "James" : x;
  console.log(y);
  x = x + 1;
}


/*
var x = 1;

while (x <= 100) {
    if ((x % 3 === 0) && (x % 5 === 0)){
        console.log("FizzBuzz");
    }else if (x % 5 === 0){
        console.log("Buzz");
    }else if (x % 3 === 0){
        console.log("Fizz");
    }else {
        console.log(x);
    }
    x = x + 1;
}
*/
