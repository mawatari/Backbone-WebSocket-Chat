MyApp.Views.WebSocket = Backbone.View.extend({
    initialize: function() {
        _.bindAll.apply(_, [this].concat(_.functions(this)));
//        _.bindAll(this, 'addMessage', 'onopen', 'onmessage', 'onerror');

        // オプションを引き継ぐ
        this.messages = this.options.messages;
        this.user = this.options.user.attributes.name;
        this.ws = this.options.ws;

        // グローバルイベントをハンドリング
        MyApp.Mediator.on('newMessage', this.addMessage);

        // WSイベントをハンドリング
        this.ws.onmessage = this.onmessage;
        this.ws.onopen    = this.onopen;
        this.ws.onerror   = this.onerror;
        window.onbeforeunload = this.onbeforeunload;
    },

    // Messageが追加されたら、WebSocketで送信
    addMessage: function(body) {
        this.ws.send(JSON.stringify({comment: 1, body: body, user: this.user}));
    },

    // WebSocketを受信したら、コレクションに追加
    onmessage: function(event) {
        var data = JSON.parse(event.data);
        this.messages.add(data);
    },

    // 接続したら、メッセージを送信
    onopen: function() {
        this.ws.send(JSON.stringify({connect: 1, body: this.user + 'が入室しました', user: this.user}));
    },

    // 接続失敗したら、メッセージを送信
    onerror: function() {
        MyApp.Mediator.trigger('connectionError');
    },

    // 切断したら、メッセージを送信
    onbeforeunload: function() {
        this.ws.send(JSON.stringify({disconnect: 1, body: this.user + 'が退室しました', user: this.user}));
    }
});
