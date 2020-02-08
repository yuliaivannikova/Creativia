// tabs

$(document).ready(function () {
    $('#accordeon .acordion-head').on('click', f_acc);
});

function f_acc() {
    $('#accordeon .acordion-body').not($(this).next()).slideUp(1000);
    $(this).next().slideToggle(1000);
}

// swiper

let swiper = new Swiper('.swiper-container', {
    // spaceBetween: -400,
    centeredSlides: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
        320: {
            spaceBetween: -200
        },
        480: {
            spaceBetween: -300
        },
        640: {
            spaceBetween: -300
        },
        990: {
            spaceBetween: -300
        },
        1100: {
            spaceBetween: -400
        }
    }
});

// progres-bar
let offset = 4500;
$(window).scroll(function () {
    let scrolltop = $(this).scrollTop();

    (function ($) {

        $.fn.bekeyProgressbar = function (options) {

            options = $.extend({
                animate: true,
                animateText: true
            }, options);

            let $this = $(this);

            let $progressBar = $this;
            let $progressCount = $progressBar.find('.ProgressBar-percentage--count');
            let $circle = $progressBar.find('.ProgressBar-circle');
            let percentageProgress = $progressBar.attr('data-progress');
            let percentageRemaining = (100 - percentageProgress);
            let percentageText = $progressCount.parent().attr('data-progress');

            let radius = $circle.attr('r');
            let diameter = radius * 2;
            let circumference = Math.round(Math.PI * diameter);

            let percentage = circumference * percentageRemaining / 100;

            $circle.css({
                'stroke-dasharray': circumference,
                'stroke-dashoffset': percentage
            })

            if (options.animate === true) {
                $circle.css({
                    'stroke-dashoffset': circumference
                }).animate({
                    'stroke-dashoffset': percentage
                }, 4000)
            }

            if (options.animateText == true) {

                $({
                    Counter: 0
                }).animate({
                    Counter: percentageText
                }, {
                    duration: 2500,
                    step: function () {
                        $progressCount.text(Math.ceil(this.Counter) + '%');
                    }
                });

            } else {
                $progressCount.text(percentageText + '%');
            }

        };

    })(jQuery);

    $(document).ready(function () {

        $('.ProgressBar--animateNone').bekeyProgressbar({
            animate: false,
            animateText: false
        });

        $('.ProgressBar--animateCircle').bekeyProgressbar({
            animate: true,
            animateText: false
        });

        $('.ProgressBar--animateText').bekeyProgressbar({
            animate: false,
            animateText: true
        });

        $('.ProgressBar--animateAll').bekeyProgressbar();

    });
});
// modal

let modal = document.getElementById("my_modal");
let btn = document.getElementById("btn_modal_window");
let span = document.getElementsByClassName("close_modal_window")[0];
btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
    document.getElementById('modal-form').reset();
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.getElementById('modal-form').reset();
    }
}

// $(".form").submit(function () {
//     let str = $(this).serialize();
//     $.ajax({
//         type: "GET",
//         // url: "contact.php",
//         data: str,
//         success: function (msg) {
//             if (msg == 'ok') {
//                 alert('Your message send');
//             } else {
//                 alert('Erro! Please try more');
//             }
//         }
//     });
//     return false;
// });

// button