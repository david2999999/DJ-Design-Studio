      // check off specific Todos by clicking
      $(".ulist").on("click", ".list", function() {
            $(this).toggleClass("completed");
      });

      // click on garbage can to delete
      $(".ulist").on("click", "span", function(event) {
            $(this).parent().fadeOut(500, function() {
                  $(this).remove();
            });
            event.stopPropagation(); // preventing the bubble effect. smaller elements to larger elements
      });

      $("input[type='text']").keypress(function(event){
            if(event.which === 13){
                  // if the keypress is "enter" key
                  var todoText = $(this).val();
                  $(this).val(""); // delete the value inside the text bar
                  //create a new li and add to ul
                  $(".ulist").append("<li class='list'><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>");
            }
      });

$(".fa-plus").click(function(){
      $("input[type='text']").fadeToggle();
});
