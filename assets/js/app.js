
$(".menus").click(function (event) {
    event.preventDefault();
    const id = $(this).attr('href');
    $("a.active").removeClass("active");
    $(this).addClass("active");
    $('body, html').animate({
        scrollTop: $(id).offset().top
    }, 900);
});

// contact-us----------------------------------------------------

$('.count').click(function () {
    const target = $(this).data('target');
    $(this).find('').toggleClass('fa fa-minus ');
    $(this).find('i').toggleClass('fas fa-chevron-up text-white');
    $(target).toggle(700).parent().toggleClass("targets");
})
// easyOrder-----------------------------------------------------
$('.btn-sabt').click(function (){
    swal("شماره شما با موفقیت ثبت شد." ,
        "در سریع ترین زمان ممکن با شما تماس می گیریم!","success");
})