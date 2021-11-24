
$(".part-section").click(function (event) {
    event.preventDefault();
    const id = $(this).attr('href');
    $("a.active").removeClass("active");
    $(this).addClass("active");
    $(".experts-panel.active").removeClass("active").hide();
    $(id).addClass("active").show();
});


// contact-us----------------------------------------------------

$('.count').click(function () {
    const target = $(this).data('target');
    $(this).find('i').toggleClass('fa fa-minus text-white');
    $(this).find('i').toggleClass('fa fa-chevron-up');
    $(target).toggle(500).parent().toggleClass("targets");
})
// easyOrder-----------------------------------------------------
