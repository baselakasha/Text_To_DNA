$(document).ready(function(){
  // Add a gab between the main and the footer
  $("#footerSpace").css("height",$("#footer").height());


  $("#convertBtn").click(function(){
    var text = $("#input").val();

    // Validate Input
    if(text.length == 0){
      $("#input").css("border-color","red");
    }
    
  });

});
