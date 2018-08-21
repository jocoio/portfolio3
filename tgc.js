// Centers photo scrollers
$(function () {
  var knows = document.getElementById("knows");
  var stand = document.getElementById("stand");

  knows.scrollLeft = $(knows).children().eq(0).width() + 20 - (($(window).width() / 2) - ($(knows).children().eq(1).width() / 2));
  stand.scrollLeft = $(stand).children().eq(0).width() + 20 - (($(stand).width() / 2) - ($(stand).children().eq(1).width() / 2));
});

$(function () {
  var knows = document.getElementById("knows");
  var stand = document.getElementById("stand");

  knows.scrollLeft = $(knows).children().eq(0).width() + 20 - (($(window).width() / 2) - ($(knows).children().eq(1).width() / 2));
  stand.scrollLeft = $(stand).children().eq(0).width() + 20 - (($(stand).width() / 2) - ($(stand).children().eq(1).width() / 2));
});
