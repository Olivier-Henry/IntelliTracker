import { app, BrowserWindow, screen } from 'electron';
import * as path from 'path';
import Config from './Config';
import "reflect-metadata";
import { createConnection, Connection } from "typeorm";

let win, serve;
const args = process.argv.slice(1);
serve = args.some(val => val === '--serve');

//db connection

if (serve) {
  require('electron-reload')(__dirname, {
    electron: require(`${__dirname}${path.sep}node_modules${path.sep}electron`)
  });
}

async function connect() {
  const connection: Connection = await createConnection({
    "type": "sqlite",
    "database": path.join(app.getPath('userData'), 'data.db'),
    "synchronize": true,
    "logging": "all",
    "entities": [
      __dirname + "/src/entity/*.js"
    ],
    "migrations": [
      "migration/**/*.ts"
    ],
    "subscribers": [
      "subscriber/**/*.ts"
    ],
  });
}


function createWindow() {
  connect().then(result => {
    const config = new Config();
  });
  const electronScreen = screen;
  const size = electronScreen.getPrimaryDisplay().workAreaSize;



  // Create the browser window.
  win = new BrowserWindow({
    x: 0,
    y: 0,
    width: size.width,
    height: size.height
  });

  // and load the index.html of the app.
  win.loadURL('file://' + __dirname + '/index.html');

  // Open the DevTools.
  if (serve) {
    win.webContents.openDevTools();
  }

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store window
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });
}

try {

  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  app.on('ready', createWindow);

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
      createWindow();
    }
  });

} catch (e) {
  // Catch Error
  // throw e;
}
