//video

$("#video").vide({
    webm: "./video/video-bg",
    // mp4: "./video/video-bg",
    poster: "./video/video-bg",

}, {
    volume: 1,
    playbackRate: 1,
    muted: true,
    loop: true,
    autoplay: true,
    posterType: 'webp',
    resizing: true,
    bgColor: 'transparent',

});

// scroll top
$(function () {
    $('.footer__scroll').on('click', function (event) {
        event.preventDefault();
        let top = 0;
        $('html,body').animate({
            scrollTop: top
        }, 2000)
    });
});


// navigation

$(function () {
    $('.link').on('click', function (event) {
        event.preventDefault();
        let target = $(this).attr('href');
        let top = $(target).offset().top;
        $('html,body').animate({
            scrollTop: top
        }, 2000)
    });
});

$(function () {
    var open = $('.nav__burger'),
        menu = $('.nav__barlist'),
        close = $('.nav__close'),
        link = $('.nav__barlink');

    open.on('click', function () {
        menu.toggleClass('nav__barlist--active');
    });
    close.on('click', function () {
        menu.toggleClass('nav__barlist--active');
    })
    link.on('click', function () {
        menu.toggleClass('nav__barlist--active');
    })
});

// tabs
$(function () {
    var tab = $('.tabs__title');
    tab.on('click', function () {
        let l = $(this);

        let link = $(this).attr('data-index');

        let tabs = $(this).parent().parent().children('.tabs__link');

        tabs.each(function () {

            if ($(this).attr('data-index') == link) {
                $(this).show('slow');
                tab.removeClass('active');
                l.addClass('active')
            } else {
                $(this).hide('slow');
                tab.remove('active')
            }
        });
    });

})

// slider clients

$('.clients__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: false,
    autoplaySpeed: 4000,
    arrows: false,

});


// map overlay

$(function () {
    $('.map__overlay').on('click', function () {
        $(this).fadeOut('slow')
    });

})

// lazy load


$(function () {
    $('.lazy').lazy();
});