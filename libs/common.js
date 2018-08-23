// слайдер
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    autoplayTimeout: 5000,
    // navText: ["<img src='/img/'>","<img src='/img/'>"],
    responsive:{
        0:{
            nav:false,
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
// Стрелка на  верх
$(document).ready(function(){
  $('body').append('<a href="#" id="go-top" class="top"</a>');
});
$(function() {
 $.fn.scrollToTop = function() {
  $(this).hide().removeAttr("href");
  if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
  var scrollDiv = $(this);
  $(window).scroll(function() {
   if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
   else $(scrollDiv).fadeIn("slow")
  });
  $(this).click(function() {
   $("html, body").animate({scrollTop: 0}, "slow")
  })
 }
});

$(function() {
 $("#go-top").scrollToTop();



$(".main-mnu-button").click(function() {
      $(".user-nav ul").slideToggle();
  });
});


