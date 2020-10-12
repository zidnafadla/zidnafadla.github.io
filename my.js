$('.btn-to-work').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('#work').offset().top
    }, 2000);
});