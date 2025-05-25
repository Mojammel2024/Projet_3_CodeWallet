import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('api', {
    getFragments: () => ipcRenderer.invoke('getFragments'),
    saveFragment: (fragment) => ipcRenderer.invoke('saveFragment', fragment),
    getTags: () => ipcRenderer.invoke('getTags'),
    saveTag: (tag) => ipcRenderer.invoke('saveTag', tag),
    deleteTag: (id) => ipcRenderer.invoke('deleteTag', id),
});

console.log('Preload script loaded');