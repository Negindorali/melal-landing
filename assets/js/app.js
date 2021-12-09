
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
    swal.fire({
        title:"گوش به زنگ باشید!",
        text:"اطلاعات شما با موفقیت ثبت شد، کارشناسان آهن ملل حداکثر تا پایان روز با شما تماس می‌گیرند.درصورتی که هر گونه سوالی داشتید می‌توانید با شماره تماس 03135020 تماس بگیرید.",
        customClass:{
            textAlign:'right'
        }
    });
})


$("#type").change(function (){
    let unit = $(this).find(":selected").data('unit');
    console.log(unit)
    $("#meqdar").attr('placeholder',"مقدار "+ unit)
})