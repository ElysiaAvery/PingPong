//Business Logic
function pingPong(n) {
  if (n % 15 === 0) {
    return "Ping-Pong";
  }
  if (n % 3 === 0) {
    return "Ping";
  }
  if (n % 5 === 0) {
    return "Pong";
  }
  return n.toString();
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
