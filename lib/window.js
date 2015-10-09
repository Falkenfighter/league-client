var BrowserWindow = require('browser-window');
var client = require('electron-connect').client;

var load = function(options, path) {
    var window = new BrowserWindow( options );

    window.setMenu(null); // Do not show the browser file menu

    window.loadUrl( path );

    window.webContents.on('did-finish-load', function () {
        window.show();
    });

    window.on('closed', function() {
        window = null;
    });

    client.create(window);

    return window;
};

module.exports.load = load;