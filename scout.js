// Runs on startup
$(function () {
  resizeStrip();
});

var globalResizeTimer = null;

// Runs the resie function 200ms after window has stopped moving
$(window).resize(function() {
    if(globalResizeTimer != null) window.clearTimeout(globalResizeTimer);
    globalResizeTimer = window.setTimeout(function() {
        resizeStrip();
    }, 200);
});

// Resizes blue strip
function resizeStrip() {
    $("#blue-strip").height($("#proto-container").height() - 100);
}


// Main function
$(function () {
  // Init ScrollMagic Controller
  var scoutController = new ScrollMagic.Controller();

  landing(scoutController);
  design(scoutController);
  test(scoutController);
  prototype(scoutController);
  develop(scoutController);
});

// Handles landing animation
function landing(scoutController) {
  var landingTl = new TimelineMax();

  landingTl
    .fromTo("#title-card", .4, { opacity: 0 }, { opacity: 1 })
    .fromTo("#title-card", .2,
      { left: "+=15", top: "+=15", boxShadow: "none" },
      { left: "-=15", top: "-=15", boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.3), 12px 12px 0 0 #FFB51A" }, .6)
    .staggerFromTo($(".project-category"), .5, { opacity: 0 }, { opacity: 1 }, .1, 1)

  var typeScene = new ScrollMagic.Scene({
    triggerElement: ".landing",
    offset: 0
  })
    .setTween(landingTl)
    .addTo(scoutController)
  //.addIndicators();
}

// Handles Design animation
function design(scoutController) {
  var designTl = new TimelineMax();

  designTl.to("#design", .25, { opacity: 1, marginTop: 0 })

  var designScene = new ScrollMagic.Scene({
    triggerElement: "#design",
    offset: 0
  })
    .setTween(designTl)
    .addTo(scoutController)
  // .addIndicators();
};

// Handles prototype animation
function prototype(scoutController) {

  var prototypeTl = new TimelineMax();

  prototypeTl
    .staggerFromTo($(".proto-img"), .25, { y: "+=15", opacity: 0 }, { y: "-=15", opacity: 1 }, .15, 0)

  var desktopColorScene = new ScrollMagic.Scene({
    triggerElement: "#proto-container",
    offset: 50
  })
    .setTween(prototypeTl)
    .addTo(scoutController)
  // .addIndicators();
};

// Handles Test animation
function test(scoutController) {
  var testTl = new TimelineMax();

  testTl.fromTo("#test-img", .25, { y: "+=15", opacity: 0 }, { y: "-=15", opacity: 1 })

  var testScene = new ScrollMagic.Scene({
    triggerElement: "#test-img",
    offset: 0
  })
    .setTween(testTl)
    .addTo(scoutController)
  // .addIndicators();
};

// Handles develop animation
function develop(scoutController) {
  var developTl = new TimelineMax();

  developTl.to("#code-cover", .4, { width: 0 })

  var developScene = new ScrollMagic.Scene({
    triggerElement: "#code-cover",
    offset: 0
  })
    .setTween(developTl)
    .addTo(scoutController)
  // .addIndicators();
};
