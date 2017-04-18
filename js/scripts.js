$(document).ready(function(){
  $("form#formInput").submit(function(){
    event.preventDefault();
    var userNumber = parseInt($(input#userInput).val());
    var results = [];

    for (var i = 1; i <= userNumber; i++) {
        if (i % 15 === 0){
         results.push("PingPong");
        }
        else if (i % 3 === 0){
          results.push("Ping");
        }

        else if (i % 5 === 0){
          results.push("Pong");
        }

        else{
          results.push(i);
        }
      }

      $(div#resultz).append(<li> + results + </li>)
  });
});
