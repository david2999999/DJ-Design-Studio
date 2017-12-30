var GameUpdateView = Backbone.View.extend({
      initialize: function(){
            this.setElement($('.moreUpdates'));
      },

      events: {
            "click .btn" : "addGameUpdates"
      },

      addGameUpdates: function(e){
            e.stopPropagation();
            $(".game-update-content-list2").append(this.render().$el);
      },

      render: function(){
            var template = _.template($("#game-update-content-template").html());
            // var html = template(this.model.toJSON());
            this.$el.html(template);

            return this;
      }
});

// var item = 6;
// var GameUpdateViews = Backbone.View.extend({
//       el: "#game-update-content-list2",
//
//       events:{
//             "click .btn" : "addGameUpdates"
//       },
//
//       render: function(){
//             this.model.each(function(item){
//                   var gameUpdateView = new GameUpdateView({model: item});
//                   this.$el.append(gameUpdateView.render().$el);
//             }, this);
//
//             return this;
//       }
// });

$(document).on('ready', function() {
      var gameUpdateView = new GameUpdateView();

});
