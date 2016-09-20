document.getElementById('formEntry').addEventListener('submit', function (e) {
  e.preventDefault();
  					var input = document.getElementById("hex");
  						var inputtedColour = input.value;
	  $("body").css("background", inputtedColour);
      console.log(inputtedColour)
});
