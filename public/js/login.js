var ipc = require('ipc');
var login = require('remote').require(__dirname + '../../lib/doLogin.js');
//var LolClient = require(__dirname + '../../lib/league/lol-client');

console.log(login());

ipc.on('replyAsync', function (data) {
    console.log('...', data);/* won't show */
    document.getElementById('username').setAttribute('placeholder', data);/* shows briefly */
    alert(data);
});


document.forms["loginForm"].onsubmit = function () {
    console.log(ipc.sendSync('loginSync', 'do login Sync'));

    ipc.send('loginAsync', 'do login Async');


//    var username = document.getElementById('username').value;
//    var password = document.getElementById('password').value;
//    var saveUsername = document.getElementById('saveUsername').checked;

//    ipc.sendSync('login', {username: username, password: password, save: saveUsername});

//    alert('Username: ' + username + '\nPassword: ' + password + '\nSave Username: ' + saveUsername);

//    var client = new LolClient({
//        region: 'na',
//        username: username,
//        password: password,
//        version: '5.19.15',
//        debug: true
//    });

//    var heartbeat = function() {
//        client.heartbeat();
//    };

//    client.on('connection', function() {
//        setInterval(heartbeat, 500);
//        alert('Logged In');
//    });

//    client.connect();
};







