var doc = jQuery(document)

doc.ready(function() {
  "use strict"

  var typed = new Typed(".my-profile", {
    strings: ["Anh Do (Richard)", "a Web Developer"],
    typeSpeed: 50,
    loop: true,
    backSpeed: 30,
    smartBackspace: true // Default value
  });

  $(window).scroll(function() {
    var top = $(window).scrollTop()
    var $pageHeader = $('.page-header')
    var $navbar = $('.navbar-nav')


    if (top >= 200) {
      $pageHeader.addClass('overlay')
      $navbar.removeClass('navbar-nav-bg')
    } else if ($pageHeader.hasClass('overlay')) {
      $pageHeader.removeClass('overlay')
    } else {
      $navbar.addClass('navbar-nav-bg')
    }
  })

  $(window).scroll()

  $('.skills .progress-content > .skill-progress').each(function() {
    var waypoint = new Waypoint({
      element: this,
      handler: function() {
        var progressNumber = $(this.element).data('progress')

        $(this.element).css({
          width: progressNumber + '%',
          visibility: 'visible'
        })
      },
      offset: '75%'
    })
  })


  var $grid = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-item',
  })

  $('.portfolio .filter-container').on( 'click', 'li a', function() {
    var filterValue = $(this).data('filter');

    $('.portfolio .filter-container li a').removeClass('active')

    $(this).addClass('active')

    $grid.isotope({ filter: filterValue });
  });

  $('.testimonials .testimonial-container').owlCarousel({
    items: 1,
    rewind: true,
    autoplay: true,
    autoplayHoverPause: true,
  });

})