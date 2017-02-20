// This code runs when the page loads
$(function() {

  // Create an object that represents your social profile
  // Create two methods on this object:
  // 1. Write a short message to the console which displays how many friends you have (this.friends.length)
  // 2. Create an alert that displays your current status (this.status)
  var Holly = {
    name: "Holly",
    location: "Chicago, IL",
    status: "API Evangelist",
    friends: ["Tom", "Jedi", "Audra"]
    logNumberOfFriends:function(){
      console.log(this.friends.length)
    },
    alertCurrentStatus: function(){
      window.alert(this.status)
    }
  }
Holly.logNumberOfFriends()
Holly.alertCurrentStatus()

  // Use the two methods here
  // brian.logNumberOfFriends()
  // brian.alertCurrentStatus()

})
