$(document).ready(function(){
  // Add a gab between the main and the footer
  $("#footerSpace").css("height",$("#footer").height());


  $("#convertBtn").click(function(){
    let text = $("#input").val();

    // Validate Input
    if(text.length == 0){
      // If empty make the input border red
      $("#input").css("border-color","red");

      // Terminate
      return 1;
    }

    const dictionary = {
      "a" : "GCT", "b" : "GCA", "c" : "TGC",
      "d" : "GAT", "e" : "GAG", "f" : "TTT",
      "g" : "GGG", "h" : "CAT", "i" : "ATA",
      "j" : "ATC", "k" : "AAG", "l" : "CTC",
      "m" : "ATG", "n" : "GAC", "o" : "GAT",
      "p" : "CCC", "q" : "GAG", "r" : "CGT",
      "s" : "TCA", "t" : "ACT", "u" : "ACG",
      "v" : "GTC", "w" : "TGG", "x" : "GTA",
      "y" : "TAC", "z" : "TAT"
    };

    let dna = "";

    // Remove everything but letters and make all letters small
    text = text.replace(/[^a-zA-Z]/g,"").toLowerCase();

    // Split text Into an array
    text = text.split("");

    // Iterate through the text and add the append the code to the dna
    for(i in text){
      dna += dictionary[text[i]];
    }

    // Show the dna in the output texarea
    $("#output").text(dna);

  });

});
