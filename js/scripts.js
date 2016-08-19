//Business Logic
function pingPong(number) {
  var multiple = [1234567890];
  if (number % 15 === 0) {
    return ("Ping-Pong" + );
  }
  if (number % 3 === 0) {
    return "Ping";
  }
  if (number % 5 === 0) {
    return "Pong";
  }
  if (number % 2 === 0) {
    return "Star Trek!"
  }
  return number.toString();
}


for (let i = 1; i <= 1000; i++) {
  console.log(pingPong(i));
}

//Front End Logic
$(document).ready(function(){
  $("form").submit(function(event){
    var userInput = $("input#number").val();
    var output = pingPong(userInput);
    $("#result").append("<li>"+output+"</li>");
  event.preventDefault();
  });
});
