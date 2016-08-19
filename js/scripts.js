//Business Logic
function PingPong(number) {
  if (number % 15 === 0) {
    return "Ping-Pong";
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
  console.log(PingPong(i));
}
function Range(end) {
  var myArray = [];
  for (var i = 0; i <= end; i += 1) {
    myArray.push(i);
  }
  alert(myArray);
  return myArray;
};
// console.log(Range(end));{}

// function PingPong(number) {
//   if (number % 15 === 0) {
//     return "Ping-Pong";
//   }
//   if (number % 3 === 0) {
//     return "Ping";
//   }
//   if (number % 5 === 0) {
//     return "Pong";
//   }
//   if (number % 2 === 0) {
//     return "Star Trek!"
//   }
//   return number.toString();
// }
// for (let i = 1; i <= 1000; i++) {
//   console.log(PingPong(i));
// }

//Front End Logic
$(document).ready(function(){
  $("form").submit(function(event){
    var userInput = $("input#number").val();
    var output = PingPong(userInput);
    var numberRange = Range(userInput);
    $("#result").append("<li>"+output+"</li>");
    $("#result").append("<li>"+numberRange+"</li>");
  event.preventDefault();
  });
});
