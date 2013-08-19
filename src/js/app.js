/**
 * President View
 */
MyApp.App = Backbone.View.extend({
    el: '#app',

    template: MyApp.Templates.layout,

    initialize: function() {
        // Mediatorの作成
        _.extend(MyApp.Mediator, Backbone.Events);

        this.user = new MyApp.Models.User();
        this.messages = new MyApp.Collections.MessageList();

        // レイアウトの読み込み
        this.$el.html(this.template());

        // ヘッダーの読み込み
        this.header = new MyApp.Views.Header({
            el: this.$el.find('#header')
        });

        // エディタの読み込み
        this.editor = new MyApp.Views.Editor({
            el: this.$el.find('#editor'),
            user: this.user
        });

        // リストの読み込み
        this.message_list = new MyApp.Views.MessageList({
            el: this.$el.find('#message-list'),
            messages: this.messages
        });

        // WebSocketの読み込み
        this.websocket = new MyApp.Views.WebSocket({
            messages: this.messages,
            user: this.user,
            ws: new WebSocket('ws://localhost:8888/')
        });
    }
});

new MyApp.App();
