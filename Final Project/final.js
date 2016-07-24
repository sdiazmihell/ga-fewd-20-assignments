
var startup = function() {
  var button = $("button");
	var p = $("p");
	button.on("click", function () {
	  p.toggle();
	    if (button.text() === "X") {
		  var butText = "(?)";
	    }
	    else {
	      var butText = "X";
	    }
	    button.text(butText);
	  });
	};
	$(document).ready(startup);