//var decimal = false;

$(".calcButton").click(function(){

    $("input[type='text']").val($("input[type='text']").val()+ $(this).val());
});

$("#clear").click(function(){
  $("input[type='text']").val("");
});

$("#calculate").click(function(){
  $("input[type='text']").val(eval($("input[type='text']").val()));
});



$("#backspace").click(function(){
  $("input[type='text']").val(
      function(index, value){
          return value.substr(0, value.length - 1);
  })
});
