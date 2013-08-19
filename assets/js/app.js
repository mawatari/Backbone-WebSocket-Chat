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

this["MyApp"]["Templates"]["editor"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "\n<div id=\"chat-area\" class=\"alert alert-error\">\n	<button type=\"button\" class=\"close\" data-dismiss=\"alert\">×</button>\n	<i class=\"icon-warning-sign\"></i>サーバに接続できませんでした。\n</div>\n";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div id=\"chat-area\">\n	<div class=\"input-prepend\">\n		<span class=\"add-on\" id=\"user-name\"><i class=\"icon-user\"></i>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n		<input type=\"text\" id=\"new-message\" placeholder=\"今なにしてる？\">\n	</div>\n</div>\n";
  return buffer;
  }

  buffer += "<h1>WebSocket Chat</h1>\n";
  stack1 = helpers['if'].call(depth0, depth0.error, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });

this["MyApp"]["Templates"]["header"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"navbar navbar-fixed-top navbar-inverse\">\n	<div class=\"navbar-inner\">\n		<div class=\"container\">\n			<a class=\"brand\" href=\"#\">WebSocket Chat</a>\n			<ul class=\"nav\">\n				<li><a href=\"#\">Home</a></li>\n				<li><a href=\"#\">About</a></li>\n				<li><a href=\"#\">Contact</a>\n				</li>\n			</ul>\n		</div>\n	</div>\n</div>\n";
  });

this["MyApp"]["Templates"]["layout"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<header id=\"header\"></header>\n<div id=\"container\" class=\"container\">\n    <div id=\"editor\"></div>\n	<ul id=\"message-list\" class=\"unstyled row-fluid\"></ul>\n</div>\n";
  });

this["MyApp"]["Templates"]["message_list"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<li class=\"well well-small\">\n		<div><i class=\"icon-user\"></i>";
  if (stack1 = helpers.user) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.user; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n			<small class=\"meta chat-time\">";
  if (stack1 = helpers.time) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.time; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</small>\n		</div>\n		<div>";
  if (stack1 = helpers.body) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.body; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n	</li>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<li class=\"alert";
  stack1 = helpers['if'].call(depth0, depth0.connect, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n		<button type=\"button\" class=\"close\" data-dismiss=\"alert\">×</button>\n		<div>\n			<i class=\"icon-user\"></i>";
  if (stack1 = helpers.body) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.body; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n			<small class=\"meta chat-time\">";
  if (stack1 = helpers.time) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.time; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</small>\n		</div>\n	</li>\n";
  return buffer;
  }
function program4(depth0,data) {
  
  
  return " alert-info";
  }

  stack1 = helpers['if'].call(depth0, depth0.comment, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
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

MyApp.Models.User = Backbone.Model.extend({
    defaults: {
        name: 'ゲスト' + Math.floor(Math.random() * 100)
    }
});

MyApp.Collections.MessageList = Backbone.Collection.extend({
    model: MyApp.Models.Message
});

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

MyApp.Views.Header = Backbone.View.extend({
    template: MyApp.Templates.header,

    initialize: function() {
        this.$el.html(this.template());
    }
});

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
