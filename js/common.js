jQuery(document).ready(function(){
$objWindow = $(window);
$('div[data-type="background"]').each(function(){
var $bgObj = $(this);
$(window).scroll(function() {
var yPos = -($objWindow.scrollTop() / $bgObj.data('speed'));
var coords = '100% '+ yPos + 'px';
$bgObj.css({ backgroundPosition: coords });
});
});
});
jQuery(document).ready(function(){
  jQuery('.skillbar').each(function(){
    jQuery(this).find('.skillbar-bar').animate({
      width:jQuery(this).attr('data-percent')
    },9000);
  });
});
      // Scrolling Effect
      $(window).on("scroll", function() {
            if($(window).scrollTop()) {
                  $('nav').addClass('black');
            }
            else {
                  $('nav').removeClass('black');
            }
      })
$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top ;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    $(function() {
$(".content-header h1").animated("fadeInDown");
$(".content-header p").animated("fadeInUp");
$(".animat-sozial-1").animated("fadeInUp");
$(".animat-sozial-2").animated("fadeInUp");
$(".animat-sozial-3").animated("fadeInUp");
$(".animat-sozial-4").animated("fadeInUp");
$(".animat-sozial-5").animated("fadeInUp");
$(".btn").animated("fadeInDown");
$(".tools").animated("zoomInUp");


});
});

