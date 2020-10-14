$('.btn-to-work').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('#work').offset().top
    }, 2000);
});


$('.btnCS').on('click', function () {

    id = $(this).attr('data-id');

    const modal = $('.' + id);

    modal.addClass('modal-active');
});

$('.btnl').on('click', function () {
    const btn = $(this).attr('data-action');
    if (btn == 'close') {
        $(".modal-bg").removeClass('modal-active');
    }
});

$(".btnGo").on('click', function () {
    window.location.href = $(this).attr("action-href");
});