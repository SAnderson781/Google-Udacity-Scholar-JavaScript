/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 *
 * Using a while loop, print out the countdown output above.
 */

// your code goes here

var seconds = 60;
var tCount = "";

while (seconds >= 0) {
    tCount = seconds == 50 ? "Orbiter transfers from ground to internal power" :
             seconds == 31 ? "Ground launch sequencer is go for auto sequence start" :
             seconds == 16 ? "Activate launch pad sound suppression system" :
             seconds == 10 ? "Activate main engine hydrogen burnoff system" :
             seconds == 6  ? "Main engine start" :
             seconds === 0 ? "Solid rocket booster ignition and liftoff!" :
             ("T-" + seconds + " seconds");
    console.log(tCount);
    seconds= seconds - 1;
}

/*
* Orbiter transfers from ground to internal power (T-50 seconds)
* Ground launch sequencer is go for auto sequence start (T-31 seconds)
* Activate launch pad sound suppression system (T-16 seconds)
* Activate main engine hydrogen burnoff system (T-10 seconds)
* Main engine start (T-6 seconds)
* Solid rocket booster ignition and liftoff! (T-0 seconds)
*/
