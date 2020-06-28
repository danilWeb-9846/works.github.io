$(function() {
    $('.sevices-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        navText: ['<img src="/img/left.svg" alt="">', '<img src="/img/right.svg" alt="">'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    });
    $('.testimonials-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        navText: ['<img src="/img/left.svg" alt="">', '<img src="/img/right.svg" alt="">'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

});