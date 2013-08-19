MyApp.Views.Header = Backbone.View.extend({
    template: MyApp.Templates.header,

    initialize: function() {
        this.$el.html(this.template());
    }
});
