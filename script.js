// Allows 'Enter' button to submit form, doesn't curently work\\

// ----- \\

$("#search").on("click", function() {

  var query = document.getElementById("query").value;
  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + query + "&limit=10&format=json&callback=?";

  $.ajax({
    url: url,
    dataType: 'jsonp',
    success: function(wikiData) {

      document.getElementById("wikiblock").innerHTML = "";

      var titles = wikiData[1];
      var summaries = wikiData[2];
      var wikiLinks = wikiData[3];

      for (i = 0; i < titles.length; i++) {

        document.getElementById("wikiblock").innerHTML += "<div class='row'><div class='col-xs-2'></div><a href=" + wikiLinks[i] + "><div class='result col-xs-8'><h3>" + titles[i] + "</h3><blockquote>" + summaries[i] + "</blockquote></div></a><div class='col-xs-2'></div></div>";

      }
      console.log(titles[0] + summaries[0] + wikiLinks[0]);

    }

  });

});
