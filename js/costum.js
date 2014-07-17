
$(document).ready(function() {

   /*----------------------------------------------------*/
    /*  owl Carousel
 /*----------------------------------------------------*/
 
  $("#owl-demo").owlCarousel({
 
      //navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      autoPlay: 6000
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
  
  $("#owl-team-carousel").owlCarousel({
 
      //navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      autoPlay: 6000
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
  
  $("#owl-carousel-techno").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      navigationText : ["<i class=\"fa fa-chevron-left\"></i>", "<i class=\"fa fa-chevron-right\"></i>"], 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      items : 6,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
   $("#owl-carousel-works").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      navigationText : ["<i class=\"fa fa-chevron-left\"></i>", "<i class=\"fa fa-chevron-right\"></i>"], 
      //autoPlay: 3000, Set AutoPlay to 3 seconds
      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
      responsive : true,
      responsiveRefreshRate : 200,
      responsiveBaseWidth : window,
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
   
    $("#owl-client-carousel").owlCarousel({ 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      items : 6,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
      responsive : true,
      responsiveRefreshRate : 200,
      responsiveBaseWidth : window,
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 


 /*----------------------------------------------------*/
    /*  Scroll Up
 /*----------------------------------------------------*/
    
        $.scrollUp({
            scrollName: 'scrollUp', // Element ID
            topDistance: '300', // Distance from top before showing element (px)
            topSpeed: 300, // Speed back to top (ms)
            animation: 'fade', // Fade, slide, none
            animationInSpeed: 200, // Animation in speed (ms)
            animationOutSpeed: 200, // Animation out speed (ms)
            scrollText: '', // Text for element
            activeOverlay: true // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        });
   

    /* ==============================================
    WOW plugin triggers animation.css on scroll
    =============================================== */

    var wow = new WOW(
      {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       150,          // distance to the element when triggering the animation (default is 0)
        mobile:       false        // trigger animations on mobile devices (true is default)
      }
    );
    wow.init();


  /* ==============================================
    Parallax
    =============================================== */

    $(document).ready(function(){
          $(window).stellar({ 
        horizontalScrolling: false,
        });  
    });

/*===========================================
   MagnificPopup 
   ===========================================*/
  
     $('.workBox').magnificPopup({
     delegate: 'a', // child items selector, by clicking on it popup will open
     type: 'image',
      gallery: {
    // options for gallery
        enabled: true
        }
    // other options
     });

    

  });

