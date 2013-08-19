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