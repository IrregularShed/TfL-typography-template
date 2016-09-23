
$(function() {
  var weights = ["R","M","H","T"];

  var currentIndex = 0;

  $('#h1').on('click', function(e) {
    $("h1").removeClass().addClass(weights[currentIndex]);
    if (currentIndex === weights.length) {
        currentIndex = 0;
    } else {
      currentIndex++;
    }

    e.preventDefault();
  });

  $('#h2').on('click', function(e) {
    $("h2").removeClass().addClass(weights[currentIndex]);
    if (currentIndex === weights.length) {
        currentIndex = 0;
    } else {
      currentIndex++;
    }

    e.preventDefault();
  });

  $('#h3').on('click', function(e) {
    $("h3").removeClass().addClass(weights[currentIndex]);
    if (currentIndex === weights.length) {
        currentIndex = 0;
    } else {
      currentIndex++;
    }

    e.preventDefault();
  });

  $('#h4').on('click', function(e) {
    $("h4").removeClass().addClass(weights[currentIndex]);
    if (currentIndex === weights.length) {
        currentIndex = 0;
    } else {
      currentIndex++;
    }

    e.preventDefault();
  });

  $('#p').on('click', function(e) {
    $("p").removeClass().addClass(weights[currentIndex]);
    if (currentIndex === weights.length) {
        currentIndex = 0;
    } else {
      currentIndex++;
    }

    e.preventDefault();
  });
});
