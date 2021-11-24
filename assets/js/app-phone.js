// menu---------------------------------------------------------------
$('.menu').click(function () {
    const target = $(this).data('target');
    $(this).find('i').toggleClass('fa-chevron-up');
    $(target).toggle(500).toggleClass("navbar");
});
// menu---------------------------------------------------------------


// homePage------------------------------------------------------------

$('#products').click(function () {
   $('.products-section').removeClass('d-none');
})
    $('.linkd').click(function (){
        window.location=$(this).find('a').attr('href');
        return false;
    })

$.get('https://app.ahanmelal.com/api/model/20',function (data){

    var homepage = document.getElementById('home').getContext('2d');

    var stars = []
    var months = []
    for (const  item in data){
        stars.push(data[item].price ==='-' ? 0 : data[item].price)
        months.push(item)
    }

    var gradient = homepage.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgb(111,66,193)');
    gradient.addColorStop(1, 'rgba(255,255,255,0.25)');

    var home = new Chart(homepage, {
        type: 'line',
        data: {
            labels: months,
            datasets: [{
                data: stars,
                backgroundColor: gradient,
                hoverBackgroundColor: gradient,
                // fill: false,
                borderColor: 'rgba(66, 47, 138, 0.87)',
                borderWidth: 1,
                pointBorderColor: 'rgb(255,255,255)',
                // pointHoverRadius: 10,
                tension: 0,
                // pointWidth:2,
            }]
        },
        options: {
            legend: {
                display: false,
                labels: {
                    display: true,
                    fontFamily: ''
                },
            },
            tooltips: {
                backgroundColor: 'white',
                bodyFontSize: 15,
                bodyFontFamily: 'irsans',
                bodyFontColor: 'black',
                bodyAlign: 'center',
                xPadding: 8,
                yPadding: 3,
                rtl: true,
                Position: 'average',
                callbacks: {
                    label: function (tooltipItem) {
                        return tooltipItem.yLabel+'  '+tooltipItem.xLabel;
                    },
                    titleFontColor: 'black',
                    labelColor: function (context) {
                        return {
                            borderWidth: 2,
                        };
                    },
                    labelTextColor: function (context) {
                        return '#543453';
                    }
                }
            },
        }
    })
})


$(".product-btn").click(function (event) {
    event.preventDefault();
    const id = $(this).attr('href');
    $("a.active").removeClass("active");
    $(this).addClass("active");
    $(".ng_panel.active").removeClass("active").hide();
    $(id).addClass("active").show();
});

// homePage------------------------------------------------------------

// MoneyPage-----------------------------------------------------------

$('.diagramModal').click(function (e) {
    e.preventDefault();
    $('#exampleModal').modal();

})

// MoneyPage-----------------------------------------------------------


// Factory-------------------------------------------------------------
$.get('https://app.ahanmelal.com/api/model/14',function (data){

    var factorypage = document.getElementById('factory').getContext('2d');

    var stars = []
    var months = []
    for (const  item in data){
        stars.push(data[item].price ==='-' ? 0 : data[item].price)
        months.push(item)
    }

    var gradient = factorypage.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgb(111,66,193)');
    gradient.addColorStop(1, 'rgba(255,255,255,0.25)');

    var factory = new Chart(factorypage, {
        type: 'line',
        data: {
            labels: months,
            datasets: [{
                data: stars,
                backgroundColor: gradient,
                hoverBackgroundColor: gradient,
                // fill: false,
                borderColor: 'rgba(66, 47, 138, 0.87)',
                borderWidth: 1,
                pointBorderColor: 'rgb(255,255,255)',
                // pointHoverRadius: 10,
                tension: 0,
                // pointWidth:2,
            }]
        },
        options: {
            legend: {
                display: false,
                labels: {
                    display: true,
                    fontFamily: ''
                },
            },
            tooltips: {
                backgroundColor: 'white',
                bodyFontSize: 15,
                bodyFontFamily: 'irsans',
                bodyFontColor: 'black',
                bodyAlign: 'center',
                xPadding: 8,
                yPadding: 3,
                rtl: true,
                Position: 'average',
                callbacks: {
                    label: function (tooltipItem) {
                        return tooltipItem.yLabel+'  '+tooltipItem.xLabel;
                    },
                    titleFontColor: 'black',
                    labelColor: function (context) {
                        return {
                            borderWidth: 2,
                        };
                    },
                    labelTextColor: function (context) {
                        return '#543453';
                    }
                }
            },
        }
    })
})


$(".ng_panel_button").click(function (event) {
    event.preventDefault();
    const id = $(this).attr('href');
    $("a.active").removeClass("active");
    $(this).addClass("active");
    $(".ng_panel.active").removeClass("active").hide();
    $(id).addClass("active").show();
});

$('.diagramModal').click(function (e) {
    e.preventDefault();
    $('#exampleModal').modal('show');
})

// Factory-------------------------------------------------------------

// About-us------------------------------------------------------------
    $('.projects-melal').click(function (){
        $('.project-explain').removeClass('d-none');
    })


$(".ng_panel_buttons").click(function (event) {
    event.preventDefault();
    const id = $(this).attr('href');
    $("a.active").removeClass("active");
    $(this).addClass("active");
    $(".ng_panel.active").removeClass("active").hide();
    $(id).addClass("active").show();
});

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        margin: 5

    });
});
function moveToSelected(element) {

    if (element == "next") {
        var selected = $(".selected").next();
    } else if (element == "prev") {
        var selected = $(".selected").prev();
    } else {
        var selected = element;
    }

    var next = $(selected).next();
    var prev = $(selected).prev();
    var prevSecond = $(prev).prev();
    var nextSecond = $(next).next();

    $(selected).removeClass().addClass("selected");

    $(prev).removeClass().addClass("prev");
    $(next).removeClass().addClass("next");

    $(nextSecond).removeClass().addClass("nextRightSecond");
    $(prevSecond).removeClass().addClass("prevLeftSecond");

    $(nextSecond).nextAll().removeClass().addClass('hideRight');
    $(prevSecond).prevAll().removeClass().addClass('hideLeft');

}

// Eventos teclado
$(document).keydown(function (e) {
    switch (e.which) {
        case 37: // left
            moveToSelected('prev');
            break;

        case 39: // right
            moveToSelected('next');
            break;

        default:
            return;
    }
    e.preventDefault();
});

$('#carousel div').click(function () {
    moveToSelected($(this));
});

$('#prev').click(function () {
    moveToSelected('prev');
});

$('#next').click(function () {
    moveToSelected('next');
});


// About-us------------------------------------------------------------

// contact-us---------------------------------------------------------

$(".ng_panel_buttons").click(function (event) {
    event.preventDefault();
    const id = $(this).attr('href');
    $("a.active").removeClass("active");
    $(this).addClass("active");
    $(".ng_panel.active").removeClass("active").hide();
    $(id).addClass("active").show();
});

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        margin: 5

    });
});

// contact-us---------------------------------------------------------

// easyOrser----------------------------------------------------------
$(".product-menu").click(function () {
    $(this).toggleClass("expertOrder");
});
