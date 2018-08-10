// When the DOM is ready
$(function () {

  // Init ScrollMagic Controller
  var scrollMagicController = new ScrollMagic.Controller();

  var redWidth = $("#redCode").prev().width();
  var blueWidth = $("#blueCode").prev().width();
  var greenWidth = $("#greenCode").prev().width();

  var skillsTl = new TimelineMax();
  var experienceTl = new TimelineMax();
  var colorChangeTl = new TimelineMax();



  // Skills timeline
  skillsTl
    .to("#skills", .4, { opacity: 1 }, 0) // Fade skills in
    .to("#redCode", 0.25, { width: redWidth }, .5) // Red sweep
    .to("#blueCode", 0.25, { width: blueWidth }, .6) // Blue sweep
    .to("#greenCode", 0.25, { width: greenWidth }, .7); // Green sweep

  // Skills scene
  var skillsScene = new ScrollMagic.Scene({
    triggerElement: "#skills",
    offset: -125, // start scene -125px above trigger
  })
    .setTween(skillsTl)
    .addTo(scrollMagicController);

  // Color change on scout name timeline
  colorChangeTl
    .to("#scout", 0.5, { color: "#4370B1" }, 1.5) // Red
    .to("#scout", 0.5, { color: "#F67258" }, 3) // Blue
    .to("#scout", 0.5, { color: "#3EAE42" }, 4.5) // Green
    .repeat(-1)

  // Experience timeline
  experienceTl
    .to("#clarksCover", .4, { width: 0 }, 0)
    .to("#jhandyCover", .4, { width: 0 }, .1)
    .to("#scoutCover", .4, { width: 0 }, .2)
    .to("#clarks", 0.25, { color: "#F67258" }, .8) // Red sweep
    .to("#jhandy", 0.25, { color: "#4370B1" }, .9) // Blue sweep
    .to("#scout", 0.25, { color: "#3EAE42" }, 1) // Green sweep
    .add(colorChangeTl, 2)

  // Experience scene
  var experienceScene = new ScrollMagic.Scene({
    triggerElement: "#experience",
    offset: -75
  })
    .on('leave', function (event) {
      experienceTl.time(1);
    })
    .on('enter', function (event) {
      experienceTl.time(0);
    })
    .setTween(experienceTl)
    .addTo(scrollMagicController);

  // Add debug indicators fixed on right side
  // skillsScene.addIndicators();
  // experienceScene.addIndicators();
});