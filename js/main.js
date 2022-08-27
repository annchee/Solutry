/*=============================================
  =       Menu sticky & Scroll to top         =
  =============================================*/
var windows = $(window);
var screenSize = windows.width();
var sticky = $('.header-sticky');
var $html = $('html');
var $body = $('body');
  
windows.on('scroll', function () 
{
  var scroll = windows.scrollTop();
  var headerHeight = sticky.height();

  if (screenSize >= 320) 
  {
    if (scroll < headerHeight) 
    {
      sticky.removeClass('is-sticky');
    } 
    else 
    {
      sticky.addClass('is-sticky');
    }
  }
});


/*----------  Scroll to top  ----------*/
function scrollToTop() 
{
  var $scrollUp = $('#back-to-top'),
      $lastScrollTop = 0,
      $window = $(window);

  $window.on('scroll', function () 
  {
    var st = $(this).scrollTop();
    
    if (st > $lastScrollTop)
    {
      $scrollUp.addClass("show");
    } 
    else 
    {
      if($window.scrollTop() > 200 || st > 200) 
      {
        $scrollUp.addClass("show");
      } 
      else
      {
        $scrollUp.removeClass("show");
      }
    }

    $lastScrollTop = st;

  });

  $scrollUp.on('click', function (evt) 
  {
    $('html, body').animate({scrollTop: 0}, 100);
    evt.preventDefault();
  });
}
scrollToTop();



/*=============================================
  =                 PROJECTS                  =
  =============================================*/
var projects = new Swiper(".projects-swiper", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 30,
  loop: true,
  loopFillGroupWithBlank: true,

  pagination: {
    el: ".projects-bullet",
    clickable: true,
  },
  breakpoints: {
    1499:{
        slidesPerView : 3,
        slidesPerGroup: 3
    },

    1200:{
        slidesPerView : 3,
        slidesPerGroup: 3
    },

    991:{
        slidesPerView : 2,
        slidesPerGroup: 2
    },

    767:{
        slidesPerView : 2,
        slidesPerGroup: 2
    },

    575:{
        slidesPerView : 1,
        slidesPerGroup: 1
    },
  }
});


/*=============================================
  =               TESTIMONIALS                =
  =============================================*/
var testimonial = new Swiper(".testimonial-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".testimonial-bullet",
    clickable: true,
  },
  breakpoints: {
    1499:{
        slidesPerView : 3,
        slidesPerGroup: 3
    },

    1200:{
        slidesPerView : 2,
        slidesPerGroup: 2
    },

    991:{
        slidesPerView : 2,
        slidesPerGroup: 2
    },

    767:{
        slidesPerView : 2,
        slidesPerGroup: 2

    },

    575:{
        slidesPerView : 1,
        slidesPerGroup: 1
    }
  }
});


/*==========================================
  =            mobile menu active            =
  ============================================*/
$("#mobile-menu-trigger").on('click', function()
{
  $("#mobile-menu-overlay").addClass("active");
});

$("#mobile-menu-close").on('click', function()
{
  $("#mobile-menu-overlay").removeClass("active");
});
  
$(".offcanvas-navigation").on('click', 'li a, li .menu-expand', function(e) {
  var $this = $(this);
  if ( ($this.parent().attr('class').match(/\b(has-children)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand')) ) 
  {
    e.preventDefault();
    if ($this.siblings('ul:visible').length)
    {
        $this.parent('li').removeClass('active');
        $this.siblings('ul').slideUp();

        $this.find($(".fa-solid")).addClass("fa-angle-down");
        $this.find($(".fa-solid")).removeClass("fa-angle-up");
    } 
    else 
    {
        $this.parent('li').addClass('active');
        $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
        $this.closest('li').siblings('li').find('ul:visible').slideUp();
        $this.siblings('ul').slideDown();

        $this.find($(".fa-solid")).removeClass("fa-angle-down");
        $this.find($(".fa-solid")).addClass("fa-angle-up");
    }
  }
});