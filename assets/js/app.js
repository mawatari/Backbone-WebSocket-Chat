var MyApp = {
    Models: {},
    Collections: {},
    Views: {},
    Templates: {},
    Mediator: {},
    App: {}
};

this["MyApp"] = this["MyApp"] || {};
this["MyApp"]["Templates"] = this["MyApp"]["Templates"] || {};

this["MyApp"]["Templates"]["layout"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"container\">\n</div>\n";
  });
/**
 * President View
 */
MyApp.App = Backbone.View.extend({
    el: '#app',

    template: MyApp.Templates.layout,

    initialize: function() {
        // Mediatorの作成
        _.extend(MyApp.Mediator, Backbone.Events);

        this.$el.html(this.template());

        this.message_list = new MyApp.Views.Sample({
            el: this.$el.find('#sample'),
        });
    }
});

new MyApp.App();
