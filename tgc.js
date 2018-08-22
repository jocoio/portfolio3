// Centers photo scrollers
$(function () {
  var knows = document.getElementById("knows");
  var stand = document.getElementById("stand");

  knows.scrollLeft = $(knows).children().eq(0).width() + 20 - (($(window).width() / 2) - ($(knows).children().eq(1).width() / 2));
  stand.scrollLeft = $(stand).children().eq(0).width() + 20 - (($(stand).width() / 2) - ($(stand).children().eq(1).width() / 2));
});

// Main function
$(function () {
  // Init ScrollMagic Controller
  var tgcController = new ScrollMagic.Controller();
  var mobileController = new ScrollMagic.Controller();
  var desktopController = new ScrollMagic.Controller();

  type(tgcController);
  logo(tgcController);
  gradient(tgcController);

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

// Handles type animation
function type(tgcController) {
  var typeTl = new TimelineMax();

  typeTl.to("#type-cover", .4, { width: 0 })

  var typeScene = new ScrollMagic.Scene({
    triggerElement: "#type-cover",
    offset: 0
  })
    .setTween(typeTl)
    .addTo(tgcController)
    // .addIndicators();
}

// Handles logo animation
function logo(tgcController) {
  var logoTl = new TimelineMax();

  logoTl.to("#logo-cover", .4, { width: 0 })

  var logoScene = new ScrollMagic.Scene({
    triggerElement: "#logo-cover",
    offset: 0
  })
    .setTween(logoTl)
    .addTo(tgcController)
    // .addIndicators();
};

// Handles color animation
function desktopColor(desktopController) {

  // Desktop animation
  var desktopColorTl = new TimelineMax();

  desktopColorTl
    .staggerFromTo($(".ribbon-row"), .4, { height: "100%" }, { width: "100%" }, .1, 0)
    .staggerFromTo($(".ribbon-text"), .6, { opacity: 0 }, { opacity: 1 }, .1, .6)

  var desktopColorScene = new ScrollMagic.Scene({
    triggerElement: ".ribbons",
    offset: 50
  })
    .setTween(desktopColorTl)
    .addTo(desktopController)
  // .addIndicators();
};

// Handles color animation
function mobileColor(mobileController) {

  // Mobile animation
  var mobileColorTl = new TimelineMax();

  mobileColorTl
    .staggerFromTo($(".ribbon-color"), .4, { height: 0 }, { height: 100 }, .1, 0)
    .staggerFromTo($(".ribbon-text"), .6, { opacity: 0 }, { opacity: 1 }, .1, .6)

  var mobileColorScene = new ScrollMagic.Scene({
    triggerElement: ".ribbons",
    offset: 0
  })
    .setTween(mobileColorTl)
    .addTo(mobileController)
    // .addIndicators();
};

// Handles gradient animation
function gradient(tgcController) {

  // Desktop animation
  var gradientTl = new TimelineMax();

  gradientTl
    .staggerFromTo($(".gradient"), .6, { width: 0 }, { width: "100%" }, .1)

  gradientScene = new ScrollMagic.Scene({
    triggerElement: ".gradient",
    duration: 250,
    offset: 50
  })
    .setTween(gradientTl)
    .addTo(tgcController)
    // .addIndicators();
};

// Mobile sizing assistance for gradients
function setGradients() {

  var gradWidth = $("#gradient-overlord").width();
  var gradHeight = gradWidth / 1.44416;

  $("#gradient-container").width(gradWidth);
  $("#gradient-container").css("background-size", gradWidth + "px " + gradHeight + "px");

  $(".gradient").height(gradHeight / 6);
  $(".gradient").css("background-size", gradWidth + "px " + gradHeight + "px");

  gradientScene.offset(0);
  gradientScene.duration(200);
};


// Handles mobile environment
function mobileEnvironment(mobileController) {

  // Creates animation for every .env class element
  $(".env").each(function () {

    var currentEnv = this;

    var tweenEnv = new TimelineMax()
      .fromTo(currentEnv, 0.25, { opacity: 0, top: 15 }, { opacity: 1, top: 0 });

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
      .fromTo(currentEnvi, .3, { opacity: 0, marginTop: 15 }, { opacity: 1, marginTop: 0 });

    var desktopEnvScene = new ScrollMagic.Scene({
      triggerElement: currentEnvi,
      offset: "100"
    })
      .setTween(tweenEnvi)
      .addTo(desktopController)
    // .addIndicators();
  });
}
