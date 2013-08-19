MyApp.Models.Message = Backbone.Model.extend({
    defaults: {
        body: 'no message',
        user: 'anonymous',
        time: '',
        comment: null,
        connection: null,
        disconnection: null
    }
});
