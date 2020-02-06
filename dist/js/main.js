// tabs

// $(".acc-head").click(function () {

//     if ($("#open-tab").is(":hidden")) {

//         $("#open-tab").slideDown("slow");
//         $(".tab").addClass("open");

//     } else {

//         $("#open-tab").hide("slow");
//         $(".tab").removeClass("open");

//     }
// });

$(document).ready(function () {
    //прикрепляем клик по заголовкам acc-head
    $('#accordeon .acordion-head').on('click', f_acc);
});

function f_acc() {
    //скрываем все кроме того, что должны открыть
    $('#accordeon .acordion-body').not($(this).next()).slideUp(1000);
    $('div .acordion-head').toggleClass('.acordion-head-change');
    // открываем или скрываем блок под заголовком, по которому кликнули
    $(this).next().slideToggle(1000);
}

// swiper

let swiper = new Swiper('.swiper-container', {
    spaceBetween: -450,
    // loop: true,
    centeredSlides: true,
    // autoplay: {
    //     delay: 2000,
    //     disableOnInteraction: false,
    // },
});

// progres-bar

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

        //Calcule la circonférence du cercle
        let radius = $circle.attr('r');
        let diameter = radius * 2;
        let circumference = Math.round(Math.PI * diameter);

        //Calcule le pourcentage d'avancement
        let percentage = circumference * percentageRemaining / 100;

        $circle.css({
            'stroke-dasharray': circumference,
            'stroke-dashoffset': percentage
        })

        //Animation de la barre de progression
        if (options.animate === true) {
            $circle.css({
                'stroke-dashoffset': circumference
            }).animate({
                'stroke-dashoffset': percentage
            }, 3000)
        }

        //Animation du texte (pourcentage)
        if (options.animateText == true) {

            $({
                Counter: 0
            }).animate({
                Counter: percentageText
            }, {
                duration: 3000,
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

// modal

let modal = document.getElementById("my_modal");
let btn = document.getElementById("btn_modal_window");
let span = document.getElementsByClassName("close_modal_window")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}