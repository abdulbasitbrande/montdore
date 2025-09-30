$(function () {
  // HEADER RESIZE CHECK
  $(window)
    .on("resize", function () {
      if ($(window).width() <= 767 && $("header").hasClass("var-2")) {
        $("header").removeClass("var-2").addClass("var-1");
      }
    })
    .trigger("resize");
  // HEADER RESIZE CHECK

  //   BACK TO TOP BTN
  $(".footer .bot-logo").on("click", function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $("header").offset().top,
      },
      600 // duration in ms
    );
  });
  //   BACK TO TOP BTN

  // HOME BANNER SLIDER
  var bannerSldier = new Swiper(".banner-slider", {
    loop: true, // optional, makes it infinite
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    speed: 800, // smooth transition speed
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // HOME BANNER SLIDER

  $(".hero-slider").slick({
    dots: false,
    arrows: true,
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
        },
      },
    ],
  });
});
