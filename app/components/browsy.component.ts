import {Component, OnInit} from 'angular2/core';
import {File} from '../classes/file'; // interface
import {FolderComponent} from './folder.component'; // directive
import {FensterComponent} from './fenster.component'; // directive
import {FileService} from '../services/file.service'; // provider
import {HTTP_PROVIDERS} from 'angular2/http';

/**
 * This is the basic Main App Component that manages app state 
 * and initializes the desktop view holding all opened folders and files(fensters).
 */
@Component({
    selector: 'browsy',
    templateUrl: './templates/browsy.html',
    directives: [FolderComponent, FensterComponent],
    styleUrls: ['./css/browsy.css']
})
export class BrowsyComponent {
    
    public folders: File[] = [];
    public fensters: File[] = [];

    constructor() {}

    public ngOnInit() {
        // init with desktop folder
        this.folders.push({

                id: 1,
                title: 'desktop',
                parentId: 0,
                content: '',
                isOpen: true

        });
    }

    fileClicked(file) {
        if (file.content === '') {
            this.addFolder(file);
        }
        else {
            this.addFenster(file);
        }
    }
    
    folderClosed(folder) {
        var index = this.folders.indexOf(folder);
        if (index > -1) {
            this.folders.splice(index, 1);
        }
    }
    
    fensterClosed(fenster) {
        var index = this.fensters.indexOf(fenster);
        if (index > -1) {
            this.fensters.splice(index, 1);
        }
    }
    
    private addFolder(folder: File) {
        if (this.folders.indexOf(folder) < 0) {
            this.folders.push(folder);
        }
    }
    
    private addFenster(fenster: File) {
        if (this.fensters.indexOf(fenster) < 0) {
            this.fensters.push(fenster);
        }
    }
}