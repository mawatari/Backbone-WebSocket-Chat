MyApp.Views.Editor = Backbone.View.extend({
    template: MyApp.Templates.editor,

    initialize: function() {
        _.bindAll(this, 'connectionError');

        // オプションを引き継ぐ
        this.user = this.options.user;

        // HTML描画
        this.render(this.user.toJSON());
        this.input = this.$("#new-message");
        this.input.focus();

        // グローバルイベントをハンドリング
        MyApp.Mediator.on('connectionError', this.connectionError);
    },
    
    events: {
        'keypress #new-message': 'createOnEnter'
    },

    createOnEnter: function(e) {
        if (e.keyCode != 13) return;
        if (!this.input.val()) return;

        var body = this.input.val();
        MyApp.Mediator.trigger('newMessage', body);

        this.input.val('');
    },

    connectionError: function() {
        this.render({error: 1});
    },

    render: function(e) {
        this.$el.html(this.template(e));
    }
});
