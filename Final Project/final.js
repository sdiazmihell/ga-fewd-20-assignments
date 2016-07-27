
"use strict";

var startup = function () {

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

  $("a.backToTop").on("click", function () {
  	$("#pageTop")[0].scrollIntoView({
  		behavior: "smooth"
  	});
  	return false;
  });	

  $("a#aboutLink").on("click", function () {
  	$("#aboutSection")[0].scrollIntoView({
  		behavior: "smooth"
  	});
  	return false;
  });

  $("a#portfolioLink").on("click", function () {
  	$("#portfolioSection")[0].scrollIntoView({
  		behavior: "smooth"
  	});
  	return false;
  });

  $("a#contactLink").on("click", function () {
  	$("#contactSection")[0].scrollIntoView({
  		behavior: "smooth"
  	});
  	return false;
  });

  $("a#otherLink").on("click", function () {
  	$("#otherSection")[0].scrollIntoView({
  		behavior: "smooth"
  	});
  	return false;
  });

};

$(document).ready(startup);

