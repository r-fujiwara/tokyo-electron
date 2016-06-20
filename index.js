'use strict';

let electron = require('electron');
let app = electron.app
let BrowserWindow = electron.BrowserWindow

electron.crashReporter.start({
    productName: "tokyo-electron",
    companyName: "bodyBuilders",
    submitURL: 'https://github.com/r-fujiwara',
    autoSubmit: true
});

//console.dir(BrowserWindow);

app.on('window-all-closed', () => {
  if(process.platform !== 'darwin') app.quit();
});

app.on('ready', () => {
  let mainWindow = new BrowserWindow({width: 1000, height: 900});
  mainWindow.loadUrl(`file://${__dirname}/index.html`);
  mainWindow.webContents.openDevTools();
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
