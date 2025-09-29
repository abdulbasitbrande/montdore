$(function(){
    
    $('.hero-slider').slick({
        dots: false,
        arrows:true,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        pauseOnHover: false,
        vertical: false,
        verticalSwiping: false,
        verticalReverse: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    draggable: false,
                    swipe: false,
                }
            }
        ]
    });

});