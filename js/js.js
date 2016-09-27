var weights = ["L","R","M","H","T"];
var h1Index = 1;
var h2Index = 1;
var h3Index = 1;
var h4Index = 1;
var pIndex = 1;

$(function() {

  $('#h1').on('click', function(e) {
    $("h1").removeClass().addClass(weights[h1Index]);
    $("#h1Text").html(weights[h1Index]);
    if (h1Index === weights.length-1) {
        h1Index = 0;
    } else {
        h1Index++;
    }
    e.preventDefault();
  });

  $('#h2').on('click', function(e) {
    $("h2").removeClass().addClass(weights[h2Index]);
    $("#h2Text").html(weights[h2Index]);
    if (h2Index === weights.length - 1) {
        h2Index = 0;
    } else {
      h2Index++;
    }

    e.preventDefault();
  });

  $('#h3').on('click', function(e) {
    $("h3").removeClass().addClass(weights[h3Index]);
    $("#h3Text").html(weights[h3Index]);
    if (h3Index === weights.length - 1) {
        h3Index = 0;
    } else {
      h3Index++;
    }

    e.preventDefault();
  });

  $('#h4').on('click', function(e) {
    $("h4").removeClass().addClass(weights[h4Index]);
    $("#h4Text").html(weights[h4Index]);
    if (h4Index === weights.length - 1) {
        h4Index = 0;
    } else {
      h4Index++;
    }

    e.preventDefault();
  });

  $('#p').on('click', function(e) {
    $("p").removeClass().addClass(weights[pIndex]);
    $("#pText").html(weights[pIndex]);
    if (pIndex === weights.length) {
        pIndex = 0;
    } else {
      pIndex++;
    }

    e.preventDefault();
  });

  $('#btReset').click(function(e) {
        $("h1").removeClass().addClass(weights[0]);
        $("#h1Text").html(weights[0]);
        $("h2").removeClass().addClass(weights[0]);
        $("#h2Text").html(weights[0]);
        $("h3").removeClass().addClass(weights[0]);
        $("#h3Text").html(weights[0]);
        $("h4").removeClass().addClass(weights[0]);
        $("#h4Text").html(weights[0]);
        $("p").removeClass().addClass(weights[0]);
        $("#pText").html(weights[0]);

        h1Index = 1;
        h2Index = 1;
        h3Index = 1;
        h4Index = 1;
        pIndex = 1;

        e.preventDefault();
  });
});

var navHidden = true;

$(document).ready(function() {
    $('#btNav').click(function() {
        $('#nav').slideToggle("fast");
        if ( navHidden === true) {
            $(this).css("bottom", "140px");
            $(this).html("Save");
            navHidden = false;
        } else {
            $(this).css("bottom", "40px");
            $(this).html("h1 — p");
            navHidden = true;
        }
    });
});
