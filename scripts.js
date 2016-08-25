//Business Logic
var myArray = [];
var pingPong = "Ping-Pong!";
var ping = "Ping!";
var pong = "Pong!";
var star = "Star Trek!";
function range(end) {
  for (var i = 1; i <= end; i ++) {
    if (i % 15 === 0) {
      myArray.splice(i, 1, pingPong)
    }
    else if (i % 3 === 0) {
      myArray.splice(i, 1, ping)
    }
    else if (i % 5 === 0) {
      myArray.splice(i, 1, pong)
    }
    // else if (i % 2 === 0) {
    //   myArray.push(i, 1, star)
    // }
    else {
      myArray.push(i);
    }
  }
  alert(myArray);
  return myArray;
}


//Front End Logic
$(document).ready(function(){
  $("form").submit(function(event){
    var userInput = parseInt($("input#number").val());
    var numberRange = range(userInput);
    $("#result").append("<li>"+numberRange+"</li>").show();
    $("#reset").click(function(event) {
      $("#result").empty();
    })
    event.preventDefault();
  });
});
