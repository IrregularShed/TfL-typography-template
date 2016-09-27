var weights = ["L","R","M","H","T"];
var h1Index = -1;
var h2Index = -1;
var h3Index = -1;
var h4Index = -1;
var pIndex = -1;

$(function() {

  $('#h1').on('click', function(e) {
    h1Index = (h1Index + 1) % weights.length; // Condition small
    $("h1").removeClass().addClass(weights[h1Index]);
    $("#h1Text").html(weights[h1Index]);

    // Condition expanded
    // if (h1Index === weights.length-1) {
    //     h1Index = 0;
    // } else {
    //     h1Index++;
    // }

    e.preventDefault();
  });

  $('#h2').on('click', function(e) {
    h2Index = (h2Index + 1) % weights.length; // Condition small
    $("h2").removeClass().addClass(weights[h2Index]);
    $("#h2Text").html(weights[h2Index]);

    e.preventDefault();
  });

  $('#h3').on('click', function(e) {
    h3Index = (h3Index + 1) % weights.length; // Condition small
    $("h3").removeClass().addClass(weights[h3Index]);
    $("#h3Text").html(weights[h3Index]);

    e.preventDefault();
  });

  $('#h4').on('click', function(e) {
    h4Index = (h4Index + 1) % weights.length; // Condition small
    $("h4").removeClass().addClass(weights[h4Index]);
    $("#h4Text").html(weights[h4Index]);

    e.preventDefault();
  });

  $('#p').on('click', function(e) {
    pIndex = (pIndex + 1) % weights.length; // Condition small
    $("p").removeClass().addClass(weights[pIndex]);
    $("#pText").html(weights[pIndex]);

    e.preventDefault();
  });

  $('#btReset').click(function(e) {
    h1Index = 0;
    h2Index = 0;
    h3Index = 0;
    h4Index = 0;
    pIndex = 0;

    $("h1").removeClass().addClass(weights[h1Index]);
    $("#h1Text").html(weights[h1Index]);
    $("h2").removeClass().addClass(weights[h2Index]);
    $("#h2Text").html(weights[h2Index]);
    $("h3").removeClass().addClass(weights[h3Index]);
    $("#h3Text").html(weights[h3Index]);
    $("h4").removeClass().addClass(weights[h4Index]);
    $("#h4Text").html(weights[h4Index]);
    $("p").removeClass().addClass(weights[pIndex]);
    $("#pText").html(weights[pIndex]);

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
