/*
 * Programming Quiz: Laugh (5-4)
 */

/*var laugh =  finish the function expression */

var laugh = function(num) {
  var laughter = "";
  for (i = 1; i <= num; i++) {
    laughter += "ha";
  }
  return laughter + "!";
};
console.log(laugh(3));
