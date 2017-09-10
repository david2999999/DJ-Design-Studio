/*global $*/

$("document").ready(function(){
      $('#search').click(function(){
                  var searchWord = $('#searchWord').val();
                  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchWord + "&format=json&callback=?";

                  $.ajax({
                        type : "get",
                        url : url,
                        async: false,
                        dataType: "json",
                        success: function(json){
                              $('#results').html('');
                              for (var i = 0; i < json[1].length; i++) {
                                    $('#results').append('<li class="fade-in"><a href= ' + json[3][i] + ">" + json[1][i] + "</a><p>" + json[2][i] + "</p></li>");
                              }
                              $('#search').val('');
                        },
                        error: function(errorMessage){
                              alert("Error");
                        }
                  });
            });

                  $('#searchWord').keypress(function(e){
                        if(e.which == 13){
                              $("#search").click();
                        }
                  });

});