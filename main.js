import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';
import { JsonDB, Config } from 'node-json-db';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Main process started, __dirname:', __dirname);

const db = new JsonDB(new Config('myDatabase', true, true, '/'));

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js'),
        },
    });

    const isDev = process.env.NODE_ENV !== 'production';
    if (isDev) {
        win.loadURL('http://localhost:3000');
        win.webContents.openDevTools(); // Ouvre les DevTools pour voir les logs
    } else {
        win.loadFile(path.join(__dirname, 'dist', 'index.html'));
    }
}

app.whenReady().then(() => {
    console.log('App is ready, creating window...');
    createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

// IPC handlers avec logs
ipcMain.handle('getFragments', async () => {
    console.log('Received getFragments request');
    try {
        const data = await db.getData('/fragments') || {};
        console.log('Fragments retrieved:', data);
        return Object.values(data);
    } catch (error) {
        console.error('Error in getFragments:', error);
        return [];
    }
});

ipcMain.handle('saveFragment', async (event, fragment) => {
    console.log('Received saveFragment request:', fragment);
    try {
        await db.push(`/fragments/${fragment.id}`, fragment, true);
        console.log('Fragment saved successfully:', fragment);
        return true;
    } catch (error) {
        console.error('Error in saveFragment:', error);
        return false;
    }
});

ipcMain.handle('getTags', async () => {
    console.log('Received getTags request');
    try {
        const data = await db.getData('/tags') || {};
        console.log('Tags retrieved:', data);
        return Object.values(data);
    } catch (error) {
        console.error('Error in getTags:', error);
        return [];
    }
});

ipcMain.handle('saveTag', async (event, tag) => {
    console.log('Received saveTag request:', tag);
    try {
        await db.push(`/tags/${tag.id}`, tag, true);
        console.log('Tag saved successfully:', tag);
        return true;
    } catch (error) {
        console.error('Error in saveTag:', error);
        return false;
    }
});

ipcMain.handle('deleteTag', async (event, id) => {
    console.log('Received deleteTag request for id:', id);
    try {
        await db.delete(`/tags/${id}`);
        console.log('Tag deleted successfully:', id);
        return true;
    } catch (error) {
        console.error('Error in deleteTag:', error);
        return false;
    }
});