MyApp.Views.MessageList = Backbone.View.extend({
    template: MyApp.Templates.message_list,

    initialize: function() {
        // オプションを引き継ぐ
        this.messages = this.options.messages;

        // ローカルイベントをハンドリング
        this.listenTo(this.messages, 'add', this.addOne);
    },

    addOne: function(message) {
        this.$el.prepend($(this.template(message.toJSON())).hide().fadeIn(500));
    },

    addAll: function() {
        this.messages.each(this.addOne, this);
    }
});
