var newSum = false;


$(".calcButton").click(function(){
  if(newSum)
  {
      $("input[type='text']").val("");
      newSum = false;
  }

    $("input[type='text']").val($("input[type='text']").val()+ $(this).val());
});

$("#clear").click(function(){
  $("input[type='text']").val("");
});

$("#calculate").click(function() {
  newSum = true;
  if(eval($("input[type='text']").val()) == "Infinity")
  {
    $("input[type='text']").val("Divide by zero error");
  }

  else
  {
    $("input[type='text']").val(eval($("input[type='text']").val()));
  }

});



$("#backspace").click(function(){
  $("input[type='text']").val(
      function(index, value){
          return value.substr(0, value.length - 1);
  })
});
