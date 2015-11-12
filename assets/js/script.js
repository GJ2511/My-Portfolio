// Closes the sidebar menu
$("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

// Opens the sidebar menu
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

// Scrolls to the selected menu item on the page
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
    $("#myCarousel").owlCarousel({
        items: 4,
        itemsDesktop: [1199,4],
        itemsDesktopSmall: [979,4],
        itemsTablet: [979,3],
        itemsMobile: [479,1],
        autoPlay: true,
        stopOnHover: true
    });

    $('.flip').hover(function(){
        $(this).find('.card').toggleClass('flipped');
    });
});