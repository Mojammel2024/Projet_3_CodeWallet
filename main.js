// Import Electron modules, path, and URL utilities
import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';
import { JsonDB, Config } from 'node-json-db';

// Resolve current file and directory paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Log main process start
console.log('Main process started, __dirname:', __dirname);

// Initialize JSON database
const db = new JsonDB(new Config('myDatabase', true, true, '/'));

// Create main application window
function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false, // Disable Node integration for security
            contextIsolation: true, // Enable context isolation
            preload: path.join(__dirname, 'preload.js'), // Load preload script
        },
    });

    // Check if in development mode
    const isDev = process.env.NODE_ENV !== 'production';
    if (isDev) {
        win.loadURL('http://localhost:3000'); // Load dev server
        win.webContents.openDevTools(); // Open DevTools
    } else {
        win.loadFile(path.join(__dirname, 'dist', 'index.html')); // Load production build
    }
}

// Create window when app is ready
app.whenReady().then(() => {
    console.log('App is ready, creating window...');
    createWindow();
});

// Quit app when all windows are closed (except on macOS)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// Recreate window on macOS when app is activated
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

// IPC handler to get fragments
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

// IPC handler to save a fragment
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

// IPC handler to get tags
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

// IPC handler to save a tag
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

// IPC handler to delete a tag
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