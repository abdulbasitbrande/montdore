$(function () {
  // WOW ANIMATION
  if ($(window).width() >= 992) {
    // Wow init
    new WOW().init();
  }
  // WOW ANIMATION
  // HEADER RESIZE CHECK
  $(window)
    .on("resize", function () {
      if ($(window).width() <= 1200 && $("header").hasClass("var-2")) {
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
    effect: "sldie",
    fadeEffect: {
      crossFade: true,
    },
    speed: 2000, // smooth transition speed
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  // HOME BANNER SLIDER

  // MONT DORE SLIDER
  var montdoreSlider = new Swiper(".montdore-slider", {
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    speed: 3000,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // MONT DORE SLIDER

  // Calculate Width
  if ($(window).width() >= 992) {
    var secWidth = $(".forJqueryOnly").width();
    var containerWidth = $(".forJqueryOnly .container").width();
    var marginLEftRight = secWidth - containerWidth;
    var finalMargin = marginLEftRight / 2;
    console.log(marginLEftRight);
    $(".forJqueryOnly .img-wrap").css({
      width: "calc(100% + " + finalMargin + "px)",
    });
  }

  // Calculate Width
  if ($(window).width() >= 992) {
    var secWidth = $(".leftBoxforJqueryOnly").width();
    var containerWidth = $(".leftBoxforJqueryOnly .container").width();
    var marginLEftRight = secWidth - containerWidth;
    var finalMargin = marginLEftRight / 2;
    $(".leftBoxforJqueryOnly .img-wrap").css({
      transform: "translateX(-" + finalMargin + "px)",
    });
  }
});
