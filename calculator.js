var decimal = false;

$(".num").click(function() {
  $("span").append($(this).val());
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
