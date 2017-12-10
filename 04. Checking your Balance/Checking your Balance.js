/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = 325.00;
var checkBalance = true;
var isActive = false;

// your code goes here

if (checkBalance !== true) {
  console.log("Thank you. Have a nice day!");
} else if (isActive === false) {
  console.log("Your account is no longer active.");
} else if (balance === 0.00) {
  console.log("Your account is empty.");
} else if (balance < 0.00) {
  console.log("Your balance is negative. Please contact bank.");
} else {
  console.log("Your balance is $" + balance.toFixed(2) + ".");
}
