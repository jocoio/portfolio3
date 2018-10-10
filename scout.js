// Main function
$(function () {
  // Init ScrollMagic Controller
  var scoutController = new ScrollMagic.Controller();
  var mobileController = new ScrollMagic.Controller();
  var desktopController = new ScrollMagic.Controller();

  landing(scoutController);
  // type(scoutController);
  design(scoutController);
  test(scoutController)
  // gradient(scoutController);
  // social(scoutController);

  // Mobile
  if ($(window).width() <= 768) {
    mobileColor(mobileController);
    mobileEnvironment(mobileController);
    setGradients();
    desktopController.enabled(false);
  }
  // Desktop
  else {
    desktopColor(desktopController);
    desktopEnvironment(desktopController);
    mobileController.enabled(false);
  }
});

// Handles landing animation
function landing(scoutController) {
  var landingTl = new TimelineMax();

  landingTl
    .fromTo("#title-card", .4, { opacity: 0 }, { opacity: 1 })
    .fromTo("#title-card", .2,
      { left: "+=15", top: "+=15", boxShadow: "none" },
      { left: "-=15", top: "-=15", boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.3), 12px 12px 0 0 #FFB51A" }, .6)
    .staggerFromTo($(".project-category"), .5, {opacity: 0}, {opacity: 1}, .1, 1)

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

// Handles Test animation
function test(scoutController) {
  var testTl = new TimelineMax();

  testTl.fromTo("#test-img", .25, { y: "+=15", opacity: 0 }, {y: "-=15", opacity: 1})

  var testScene = new ScrollMagic.Scene({
    triggerElement: "#test-img",
    offset: 0
  })
    .setTween(testTl)
    .addTo(scoutController)
  // .addIndicators();
};

// // Handles color animation
// function desktopColor(desktopController) {

//   // Desktop animation
//   var desktopColorTl = new TimelineMax();

//   desktopColorTl
//     .staggerFromTo($(".ribbon-row"), .4, { height: "100%" }, { width: "100%" }, .1, 0)
//     .staggerFromTo($(".ribbon-text"), .6, { opacity: 0 }, { opacity: 1 }, .1, .6)

//   var desktopColorScene = new ScrollMagic.Scene({
//     triggerElement: ".ribbons",
//     offset: 50
//   })
//     .setTween(desktopColorTl)
//     .addTo(desktopController)
//   // .addIndicators();
// };

// // Handles color animation
// function mobileColor(mobileController) {

//   // Mobile animation
//   var mobileColorTl = new TimelineMax();

//   mobileColorTl
//     .staggerFromTo($(".ribbon-color"), .4, { height: 0 }, { height: 100 }, .1, 0)
//     .staggerFromTo($(".ribbon-text"), .6, { opacity: 0 }, { opacity: 1 }, .1, .6)

//   var mobileColorScene = new ScrollMagic.Scene({
//     triggerElement: ".ribbons",
//     offset: 0
//   })
//     .setTween(mobileColorTl)
//     .addTo(mobileController)
//   // .addIndicators();
// };

// // Handles gradient animation
// function gradient(scoutController) {

//   // Desktop animation
//   var gradientTl = new TimelineMax();

//   gradientTl
//     .staggerFromTo($(".gradient"), .6, { width: 0 }, { width: "100%" }, .1)

//   gradientScene = new ScrollMagic.Scene({
//     triggerElement: ".gradient",
//     duration: 250,
//     offset: 50
//   })
//     .setTween(gradientTl)
//     .addTo(scoutController)
//   // .addIndicators();
// };

// // Mobile sizing assistance for gradients
// function setGradients() {

//   var gradWidth = $("#gradient-overlord").width();
//   var gradHeight = gradWidth / 1.44416;

//   $("#gradient-container").width(gradWidth);
//   $("#gradient-container").css("background-size", gradWidth + "px " + gradHeight + "px");

//   $(".gradient").height(gradHeight / 6);
//   $(".gradient").css("background-size", gradWidth + "px " + gradHeight + "px");

//   gradientScene.offset(0);
//   gradientScene.duration(250);
// };

// // Handles social animation
// function social(scoutController) {
//   var socialTl = new TimelineMax();

//   socialTl.fromTo("#social", .2, { paddingTop: "+=15", opacity: 0 }, {paddingTop: "-=15", opacity: 1})

//   var typeScene = new ScrollMagic.Scene({
//     triggerElement: "#social",
//     offset: -100
//   })
//     .setTween(socialTl)
//     .addTo(scoutController)
//   // .addIndicators();
// }


// Handles mobile environment
function mobileEnvironment(mobileController) {

  // Creates animation for every .env class element
  $(".env").each(function () {

    var currentEnv = this;

    var tweenEnv = new TimelineMax()
      .fromTo(currentEnv, 0.25, { opacity: 0, top: "+=15" }, { opacity: 1, top: "-=15" });

    var mobileEnvScene = new ScrollMagic.Scene({
      triggerElement: currentEnv,
      offset: "0"
    })
      .setTween(tweenEnv)
      .addTo(mobileController)
    // .addIndicators();
  });
}

// Handles desktop environment
function desktopEnvironment(desktopController) {

  $(".support").each(function () {

    var currentEnvi = this;

    var tweenEnvi = new TimelineMax()
      .fromTo(currentEnvi, .3, { opacity: 0, paddingTop: "+=15" }, { opacity: 1, paddingTop: "-=15" });

    var desktopEnvScene = new ScrollMagic.Scene({
      triggerElement: currentEnvi,
      offset: "100"
    })
      .setTween(tweenEnvi)
      .addTo(desktopController)
    // .addIndicators();
  });
}
