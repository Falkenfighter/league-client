var ipc = require('ipc');

document.forms["loginForm"].onsubmit = function() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var saveUsername = document.getElementById('saveUsername').checked;

    ipc.sendSync('login', {username: username, password: password, save: saveUsername});

    //alert('Username: ' + username + '\nPassword: ' + password + '\nSave Username: ' + saveUsername);

    //var client = new LolClient({
    //    region: 'na',
    //    username: username,
    //    password: password,
    //    version: '5.19.15',
    //    debug: true
    //});
    //
    //var heartbeat = function() {
    //    client.heartbeat();
    //};
    //
    //client.on('connection', function() {
    //    setInterval(heartbeat, 5000);
    //    alert('Logged In');
    //});
    //
    //client.connect();
};