$(".num").click(function() {
  $("span").append($(this).val());
});

$(".clear").click(function() {
  $("span").empty();
});
