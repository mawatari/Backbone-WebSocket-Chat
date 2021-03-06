// VMware上のCentOS6で動作させたときの例
// 8888番ポートでクライアントの接続を待ち受ける
var ws = require('websocket.io');
var moment = require('moment');

var server = ws.listen(8888, function () {
  console.log('\033[96m Server running at 172.16.145.136:8888 \033[39m');
});

// クライアントからの接続イベントを処理
server.on('connection', function(socket) {
  // クライアントからのメッセージ受信イベントを処理
  socket.on('message', function(e) {
    // 実行時間を追加
    var data = JSON.parse(e);
    data.time = moment().format('YYYY/MM/DD HH:mm:ss');
    data = JSON.stringify(data);
    console.log('\033[96m' + data + '\033[39m');
    
    // 受信したメッセージを全てのクライアントに送信する
    server.clients.forEach(function(client) {
      if (client) {
        client.send(data);
      }
    });
  });
});
