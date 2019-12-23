$(".move-up").on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({scrollTop:"0"}, 600);
});

$(".move-down").on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({scrollTop:$("#career").offset().top}, 600);
});
