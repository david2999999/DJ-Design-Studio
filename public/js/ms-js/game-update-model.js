console.log("Hello im Here");
var GameUpdate = Backbone.Model.extend();

// var GameUpdates = Backbone.Collection.extend({
//       model: GameUpdate
// });

var gameUpdate = new GameUpdate({
      imgUrl: "http://nxcache.nexon.net/umbraco/4205/160224_mtt_muthumb360x203.jpg",
      imgUrl1: "http://nxcache.nexon.net/umbraco/3653/k398536_promo_thumb.jpg",
      imgUrl2: "http://nxcache.nexon.net/umbraco/3506/reboot_promo_thumb.jpg",
      imgUrl3: "http://nxcache.nexon.net/umbraco/2662/pinkbean_promo_thumb.jpg",
      imgUrl4: "http://nxcache.nexon.net/umbraco/1982/firepower_360x203.jpg",
      imgUrl5: "http://nxcache.nexon.net/umbraco/1986/10thann_360x203.jpg",
      imgUrl6: "http://nxcache.nexon.net/umbraco/1988/blackheaven_360x203.jpg",
      imgUrl7: "http://nxcache.nexon.net/umbraco/1987/beasttamer_360x203.jpg",
      imgUrl8: "http://nxcache.nexon.net/umbraco/1984/red_360x203.jpg",
      imgUrl9: "http://nxcache.nexon.net/umbraco/2004/dawnveil2_360x203.jpg",
      imgUrl10: "http://nxcache.nexon.net/umbraco/1985/unleashed_360x203.jpg",
});

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
            var html = template(this.model.toJSON());
            this.$el.html(html);

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
      var gameUpdateView = new GameUpdateView({ model : gameUpdate});

});
