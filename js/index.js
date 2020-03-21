// Scroll to specified point ==> run something
var waypoint = new Waypoint({
  element: $(".js--section-features"),
  handler: direction => {
    if (direction === "down") {
      $("nav").addClass("sticky");
    } else {
      $("nav").removeClass("sticky");
    }
  },
  offset: "70px"
});

// Click to scroll to element
$(".js--scroll-to-plans").click(() => {
  $("html, body").animate(
    { scrollTop: $(".js--section-plans").offset().top },
    500
  );
});

$(".js--scroll-to-start").click(() => {
  $("html, body").animate(
    { scrollTop: $(".js--section-features").offset().top },
    500
  );
});

// Navigation scroll (snippet stealed from internet)
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top
          },
          500,
          function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              // Checking if the target was focused
              return false;
            } else {
              $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          }
        );
      }
    }
  });

// Animation on scroll
// js--wp-1
var waypoint = new Waypoint({
  element: $(".js--wp-1"),
  handler: () => {
    $(".js--wp-1").addClass("animated fadeIn");
  },
  offset: "50%"
});

var waypoint = new Waypoint({
  element: $(".js--wp-2"),
  handler: () => {
    $(".js--wp-2").addClass("animated fadeInUp");
  },
  offset: "50%"
});

var waypoint = new Waypoint({
  element: $(".js--wp-3"),
  handler: () => {
    $(".js--wp-3").addClass("animated fadeIn");
  },
  offset: "50%"
});

var waypoint = new Waypoint({
  element: $(".js--wp-4"),
  handler: () => {
    $(".js--wp-4").addClass("animated swing");
  },
  offset: "50%"
});

// Mobile navigation
$(".js--nav-icon").click(() => {
  const nav = $(".js--main-nav");
  nav.slideToggle(200);

  const icon = $(".js--nav-icon ion-icon");
  if (icon.attr("name") === "menu-outline") {
    icon.attr("name", "close-outline");
  } else {
    icon.attr("name", "menu-outline");
  }
});
