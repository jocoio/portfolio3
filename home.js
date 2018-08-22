// When the DOM is ready
$(function () {

  // Init ScrollMagic Controller
  var scrollMagicController = new ScrollMagic.Controller();

  var desktopController = new ScrollMagic.Controller();

  skills(scrollMagicController);
  experience(scrollMagicController);
  recentWork(scrollMagicController);
  landing(scrollMagicController);
  


  if ($(window).width() >= 768) {
    otherWork(scrollMagicController);
  }
});

// Handles landing animation
function landing(scrollMagicController) {
  var landingTl = new TimelineMax();

  landingTl
    .fromTo(".landing", .5, { opacity: 0, top: "+=15" }, { opacity: 1, top: "-=15" })

  var typeScene = new ScrollMagic.Scene({
    triggerElement: ".landing",
    offset: 0
  })
    .setTween(landingTl)
    .addTo(scrollMagicController)
    // .addIndicators();
}

// Handles skills animation
function skills(scrollMagicController) {

  var skillsTl = new TimelineMax();

  // Sets width of lines to width of category name
  var redWidth = $("#redLine").prev().width();
  var blueWidth = $("#blueLine").prev().width();
  var greenWidth = $("#greenLine").prev().width();

  // Skills timeline
  skillsTl
    .to("#skills", .4, { opacity: 1 }, 0) // Fade skills in
    .to("#redLine", 0.25, { width: redWidth }, .5) // Red sweep
    .to("#blueLine", 0.25, { width: blueWidth }, .6) // Blue sweep
    .to("#greenLine", 0.25, { width: greenWidth }, .7); // Green sweep

  // Skills scene
  var skillsScene = new ScrollMagic.Scene({
    triggerElement: "#skills",
    offset: -125, // start scene -125px above trigger
  })
    .setTween(skillsTl)
    .addTo(scrollMagicController)
    // .addIndicators();
}

// Handles experience animation
function experience(scrollMagicController) {
  var experienceTl = new TimelineMax();
  var colorChangeTl = new TimelineMax();

  // Color change on scout name timeline
  colorChangeTl
    .to("#scout", 0.5, { color: "#378BD2" }, 1.5) // Blue
    .to("#scout", 0.5, { color: "#F67258" }, 3) // Red
    .to("#scout", 0.5, { color: "#3EAE42" }, 4.5) // Green
    .repeat(-1)

  // Experience timeline
  experienceTl
    .to("#clarksCover", .4, { width: 0 }, 0)
    .to("#jhandyCover", .4, { width: 0 }, .1)
    .to("#scoutCover", .4, { width: 0 }, .2)
    .to("#clarks", 0.25, { color: "#F67258" }, .8) // Red sweep
    .to("#jhandy", 0.25, { color: "#378BD2" }, .9) // Blue sweep
    .to("#scout", 0.25, { color: "#3EAE42" }, 1) // Green sweep
    .add(colorChangeTl, 1.5)

  // Experience scene
  var experienceScene = new ScrollMagic.Scene({
    triggerElement: "#experience",
    offset: -75
  })
    .on('leave', function (event) {
      experienceTl.time(1); // Jumps back in time to right before the color change
    })
    .on('enter', function (event) {
      experienceTl.time(0); // Resets the animation to the top
    })
    .setTween(experienceTl)
    .addTo(scrollMagicController)
    // .addIndicators();
}

// Handles recent work animation
function recentWork(scrollMagicController) {

  var tgcTl = new TimelineMax();
  var scoutTl = new TimelineMax();

  // TGC timeline
  tgcTl
    .fromTo("#tgc-cover", .25, { top: 40, opacity: 0 }, { top: 0, opacity: 1 }, 0)  // Fade cover in
    .fromTo("#tgc-logo", .25, { y: 150, opacity: 0 }, { y: 125, opacity: 1 }, .3) // Fade logo in
    ;

  // TGC scene
  var tgcScene = new ScrollMagic.Scene({
    triggerElement: "#tgc-section",
    offset: 0, // start scene 0 above trigger
  })
    .setTween(tgcTl)
    .addTo(scrollMagicController)
    // .addIndicators();


  // // Scout timeline
  // scoutTl
  //   .fromTo("#scout-cover", .25, { top: 40, opacity: 0 }, { top: 0, opacity: 1 }, 0) // Fade cover in
  //   .fromTo("#scout-logo", .25, { y: 170, opacity: 0 }, { y: 145, opacity: 1 }, .3) // Fade logo in
  //   ;

  // // Scout scene
  // var scoutScene = new ScrollMagic.Scene({
  //   triggerElement: "#scout-section",
  //   offset: 0, // start scene 0 above trigger
  // })
  //   .setTween(scoutTl)
  //   .addTo(scrollMagicController)
  //   // .addIndicators();
}

// Handles other work animation
function otherWork(scrollMagicController) {

  var scene = new ScrollMagic.Scene({ triggerElement: "#other-row" })
    .setPin("#other-title", { spacerClass: "other-spacer" })
    .addTo(scrollMagicController)
    // .addIndicators();
}


