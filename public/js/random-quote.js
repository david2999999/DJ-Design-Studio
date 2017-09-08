function getQuote(){
      var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
      
      $.getJSON(url, function(data){
            $("#quote-content").html(" '' " + data.quoteText + " '' ");
            $("#quote-author").html("by " + data.quoteAuthor);
      });
}


$("#get-another-quote-button").on("click", function(){
      getQuote();
});