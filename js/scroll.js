$(".move-down").on("click", function (e) {
    e.preventDefault();
    $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 1000, 'linear');
});

$(".move-up").on("click", function (e) {
    e.preventDefault();
    $('html, body').stop().animate({
        scrollTop: 0
    }, 1000, 'linear');
});
