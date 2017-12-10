/*
 * Programming Quiz: Murder Mystery (3-4)
 */

// change the value of `suspect` and `room` to test your code

var suspect = "Ms. Van Cleve";
var room = "gallery";

var weapon = "";
var solved = true;

if (room === "ballroom") {
  weapon = "poison";
  solved = suspect === "Mr. Kalehoff";
} else if (room === "gallery") {
  weapon = "trophy";
  solved = suspect === "Ms. Van Cleve";
} else if (room === "billiards room") {
  weapon = "pool stick";
  solved = suspect === "Mrs. Sparr";
} else {
  weapon = "knife";
  solved = suspect === "Mr. Parkes";
}

if (solved) {
  console.log(suspect + ' did it in the ' + room + ' with the ' + weapon + '!');
}

//Ms. Van Cleve did it in the gallery with the trophy!
