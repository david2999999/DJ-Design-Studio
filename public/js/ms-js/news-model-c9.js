// var Item = Backbone.Model.extend();
//
// var Items = Backbone.Collection.extend({
//             model: Item
// });

// var items = new Items([
//       new Item({ title: "",
//                         description: "V.191 – Nova: Brilliance of Illium is live as of December 20. Click here to read the patch notes!",
//                         date : "DEC 19, 2017",
//                         imgUrl: "http://nxcache.nexon.net/cms/2017/2227/171220540npm.jpg"}),
//       new Item({ title: "Beast Tamer Character Creation Event: December 13 – January 16",
//                         description: "The Beast Tamer character job is BACK for a limited time!",
//                         date : "DEC 18, 2017",
//                         imgUrl: "http://nxcache.nexon.net/umbraco/2038/150707_540x304_beasttamer_event.jpg"}),
//       new Item({ title: "EVENTS Holiday Events: December 13 – January 2",
//                         description: "The holidays have come to Maple World! Check out the seasonal events we have in store this month!",
//                         date : "DEC 18, 2017",
//                         imgUrl: "http://nxcache.nexon.net/cms/2017/2295/171218holnp174.jpg"}),
//       new Item({title: "[Complete] Unscheduled Maintenance - December 17, 2017",
//                         description: "MapleStory is under an unscheduled maintenance as of Sunday, December 17, 2017 at 6:40 PM PST (9:40 PM EST / 3:40 AM CET / 1:40 PM AEDT).",
//                         date : "DEC 17, 2017",
//                         imgUrl: "http://nxcache.nexon.net/umbraco/4781/160510_ms_maintenance_template_01.jpg"}),
//       new Item({title: "Nova Hot Week 2: December 18 – 24",
//                         description: "MapleStory will be having another whole week of Hot Days! Get in-game for some great items!",
//                         date : "DEC 17, 2017",
//                         imgUrl: "http://nxcache.nexon.net/cms/2017/2303/171215nvhw2bvcx7.jpg"}),
//       new Item({title: "2x EXP & Drop Event: December 17",
//                         description: "Celebrate the weekend with a whole day of double the fun. Level up and power through Sunday with 2x EXP & Drop!",
//                         date : "DEC 16, 2017",
//                         imgUrl: "http://nxcache.nexon.net/umbraco/10849/1704182xnpx540x304.jpg"})
// ]);

var templateNum = 1;

var ItemView =  Backbone.View.extend({
      render: function(){
            this.$el.html("");
            var template = _.template($("#content-template").html());
            var template2 = _.template($("#content-template2").html());
            // var html = template(this.model.toJSON());
            if (templateNum === 1) {
                  this.$el.html(template);
            }else{
                  this.$el.html(template2);
            }


            return this;
      }
});

// var item = 4;
var ItemsView = Backbone.View.extend({
      initialize: function(){
            this.setElement($('.moreNews'));
      },

      events: {
            "click .btn": "addNews"
      },

      addNews: function(e){
            e.stopPropagation();
            this.render();
      },

      render: function(){
            if (templateNum == 2) {
                  this.$el.html("");
            }
            // if (item < this.model.length + 2) {
            //       for (var i = (item - 3); i < item; i++) {
            //              var itemView = new ItemView({model : this.model.get("c" + i)});
            if (templateNum != 3) {
                  var itemView = new ItemView();
                  $(".news-hub-content-items").append(itemView.render().$el);
                  ++templateNum;
            }

            //       }
            //       item += 3;
            // }
      }

});

$(document).on('ready', function() {
      var itemsView = new ItemsView();
});
