var app = require('app');
require('crash-reporter').start();
var window = require('./lib/window');

var ipc = require('ipc');
ipc.on('loginSync', function (e, data) {
    console.log('login called ', data);
    e.returnValue = 'Main IPC Sync';
});
ipc.on('loginAsync', function (e, data) {
    console.log('main: ', data);

    e.sender.send('replyAsync', 'Main IPC Async');
});




app.on('window-all-closed', function () {
    app.quit();
});

app.on('ready', function () {
    var loginWindow = window.load(
        {
            width: 500,
            height: 325,
            center: true,
            resizable: false,
            title: 'League Client',
            show: false,
            icon: __dirname + '/public/img/master.png'
        },
        'file://' + __dirname + '/public/login.html'
    );
    loginWindow.openDevTools();

});




