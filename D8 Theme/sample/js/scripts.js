(function ($, Drupal) {

  // mobile homepage menu
  $(".menu--homepage--item").click( function() {
    if ( $(window).width() < 900 ) {
      $menu = $(this).children(".menu--homepage--dropdown");
      if ($menu.css("visibility") == "visible") {
        $menu.css("visibility", "hidden");
      } else {
        $menu.css("visibility", "visible");
      }
    }
  });

  // mobile menu
  $(".menu--item").click( function() {
    if ( $(window).width() < 900 ) {
      $menu = $(this).children(".menu--dropdown");
      if ($menu.is(":visible")) {
        $menu.hide();
      } else {
        $menu.show();
      }
    }
  });

})(jQuery, Drupal);
