/* Script pra fixar header no top quando rolar  */

$(document).ready(function(){

   /* sticky navbar on scroll script */
   $(window).scroll(function(){
    if(this.scrollY > 20){
        $('.navbar').addClass("sticky");
    }else{
        $('.navbar').removeClass("sticky");
    }
    
    
    // scroll-up button show/hide script
    if(this.scrollY > 500){
        $('.scroll-up-btn').addClass("show");
    }else{
        $('.scroll-up-btn').removeClass("show");
    }

    
  });
  
 
  // slide-up script
  $('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
    // removing smooth scroll on slide-up button click
    $('html').css("scrollBehavior", "auto");
  });

  $('.navbar .menu li a').click(function(){
    // applying again smooth scroll on menu items click
    $('html').css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $('nav .menu-btn').click(function(){
    $('nav .menu').toggleClass("active");
    $('nav .menu-btn i').toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".linguagens", {
    strings: ["01001000 01101001","echo 'Hello! World';"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
    });
  
    var typed = new Typed(".oi2", {
    strings: ["SOBRE"],
    typeSpeed: 300,
    backSpeed: 360,
    loop: true
    });

  $(".owl-carousel").owlCarousel({
    loop: false,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 6000,
    dots: true,
    lazyLoad: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });
  
  // MENU RESPONSIVO
  $('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  });
  
  
  //FIXAR HEADER
  window.onscroll = function () {
    if (window.pageYOffset > 140) {
      $("#header").addClass("active");
    } else {
      $("#header").removeClass("active");
    }
  };

  
  // ISOTOPE
  let btns = $("#servicos .button-group button");

  btns.click(function (e) {
    $("#servicos .button-group button").removeClass("active");
    e.target.classList.add("active");

    let selector = $(e.target).attr("data-filter");
    $("#servicos .grid").isotope({
      filter: selector,
    });
  });
  
  $(window).on("load", function () {
    $("#servicos .grid").isotope({
      filter: "*",
    });
  });

  $(window).on("load", function () {
    $("#servicos .grid").isotope({
      filter: "*",
    });
  

  

  // MAGNIFY

  $(".grid .popup-link").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
      tPrev: "Anterior",
      tNext: "Proxima",
      tCounter: "%curr% de %total%",
    },
  });

  //OWL
  $(".owl-carousel").owlCarousel({
    loop: false,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 6000,
    dots: true,
    lazyLoad: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });

  // typing text animation script
  

 // typing text animation script
 var typed = new Typed(".oi", {
  strings: ["web developer", "social media", "web design", "java script", "tech music"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

var typed = new Typed(".oi2", {
  strings: ["SOBRE"],
  typeSpeed: 300,
  backSpeed: 360,
  loop: true
});

});
});
