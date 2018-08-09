// When the DOM is ready
$(function () {

  // Init ScrollMagic Controller
  var scrollMagicController = new ScrollMagic.Controller();

  // Create Animation for 0.5s
  var tween = TweenMax.from('#animation', {
    opacity: 0,
  });

  // Create the Scene and trigger when visible
  var scene = new ScrollMagic.Scene({
    offset: 0, // start scene after scrolling for 100px
    duration: 200 // pin the element for 400px of scrolling
  })
    .setTween(tween)
    .addTo(scrollMagicController);

  // Add debug indicators fixed on right side
  scene.addIndicators();

});