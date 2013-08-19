MyApp.Models.User = Backbone.Model.extend({
    defaults: {
        name: 'ゲスト' + Math.floor(Math.random() * 100)
    }
});
