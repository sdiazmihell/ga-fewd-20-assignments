$(document).ready(function(){
    $(":button").click(function(){
        $("p").toggle();

    if (this.value=="(?)") this.value = "X";
    else this.value = "(?)";

  });
});


