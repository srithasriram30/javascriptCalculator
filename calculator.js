var decimal = false;
var result_string = "";

$(".num").click(function() {
  $("span").append($(this).val());
  console.log(result_string);
});

$(".clear").click(function() {
  $("span").empty();
});



  $("#decimal").click(function() {
    if(!decimal) {
      $("span").append($(this).val());
      decimal = true;
    }
  });

$("#sum").click(function(){

  result_string =  result_string + $("span").text() + "+";
  $("span").empty();
  console.log(result_string);
});

$("#difference").click(function(){

  result_string =  result_string + $("span").text() + "-";
  $("span").empty();
  console.log(result_string);

});

$("#multiply").click(function(){

  result_string =  result_string + $("span").text() + "*";
  $("span").empty();
  console.log(result_string);

});

$("#divide").click(function(){

  result_string =  result_string + $("span").text() + "/";
  $("span").empty();
  console.log(result_string);
});

$("#clear").click(function(){

  $("span").empty();
  console.log(result_string);
});


$("#result").click(function(){

  var final_number = $("span").text()
  $("span").empty();
  result_string =  result_string + final_number;
  $("span").append(eval(result_string));
  result_string = "";
});
