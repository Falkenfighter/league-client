var ipc = require('ipc');
var login = require('remote').require('/home/stephen/Projects/justin.js/lib/doLogin.js');

console.log(login());


document.forms["loginForm"].onsubmit = function() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var saveUsername = document.getElementById('saveUsername').checked;

//    ipc.sendSync('login', {username: username, password: password, save: saveUsername});

    //alert('Username: ' + username + '\nPassword: ' + password + '\nSave Username: ' + saveUsername);

//    var client = new Object({
//        region: 'na',
//        username: username,
//        password: password,
//        version: '5.19.15',
//        debug: true
//    });

//    var heartbeat = function() {
//        client.heartbeat();
//    };
//
//    client.on('connection', function() {
//        setInterval(heartbeat, 5000);
//        alert('Logged In');
//    });
//
//    client.connect();
};