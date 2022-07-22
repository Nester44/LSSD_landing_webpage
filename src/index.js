const headerHeight = jQuery(window)[0].innerHeight * 0.1;


jQuery(window).scroll(function() {
    if (jQuery(document).scrollTop() > headerHeight) {
        jQuery('.header').addClass('redColored');
    } else {
        jQuery('.header').removeClass('redColored');
    }
    });