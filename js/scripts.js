//Business Logic
function Range(end) {
  var myArray = [];
  myArray.splice()
  for (var i = 0; i <= end; i ++) {
    myArray.push(i);
  }
  alert(myArray);
  return myArray;
}
function PingPong(number) {
  if (number % 15 === 0) {
    return "Ping-Pong!"
  }
  if (number % 3 === 0) {
    return "Ping";
  }
  if (number % 5 === 0) {
    return "Pong";
  }
  if (number % 2 === 0) {
    return "Star Trek!";
  }
  return number.toString();
}
for (var j = 1; j <= 1000; j++) {
console.log(PingPong(j));
}
  // event.preventDefault();


//Front End Logic
$(document).ready(function(){
  $("form").submit(function(event){
    var userInput = $("input#number").val();
    var output = PingPong(userInput);
    var numberRange = Range(userInput);
    $("#result").append("<li>"+output+"</li>").show();
    $("#result").append("<li>"+numberRange+"</li>").show();
    $("#reset").click(function(event) {
    $("#result").empty();
  })
  event.preventDefault();
})
});
