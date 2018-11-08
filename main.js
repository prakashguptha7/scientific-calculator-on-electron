const {app, BrowserWindow} = require('electron') 
const url = require('url') 
const path = require('path')  

let win  

function createWindow() { 
   win = new BrowserWindow({
       frame:true,
      
       width: 800, height: 600,
       icon: __dirname + '/app/assets/img/calci.png'
    }) 
   win.loadURL(url.format ({ 
      pathname: path.join(__dirname, './index.html'), 
      protocol: 'file:', 
      slashes: true
   })) 
}  

app.on('ready', createWindow) 
