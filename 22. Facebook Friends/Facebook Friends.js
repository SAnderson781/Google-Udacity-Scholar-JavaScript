/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here


var facebookProfile = {
  name: "Sean Anderson",
  friends: 666,
  messages: ["message 1", "message 2"],

  addFriend: function() {
    facebookProfile.friends++;
  },
  removeFriend: function() {
    facebookProfile.friends--;
  },
  postMessage: function(postMsg) {
    facebookProfile.messages.push(postMsg);
  },
  deleteMessage: function(index) {
    facebookProfile.messages.splice(index, 1);
  }
};


console.log(facebookProfile);
