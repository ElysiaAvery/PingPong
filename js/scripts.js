//Business Logic
var myArray = [];
var pp = "Ping-Pong!";
var pi = "Ping!";
var po = "Pong!";
var star = "Star Trek!";
function Range(end) {
  for (var i = 1; i <= end; i ++) {
    if (i % 15 === 0) {
      myArray.splice(i, 1, pp)
    }
    else if (i % 3 === 0) {
      myArray.splice(i, 1, pi)
    }
    else if (i % 5 === 0) {
      myArray.splice(i, 1, po)
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
    var numberRange = Range(userInput);
    $("#result").append("<li>"+numberRange+"</li>").show();
    $("#reset").click(function(event) {
      $("#result").empty();
    })
    event.preventDefault();
  });
});
